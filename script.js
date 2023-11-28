// d = ViT + 0.5 at^2
// Vf = Vi + at
// 2ad = vf^2-vi^2
// a = vf-vi / t


function getAT(vf, vi) {
    // at = vf - vi
    return vf - vi
}

function getDistance(vf, vi, t) {
    let a = getAT(vf, vi) / t;
    let t2 =  t * t;

    return vi*t + .5 * a * t2;
}

function getAcceleration(vf, vi, t) {
    return getAT(vf, vi) / t
}

function getAcceleration2(d, vi, t) {
// d = ViT + 0.5 at^2
// 6, 6
    let m_at2 = 2 * (( vi * t ) - d)
    return -m_at2 / t / t
}

$("document").ready(() => {
    $(".answer").hide();
    $(".mform").submit((e) => {
        e.preventDefault();
        
        let vi = $(".vi").val();
        let vf = $(".vf").val();
        let t = $(".t").val();

        let a = getAcceleration(vf, vi, t);
        let d = getDistance(vi, vf, t);

        $(".answer").html("Acceleration: " + a + ", Distance: " + d);
        $(".answer").show();
    });
    $(".mform2").submit((e) => {
        e.preventDefault();

        let vi = $(".vi").val();
        let d = $(".d").val();
        let t = $(".t").val();

        let a = getAcceleration2(d, vi, t);

        $(".answer").html("Acceleration: " + a);
        $(".answer").show();
    })
 
});