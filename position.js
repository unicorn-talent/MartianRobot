function Position() {
	this.x = 0;
	this.y = 0;
	this.orientation = "N";
	this.lost = false;

	this.toString = function () {
		return this.x + " " + this.y + " " + this.orientation + (this.lost ? " Lost" : "");
	};


	this.isOff = function (grid) {
		if(this.x > grid.width || this.y > grid.height || this.y < 0 || this.x < 0) {
			if (this.orientation == "N") {
				this.y = grid.height;
			}

			if (this.orientation == "E") {
				this.x = grid.width;
			}

			if (this.orientation == "S") {
				this.y = 0;
			}

			if (this.orientation == "W") {
				this.x = 0;
			}

			this.lost = true;
			return this.lost;
		}

		return false;
	};
}

module.exports = Position;
