function Grid(width, height) {
	var forbidden = [];

	if(width > 50 || height > 50) {
		throw new Error("Grid size cannot be greater than 50*50");
	}
	else if(width < 0 || height < 0) {
		throw new Error("Grid size cannot be smaller than 1*1")
	}

	this.width = width;
	this.height = height;

	this.addForbidden = function(position) {
		forbidden.push(position);
	};

	this.hasForbidden = function(position) {
		return forbidden.indexOf(position) > -1;
	};
}

module.exports = Grid;