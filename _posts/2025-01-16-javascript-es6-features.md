---
layout: post
title: "JavaScript ES6+ Features Every Developer Should Know"
date: 2025-01-16 09:15:00 +0800
categories: [javascript, programming]
tags: [javascript, es6, modern-js, programming-tips]
author: Wing
excerpt: "Explore the most important ES6+ features that have transformed JavaScript development. From arrow functions to async/await, learn what every modern developer should master."
---

JavaScript has evolved tremendously over the years, and ES6+ features have revolutionized how we write modern JavaScript. Let's explore the essential features that every developer should master.

## Arrow Functions: Concise and Lexical

Arrow functions provide a shorter syntax and lexical `this` binding:

```javascript
// Traditional function
const traditional = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const arrow = (name) => `Hello, ${name}!`;

// With array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### When to Use Each

```javascript
// Use arrow functions for callbacks
const users = ['Alice', 'Bob', 'Charlie'];
const greetings = users.map(user => `Hello, ${user}!`);

// Use regular functions for methods (when you need 'this')
const person = {
    name: 'Wing',
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};
```

## Destructuring: Extract with Ease

Destructuring allows you to extract values from arrays and objects:

### Array Destructuring
```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Traditional way
const first = colors[0];
const second = colors[1];

// Destructuring way
const [first, second, ...rest] = colors;
console.log(first); // 'red'
console.log(rest);  // ['blue', 'yellow']

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1
```

### Object Destructuring
```javascript
const user = {
    name: 'Wing',
    email: 'wcy0590@gmail.com',
    age: 25,
    country: 'China'
};

// Extract specific properties
const { name, email } = user;

// Rename while destructuring
const { name: userName, email: userEmail } = user;

// With default values
const { phone = 'Not provided' } = user;

// Nested destructuring
const student = {
    info: { name: 'Alice', grade: 'A' },
    courses: ['Math', 'Science']
};

const { info: { name: studentName } } = student;
```

## Template Literals: String Interpolation Done Right

Template literals make string formatting much more readable:

```javascript
const name = 'Wing';
const age = 25;

// Old way
const oldWay = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literal way
const newWay = `Hello, my name is ${name} and I am ${age} years old.`;

// Multiline strings
const html = `
    <div class="user-card">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
    </div>
`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

const highlighted = highlight`My name is ${name} and I'm ${age} years old.`;
```

## Spread and Rest Operators: Three Dots of Power

The `...` operator is incredibly versatile:

### Spread Operator
```javascript
// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Function calls
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Copying arrays/objects
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
```

### Rest Parameters
```javascript
// Collect remaining arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// With other parameters
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}!`;
}

console.log(greet('Hello', 'Alice', 'Bob', 'Charlie')); 
// "Hello Alice, Bob, Charlie!"
```

## Promises and Async/Await: Handling Asynchronous Code

Modern JavaScript makes async programming much more manageable:

### Promises
```javascript
// Creating a promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: 'User ' + userId });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}

// Using promises
fetchUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));
```

### Async/Await
```javascript
// Async function
async function getUserData(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(user);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}

// Multiple async operations
async function fetchMultipleUsers() {
    try {
        // Sequential
        const user1 = await fetchUserData(1);
        const user2 = await fetchUserData(2);
        
        // Parallel
        const [userA, userB] = await Promise.all([
            fetchUserData(3),
            fetchUserData(4)
        ]);
        
        return [user1, user2, userA, userB];
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Classes: Object-Oriented JavaScript

ES6 classes provide a cleaner syntax for object-oriented programming:

```javascript
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    // Static method
    static getSpeciesCount() {
        return 'Many species exist';
    }
    
    // Getter
    get info() {
        return `${this.name} is a ${this.species}`;
    }
    
    // Setter
    set name(newName) {
        this._name = newName.trim();
    }
    
    get name() {
        return this._name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'dog');
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
    
    wagTail() {
        return `${this.name} wags tail happily`;
    }
}

