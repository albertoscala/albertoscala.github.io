const donutEl = document.getElementById("donut");
let A = 1, B = 1;

setInterval(() => {
    let b = [],
        z = [],
        width = 50,
        height = 40,
        output = "";

    const cos = Math.cos, sin = Math.sin;
    A += 0.07;
    B += 0.03;

    for (let k = 0; k < width * height; k++) {
        b[k] = " ";
        z[k] = 0;
    }

    for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
            const c = sin(i),
                d = cos(j),
                e = sin(A),
                f = sin(j),
                g = cos(A),
                h = d + 2,
                D = 1 / (c * h * e + f * g + 5),
                l = cos(i),
                m = cos(B),
                n = sin(B),
                t = c * h * g - f * e;

            const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n)),
                y = Math.floor(height / 2 + 20 * D * (l * h * n + t * m)),
                o = x + width * y;

            const luminanceIndex = Math.floor(8 * ((f * e - c * d * g - l * d * e) * D));
            const luminanceChars = ".,-~:;=!*#$@";
            const char = luminanceChars[Math.max(0, Math.min(luminanceChars.length - 1, luminanceIndex))];

            if (height > y && y >= 0 && x >= 0 && width > x && D > z[o]) {
                z[o] = D;
                b[o] = char;
            }
        }
    }

    // Add newlines every `width` characters
    for (let k = 0; k < b.length; k++) {
        output += b[k];
        if ((k + 1) % width === 0) output += "\n";
    }

    donutEl.textContent = output;
}, 50);

function fetchProjects() {
    let list = document.getElementById("projects");

    fetch("https://api.github.com/users/albertoscala/repos")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                let project = document.createElement("li");
                let link = document.createElement("a");
                let title = document.createElement("h3");
                let description = document.createElement("i");

                title.textContent = element.name;
                description.textContent = element.description || ""; // handle null

                link.href = element.html_url;
                link.target = "_blank"; // open in new tab
                link.rel = "noopener noreferrer";

                link.appendChild(title);
                link.appendChild(description);
                project.appendChild(link);
                list.appendChild(project);
            });
        })
        .catch(error => console.error("Error fetching projects:", error));
}


window.onload = fetchProjects;