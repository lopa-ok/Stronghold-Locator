function calculateStronghold() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const z1 = parseFloat(document.getElementById('z1').value);
    const theta1 = parseFloat(document.getElementById('theta1').value) * (Math.PI / 180);
    const x2 = parseFloat(document.getElementById('x2').value);
    const z2 = parseFloat(document.getElementById('z2').value);
    const theta2 = parseFloat(document.getElementById('theta2').value) * (Math.PI / 180);

    const tanTheta1 = Math.tan(theta1);
    const tanTheta2 = Math.tan(theta2);

    const xStronghold = ((z2 - z1) + (x1 * tanTheta1) - (x2 * tanTheta2)) / (tanTheta1 - tanTheta2);
    const zStronghold = z1 + ((xStronghold - x1) * tanTheta1);

    document.getElementById('result').innerText = `Stronghold Location: X=${xStronghold.toFixed(2)}, Z=${zStronghold.toFixed(2)}`;
}