const myDog = new Dog('Rex', 'Golden Retriever');
console.log(myDog.speak()); // "Rex barks"
console.log(myDog.info);    // "Rex is a dog"
```

## Modules: Organizing Your Code

ES6 modules help organize and share code:

```javascript
// math.js - Named exports
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Or export all at once
// export { PI, add, multiply };

// utils.js - Default export
export default function formatDate(date) {
    return date.toLocaleDateString();
}

// main.js - Importing
import formatDate from './utils.js';
import { add, multiply, PI } from './math.js';

// Import everything
import * as MathUtils from './math.js';

console.log(add(2, 3));           // 5
console.log(MathUtils.PI);        // 3.14159
console.log(formatDate(new Date())); // Current date formatted
```

## Array Methods: Functional Programming Style

Modern array methods make data manipulation elegant:

```javascript
const users = [
    { id: 1, name: 'Alice', age: 25, active: true },
    { id: 2, name: 'Bob', age: 30, active: false },
    { id: 3, name: 'Charlie', age: 35, active: true },
    { id: 4, name: 'Diana', age: 28, active: true }
];

// Filter active users
const activeUsers = users.filter(user => user.active);

// Get user names
const names = users.map(user => user.name);

// Find specific user
const alice = users.find(user => user.name === 'Alice');

// Check if all users are adults
const allAdults = users.every(user => user.age >= 18);

// Check if any user is over 30
const hasOlderUser = users.some(user => user.age > 30);

// Reduce to get average age
const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

// Method chaining
const activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name)
    .sort();

console.log(activeUserNames); // ['Alice', 'Charlie', 'Diana']
```

## Optional Chaining and Nullish Coalescing

These newer features help handle undefined/null values safely:

```javascript
const user = {
    name: 'Wing',
    address: {
        street: '123 Main St',
        // city is missing
    }
};

// Optional chaining (?.)
const city = user.address?.city?.toLowerCase();
console.log(city); // undefined (no error)

// Method chaining
const result = user.getData?.();

// Array access
const firstHobby = user.hobbies?.[0];

// Nullish coalescing (??)
const userCity = user.address?.city ?? 'Unknown';
const userName = user.name ?? 'Anonymous';

// Different from || operator
const count = 0;
console.log(count || 'No count');  // 'No count'
console.log(count ?? 'No count');  // 0
```

## Putting It All Together

Here's a real-world example combining multiple ES6+ features:

```javascript
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    
    async loadTasks() {
        try {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            this.tasks = data.tasks ?? [];
        } catch (error) {
            console.error('Failed to load tasks:', error);
            this.tasks = [];
        }
    }
    
    addTask({ title, description, priority = 'medium' }) {
        const task = {
            id: Date.now(),
            title,
            description,
            priority,
            completed: false,
            createdAt: new Date()
        };
        
        this.tasks = [...this.tasks, task];
        return task;
    }
    
    getTasks({ completed, priority } = {}) {
        return this.tasks.filter(task => {
            const matchesCompleted = completed === undefined || task.completed === completed;
            const matchesPriority = !priority || task.priority === priority;
            return matchesCompleted && matchesPriority;
        });
    }
    
    getTaskSummary() {
        const { completed, pending } = this.tasks.reduce(
            (acc, task) => {
                if (task.completed) {
                    acc.completed++;
                } else {
                    acc.pending++;
                }
                return acc;
            },
            { completed: 0, pending: 0 }
        );
        
        return `Tasks: ${completed} completed, ${pending} pending`;
    }
}

// Usage
const taskManager = new TaskManager();
await taskManager.loadTasks();

taskManager.addTask({
    title: 'Learn ES6+',
    description: 'Master modern JavaScript features'
});

const pendingTasks = taskManager.getTasks({ completed: false });
console.log(taskManager.getTaskSummary());
```

## Conclusion

These ES6+ features have transformed JavaScript development, making code more readable, maintainable, and powerful. The key is to:

1. **Practice regularly** - Use these features in your daily coding
2. **Understand the why** - Know when and why to use each feature
3. **Stay updated** - JavaScript continues to evolve with new features
4. **Use tools** - Leverage linters and formatters to maintain quality

What's your favorite ES6+ feature? Have you discovered any interesting use cases? Share your thoughts in the comments!