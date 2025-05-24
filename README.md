# react-keys-shortcuts

[![npm version](https://img.shields.io/npm/v/react-keys-shortcuts)](https://www.npmjs.com/package/react-keys-shortcuts)
[![npm downloads](https://img.shields.io/npm/dt/react-keys-shortcuts)](https://www.npmjs.com/package/react-keys-shortcuts)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A simple React utility package to easily manage global and component-specific keyboard shortcuts with clean hooks — no need to add `window.addEventListener` everywhere!

---

## ✨ Features

- 🎹 Easily define custom keyboard shortcut formulas like `ctrl+a`, `ctrl+shift+d`
- 🔥 Two hooks:
  - `useListenEvent` — bind shortcut events to existing button clicks or actions
  - `useListenEffect` — globally listen for shortcut events across your app
- ⚛️ Clean and reusable — no repeated listeners in components
- 🛠️ Fully TypeScript supported
- 📦 Lightweight, no external dependencies

---

## 📦 Installation

```bash
npm install react-keys-shortcuts  
```

## 🚀 Usage

### 1 useListenEvent
#### Bind a shortcut formula to an existing click event.

``` ts
import { useListenEvent } from 'react-keys-shortcuts';

const MyComponent = () => {
  const clickFunction = (id: string) => {
    console.log('Clicked item', id);
  };

  // Listen for "ctrl+k" and trigger clickFunction
  useListenEvent('ctrl+k', () => clickFunction('item-123'));

  return (
    <button onClick={() => clickFunction('item-123')}>Click Me</button>
  );
};


```

### 2 useListenEvent
#### Globally listen to keyboard shortcuts and trigger actions.

```ts
import { useListenEffect } from 'react-keys-shortcuts';

const App = () => {
  useListenEffect('ctrl+shift+l', () => {
    alert('Shortcut triggered!');
  });

  return <div>Press ctrl+shift+l</div>;
};

```

## 👥 Contributing
### We welcome contributions! Follow these steps:

#### 1 Clone the repo


``` bash 
git clone https://github.com/yourusername/react-keys-shortcuts.git
cd react-keys-shortcuts

```
#### 2 Create a new branch

``` bash 
git checkout -b your-feature-branch
```
#### 3 Pull latest changes

``` bash 
git pull origin main
```

#### 4 Make your changes
#### 5 Commit and push your changes and raise pull request 


## 📜 License

This project is licensed under the MIT License.

## 📬 Connect
Built with 🤍 by Blessed raj P 


