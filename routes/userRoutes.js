app.get("/api/users", (req, res) => {
  // Logic to fetch users from the database
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  res.json(users);
});

app.post("/api/users", (req, res) => {
  // Logic to create a new user
  res.json({ message: "Create a new user" });
});
