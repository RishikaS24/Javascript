Here’s a well-structured and concise note explaining your JavaScript code snippet:

---

### 📝 **JavaScript Notes: Deep Copy vs Shallow Copy with `employeeData` Example**

---

#### ✅ **Original Object Definition**

```js
const employeeData = {
  name: "Rishika Sharma",
  id: 2481131,
  block: 'L',
  assetId: '01HW342232',
  location: 'Kolkata',
  leavesApplied: [23, 25, 27, {
    approvedLeaves: [23, 25]
  }]
}
```

* `employeeData` is a nested object containing both primitive values and arrays/objects.

---

#### 🔄 **Copying Objects in JavaScript**

##### ❌ Shallow Copy (Not used in final code but commented):

```js
// const newEmployeeData = Object.assign({}, employeeData);
// const newEmployeeData = {...employeeData};
```

* Both `Object.assign()` and spread `{...}` **only create shallow copies**.
* Nested objects/arrays (like `leavesApplied`) still **reference the same memory**.
* Changes to nested values in the copy **will affect** the original.

##### ✅ Deep Copy (Used):

```js
const newEmployeeData = JSON.parse(JSON.stringify(employeeData));
```

* This method creates a **true deep copy**.
* All nested levels are duplicated with **no shared references**.
* ⚠️ Limitation: Cannot copy functions, `undefined`, or circular references.

---

#### 🔧 **Modifying the Copied Object**

```js
newEmployeeData.name = 'Reet Priye';
newEmployeeData.id = 2491311;
newEmployeeData.block = 'D';
newEmployeeData.assetId = "32342432";
newEmployeeData.leavesApplied[3].approvedLeaves = [1, 20];
```

* Changes are made only to `newEmployeeData`.
* The original `employeeData` remains **unchanged**, thanks to deep copy.

---

#### 🖨️ **Final Output**

```js
console.log(employeeData);
console.log(newEmployeeData);
```

* `employeeData` shows original values:

  ```json
  {
    name: "Rishika Sharma",
    ...
    leavesApplied: [23, 25, 27, { approvedLeaves: [23, 25] }]
  }
  ```
* `newEmployeeData` shows updated values:

  ```json
  {
    name: "Reet Priye",
    ...
    leavesApplied: [23, 25, 27, { approvedLeaves: [1, 20] }]
  }
  ```

---

### 📌 Summary

| Copy Method                    | Type    | Affects Original? | Copies Nested Objects? |
| ------------------------------ | ------- | ----------------- | ---------------------- |
| `Object.assign()`              | Shallow | ✅ Yes             | ❌ No                   |
| Spread `{...}`                 | Shallow | ✅ Yes             | ❌ No                   |
| `JSON.parse(JSON.stringify())` | Deep    | ❌ No              | ✅ Yes                  |

---

Let me know if you'd like this as a downloadable PDF or Word document!
