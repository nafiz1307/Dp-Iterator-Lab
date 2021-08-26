import unfetch from "unfetch";

const fetch = require("node-fetch");
let dhakaWeather  = ''
let rajshahiWeather  = ''
let sylhetWeather  = ''
let khulnaWeather = ''
let barisalWeather =''
let chittagongWeather=''
let rangpurWeather=''
let mymensinghWeather=''
const MY_APP_ID = "9b19cf7d5fa4de549bdf397ca6a6d0ba";


const dhaka = "dhaka";
const rajshahi = "rajshahi";
const khulna = "khulna";
const barisal = "barisal";
const chittagong = "chittagong";
const rangpur = "rangpur";
const sylhet = "sylhet";
const mymensingh = "mymensingh";


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${dhaka}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    dhakaWeather=myJson['main']['temp']
    console.log(dhakaWeather)
  });

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${rajshahi}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    rajshahiWeather=myJson['main']['temp']
    console.log(rajshahiWeather)
  });

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${sylhet}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    sylhetWeather=myJson['main']['temp']
    console.log(sylhetWeather)
  });
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${barisal}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    barisalWeather=myJson['main']['temp']
    console.log(barisalWeather)
  });
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chittagong}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    chittagongWeather=myJson['main']['temp']
    console.log(chittagongWeather)
  });
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${khulna}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    khulnaWeather=myJson['main']['temp']
    console.log(khulnaWeather)
  });
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${rangpur}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    rangpurWeather=myJson['main']['temp']
    console.log(rangpurWeather)
  });
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mymensingh}&appid=${MY_APP_ID}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {

    mymensinghWeather=myJson['main']['temp']
    console.log(mymensinghWeather)
  });


export interface Iterator<T> {
    // Return the current element.
    current(): T;

    // Return the current element and move forward to next element.
    next(): T;

    // Return the key of the current element.
    key(): number;

    // Checks if current position is valid.
    valid(): boolean;

    // Rewind the Iterator to the first element.
    rewind(): void;
}

interface Aggregator {
    // Retrieve an external iterator.
    getIterator(): Iterator<string>;
}

/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */

class WeatherIterator implements Iterator<string> {
    private collection: WeatherCollection;

    /**
     * Stores the current traversal position. An iterator may have a lot of
     * other fields for storing iteration state, especially when it is supposed
     * to work with a particular kind of collection.
     */
    private position: number = 0;

    /**
     * This variable indicates the traversal direction.
     */
    private reverse: boolean = false;

    constructor(collection: WeatherCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */
class WeatherCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new WeatherIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new WeatherIterator(this, true);
    }
}

/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
const collection = new WeatherCollection();
collection.addItem(dhakaWeather);
collection.addItem(rajshahiWeather);
collection.addItem(sylhetWeather);
collection.addItem(barisalWeather);
collection.addItem(mymensinghWeather);
collection.addItem(rangpurWeather);
collection.addItem(khulnaWeather);
collection.addItem(rangpurWeather);

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}


// const response = await loadJSON(
//     `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`
//   );