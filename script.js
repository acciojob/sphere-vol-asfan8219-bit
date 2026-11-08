function volume_sphere(event) {
    event.preventDefault();

    let r = Number(document.getElementById("radius").value);

    let volume = (4 / 3) * Math.PI * r * r * r;

    document.getElementById("volume").value = volume.toFixed(4);
}
