const canvas = document.getElementById('signature-pad');
const signaturePad = new SignaturePad(canvas);

document.getElementById('save-svg').addEventListener('click', () => {
    const svgData = signaturePad.toDataURL('image/svg+xml');
    document.getElementById('svg-data').value = svgData;
});
