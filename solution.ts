const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: any[] | string): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "object" && Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

interface Problem4Props {
  title: string;
  rating: number;
}
const filterByRating = (value: Problem4Props[]): Problem4Props[] | [] => {
  return value.filter((item) => item.rating >= 4 && item.rating <= 5);
};

interface Problem5Props {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (data: Problem5Props[]): Problem5Props[] | [] => {
  return data.filter((item) => !!item.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (data: Book) => {
  console.log(
    `Title: ${data.title}, Author: ${data.author}, Published: ${
      data.publishedYear
    }, Available: ${data.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = <T extends number | string>(arr1: T[], arr2: T[]) => {
  let uniqueItems: T[] = [];
  const isExist = (value: T, arr: T[]): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!isExist(arr1[i], uniqueItems)) {
      uniqueItems[uniqueItems.length] = arr1[i];
      // uniqueItems.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isExist(arr2[i], uniqueItems)) {
      uniqueItems[uniqueItems.length] = arr2[i];
      // uniqueItems.push(arr2[i]);
    }
  }

  return uniqueItems;
};

interface Problem8Props {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Problem8Props[]): number => {
  const mappedProducts = products.map((item) => {
    const basePrice = item.price * item.quantity;
    const discount = item.discount ? (basePrice * item.discount) / 100 : 0;
    return basePrice - discount;
  });

  const totalPrice = mappedProducts.reduce((sum, acc) => sum + acc, 0);
  return totalPrice;
};
