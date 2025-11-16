### What are some differences between interfaces and types in TypeScript?

- প্রিমিটিভ ডাটা স্ট্রাকচার কে **type** এর মাধ্যমে প্রকাশ করা যায়, **interface** এর মাধ্যমে করা যায় না।
- টুপল কে **type** এর মাধ্যমে প্রকাশ করা যায়, **interface** এর মাধ্যমে করা যায় না।
- **type** এর মাধ্যমে লিটারেল(ইউনিয়ন) প্রকাশ করা যায়, **interface** এর মাধ্যমে করা যায় না।.

---

### What is the use of the keyof keyword in TypeScript? Provide an example.

<p>**keyof** কি-ওয়ার্ড দ্বারা type বা interface এর key কে লিটারেল(ইউনিয়ন) হিসাবে পাওয়া যায়</p>

#### Example

```ts
interface User {
  id: number;
  name: string;
}

type UserKeys = keyof User;
```
