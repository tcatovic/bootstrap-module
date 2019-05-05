"use strict";
const BootstrapModule = (function() {
  function Alert(options) {
    this.options = options;

    if (options.attach === null || options.attach === undefined) {
      throw Error(
        "Alert plugin requires an object parameter with the attach property"
      );
    }

    this.attachedElement = document.getElementById(options.attach);

    if (this.attachedElement === null || this.attachedElement === undefined) {
      throw Error("Element with id " + attach + " does not exist");
    }

    this.alert = document.createElement("div");
    this.alert.className =
      "alert alert-" + this.options.type + " " + this.options.className;
    this.alert.setAttribute("role", "alert");

    setInnerContent.call(this);

    if (this.options.closeButton) {
      buildCloseButton.call(this);
    }

    this.alert.style.display = "none";
    this.attachedElement.appendChild(this.alert);
  }

  function setInnerContent() {
    this.alert.innerHTML =
      typeof this.options.content === "string"
        ? this.options.content
        : this.options.content.innerHtml;
  }

  function buildCloseButton() {
    var spanIcon = document.createElement("span");
    spanIcon.innerHTML = "&times;";

    var closeButton = document.createElement("button");
    closeButton.className = "close";
    closeButton.setAttribute("aria-label", "Close");
    closeButton.setAttribute("type", "button");
    closeButton.appendChild(spanIcon);

    const that = this;
    closeButton.addEventListener("click", function() {
      that.close();
    });

    this.alert.appendChild(closeButton);
  }

  Alert.prototype.open = function() {
    this.alert.style.display = "block";
  };

  Alert.prototype.close = function() {
    this.alert.style.display = "none";
  };

  Alert.prototype.setContent = function(content) {
    setInnerContent().call(this);

    if (this.alert.firstChild !== null || this.alert.firstChild !== undefined) {
      this.alert.removeChild(this.alert.firstChild);
    }
    this.alert.appendChild(contentHolder);
  };

  Alert.prototype.setType = function(type) {
    this.options.type = type;

    this.alert.className =
      "alert alert-" + this.options.type + " " + this.options.className;
  };

  function AlertOptions() {
    this.attach = "alert";
    this.type = "danger";
    this.content = "An error has occured";
    this.className = "";
    this.closeButton = true;
  }

  return {
    Alert: Alert,
    AlertOptions: AlertOptions
  };
})();
