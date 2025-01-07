The solution involves using optional chaining and the nullish coalescing operator to safely access properties.  This prevents the error by providing a default value if the user object or its name property is undefined.

```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';

const fetchData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { name: 'John Doe' };
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData().then(setUser);
  }, []);

  return (
    <div>
      <h1>Username: {user?.name ?? 'Loading...'}</h1>
    </div>
  );
};

export default App;
```