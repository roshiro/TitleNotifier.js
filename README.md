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

### Get Number of Notifications (NEW)

Call the following to get the current number of notifications

```javascript
titlenotifier.get();
```

### Set Max Number of Notifications (NEW)

Call the following to set maximum number of notifications to display. Once the maximum number is reached it displays the max number plus a plus sign. If you set the max to 99 and you have 100 notifications, it will show 99+ instead of 100.

```javascript
titlenotifier.max(99);
```

## Contribute

Contributions are welcome.
