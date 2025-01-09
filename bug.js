```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the dependency array is empty
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```