var cookie = {
	set: function(cookieName, value, exdays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = cookieName + "=" + cookieValue;
	},
	exists: function(cookieName) {
		var value = this.get(cookieName);
		if (value != null && value != "") {
			return true;
		} else {
			return false;
		}
	},
	val: function(cookieName) {
		var value = this.get(cookieName);
		if (value != null && value != "") {
			return value.split(",")[0];
		} else {
			return null;
		}
	},
	remove: function(cookieName) {
		this.set(cookieName, "", -1);
	},
	get: function(cookieName) {
		var temp = document.cookie;
		var c_start = temp.indexOf(" " + cookieName + "=");
		if (c_start == -1) {
			c_start = temp.indexOf(cookieName + "=");
		}
		if (c_start == -1) {
			temp = null;
		} else {
			c_start = temp.indexOf("=", c_start) + 1;
			var c_end = temp.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = temp.length;
			}
			temp = unescape(temp.substring(c_start, c_end));
		}
		return temp;
	}
};