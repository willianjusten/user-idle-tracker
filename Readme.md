## User Idle Tracker

![User inactive for a while and then the modal appears](https://raw.githubusercontent.com/willianjusten/user-idle-tracker/master/example/idle-tracker.gif)

> A library to check the status of the user and to run a callback when its considered Idle.

![Netflix: Are you still there? Me: an image of a fat and tired dog](https://raw.githubusercontent.com/willianjusten/user-idle-tracker/master/example/netflix.jpeg)

## Installing

Install the library via `npm install user-idle-tracker` or `yarn add user-idle-tracker`. Or you can even download the [file here](https://github.com/willianjusten/user-idle-tracker/blob/master/lib/user-idle-tracker.min.js) and load with the good and old way `<script src="user-idle-tracker.min.js"></script>`.

## How to use

If you used npm/yarn, just import the file:

```js
import UserIdleTracker from "user-idle-tracker";
```

And now you can use it like:

```js
function callback() {
  console.log("A function to be called when user is considered idle");
}

const idleTime = 1000; // time in milliseconds defined to be considered idle

const tracker = new UserIdleTracker(callback, idleTime);
```

## Testing

You can see the tests on [index.test.js](https://github.com/willianjusten/user-idle-tracker/blob/master/src/index.test.js), use `yarn test` to run the tests. If you want to see an example working on the Browser, just run `yarn start`.
