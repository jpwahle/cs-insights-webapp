import React, { ReactNode, useContext, useEffect, useRef } from "react";
import { CSSTransition as ReactCssTransition } from "react-transition-group";

const TransitionContext = React.createContext({
  parent: {
    show: false,
    isInitialRender: true,
    appear: false,
  },
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

type CssTransitionProps = {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag?: string;
  children?: ReactNode;
};

function CssTransition({
  show,
  enter = "",
  enterStart = "",
  enterEnd = "",
  leave = "",
  leaveStart = "",
  leaveEnd = "",
  appear,
  unmountOnExit,
  tag = "div",
  children,
  ...props
}: CssTransitionProps) {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
  const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: Element, classes: string[]) {
    if (classes.length) {
      node.classList.add(...classes);
    }
  }

  function removeClasses(node: Element, classes: string[]) {
    if (classes.length) {
      node.classList.remove(...classes);
    }
  }

  const nodeRef = useRef<HTMLElement>(null);
  const Component = tag;

  return (
    <ReactCssTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done) => {
        nodeRef.current?.addEventListener("transitionend", done, false);
      }}
      onEnter={() => {
        if (nodeRef.current) {
          if (!removeFromDom && nodeRef.current.style.display) {
            nodeRef.current.style.display = "";
          }
          addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
        }
      }}
      onEntering={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, enterStartClasses);
          addClasses(nodeRef.current, enterEndClasses);
        }
      }}
      onEntered={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
        }
      }}
      onExit={() => {
        if (nodeRef.current) {
          addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
        }
      }}
      onExiting={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, leaveStartClasses);
          addClasses(nodeRef.current, leaveEndClasses);
        }
      }}
      onExited={() => {
        if (nodeRef.current) {
          removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
          if (!removeFromDom) nodeRef.current.style.display = "none";
        }
      }}
    >
      <Component
        ref={nodeRef}
        {...props}
        style={{ display: !removeFromDom ? "none" : null }}
      >
        {children}
      </Component>
    </ReactCssTransition>
  );
}

type TransitionProps = {
  show: boolean;
  className: string;
  appear?: boolean;
  role?: string;
};

function Transition({
  show,
  appear,
  ...props
}: TransitionProps & CssTransitionProps) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CssTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...props}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CssTransition appear={appear} show={show} {...props} />
    </TransitionContext.Provider>
  );
}

export default Transition;
