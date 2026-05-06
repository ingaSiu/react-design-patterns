import { useEffect, useMemo, useState } from 'react';

export function Users({ list }) {
  // activeUsers is a simple variable that returns a heavily computed value
  // no derived state here
  const activeUsers = useMemo(() => {
    console.log('Filtering expensive list…');
    return list.filter((user) => user.active);
  }, [list]);

  return (
    <>
      <h2>Active Users: {activeUsers.length}</h2>
      {activeUsers.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

// Wrong - Boolean
export function Actor({ age }) {
  const [isAdult, setIsAdult] = useState(false);

  useEffect(() => {
    setIsAdult(age >= 18);
  }, [age]);

  return <>{isAdult ? <p>Adult</p> : <p>Minor</p>}</>;
}

// Wrong - Form

export function Form({ name, email }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(name !== '' && email.includes('@'));
  }, [name, email]);

  return <>{isValid ? <p>All Good</p> : <p>Bad!!</p>}</>;
}

// good practice
// the better pattern to use instead of managing the state for these variables
//const isValid = name !== '' && email.includes('@');
