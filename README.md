# Title Notifier js

Lightweight (< 3Kb), dependency-free javascript library to dynamically show the number of unread notifications in your webpage title.

## Usage

Add title_notifier.js to your webpage.

```javascript
<script src="title_notifier.js"></script>
```

### Adding Notifications

![Adding notification](http://www.frontendjournal.com/wp-content/uploads/2014/04/notification_total_3.png)

Call the following function to add +1 to notifications total.

```javascript
titlenotifier.add();
```

### Subtracting Notifications

![Subtracting notification](http://www.frontendjournal.com/wp-content/uploads/2014/04/notification_total_2.png)

Call the following to subtract 1 from the total notifications.

```javascript
titlenotifier.sub();
```

### Reset Notifications

![resetting notification](http://www.frontendjournal.com/wp-content/uploads/2014/04/notification_total_zero.png)

Call the following to set notifications to zero and the title to the original version.

```javascript
titlenotifier.reset();
```


## Contribute

Contributions are welcome.
