function showLoader() {
  document.getElementById("loader").style.display = "flex";
}

// Hide the loader
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

async function registerPackage() {
  const senderName = document.getElementById("sender-name").value.trim();
  const senderEmail = document.getElementById("sender-email").value.trim();
  const senderPhone = document.getElementById("sender-phone").value.trim();
  const senderLocation = document
    .getElementById("sender-location")
    .value.trim();
  const receiverEmail = document.getElementById("receiver-email").value.trim();
  const receiverName = document.getElementById("receiver-name").value.trim();
  const receiverPhone = document.getElementById("receiver-phone").value.trim();
  const receiverLocation = document
    .getElementById("receiver-location")
    .value.trim();
  const deliveryMode = document.getElementById("delivery-mode").value.trim();
  const contentName = document.getElementById("content-name").value.trim();
  const contentWeight = document.getElementById("content-weight").value.trim();
  const contentHeight = document.getElementById("content-height").value.trim();
  const contentLength = document.getElementById("content-length").value.trim();
  const contentWidth = document.getElementById("content-width").value.trim();

  var trackingId = Math.floor(100000 + Math.random() * 900000);

  if (
    !senderName ||
    !senderEmail ||
    !senderPhone ||
    !senderLocation ||
    !receiverEmail ||
    !receiverName ||
    !receiverPhone ||
    !receiverLocation ||
    !deliveryMode ||
    !contentName ||
    !contentWeight ||
    !contentHeight ||
    !contentLength ||
    !contentWidth
  ) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Important fields are missing",
    });
  }

  if (!validateEmail(senderEmail) || !validateEmail(receiverEmail)) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter valid email addresses.",
    });
  }

  if (!validatePhone(senderPhone)) {
    alert("Please enter valid phone numbers.");
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter valid phone numbers.",
    });
  }

  // Construct the payload
  const payload = {
    trackingId,
    senderName,
    senderEmail,
    senderPhone,
    senderLocation,
    receiverEmail,
    receiverPhone,
    receiverName,
    receiverLocation,
    deliveryMode,
    contentName,
    contentWeight,
    contentHeight,
    contentLength,
    contentWidth,
  };
  showLoader();
  console.log(payload);

  try {
    const response = await fetch(
      "https://emmaserver.onrender.com/package/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.status == 400) {
      hideLoader();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
    }
    console.log("Response:", data);
    hideLoader();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Tracking code generated",
    });
    console.log(data["trackingId"]);
    localStorage.setItem("trackingId", data["trackingId"]);
    trackPackage();
  } catch (error) {
    console.error("Error:", error);
    hideLoader();
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "An error occurred while sending the request. Please try again.",
    });
  }
}
async function registerPackage2() {
  const senderName = document.getElementById("sender-name").value.trim();
  const senderEmail = document.getElementById("sender-email").value.trim();
  const senderPhone = document.getElementById("sender-phone").value.trim();
  const senderLocation = document
    .getElementById("sender-location")
    .value.trim();
  const receiverEmail = document.getElementById("receiver-email").value.trim();
  const receiverName = document.getElementById("receiver-name").value.trim();
  const receiverPhone = document.getElementById("receiver-phone").value.trim();
  const receiverLocation = document
    .getElementById("receiver-location")
    .value.trim();
  const deliveryMode = document.getElementById("delivery-mode").value.trim();
  const contentName = document.getElementById("content-name").value.trim();
  const contentWeight = document.getElementById("content-weight").value.trim();
  const contentHeight = document.getElementById("content-height").value.trim();
  const contentLength = document.getElementById("content-length").value.trim();
  const contentWidth = document.getElementById("content-width").value.trim();

  var trackingId = Math.floor(100000 + Math.random() * 900000);

  if (
    !senderName ||
    !senderEmail ||
    !senderPhone ||
    !senderLocation ||
    !receiverEmail ||
    !receiverName ||
    !receiverPhone ||
    !receiverLocation ||
    !deliveryMode ||
    !contentName ||
    !contentWeight ||
    !contentHeight ||
    !contentLength ||
    !contentWidth
  ) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Important fields are missing",
    });
  }

  if (!validateEmail(senderEmail) || !validateEmail(receiverEmail)) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter valid email addresses.",
    });
  }

  if (!validatePhone(senderPhone)) {
    alert("Please enter valid phone numbers.");
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter valid phone numbers.",
    });
  }

  // Construct the payload
  const payload = {
    trackingId,
    senderName,
    senderEmail,
    senderPhone,
    senderLocation,
    receiverEmail,
    receiverPhone,
    receiverName,
    receiverLocation,
    deliveryMode,
    contentName,
    contentWeight,
    contentHeight,
    contentLength,
    contentWidth,
  };
  showLoader();
  console.log(payload);

  try {
    const response = await fetch(
      "https://emmaserver.onrender.com/package/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.status == 400) {
      hideLoader();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
    }
    console.log("Response:", data);
    hideLoader();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Tracking code generated",
    });
  } catch (error) {
    console.error("Error:", error);
    hideLoader();
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "An error occurred while sending the request. Please try again.",
    });
  }
}

async function trackPackage() {
  console.log("i am clicked");
  const trackID = localStorage.getItem("trackingId");

  const baseUrl = "https://emmaserver.onrender.com/package/single/";

  // Construct the full endpoint URL
  const endpoint = `${baseUrl}${trackID}`;
  // Perform the GET request

  if (!trackID) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter a tracking ID",
    });
  }
  showLoader();
  try {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    if (response.status == 400) {
      hideLoader();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
    }
    hideLoader();
    localStorage.setItem("packageTracking", JSON.stringify(data));
    window.location = "./pages/details.html";
  } catch (error) {
    console.error("Error:", error);
    hideLoader();
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "An error occurred while sending the request. Please try again.",
    });
  }
}

async function trackPackage2() {
  console.log("i am clicked");
  const trackID = localStorage.getItem("trackingId");

  const baseUrl = "https://emmaserver.onrender.com/package/single/";

  // Construct the full endpoint URL
  const endpoint = `${baseUrl}${trackID}`;
  // Perform the GET request

  if (!trackID) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter a tracking ID",
    });
  }
  showLoader();
  try {
    const response = await fetch(endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    if (response.status == 400) {
      hideLoader();
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data.message,
      });
    }
    hideLoader();
    localStorage.setItem("packageTracking", JSON.stringify(data));
    window.location = "details.html";
  } catch (error) {
    console.error("Error:", error);
    hideLoader();
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "An error occurred while sending the request. Please try again.",
    });
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10,15}$/; // Modify as needed for phone format
  return phoneRegex.test(phone);
}
