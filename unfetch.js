"use strict";
exports.__esModule = true;
var fetch = require("node-fetch");
var dhakaWeather = '';
var rajshahiWeather = '';
var sylhetWeather = '';
var khulnaWeather = '';
var barisalWeather = '';
var chittagongWeather = '';
var rangpurWeather = '';
var mymensinghWeather = '';
var MY_APP_ID = "9b19cf7d5fa4de549bdf397ca6a6d0ba";
var dhaka = "dhaka";
var rajshahi = "rajshahi";
var khulna = "khulna";
var barisal = "barisal";
var chittagong = "chittagong";
var rangpur = "rangpur";
var sylhet = "sylhet";
var mymensingh = "mymensingh";
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + dhaka + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    dhakaWeather = myJson['main']['temp'];
    console.log(dhakaWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + rajshahi + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    rajshahiWeather = myJson['main']['temp'];
    console.log(rajshahiWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + sylhet + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    sylhetWeather = myJson['main']['temp'];
    console.log(sylhetWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + barisal + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    barisalWeather = myJson['main']['temp'];
    console.log(barisalWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + chittagong + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    chittagongWeather = myJson['main']['temp'];
    console.log(chittagongWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + khulna + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    khulnaWeather = myJson['main']['temp'];
    console.log(khulnaWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + rangpur + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    rangpurWeather = myJson['main']['temp'];
    console.log(rangpurWeather);
});
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + mymensingh + "&appid=" + MY_APP_ID)
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    mymensinghWeather = myJson['main']['temp'];
    console.log(mymensinghWeather);
});
/**
 * Concrete Iterators implement various traversal algorithms. These classes
 * store the current traversal position at all times.
 */
var WeatherIterator = /** @class */ (function () {
    function WeatherIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        /**
         * Stores the current traversal position. An iterator may have a lot of
         * other fields for storing iteration state, especially when it is supposed
         * to work with a particular kind of collection.
         */
        this.position = 0;
        /**
         * This variable indicates the traversal direction.
         */
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    WeatherIterator.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    WeatherIterator.prototype.current = function () {
        return this.collection.getItems()[this.position];
    };
    WeatherIterator.prototype.key = function () {
        return this.position;
    };
    WeatherIterator.prototype.next = function () {
        var item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    WeatherIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return WeatherIterator;
}());
/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */
var WeatherCollection = /** @class */ (function () {
    function WeatherCollection() {
        this.items = [];
    }
    WeatherCollection.prototype.getItems = function () {
        return this.items;
    };
    WeatherCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WeatherCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WeatherCollection.prototype.getIterator = function () {
        return new WeatherIterator(this);
    };
    WeatherCollection.prototype.getReverseIterator = function () {
        return new WeatherIterator(this, true);
    };
    return WeatherCollection;
}());
/**
 * The client code may or may not know about the Concrete Iterator or Collection
 * classes, depending on the level of indirection you want to keep in your
 * program.
 */
var collection = new WeatherCollection();
collection.addItem(dhakaWeather);
collection.addItem(rajshahiWeather);
collection.addItem(sylhetWeather);
collection.addItem(barisalWeather);
collection.addItem(mymensinghWeather);
collection.addItem(rangpurWeather);
collection.addItem(khulnaWeather);
collection.addItem(rangpurWeather);
var iterator = collection.getIterator();
console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}
console.log('');
console.log('Reverse traversal:');
var reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}
// const response = await loadJSON(
//     `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`
//   );
