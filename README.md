# React Native Unhandled JS Exception: Cannot read properties of undefined (reading 'name')

This repository demonstrates a common React Native error and its solution. The error, "Cannot read properties of undefined (reading 'name')", arises when trying to access a property of an object that is currently undefined or null. This often occurs during asynchronous operations, such as API calls, where data may not be immediately available.

## Problem

The `bug.js` file showcases this error.  It attempts to render a username from fetched user data before the data is fully loaded, resulting in the exception.

## Solution

The `bugSolution.js` file provides a solution using optional chaining (?.) and nullish coalescing (??).  Optional chaining safely accesses nested properties, returning undefined if any part of the chain is undefined.  Nullish coalescing provides a fallback value if a variable is null or undefined.