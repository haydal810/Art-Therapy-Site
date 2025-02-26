document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "dark-agency/img feb 2025 - no logo/IMG_0391.jpeg",
        "dark-agency/img feb 2025 - no logo/IMG_1104.jpeg",
        "dark-agency/img feb 2025 - no logo/IMG_1143.jpeg",
        "dark-agency/img feb 2025 - no logo/IMG_4748.jpeg",
        "dark-agency/img feb 2025 - no logo/IMG_5031.jpeg",
        "dark-agency/img feb 2025 - no logo/IMG_5563.jpeg",
        "dark-agency/img feb 2025 - no logo/IMG_5566.jpeg"
    ];

    let currentIndex = 0;
    const imgElement = document.getElementById("carouselImg");

    function changeImage() {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        imgElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            imgElement.src = imagePaths[currentIndex];
            imgElement.style.opacity = 1; // Fade in
        }, 500);
    }

    setInterval(changeImage, 3000); // Change every 3 seconds
});