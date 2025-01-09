```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correctly specifying an empty array ensures that this effect runs only once after the initial render
    //If no dependency is needed then pass an empty array [].
    //If this effect needs to run every time the component renders, then pass the relevant state variable as a dependency here.
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```