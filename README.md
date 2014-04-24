# Title Notifier js

Lightweight (< 3Kb), dependency-free javascript library to dynamically show the number of unread notifications in your webpage title.

![TitleNotifierGif](http://roshiro.github.io/TitleNotifier.js/images/title_notifier.gif)

## Usage

Add title_notifier.js to your webpage.

```javascript
<script src="title_notifier.js"></script>
```

### Setting Notification

In the example below, it sets the number of notifications as 12.

```javascript
titlenotifier.set(12);
```

### Adding Notifications

Call the following function to add +1 to notifications total.

```javascript
titlenotifier.add();
```

### Subtracting Notifications

Call the following to subtract 1 from the total notifications.

```javascript
titlenotifier.sub();
```

### Reset Notifications

Call the following to set notifications to zero and the title to the original version.

```javascript
titlenotifier.reset();
```


## Contribute

Contributions are welcome.
