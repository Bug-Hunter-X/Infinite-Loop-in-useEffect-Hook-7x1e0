# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by omitting dependencies in the dependency array.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The `useEffect` hook in `bug.js` attempts to increment the `count` state variable repeatedly without specifying any dependencies. This leads to an infinite rendering loop, as the state change triggers a re-render, which in turn triggers the `useEffect` again.