export const PARTICLE_PARAMETERS = {
	"particles": {
		"number": {
		  "value": 300,
		  "density": {
		    "enable": true,
		    "value_area": 300
		  }
		},
		"color": {
		  "value": "#ffffff"
		},
		"shape": {
		  "type": "circle",
		  "stroke": {
		    "width": 0,
		    "color": "#f2f2f2"
		  },
		},
		"opacity": {
		  "value": 0.5,
		  "anim": {
		    "enable": true,
		    "speed": 1,
		    "opacity_min": 0.1,
		    "sync": false
		  }
		},
		"size": {
		  "value": 1,
		  "random": true,
		  "anim": {
		    "enable": false,
		    "speed": 40,
		    "size_min": 0.1,
		    "sync": false
		  }
		},
		"line_linked": {
		  "enable": true,
		  "distance": 100,
		  "color": "#ffffff",
		  "opacity": 0.1,
		  "width": 1
		},
		"move": {
		  "enable": true,
		  "speed": 1,
		  "direction": "none",
		  "random": true,
		  "straight": false,
		  "out_mode": "bounce",
		  "bounce": false,
		  "attract": {
		    "enable": false,
		    "rotateX": 600,
		    "rotateY": 1200
		  }
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
		  "onhover": {
		    "enable": true,
		    "mode": "bubble"
		  },
		  "onclick": {
		    "enable": false,
		    "mode": "bubble"
		  },
		  "resize": true
		},
		"modes": {
		  "bubble": {
		    "distance": 150,
		    "size": 2,
		    "duration": 1,
		    "opacity": 0.6,
		    "speed": 5
		  },
		}
	},
	"retina_detect": true
};