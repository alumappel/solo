(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.סתיו = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjDDRIAAgKIAAgKIA8AAIAKAAIAAgKIAAkrIgKABQgnAIAJgnQBzAAByAFIAAAFQAQAAANAEQABABAAAFQAxAVABBFIAAAKQASBvgNCJIgFABIgKAAIgKAAIgFAAQgFiMAAiLQAAgFgBgFQgLgcgSgWIgKAAIgUAAIgKAAIiBAAIAAAKQAICwgSCZIgKAAQgQACgPAAQgkAAgXgMgEAhgADHIAAgKIBuAAIAKAAIAAgKIAAjRIAAgKQgDhIhDgIIgKAAIhaAAIAAAKQgXC1g5CUQgEheAmhpQAth9hZgjIAAgKQBaAABaAFIAAAFQCRAZgbDNQgIA7AAA8QAAAFgBAAQgjAHgeAAQg0AAgggWgAEcDRIgFgBQgWiigNimQgFAAAAgCQgEgNgBgPQCWAACWAFIAAAFIAAAKIAADlQgFAAAAABQgRBbhYASIAAAFQgiAFgeAAQgqAAgigKgAEShkIAAAKQAHCOAWB/IABAKIBkAAIAKAAQBPgMALhOIAAgKIAAgKIAAjHIgKAAIjcAAIAAAUgAznDRIgBgKQgLgwACg+IgFgBQgFgnAAgoIgBgJQgLg/AChNQAxB+ABCtIAAAKQBDAhBxgNIAKAAQCHg8gpjwQgJg2AZAZQASBmgNB+IgFABIAAAKQgFBjhfALIAAAFQgzAFgvAAQhBAAg5gKgAPxDbQgFi0AAizIAAgKQBkAABkAFIAAAFQBEAHALA/IABAKQASB0gHCPIgBAKIAAAFQiMAFiMAAgAQKCzIAAAKIDcAAIAKAAIAAgKIAAjbIAAgKQgIg5g0gNIgKAAIigAAIAAErgAnWDbQgFi5AAi4QAQAAANAEQABABAAAFQAABfAHBdQAIBugjA9gA1zDbIgKAAIgFAAQgFiHAAiGIAAgKQgFg3g3gFIgKAAQhSAHg6gRIAAgKIAAgKQBGAABGAFIAAAFQBnACgDBsIAAAKQASBqgNCEIgFABIgKAAgA8TBNQgwh5hMBJIAAAKIAAAKIAACWIAAAKQACAQgHgOIgBgCIgEAAIgFgBIgBgXQgUg6AGhOIAKAAQAAgPAGgNQAMgdARgXQAZghgwg+QBNBeBdBOQADADAFAAQAfgJAIggIABgIIAAgKIAAiCIAAgKIAKAKIAAAAQAmAugXBmQAAABgFAAQAAAFgCAEQgLAbgbAOQgFAFgGACIgJADQAHBJA/BNQhQgzgkhbgANMDRIAAgKIAAgeIAUAAIAKAAQAFAAAAABQAIAxgTAAQgJAAgPgKgEgiJAC9QA4iLAriXQABgEAAgFIAAgFIgHAAQh2AChfgRIAAgKIAAhQIAKAAQAhAHgMA1IgBAKQB7gHBfAgIACAAIAAAAIAEACQANAEgRgBIhKEEQgTBBgSAAQgKAAgJgQgAZiDHQA8iWAxigQABgEAAgFIgKAAQh1AHhdgRIgFgBQgEgsgBgtIAKAAQAugBgPA9IgBAKQBuAABuAFIAAAFQgfCGgfB3QgXBaglAAQgJAAgJgEgAxRBZIgKAAIgFAAQgFh3AAh4QAPAAAOAEQABABAAAFQASBmgNB+IgFABIgKAAgAdsAqIgBgDIgFAAIgFgBIgBggQgUhEAGhYQAQAAANAEQABABAAAFIAACpIAAAKQABAJgBAAQgBAAgDgGgAWMAqQghhQAHhwQAQAAANAEQABABAAAFIAACpIAAAKQABAJgBAAQgBAAgDgGgAsVAqQghhQAHhwQAQAAANAEQABABAAAFQASBNgNBlIgFABQABAJgBAAQgBAAgDgGgAkiAlQgWhLAHhmIAKAAIAKAAQASBNgNBlIgFABQgFAAAAgCgANCgyQAZAAAYAFQABAAAAAFIAAAeIAAAKQAAAEgBAAQgNAEgJAAQgpAAAOg6g");
	this.shape.setTransform(0.0375,0.0248);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.5,-22.1,461.1,44.3);


(lib.נדב2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARJJ/IAAgKIAAgKQAeAAAdgFQABAAAAgFQARgDACgRIABgKIAAgKIAAkOIgKABQgwALAIgqQAoAAAnAFIABAFIgKAAIg8AAQAHAPAaAAIAAAAIABAAIACAAIABAAIADAAIAAAFIAAgFIgDAAIgBAAIgCAAIgBAAIAAAAQgaAAgHgPIA8AAIAKAAQARCEgMCdIgFABIAAgKIAAkYIAAEYIAAAKIgBAKQgIA+hHAAQgOAAgQgCgASeJCIgFABIAFgBQAFg/AAg6QAAhTgKhLQAKBLAABTQAAA6gFA/gAiEJrIAKAAQAwAMA9AAIAAAAIAAAAQAWAAAYgBIABAAIADgBIAKAAQAAAFgBAAQgpAHgiAAQg9AAgqgWgAlqJ1IBGAAIAKAAQAAAFgBAAQgVAFgRAAQgYAAgRgKgAwwJ1ICCAAIAKAAIgBAFQgiAFgdAAQgqAAgigKgARJJ/QgFAAgBgCQgEgNAAgPIA8AAIAKAAQAAAFgBAAQgdAFgeAAIAAAKIAAAKIAAAAgAnEJ/IgKAAIAAgKQACgoAAgmQAAhcgMhQIAAgKQgBhBg7gFIgBgFQhPgFhQAAIAAAKIgKAAIAAFKIAAAKIAAgKIAAlKIAKAAIAAgKQBQAABPAFIABAFIgKAAIiWAAIAAAKQAHCxgRCZIgFgBQgXinAIjAICqAAIAKAAQBnABgDBtIAAAKIAADmIAAAKIAAgKIAAjmQARBrgMCEIgFABIgKAAgAnTJ/QgFiCAAiCQAMBQAABcQAAAmgCAoIAAAKgAPQJ6IgBgFIACAAIgCAAIgDgBIgCgUQgOiagJibIgKAAQhsAHhSgRQBkAABkAFIAAAFIAAgFQhkgFhkAAIAAgKIEOAAIAKAAQAAAFgBAAQgYAFgZAAIAAFKIAAAKIAAAKIgBgFgAGNJ1QCIAACIgEQhRALhLAAQg8AAg4gHgAgNJ3Qg9AAgwgMQBaAABYgFIABgFQAogUAJgyIABgKIAFgBQAFgkAAggQAAgtgKgkQAKAkAAAtQAAAggFAkIgFABIAAgKIAAiMIgBgKQgIg9g9gJIgBgFQhEgFhGAAIAAAKIAAgKQBGAABEAFIABAFIgKAAIiBAAIAACWIAAAKQgFAAgBgCQgQg4AAhHQAAgZACgaQgCAaAAAZQAABHAQA4QABACAFAAQABAQgFgNQgihRAIhwIAKAAIAAAKICLAAIAKAAQBTABAQBFIABAKQARBSgMBrIgFABIAAgKIAAi0IAAC0IAAAKIgBAKQgKBAhFAGIgKAAIgDABIgBAAQgYABgWAAIAAAAIAAAAgAPPJ1IAAAAgAGNJrIDSAAIAKAAIgKAAIjSAAIAAgKIDSAAIAKAAIAAgKIAAksIgKAAQh2AHhcgRIDSAAIAKAAIAAAKIAAgKQAKBZAABiQAABFgFBJIgFABIAAgKIAAAKIAFgBQAFhJAAhFQAAhigKhZIgKAAIjSAAIAAgKIDwAAIAKAAIgKAAIjwAAIAAgKQB9AAB9AFIAAAFQgIC2AlCZQABAFAUAAQAQgBgJABIgHACIAAgCIAAACIAAADIgcABQiIAEiIAAIAAgKgAkkJ1IhGAAIAAgKQCGgLgii/QgKg6gSg2QgCgGgUABQgQAAAGgVIA8AAIAKAAIAAEsIAAAKQAAAFgCAEQgHAWgVAJIgKAAgAukJ1IAAAAgAuuJ1IiCAAIgFgBQgXiigMinIAAgKIAAgKIEYAAIAKAAIgKAAIkYAAIAAAKIAAAKQgFAAgBgCQgEgNAAgPQCWAACWAFIAAAFIAAAKIAADmQgFAAAAABQgSBbhXASIgKAAgAviJrQAWAAAagFIADAAQABAAAAgFQBOgMALhOIABgKIAAgKIAAjIIAAgKIgKAAIjmAAQAAAUAEATQABABAFAAQAHCPAWB/IABAKIACABQAYAJAfAAIABAAIAAAAgAtPH8IgFABIAFgBQAFgyAAgvQAAhBgKg5QAKA5AABBQAAAvgFAygAK5JtgAvjJrQgfAAgYgJIgCgBIBkAAIAKAAQAAAFgBAAIgDAAQgaAFgWAAIAAAAIgBAAgAJpJrIAAAAgAh6JrIAAgKICpAAIAKAAIgBAFQhYAFhaAAIAAAAgAuuJhIAAAAgAOzErQAJCbAOCaQgeiOAHingAj8JNIAAgKIAAksIAKAAIAAAKQAHCigRCKIAAAAgAzKHOQgihRAIhwQAPAAANAEQACABAAAFIgKAAIgKAAQgCAaAAAZQAABHAQA4QABACAFAAQABAJgCAAQgBAAgCgGgAzGHLIAAAAgAzMHJQgQg4AAhHQAAgZACgaIAKAAIAKAAIAACqIAAAKQgFAAgBgCgAzGHBIAAiqQARBNgMBmIgFABIAAgKgAnYF7IAAAAgAxAFIQgEgTAAgUIDmAAIAKAAIAAAKIgKAAIjcAAIAAAUIAAAKQgFAAgBgBgALrEhIAAAAgAGNEhIAAAAgAQDEXIgKAAIkOAAIAAgKQCMAACMAFIAAAFIAAAAgALrEXIAAAAgAAREXIiLAAIAAgKQBLAABJAFIABAFIgKAAgAj8EXIgKAAIg8AAIAAgKQAoAAAnAFIABAFIgKAAgAj8EXIAAAAgAoeEXIAAAAgAooEXIiqAAIAAgKQBaAABZAFIABAFIgKAAgAzGEXIAAAAgAawhuQgFjmAAjmQAPAAANAEQACABAAAFIgKAAIgKAAIAAG4IAAAKIAAgKIAAm4IAKAAIAKAAQAAB4AHB3QAHCCgiBRgAzVhuQgFigAAigIAKAAIAAE2IAAAKgAzQh4IAAk2QAiA3AABpQAABogiA4IAAgKgAX3igQAVhpANAxQAKAjgMAaQgKAagIAAQgJAAgFgfgAxijcQB5ALAIhlIABgKIAAgKIAAjSIAKAAIgKAAIgKAAQiKAHhwgRQCHAACHAFIAAAFIAAAKQACAiAAAgQAABOgMBCQAMhCAAhOQAAgggCgiIAAgKIAAgFQiHgFiHAAIAAgKIEYAAIAKAAIgKAAIkYAAIAAgKQCRAACRAFIAAAFQARBcgMB1IgFABIAAgKIAAjIIAADIIAAAKQAEBZgwAmQgfAYgeAAQgcAAgbgVgEgmygD6IAKAAIAUAAIAKAAQAAAFgCAEIAAABIAAABIAAABIgBABIAAABIAAAAQgIAZgGABIAAAAIgBAAQgHgCgFgmIAAAAIAAAAQAFAmAHACIABAAIAAAAQAGgBAIgZIAAAAIAAgBIABgBIAAgBIAAgBIAAgBQACgEAAgFIAFAAQgKAzgLAAQgMAAgMgzgAJpjSIgFgBQgWiygXirQAuAdACBRQADByATBqQAeAKAnAAIAAAAIABAAQAZAAAdgEIABgBIAEAAQABAAAAgFQB2hIgljkIgBgKIgBgFQg7gFg8AAIAAgKIAAgKQBGAABFAFIABAFQARBXgMBwIgFABIAAgKIAAi+IgKAAIiCAAICCAAIAKAAIAAC+IAAAKIAAAKQACB1hcAXIgKAAIiWAAICWAAIAKAAIgBAFQgmAFgiAAQgwAAgngKgEAhjgDSIAAjmQARBrgMCEIgFABIAAgKgEAhZgDIIgKAAIAAgKQACgoAAgmQAAhcgMhQIAAgKQgBhBg7gFIgBgFQhPgFhQAAIAAAKIgKAAIAAFKIAAAKIAAgKIAAlKIAKAAIAAAKQAHCxgRCZIgFgBQgXinAIjAICqAAIAKAAQBnABgDBtIAAAKIAADmIAAAKIgKAAgEAhKgDIQgFiCAAiCQAMBQAABcQAAAmgCAoIAAAKgAHEjIQgFiHAAiHQAMBTAABhQAAAngCApIAAAKgAHJjSQACgpAAgnQAAhhgMhTIgBgKQgFg3g2gFIAAgKQAFAAACgDQADgCAAgFQB2BMgWDrQgFAtgfAEIAAgKgACEjIQgFiqAAiqQAMBrAAB4QAAAygCA1IAAAKgACJjSQACg1AAgyQAAh4gMhrIAAgFQh9gFh8AAIAAgKIENAAIAKAAIgKAAIkNAAIAAgKQCLAACMAFIAAAFQAABfAGBeQAIBugiA9IAAgKgAhmjIIgKAAIAAgKIAAi+IAKAAIAKAAQARBXgMBwIgFABIAAgKIAAi+IAAC+IAAAKIgKAAgAh1jIQgFhkAAhkIAKAAIAAC+IAAAKgAm6jIIAAgKIAAleIAKAAIAKAAQAABfAGBeQAIBugiA9IAAAAgAm/jIQgFi5AAi5QAPAAANAEQACABAAAFIgKAAIgKAAIAAFeIAAAKgA1XjIQgFiHAAiHQAMBTAABhQAAAngCApIAAAKIAAgKQACgpAAgnQAAhhgMhTIgBgKQgFg3g2gFIAAgKIgKAAIiMAAIAAgKIAAgKQBLAABKAFIABAFIAKAAQB2BMgWDrQgFAtgfAEgA2RopQgCADgFAAQAFAAACgDQADgCAAgFQAAAFgDACgA2iowIAKAAIgKAAIiMAAICMAAgA7olWQgxh6hLBKIAAAKIAAAKIgKAAIAACWIAAADIAAAHIAAgHIAAgDIAAiWIAKAAIAACWIAAAKQABAQgHgOIgBgCIAHAAIgHAAIgDAAIgFgBIgBgXQgEhEAAhEQAAgPAFgNQAMgeASgXQAYghgwg+QBOBeBdBPQADADAFAAQAFAFAGADQAEACAFAAQgFAFgGACIgJADQAGBJBABNQhQgzgkhbgEggJgDIQgFiqAAiqQAMBrAAB4QAAAygCA1IAAAKgEggEgDSQACg1AAgyQAAh4gMhrIAAgFQh9gFh9AAIAAgKIAAgKQCMAACMAFIAAAFIgKAAIkOAAIEOAAIAKAAQAABfAGBeQAIBugiA9IAAgKgEgj0gDIIgKAAIAAgKIAAi+IAAC+IAAAKIgFAAQgFhkAAhkIAKAAIAKAAIAKAAIAAC+IAAAKIgKAAgEgjqgDSIAAi+QARBXgMBwIgFABIAAgKgAo9jNIgBgFIACAAIgCAAIgIAAIAAgKIAAgaIAAk6IgKAAIkEAAIEEAAIAKAAIAAE6IAAAaIAAAKIgFAAIAAg+QgBiPgOh9IAAgFQh9gFh9AAIAAgKIAAgKQCMAACMAFIAAAFIgKAAIAKAAIAAFUIAAAKIAAAKIgBgFgATxjNQgXhcgZAvQAAgFgDgDQgCgCgFAAQAlhPgOhnQgNhjhQgTIBQAAIAKAAQAWCtASCxIAAAKIgCgFgAs6jPQgihRAIhwIAKAAQAiBBgOBzIAAAKQABAJgCAAQgBAAgCgGgAs8jUQABACAFAAQgFAAgBgCQgQg8AAhLQAAgZACgcQgCAcAAAZQAABLAQA8gARdjmQA8AEAbgbQADgCAAgFQAFAAACACQADADAAAFQAAAFgDADQgeAmgaAAQgWAAgTgagA9rjSIAAAAgEAkrgDmQA4iLAqiYQACgEAAgFIAFAAIgFgCIAAgDIgHAAIgBAAIgBgBIgBAAQg0gThIAAIgBAAIAAAAQgjAAgoAFIAAgKIAAhQIAABQIAAAKQAogFAjAAIAAAAIABAAQBIAAA0ATIABAAIABABIABAAQh3AChegRIAKAAIgKAAIAAgKIAAhQIAKAAQAgAHgLA1IgBAKQB7gHBeAgIACAAIABAAIAAAFIhKEFQgTBBgSAAQgKAAgJgQgEAmqgIhQhsgPhtgKQBtAKBsAPgALCjcQgnAAgegKIB4AAIAKAAQAAAFgBAAIgEAAIgBABQgdAEgZAAIgBAAIAAAAgA+ClyIAKAAQAABEAEBEQgUg6AGhOgAS3kEIAAAAgApaocQAOB9ABCPQgVh9AGiPgAvCleIAAAAgA6vlqQgGgDgFgFQAfgJAIggIABgJQAMgmAAgxQAAgVgCgWIAAgKQAMApAAA1QAAAWgCAYIAAAKIAAgKQACgYAAgWQAAg1gMgpQAmAugXBnQAAABgFAAQAAAFgCAEQgMAbgaAOQgFAAgEgCgA94lyIAAAAgAP1l5QgihRAIhwQAPAAANAEQACABAAAFIgKAAIgKAAQgCAaAAAZQAABHAQA4QABACAFAAQABAJgCAAQgBAAgCgGgAP5l8IAAgKIAAiqQARBNgMBmIgFABIAAAAgAPzl+QgQg4AAhHQAAgZACgaIAKAAIAKAAIAACqIAAAKQgFAAgBgCgEgmygHMIAAgKQBAgPgTA/QAAACgFAAIABgKIAAgBIAAgBIAAgBQAFgdgXAAIAAAAIAAAAIgNACIgKAAIAKAAQgLAoAdAAIAAAAIABAAIAAAAIABAAIAKAAIgKAAIgBAAIAAAAIgBAAIAAAAQgdAAALgoIANgCIAAAAIAAAAQAXAAgFAdIAAABIAAABIAAABIgBAKQAAAFgCAAQgKADgIAAQggAAAMgwgA6SmuIAAiCIAKAAIAAAAIAAAKQACAWAAAVQAAAxgMAmIAAgKgEAhFgHMIAAAAgEgmogHMIAAAAgEAmPgISIAAgCIAFACgEAmPgIUIAAAAgALXomQA8AAA7AFIABAFIgKAAQgTACgSAAQgrAAgegMgADtomICMAAIAKAAIAAAKIgKAAQgXACgWAAQg2AAgpgMgAh6omQB8AAB9AFIAAAFIgKAAQgmACgkAAQhYAAhNgMgAtUomQB9AAB9AFIAAAFIgKAAQgmACgkAAQhZAAhNgMgA4uomICMAAIAKAAIAAAKIgKAAQgYACgVAAQg2AAgpgMgEgkIgImQB9AAB9AFIAAAFIgKAAQgmACgkAAQhZAAhNgMgEAmtgIcIAAgFIAEACQAJADgHAAIgGAAgAf/ocIiWAAIAAgKQBQAABPAFIABAFIgKAAgAGDocIAAAAgAB/ocIAAAAgApaocIAAAAgAvWocIAAAAgEggOgIcIAAAAgEAi9gImIAAAAgALXomIAAAAgAF5omIiMAAIAAgKIAAgKQBLAABKAFIABAFIAKAAQAAAFgDACQgCADgFAAIgKAAgAF5owIAKAAIgKAAIiMAAICMAAgADtomIAAAAgAh6omIAAAAgAtUomIAAAAgAzkomIAAAAgA4uomIAAAAgEgkIgImIAAAAgA6IowIAAAAgAf1owIiqAAIAAgKQBaAABZAFIABAFIgKAAgAdLowIAAAAgATBowIhQAAIAAgKQAtAAAsAFIABAFIgKAAgARxowIAAAAgAP5owIAAAAgAP5owIAAAAgAmmowIAAAAgA6IowIAAAAgA6SowIAAgKIAKAKIgKAAg");
	this.shape.setTransform(0.0052,0.0181);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.6,-64.1,497.29999999999995,128.3);


(lib.חלקקטםמרגל = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.953)").s().p("AjqFKIgyAAIAAgFQgaABgSgHQgRgGgJgNIAagCQEWghCOipQCTiwBMj5IAeAAIAKAAIgBAKQhjHknfCbIAAAKIgKAAg");
	this.shape.setTransform(-77.95,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(118,118,118,0.592)").s().p("AgngFIBFAAIAKAAQAAAFgCABQgDADgFAAIgKAAIgdAAIgJABIgKABQgMAAABgLg");
	this.shape_1.setTransform(-45.4522,141.6188);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(3,3,3,0.945)").s().p("AhZBBIAAgKQAqgcAjghQADgDAAgFQAFAAACgCQAkgoA4gSQAAAFgCAEQgzCEh+AIIAAgKg");
	this.shape_2.setTransform(-28.45,132.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(253,253,253,0.996)").s().p("ACbJNIgKAAIhGAAQj4gziXiUQiZiUg5jyQDjjpBwlcQABgEAAgFQFYDXF/CzQACABAAAFQAAAFgCAEQh6FPiIFFIAAAKQAAAFgDACQgjAjgqAcIAAAKIAAAKQgFAAgBACQgFAKgOAAQgGAAgJgCg");
	this.shape_3.setTransform(-56.95,82.1114);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(36,36,36,0.408)").s().p("AgaAGQgCgKgGgKIAKAAIAKAAQALAOAdgMQAEgCAFAAQAAAFgBAAQghAKgZAOQAAgFgCgEg");
	this.shape_4.setTransform(-117.95,-34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(15,15,15,0.098)").s().p("AgOAeIAAhFQATAUAJAeQABAEAAAFQgFAAgBACQgHAPgQADIAAgKg");
	this.shape_5.setTransform(-125.9625,-25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(2,2,2,0.929)").s().p("Ao+NYQAtgfApgkQDKiuBrkRQD6p7GSnuQAhgpAngjIAUAAIAKAAQAAAFgCADQmkHQkBJzIAAAKIAAAKQgsBVglBYQhoD7jHCWIgkAaQgFAAgEACQgOAGgKAAQgLAAgGgIg");
	this.shape_6.setTransform(-61.95,-121.5858);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#171717").s().p("AKjGoQpIjFnglQQjjiei3jFQHxGOJVEjQC+BcC+BaIB9A6Qg/gTg+gWg");
	this.shape_7.setTransform(-20.45,9.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(170,170,170,0.804)").s().p("AgOAUIAAgKQASgKAGgcQAAgBAFAAIgBAKQgBAlgbAMIAAgKg");
	this.shape_8.setTransform(61.05,72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(161,161,161,0.839)").s().p("AgTAjIAAgUQAXgUAKgmQABgBAFAAIgBAKQgKAvgcAgIAAgKg");
	this.shape_9.setTransform(64.55,64.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(122,122,122,0.804)").s().p("AgOAZIAAgUQASgKAGgcQAAgBAFAAIgBAKQgFAmgXAVIAAgKg");
	this.shape_10.setTransform(68.05,56.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(7,7,7,0.953)").s().p("AC+KgQCujSCZjnQADgEAAgFQhbhAhZgPIgKgBQAAgFgCgBQl+iylZjXQAAgFgDgBQi3h2ieiOQhXhOhPhWIAAgKQARgDAHgPQABgCAFAAQBCBCBGA9QGUFnIHDzQE8CTFTB+IBLAbQAHAqgugPIgkgMIj/hVQiWDJiHDUQgoA/gcAAQgXAAgOgug");
	this.shape_11.setTransform(-36.4038,48.7669);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(10,10,10,0.969)").s().p("AlQKtQEepiEMpoQAshkBHg/IAFAAQjsI+kWJJQgFAAAAABQgGAcgTALIAAAUIAAAKQgFAAAAABQgLAmgYAVIAAAUIAAAKQgFAAAAABQgGAcgTALIAAAKIAAAKIgFAAQgCAgghgCIgKAAIgBAAQgOAAAFgUg");
	this.shape_12.setTransform(87.2182,7.5272);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(254,254,254,0.996)").s().p("AHWR2QlSh9k7iTQoJj0mUlnQhGg+hChBQAAgFgBgEQgKgfgTgUIAAgKQAegPAfgNQAEgCAFAAQAagOAhgLQABAAAAgFIAkgYQDHiXBoj7QAlhXAshWQDDkECLk+QABgCAFAAINWF8IGBCrQDTBdDRBgIAAAKQgFAAgBACQgbBMglA+IAAAKIAAAKQhIA/grBlQkNJnkeJiQgGAVAQgBIAKAAQAAAFgDADQgCACgFAAIAAAKIhLgcgApSFjQHhFRJHDFQA+AWA/ATIh9g6Qi+hai+hcQpVkknxmOQC3DFDjCeg");
	this.shape_13.setTransform(0.05,-37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-208,255.1,416);


(lib.אלומה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(0.0336,0.0161);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259.6,-22.5,519.3,45.1);


(lib.WarpedAsset_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgJOApeQkCAAibghQjDgqiLhsQiZh3hzjfQjVmcgHpeQgEmeBXm0QAwjyCanzQCzpFCEkSQCQkqBJiIQCHj5B/ioQFNm2GLgbQI1glF8G2QClC/CTEqQB7D6CBFvQCUGlA+E8QAQBTAXCVQAVCFAQBHQAkCqAMEEQAMEVgUEiQgxLKjUGZQi3FgoMBkQjDAlkTAIQhLACmCAAQlHAGiaAAIgXAAg");
	this.shape.setTransform(0.0043,0.0039);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.5,-265.4,365.1,530.9);


(lib.WarpedAsset_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgJdAoSQj8gHi7gkQoahmh1liQiNmnAQo9QARpTC2pAQB+mhBQj3QCPm6CTlSQA4iBBkibQB+jACWiaQGVmgG4AAQG2AAE6FRQD9EPDLISQBjEGBUFaQA0DXCEJCQA0DXAcE3QAdFIgIFBQgUMSjeEkQi6D3pzBOQjlAckzAIQiLADlVABIlmgBg");
	this.shape.setTransform(0.0035,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-257.8,365.2,515.7);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(8,8,8,0.929)").s().p("ABjClIhjAAQAAgFgBAAQjRgjhuiBQBrANBiBGQBbBBCjgJQBkgiAdhpIABgKQAFAAAAgBQAMgzgRgcIgBgKIgJgoQAKgFAHgHQADgDAAgFQAbgCAFAWQA5EEkDAnIAAAKIgKAAg");
	this.shape.setTransform(38.6141,106.9915);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AAAA3QgFg3AAg2QAQAmgHA9IAAAKIgEAAg");
	this.shape_1.setTransform(41.125,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#555555").s().p("AB9IDIAAhGQARAcgMAzQAAABgFAAIAAgKgAiBl2QgFhLAAhLQARA6gHBSIAAAKIgFAAg");
	this.shape_2.setTransform(53.0191,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.596)").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_3.setTransform(43.125,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#636363").s().p("AgFA8IAAiBIAJAAIAAAKQAHBMgQA1IAAgKg");
	this.shape_4.setTransform(40.125,-8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(9,9,9,0.98)").s().p("ABDOuQjAimgdlLIABgKQAGg+gRgmIAAgKIAAhaIABgKQAGhSgRg6IAAgKIAAgKQARg1gGhMIgBgKIAAgKIAAgeQBekfCkjUQAcgjAXgkQADiUgphmQgCgFAAgFQBBBBAFB9IAAAKIAAAKIAABQQgfBUg0A/QiUCwhOD3IAAAyIAAAKIgKAAIAABFIAAAKQgnJIEAEqQACADAAAFQgFAAgDgDg");
	this.shape_5.setTransform(57,-8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#575757").s().p("AA3AFIh3AAIAAgJQBAAABAAEIABAFIgKAAg");
	this.shape_6.setTransform(23,-120);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#787878").s().p("AgEA8IAAiBQAQA5gMBRIgEABIAAgKg");
	this.shape_7.setTransform(-33.9896,-14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7D7D7").s().p("AgEAMIAAgKIAAhPIAJAAQgGAvABAYQAFBUgBAAQgCAAgGhCg");
	this.shape_8.setTransform(-40,-16.6975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#404040").s().p("AgEAxQgFgxAAgxQAJAAAIAEQACABAAAFIgKAAIAABPIAAAKIgEgBg");
	this.shape_9.setTransform(-40.5,-20.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.059)").s().p("Ahwg8QgCgEAAgFQBbAFA7AhQAEACAFAAQAYAtAsAbQACACAAAFQhtgbhRAtQgEACgFAAQgIhHgUg7g");
	this.shape_10.setTransform(-54,-7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("AAtBkIh0iXQgDgDAAgFQBMgNA/gaQAFgBAFAAQgZBVAAByg");
	this.shape_11.setTransform(-51,-25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9B9B9B").s().p("AAAAsQgEgsAAgsIAJAAIAABPIAAAKIgFgBg");
	this.shape_12.setTransform(-12,-102);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(254,254,254,0.996)").s().p("ABpR3QhihGhqgNQAAgFgCgCQgUgMgIgVIAFAAQkumOhnpaQBJAAAwBFQAQAXArgCQhhhJg9hrQgCgEAAgFIAFgBQAMhSgRg5IgBgKIgnigQE5iIgrm8IAAgKIAAgKIAAhQIAAgKIAAgUQAXhDBMgSQABAAAAgFQBGAABFgFIABgFIAeAAIAJAAIB4AAIAKAAQDiAhCIB8QADADAFAAQAAAFACACQADADAFAAQAAAFABAEQAqBngDCUQgYAkgbAjQimDUhdEfIAAAeIAAAKIgKAAIAACCIAAAKIAAAKIAAAJQAABLAFBKIAFABIAABaIAAAKQAAA3AFA2IAFABQAdFLDBCmQADADAFAAQAFAUAMAMQADADAAAFQAAAFgDACQgHAIgKAFIAJAoIABAKIAABGIAAAKIgBAJQgdBqhkAjIglAAQiJAAhRg5g");
	this.shape_13.setTransform(16.5101,0.5491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6D6D6D").s().p("AhFgEICBAAIAKAAIgBAEQhFAFhFAAIAAgJg");
	this.shape_14.setTransform(5.5,-119);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(5,5,5,0.973)").s().p("ABLRqQg+gngkg+QjxmZiCoIIgKABQh+AchKAfQghgpAAhPQAAhIhDgHIAAgKIAAgKQCIgfBfA7QAEACAFAAQhShXgghVIgBgIIgFAAQAShIBkgHQA2gEAygYQExiUg8m1QgNheAkhAQAhggAtgWQACgBAAgFQBUAABUgFIABgFIC0AAIAKAAQEEAnBhCZQADADAAAFQgFAAgCgDQiJh7jigiIgBgFQhAgFhBAAIAAAKIgKAAIgeAAIgKAAIiCAAIAAAKQAAAFgBAAQhLASgXBDIAAAUIAAAKIgKAAQAAAtAFAsIAFABIABAKQAqG9k5CHIAnChIABAJIAACBIAAAKQAAAFACAEQA9BsBhBJQgrACgQgXQgwhFhJAAQBnJaEtGOgApkgeQAUA6AIBIQAFAAAEgCQBSgtBtAbQAAgFgCgCQgsgbgYguQgFAAgEgBQg8ghhbgFQAAAFACAEgAlxgyIAFABQAQCMgMifQgBgYAHgvQAAgFgCgBQgIgEgKAAQAAAyAFAxgAmUj4Qg/AahNANQAAAFADADIB1CYIAFAAQAAhzAZhVQgFAAgFABg");
	this.shape_15.setTransform(-4,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-123.5,149,247);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("Ah2UCQoagZkwgiQnXgzlehoQiTgshlg0QjJhoCrg8QNpmTILldQLnnvGMpNQBKhrA1g2QBVhXBSgVQAogLAyAQQApAOBSAsQDTBzCBBfQAcAXAlAjQGgHQC3HAQDXIOhZIeQgjBujLA3QhEAThhAPIiGAUQl0A+nXAHIh5ABQkyAAmogVg");
	this.shape.setTransform(213.8423,130.2344);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,427.7,260.5), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AkJJnQh8gYgggsQgfgsA+gtQFHh4B6g/QECiFBsivQomgPoHg3QhwgSAJgsQAIgmBchEQCgiBCQh5QAugmBEgwIAdgTQAQgIgCAMQgBAIgOAfIgWAuQgLAUgMASQhABYhDBSQCpAmDKAdQCbAWDaAVQBKAFBIAgQBEAeA7AyQBBA4AaAnQAbAogOAbQgzCqi4CPQhmBPjuCAQhxAlhqAKQgfADggAAQhIAAhQgPg");
	this.shape.setTransform(126.9356,106.8527,1.698,1.698);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-0.1,-0.1,254.2,214), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ASfJxQgygIgpgLQnDiSjFhVQluiejYjKQiDCJjHCAQhoBCiCBEQhnA1iPBCQg/AShBAIQhCAKg1gEQgxgEgsgQQgtgRgcgXQgcgWgGgaQgFgZAagVQAegZA4gYQA2gXBJgZIgBAAQCkg8BjgpQCPg6Bvg7QDmh5CNhwQglhhgIgzQgMhSAjhHQAJgOAQgSIAjgjIA7g1IAsglIgCABQAagVALgHQANgJAFAAQAFAAgDALIgIAcQhCCXBtClQBBBlCmCMQA+hpAMhxQAMh7gzhoQgKgZAAgKQABgKAIgBQAJAAAQAJQAQAHAZAQQAWAOAcAVQAcAVAXAVIATARIAMAPQBQCRAOBvQAPB4gyCWQCgBQDEBMQCYA7DXBIIgBgBQA/ATAtAUQArASAYAWQATATACAVQABAWgQASQgRATgfANQghANglABIgFAAQggAAgsgHg");
	this.shape.setTransform(207.2781,93.7759,1.4864,1.4864);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.3,-0.1,415.2,187.79999999999998), null);


(lib.up_leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ABQHWQhVgtgvhqQgjhOgQhtQgOhlAHhpQAQjXBmi3QAFgKAXAKQAXAKgFAIQg3BlgeBsQg3DGAfDIQAQBpAhBLQAoBbBBAiQAUALgIAGQgDADgFAAQgIAAgPgIg");
	this.shape.setTransform(-516.3464,69.4887,1.4081,1.4081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AAdOhQgXgIgBgMQgBgsgHg3IgPhhQgHgpgGg6IgJhiQgLh5gCg5QgEhkAKhPQASh3AHg7QAJhfADhTIAFi2IAEi2IALlqQAAgNAXAIQAXAJAAAMIgNGZIgEC0QgCBugEBGQgEBSgLBgIgNBZQgIA3gCAiQgGBOAGBmIAPC0IADAtIAEArQAFAlAIAuQATB0ACA7QAAAIgIAAQgGAAgIgDg");
	this.shape_1.setTransform(-355.1213,-5.6939,1.408,1.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AA+FBQgZgCgEgPQgehsgGgcQgQhAgJg6QgDgZgDgiIgFg8QgEgngShNQgShLgDgoQgBgSAYACQAZACABAPQACAdAIAlIAOBBQARBLACApQADA6AKA+QAOBUAtCeQAEAPgVAAIgDAAg");
	this.shape_2.setTransform(-522.3523,-83.3494,1.4082,1.4082);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AAOBqQgSgIgFgSQgZhWACheQABgHAKABQAHABAGAEQARAKAAAQQgCBXAZBVQACAIgIACIgEAAQgEAAgEgBg");
	this.shape_3.setTransform(-514.1303,-38.0098,1.4081,1.4081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ArFT1IhfiUIg6igIgPmQICDorIAKh6IgPiiIhlqPIg8lhIOpASINmhIIhXdZIBpKzI35Btg");
	this.shape_4.setTransform(-439.525,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-534,-136.9,186.7,273.70000000000005);


(lib.shoe2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgmB1IgKgJQgIgHABgDQAvhtAah3IAVAOQASAPgBAEQgZBxgwBzIAAAAQgCAAgTgOg");
	this.shape.setTransform(-18.8296,-8.7245,1.408,1.408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AioBaQgMgFgGgIQgGgKAFgLQAGgNAYAFQAWAFgEANIAFgBIAJgCQAUgEAXgGQAogLAqgVQA7gcAxgsQheAXhWA0QgNAIgTgLQgTgLASgKQB3hICSgVQAMgCALAIQANAIgKAKQhNBVhsAsQg3AXg4AJQgQACgNAAQgRAAgMgEg");
	this.shape_1.setTransform(2.5012,-31.5866,1.408,1.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AhhDZQgGgCgEgCQgFgEAGgDQAwgUAagVQAlgfgCgnQgCgXgOgaQgLgRgWgYQgjgmgtgaQgDgCAAgCQAAgCAEgCICFhDQARgIADgKQADgHgGgQIgHgTQgCgKAIgHQAHgGARAAQASAAAGAHQA2BEADBbQADBZgwBJQgEAGgXgBIgGgBQgGAfgfAZQgaAXgzAVQgJADgLAAQgGAAgIgBgAA2h+QgrAXhWAqQAtAaAgAlQAoAsAJAiQAfg8gDhIQgBgrgOgmIgKAHg");
	this.shape_2.setTransform(-24.2692,-43.2237,1.408,1.408);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhxC/QgUgOAMgSQBxisBaisQAKgUAVAPQAUAOgKATQhhC0hqCkQgHAKgJAAQgIAAgJgGg");
	this.shape_3.setTransform(-6.515,-41.0524,1.408,1.408);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AA0C/Qg6gigYgZQgegegQgtQgQgsADgqQADgzAdgrQAcgrAsgYQAIgEAKAAQAKAAAHAGQAHAGAAAHQAAAIgIAEQgxAbgYA0QgZA1AOA2QAOA1AYAeQAOAQAWAPIAoAZQAIAEADAHQADAHgGAHQgGAGgLABIgEABQgIAAgGgEg");
	this.shape_4.setTransform(-176.0743,-21.0264,1.4081,1.4081,29.9987);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AAPFVQAahHAHhPQANiLgviBQgNgjgshcQgnhPgOgzQgEgRAXgIQAXgJAFASQAJAjATApIAiBJQBICSAKB5QAMCPgxCJQgGARgWAAQgXgBAIgVg");
	this.shape_5.setTransform(167.9531,11.7474,1.4083,1.4083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("ABUDWQgzgJh/gmQh4gkjCiBQjGiChtgjQgggKAGgbQAHgaAaAHQBLAVCsByQC5B6A0AVQCqBSBFAUQBsAgCUgpQCfgtBRgtQCAhHAohwQAJgYAfABQAgAAgLAdQgwCGifBXQhiA3ivAwQgsAMgzAAQgnAAgqgHg");
	this.shape_6.setTransform(-78.9236,-18.7372);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("Ak2FNQh1gBofj8QllilmCjGQgPgIAEgXQAEgXASAGQBIAaDUBnQELCECQBFQIrEKCKgBQDmgCCcgKQDjgQCigFQERgLFXgQIHSgaIBRgFIAigDQATgDAMgIQANgKAQAgQAQAfgPAKQgOAKgWADIgmADIkDAPQh4AHjmALQm4AbjqANQl9AWjzAAIgwAAg");
	this.shape_7.setTransform(-3.6068,41.4984);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("Ag/DtQhWgDhTgZQiZgsiChyQh3hnhViUQgSgfAIgEQAIgFARAfQBbCcCRBlQCQBlCtAWQC0AVCahJICThSQBZgwBEgIQBJgJA5AXQBAAYAoBFQAEAFAEAMQAGAPgEADQgFADgKgNQgHgJgDgHQgLgTgmgTQgfgOgpgFQhMgIhWAmQghAPgtAZIhMAsQhTAvhPATQhIARhLAAIgXAAg");
	this.shape_8.setTransform(84.5851,-45.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-73.9,371.7,148.7);


(lib.shoe_fill_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5YCBQhFgvgvgfQgQgPghhGQgyhrAWhWQAShKBEgxQA8grBPgMQBNgLA2AXQC2CBDfBuQG/DaDKhfQCshSAxghQBuhLAlhsICflZIA2gMQBDB2BhBcQBlBeB3A0QB9A1CGADQCKACB4g1QAhgPBhg3QBPguA1gRQBLgYBJAQQBQASAiA9IAyAyQATBFAgBKIA+CKQA8CXACClQADClg3CZIhwARQoIAhn1AjQlcAUqJADg");
	this.shape.setTransform(-3.9428,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.4,-68.4,364.9,137.3);


(lib.shoe_fill_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6jJkQgwg9gZhjQgYhZAYhKQAZhQBLgnQDNgZD6goQH2hODlhBQCagtBbg5QB8hMAnhvICflaIA1gLQBEB2BgBbQBlBfB4A0QB8A1CGADQCLACB4g1QAggPBhg4QBQgtA1gRQBLgYBIAQQBQARAjA9IAyAzQATBFAgBKIA9CKQA9CWACCmQADClg4CZIhwARQ4MBi4kgMIg8ABIgEABQhNAAg6hJg");
	this.shape.setTransform(0.0202,0.0026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-68.4,357,136.9);


(lib.shoe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgmB1IgKgJQgIgHABgDQAvhtAah3IAVAOQASAPgBAEQgZBxgwBzIAAAAQgCAAgTgOg");
	this.shape.setTransform(-18.8226,-8.6863,1.4081,1.4081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AioBaQgMgFgGgIQgGgKAFgLQAGgNAYAFQAWAFgEANIAFgBIAJgCQAUgEAXgGQAogLAqgVQA7gcAxgsQheAXhWA0QgNAIgTgLQgTgLASgKQB3hICSgVQAMgCALAIQANAIgKAKQhNBVhsAsQg3AXg4AJQgQACgNAAQgRAAgMgEg");
	this.shape_1.setTransform(2.5092,-31.5493,1.4081,1.4081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AhhDZQgGgCgEgCQgFgEAGgDQAwgUAagVQAlgfgCgnQgCgXgOgaQgLgRgWgYQgjgmgtgaQgDgCAAgCQAAgCAEgCICFhDQARgIADgKQADgHgGgQIgHgTQgCgKAIgHQAHgGARAAQASAAAGAHQA2BEADBbQADBZgwBJQgEAGgXgBIgGgBQgGAfgfAZQgaAXgzAVQgJADgLAAQgGAAgIgBgAA2h+QgrAXhWAqQAtAaAgAlQAoAsAJAiQAfg8gDhIQgBgrgOgmIgKAHg");
	this.shape_2.setTransform(-24.2624,-43.1869,1.4081,1.4081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhxC/QgUgOAMgSQBxisBaisQAKgUAVAPQAUAOgKATQhhC0hqCkQgHAKgJAAQgIAAgJgGg");
	this.shape_3.setTransform(-6.5074,-41.0155,1.4081,1.4081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AA0C/Qg6gigYgZQgegegQgtQgQgsADgqQADgzAdgrQAcgrAsgYQAIgEAKAAQAKAAAHAGQAHAGAAAHQAAAIgIAEQgxAbgYA0QgZA1AOA2QAOA1AYAeQAOAQAWAPIAoAZQAIAEADAHQADAHgGAHQgGAGgLABIgEABQgIAAgGgEg");
	this.shape_4.setTransform(-168.9812,43.5893,1.4081,1.4081);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AAPFVQAahHAHhPQANiLgviBQgNgjgshcQgnhPgOgzQgEgRAXgIQAXgJAFASQAJAjATApIAiBJQBICSAKB5QAMCPgxCJQgGARgWAAQgXgBAIgVg");
	this.shape_5.setTransform(167.9531,11.7474,1.4083,1.4083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("Ao3CoQAFgTATgBQCPgGCNgSQD8ghDwhEQBxgfA6ggQBbgzAchPQAHgRAWAAQAWAAgHAVQgjBghwA+QhGAmh8AiQh3AhiHAcQkCAzkGALIgCABQgVAAAEgUg");
	this.shape_6.setTransform(-84.7303,-6.8628,1.4083,1.4083);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("AxcA6QgNAAgIgXQgIgXANAAQD3ADD3gDQGwgDHAgPQDDgHDzgMIFLgSIA5gEIAYgCQAOgCAIgGQAKgHALAXQALAWgKAHQgKAHgQACIgbACIi4AKIj4ANQnBAWmwAJQktAGk1AAIkUgBg");
	this.shape_7.setTransform(8.3157,65.4893,1.4083,1.4083);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1B").s().p("Ag/DtQhWgDhTgZQiZgsiChyQh3hnhViUQgSgfAIgEQAIgFARAfQBbCcCRBlQCQBlCtAWQC0AVCahJICThSQBZgwBEgIQBJgJA5AXQBAAYAoBFQAEAFAEAMQAGAPgEADQgFADgKgNQgHgJgDgHQgLgTgmgTQgfgOgpgFQhMgIhWAmQghAPgtAZIhMAsQhTAvhPATQhIARhLAAIgXAAg");
	this.shape_8.setTransform(84.5851,-45.709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.7,-73.9,363.4,147.8);


(lib.pants1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AtxA3QgEAAgGgIIgGgLIgMgXQDLAaDBAIQFdAPFhgjQFbghFbhWQADgBAGAJIAHALQANAWgCAAQjDAxjCAfQlaA4liAHIhgABQkwAAkugmg");
	this.shape.setTransform(-8.234,70.6782,1.4082,1.4082);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABULCQhWhPgaiVQgJg0gEhFIgFh6QgFhwgajAQgjjxgHhEQgRivAMiIQABgLAYgGQAXgFgBAMQgNCVAXDHQAMBlAeDKQAVCXAFCQQAGCmAOBEQAcCEBPBHQAJAIgWALQgNAGgJAAQgFAAgEgDg");
	this.shape_1.setTransform(131.1884,-23.4277,1.4082,1.4082);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AgvMIIAz37QABgKAWgJQAWgKgBAJIgzX7QgBAKgWAJQgLAFgFAAQgFAAAAgEg");
	this.shape_2.setTransform(-142.7271,-4.0845,1.4083,1.4083);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AjRBuQlLgFngg1QgJAAgHgJQgGgIABgJQABgKAJgEQAHgDAKABQDrAaDVAPQHBAfFegcQGngjFhh/QAUgIAKAVQALAVgWAIQjPBKjkArQlEA8mBAAIhdgBg");
	this.shape_3.setTransform(-0.9113,107.5688,1.4082,1.4082);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-123.2,299,246.4);


(lib.pants_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3RSZIgVhTIA77JQADhGAEjtIAIkzMAoJAA3QgWD4AwGdIAqFPQAXDCAHCFQANEiAPBQQAmDNB2BpIBgBrIiFBkQpnDiseAWQhQAChWAAQoQAAr4hRg");
	this.shape.setTransform(0,-0.0163);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.1,-125.8,302.2,251.6);


(lib.low_leg_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoRazIiaifIA3g8IAAjDIhGyTIiX92IZsgoIA3EYIgsL5Ii5S0IgrSPIgCAiIi/gaIiNB0Il+Bpg");
	this.shape.setTransform(3.025,-5.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-188,170.1,364.2);


(lib.low_leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("AgZAmQgEgCABgEIABgEQAMgdgGgfQAAgEAIgDQAHgCAJAAQAKgBAIADQAHACAAAEQAFAigOAjIgGADIgFACQgGABgMAAQgLgBgEgDg");
	this.shape.setTransform(40.2995,36.0626,1.4081,1.4081);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgPAoQgIgGgBgGIAAg6QAAgEACgEIAEgDQAEgEAMAAQAIAAAKAGQAIAGABAGIAAA6QAAAEgDAEIgDAEQgFADgLAAQgJAAgJgGg");
	this.shape_1.setTransform(-9.1691,33.0879,1.4081,1.4081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AABAuQgKgFgFgEQgGgDABgCQAGgogLgmIgCgFQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABABQAFAAAJAEIAQAJQAKAGAAABQAOAqgHArIgCABQgEAAgSgIg");
	this.shape_2.setTransform(-41.7213,30.1074,1.4081,1.4081);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhsAxQi6gcikhNQgCgBAIgCIALgCIAPgBQAKAAAGACQBXAqBYAZQCgAwCkAAQCmAACegvQANgEAVABIAJACQAHABgGACQhiAdhmANQhXALhWAAQhgAAhggOg");
	this.shape_3.setTransform(-3.5718,45.0073,1.4081,1.4081);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AhxBGQjKgUiuhaQgHgEAAgHQABgHAGgGQAGgHAKgCQAKgCAIAEQBdAxBmAaQC0AxC7gSQC+gTCjhVQAJgEAIgBQALgCAFAHQAGAGgEAIQgDAIgHADQhlAzhrAeQiKAniPAAQg2AAg3gGg");
	this.shape_4.setTransform(1.2039,11.1703,1.4081,1.4081);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1B").s().p("AggDfQAEgsACgtQANjWgCiMQAAgSAXgCQAZgCAAAUIAABZQgFDNgMCUQgCATgXACIgFAAQgUAAACgSg");
	this.shape_5.setTransform(81.0271,-103.4608,1.4081,1.4081);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1B").s().p("AhKMmQgUgMABgKQAOi2AGh0IAGiPQAChgADgwQAJiZAWi4IAslQQAcjPANiAQABgJAUANQAUANgBAKQgNB+giD7QgfDlgNBrQgUC7gHCWIgECMIgGCMQgGBtgNCZQAAAEgEAAQgFAAgMgIg");
	this.shape_6.setTransform(68.0859,53.2257,1.4081,1.4081);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1B").s().p("ABGSlQgYgDABgKIADgpQAEhVgHhxIgRjGQgKh7gBg+QgDiVgGhcQgKi6gkk3Igcj4QgPiNgJhrQgVkUANjhQABgKAZADQAZADgBAKIgDA+QgJDcAZEZQAJBqAQCOIAcD4QAiEyAJC/QACAlACBKIADBvQADA/ALCCQANCXACAqQAGBugJBTQAAAIgOAAIgMgBg");
	this.shape_7.setTransform(-71.4455,-0.4525,1.4083,1.4083);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.8,-167.9,171.5,335.70000000000005);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1B").s().p("ABBUFIhjAAQjBgQigguQq6jKizrMIAAgKIAAi+QCarkHdmfQDPi1FMg1IDRAAIAKAAQLgCfECJ/QBsEOAmFVIAABkIAAAKQgZDDhDCVQkWJss0BMIAAAKIgKAAgAmZmKIAFAAIAAB4IAAAKIAAB4IAAAKIAABuIAAAKQAABAAFBAIAFABIAAB4IAAAKIAABuIAAAKQAABLAFBLIAFAAQAaCVCEAtQACABAAAFICCAAIAKAAQGckaFElyQAXgbgFgxQgYjAiZhMQgpgUgoghQj5jLkVixIAAgFQgygFgyAAIAAAKQgFAAgEABQiFAlgwB6IAAAeIAAAKIgKAAQAAA8AFA8gAhyH5IgKAAQgdgPgggNQgEgCgFAAQgSgXgQgYQgBgDgFAAQgch5AHifIABgKIAAgKIAAhkIAAgKQAIg+gSglIAAgKIAAkiQARgcALghQACgEAAgFQC4h6CUCfQAyA2A/AmQDABxCECoIAABFIAAAKQj/D+kuDSQgCABAAAFIgtAAIgtAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747575").s().p("AAABLQgEhLAAhKIAJAAIAACLIAAAKIgFAAg");
	this.shape_1.setTransform(-39,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFC0C0").s().p("AgFA8IAAgKIAAhtQAQAqgHBDIAAAKIgJAAg");
	this.shape_2.setTransform(-38.8851,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E7F7F").s().p("AgFA3IAAgKIAAhjQAQAlgHA+IAAAKIgJAAg");
	this.shape_3.setTransform(-25.875,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414141").s().p("AAABAQgEhAAAhAIAJAAIAAB3IAAAKIgFgBg");
	this.shape_4.setTransform(-40,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808181").s().p("AgEA8IAAgKIAAhtIAJAAIAABtIAAAKIgJAAg");
	this.shape_5.setTransform(-40,-7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBEBE").s().p("ABGDHQgFg2AAg3IAKAAIAABkIAAAKIgFgBgAhKhFIAAgKIAAh4QARAwgGBIIgBAKIgKAAg");
	this.shape_6.setTransform(-33.0125,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414242").s().p("AAAA8QgEg8AAg7IAJAAIAABtIAAAKIgFAAg");
	this.shape_7.setTransform(-41.0021,-45.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9E9E9E").s().p("AAoAFIhZAAIAAgJQAxAAAyAEIAAAFIgKAAg");
	this.shape_8.setTransform(-16.5,-72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBFBFB").s().p("AjjLLIiCAAQAAgFgBgBQiFgtgaiVIAAgKIAAiMIABgKQAGhEgRgqIAAgKIAAh4IAAgKIAAh3IAAgKIAAhuIABgKQAGhIgRgwIAAgKIAAh4IAAgKIAAhuIAAgKIAAgeQAwh6CFglQAEgBAFAAIBaAAIAKAAQEVCxD6DLQAoAhApAUQCYBMAYDAQAGAxgYAbQlEFymcEaIgKAAgAlvnGQAAAFgBAEQgMAhgRAcIAAEiIAAAKIAABjIAAAKQAAA3AFA2IAFABIAAAKQgICfAcB5QAFAAACADQAQAYARAXQAFAAAEACQAgANAdAPIAKAAIBaAAQAAgFADgBQEtjSD/j+IAAgKIAAhFQiEioi/hxQg/gmgyg2QhUhahgAAQhJAAhQA1g");
	this.shape_9.setTransform(13.2725,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABBUFIhjAAQjBgQigguQq6jKizrMIAAgKIAAi+QCarkHdmfQDPi1FMg1IDRAAIAKAAQLgCfECJ/QBsEOAmFVIAABkIAAAKQgZDDhDCVQkWJss0BMIAAAKIgKAAgAmZmKIAFAAIAAB4IAAAKIAAB4IAAAKIAABuIAAAKQAABAAFBAIAFABIAAB4IAAAKIAABuIAAAKQAABLAFBLIAFAAQAaCVCEAtQACABAAAFICCAAIAKAAQGckaFElyQAXgbgFgxQgYjAiZhMQgpgUgoghQj5jLkVixIAAgFQgygFgyAAIAAAKQgFAAgEABQiFAlgwB6IAAAeIAAAKIgKAAQAAA8AFA8gAhyH5IgKAAQgdgPgggNQgEgCgFAAQgSgXgQgYQgBgDgFAAQgch5AHifIABgKIAAgKIAAhkIAAgKQAIg+gSglIAAgKIAAkiQARgcALghQACgEAAgFQC4h6CUCfQAyA2A/AmQDABxCECoIAABFIAAAKQj/D+kuDSQgCABAAAFIgtAAIgtAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABBUFIhjAAQjBgQigguQq6jKizrMIAAgKIAAi+QCarkHdmfQDPi1FMg1IDRAAIAKAAQLgCfECJ/QBsEOAmFVIAABkIAAAKQgZDDhDCVQkWJss0BMIAAAKIgKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.5,-128.5,253,257);


(lib.mainheadline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlAI3QiUgYhDhKQgogsgeh4Qgeh7gDiNQgDicAhh+QAniPBRhMQA9g4CLghQCLggCfAFQCsAGCIAvQCaA2BLBiQBYCkAEDKQAFDZhmBvQhTBZibBCQiTA+ipAYQhaANhRAAQhJAAhAgKg");
	this.shape.setTransform(314.6451,104.9617);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AmgLgQi/gghXhfQg1g5gmicQgnifgEi3QgEjLArijQAyi7BphiQBPhJC1gqQC1gqDOAHQDfAHCxA+QDHBGBiB/QBxDVAGEGQAHEaiFCQQhrB0jKBVQi/BQjaAgQh1AQhoAAQhfAAhVgNg");
	this.shape_1.setTransform(314.6231,104.9453);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1B").s().p("AiMIxQgkgxAGg7IBfunQAMh1BYgKQA6gIAoAqQApAoAHA9QABAKgBARIhYOOQgFA9gfApQglAug3AAQg8gBgjgxg");
	this.shape_2.setTransform(207.1571,104.1176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1B").s().p("AhUM/Qg6gXgXg9QgXg7BLhcQANgRAXgYQAxgyBahVQB/h2AvhBQBIhkgdhHQg7iSmBgbQjBgNi2AQQh0gNgng6Qgng6ANhcIAMlqQABhKA4gzQAWgSAZgJQArgMAtARQAqASAaAkQAYAdAJAiQAJAdgEAYQgQAwgMA1QgYBqAXAeQBhB8HLATQDmAJDTgQQCiASAGCRQAGCPhCBFIobKtQg9A1gwAQQgTAHgVAAQgeAAgfgOg");
	this.shape_3.setTransform(111.7782,84.5213);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1B").s().p("AiMIxQgkgxAGg7IBfunQAMh1BYgKQA6gIApAqQAoAoAIA9QABAKgBARIhYOOQgGA9gfApQgkAug4AAQg7gBgkgxg");
	this.shape_4.setTransform(17.2321,104.1176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainheadline, new cjs.Rectangle(0,0,397.6,179.9), null);


(lib.again = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPVpIiqAAQi8gMiGhAQpikfhisdIAAgKIAAhQIAAgKIAAh4IAAgJIAAhQQCprWKHj9QB8gwBuAbQAXA3gWA3QgBAFAAAFQqCDRhhLvIgBAJIgKAAQAABGAFBGIAFAAQBJMtLXCcIAKABQA/ARBWgMIABgFQL6iEDEqzQAVhJAAhUQAFAAABgBQAMgzgSgcIgBgKQg9ppnojAQgFAAgDADQh9BogHDfQhOiOhYiLQhSiEgpixQEBjOE5iYQAEgCAFAAQg5BjgDCXIAAAKQC+CSC3CZQFHEUBGIXIAADRIAAAKQgjFPiWDbQltITsfBfIgKAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB4f4IipAAQjQgGisgrQoGiAl5kLQoLl0iireIAAgKIAAkOQCWroFFozQFKo8J7kDQDPhUEHgbIEhAAIAKAAQL+CBGVHsQDKD2CXEtQDNGZBHIeQAAAtAFAtIAFAAIAADmIAAAKQgoEdhnDfQioFtkXECQnOGvs8BEIgKAAgA0JCCIAAAKQAAAtAFAsIAFABQBiMdJiEfQCGBAC8AMQBNARBngMIAAgFQMfhfFtoTQCWjbAjlPIAFgBQANh5gShhQhGoXlHkUQi3iZi+iSIAAgKQADiXA5hjQgFAAgEACQk5CYkBDOQApCxBSCEQBYCLBOCOQAHjfB9hoQADgDAFAAQHoDAA9JpIABAKIAABGIAAAKQAABUgVBJQjEKzr6CEIgKAAIiMAAIgKgBQrXichJstIAAgKIAAiCIABgKQBhruKCjRQAAgFABgFQAWg3gXg3Qhugbh8AwQqHD9ipLWIAABPIAAAKIgKAAIAAB4g");
	this.shape_1.setTransform(0,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F6060").s().p("AhZgEICpAAIAKAAIAAAEQgrAFgmAAQg1AAgtgJg");
	this.shape_2.setTransform(-16,139.0104);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#919292").s().p("AhKgEICLAAIAKAAIgBAEQgkAFggAAQgsAAgkgJg");
	this.shape_3.setTransform(-8.5,112.0104);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6F7070").s().p("AAABGQgEhGAAhFIAJAAIAACBIAAAKIgFAAg");
	this.shape_4.setTransform(-97.5,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808181").s().p("AgEAeIAAhFQAQAcgMAyQAAABgEAAIAAgKg");
	this.shape_5.setTransform(97.5066,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#909191").s().p("AgEBkIAAjRQAQBigMB4IgEABIAAgKg");
	this.shape_6.setTransform(128.5104,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AB4f4IipAAQjQgGisgrQoGiAl5kLQoLl0iireIAAgKIAAkOQCWroFFozQFKo8J7kDQDPhUEHgbIEhAAIAKAAQL+CBGVHsQDKD2CXEtQDNGZBHIeQAAAtAFAtIAFAAIAADmIAAAKQgoEdhnDfQioFtkXECQnOGvs8BEIgKAAgA0JCCIAAAKQAAAtAFAsIAFABQBiMdJiEfQCGBAC8AMQBNARBngMIAAgFQMfhfFtoTQCWjbAjlPIAFgBQANh5gShhQhGoXlHkUQi3iZi+iSIAAgKQADiXA5hjQgFAAgEACQk5CYkBDOQApCxBSCEQBYCLBOCOQAHjfB9hoQADgDAFAAQHoDAA9JpIABAKIAABGIAAAKQAABUgVBJQjEKzr6CEIgKAAIiMAAIgKgBQrXichJstIAAgKIAAiCIABgKQBhruKCjRQAAgFABgFQAWg3gXg3Qhugbh8AwQqHD9ipLWIAABPIAAAKIgKAAIAAB4g");
	this.shape_7.setTransform(0,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C9C9C").s().p("AAAAsQgEgsAAgsIAJAAIAABPIAAAKIgFgBg");
	this.shape_8.setTransform(-128.5,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#626363").s().p("AgEBBIAAgKIAAh3IAJAAIAAB3IAAAKIgJAAg");
	this.shape_9.setTransform(-128.5,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#040505").s().p("AhPVpIiqAAQi8gMiGhAQpikfhisdIAAgKIAAhQIAAgKIAAh4IAAgJIAAhQQCprWKHj9QB8gwBuAbQAXA3gWA3QgBAFAAAFQqCDRhhLvIgBAJIgKAAQAABGAFBGIAFAAQBJMtLXCcIAKABQA/ARBWgMIABgFQL6iEDEqzQAVhJAAhUQAFAAABgBQAMgzgSgcIgBgKQg9ppnojAQgFAAgDADQh9BogHDfQhOiOhYiLQhSiEgpixQEBjOE5iYQAEgCAFAAQg5BjgDCXIAAAKQC+CSC3CZQFHEUBGIXIAADRIAAAKQgjFPiWDbQltITsfBfIgKAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.004)").ss(1,1,1).p("AV+ouQAAB0hpBSQhnBSiUAAQiTAAhphSQhohSAAh0QAAh0BohSQBphRCTAAQCUAABnBRQBpBSAAB0gAEJIaQAAB9h4BXQh3BYipAAQiqAAh3hYQh4hXAAh9QAAh8B4hYQB3hYCqAAQCpAAB3BYQB4BYAAB8gAscn+QAAB+hZBZQhaBah+AAQh+AAhZhaQhZhZAAh+QAAh+BZhZQBZhZB+AAQB+AABaBZQBZBZAAB+g");
	this.shape_11.setTransform(0.05,62.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AB4f4IipAAQjQgGisgrQoGiAl5kLQoLl0iireIAAgKIAAkOQCWroFFozQFKo8J7kDQDPhUEHgbIEhAAIAKAAQL+CBGVHsQDKD2CXEtQDNGZBHIeQAAAtAFAtIAFAAIAADmIAAAKQgoEdhnDfQioFtkXECQnOGvs8BEIgKAAgAooSSQAAB9B4BXQB4BYCqAAQCoAAB4hYQB4hXgBh9QABh8h4hZQh4hXioAAQiqAAh4BXQh4BZAAB8IAAAAgA19B5QABB+BYBZQBaBZB+AAQB+AABZhZQBZhZAAh+QAAh9hZhaQhZhYh+AAQh+AAhaBYQhYBagBB9IAAAAgAK3BJQAAB0BnBRQBpBSCTAAQCUAABohSQBohRABh0QgBhzhohSQhohRiUgBQiTABhpBRQhnBSAABzIAAAAgAmwVmQh4hXAAh9QAAh8B4hZQB4hXCqAAQCoAAB4BXQB4BZgBB8QABB9h4BXQh4BYioAAQiqAAh4hYgAEJSSIAAAAgA0kFQQhYhZgBh+QABh9BYhaQBahYB+AAQB+AABZBYQBZBaAAB9QAAB+hZBZQhZBZh+AAQh+AAhahZgAMeEOQhnhRAAh0QAAhzBnhSQBphRCTgBQCUABBoBRQBoBSABBzQgBB0hoBRQhoBSiUAAQiTAAhphSgAscB5IAAAAgAV/BJIAAAAg");
	this.shape_12.setTransform(0,-0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(126,126,126,0.502)").s().p("ABQAFIipAAIAAgJICpAAIAKAAIAAAJIgKAAg");
	this.shape_13.setTransform(4,204);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(133,133,133,0.529)").s().p("AAAAtQgEgtAAgsIAJAAIAABPIAAAKIgFAAg");
	this.shape_14.setTransform(200.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201,-204.5,402,409);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shoe_fill_3("synched",0);
	this.instance.setTransform(197.25,141.75,1,1,-26.845,0,0,0,0.1);

	this.instance_1 = new lib.shoe_fill_3("synched",0);
	this.instance_1.setTransform(197.85,141.75,1,1,-26.845,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(20.8,34.2,357.8,194.39999999999998), null);


(lib.נעלמתכוכפת = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.shoe2("synched",0);
	this.instance.setTransform(1239.25,497.25,1,1,-26.8446,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-9.6,regY:0.4,rotation:-26.8448,x:1230.6,y:501.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0.2,regY:0.1,rotation:-26.8446,x:1239.25,y:497.25},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(1236.25,500.4,1,1,0,0,0,194.1,143.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1042.2,356.8,388.0999999999999,287.3);


(lib.low_leg_full = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.low_leg("synched",0);
	this.instance.setTransform(-0.65,-12.75);

	this.instance_1 = new lib.low_leg_fill("synched",0);
	this.instance_1.setTransform(-1.6,5.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.4,-182,172.9,364.1);


(lib.hip_fullcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pants1("synched",0);
	this.instance.setTransform(-3.7,2.95);

	this.instance_1 = new lib.pants_fill("synched",0);
	this.instance_1.setTransform(2.1,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.2,-126.1,306.4,252.3);


(lib.hip_full = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pants1("synched",0);
	this.instance.setTransform(-3.7,2.95);

	this.instance_1 = new lib.pants_fill("synched",0);
	this.instance_1.setTransform(2.1,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.2,-126.1,306.4,252.3);


(lib.show_full = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shoe("synched",0);
	this.instance.setTransform(0.05,0);

	this.instance_1 = new lib.shoe_fill_2("synched",0);
	this.instance_1.setTransform(-0.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.7,-73.9,363.5,147.8);


(lib.PuppetShape_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EAXnBRTQkKhdoYkXQvEn2yxwWQl5lIotoKQpypKikiTQjejGhNpKQhLo2BaqoQBfrQD1ojQEUpnGRjlQGLjjOapMQPop/HqkjQNUn3JckDQLjk9HaAAQKBAAlrIiQkgGxvBM2QliEvn+GbItNKlQnQFzjlDDQkzEGhmB8QljGyiDFqQiLF/C3CKQB6BdGsFrQJGHxFlEwQWnTPNfKfQHbFxDtF+QDUFXgPEgQgOEQjNCKQjRCNlJg0Qlgg3jnAcQhCAIheAVQhcAVgqAEQgaADgcAAQiEAAi2g/g");
	this.shape.setTransform(-339.4581,-314.8616);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-690.8,-841.4,873.4,1106.9);


(lib.PuppetShape_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EggLBRMQjXhAgxiWQgPgxhmADQhSACigAnIkyBQQjBAzhzATQlQA7gniHQgyiuGWoBQGVoBKtpyQIXnpMNpxQBVhFSaucQKcoLEPj6QCgiUASjlQASjbhvkMQhtkGjakTQjbkVkrj6Qlokik/kKQpmn+nPmzQ2a1CANpTQAHk3IaCQQHMB7MlG5QKsF3MWIMQLDHUHTFvQG6FbDZDHQGaF5EIF/QLPQUj/TgQhzIyoRLWQnFJtrCKjQpeJEqDHhQpOG7lDCPQkQB4lABQQlEBRkfASQhNAFhGAAQjRAAiSgrg");
	this.shape.setTransform(291.0775,-329.1084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-853,841.5,1110.9);


(lib.PuppetShape_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EAWoA68QjGgUk5hjQpqjDspn2QqVmZnbmUQiGhyjzknQkJlDj0lnQkdmlirleQjJmbgSkJQgTkehgooQhvqEgcjuQg5noAqlFQA0mODOjpQEYk9FYCRQEWB2FpHCQCICqCzD/IE0HAQF3IiDMDJQC2C1C7DaQBWBkDOD+QCfDEBWBcQB9CFBqBFQFODYNZL/QLqKcLkLPQEYEQBSEzQBKEVhiD6QhdDujYCMQjdCPkQgNQksgOjoAfQiDARi/ApQhoAThlAAQg3AAg3gGg");
	this.shape.setTransform(-287.7196,-127.2018);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EAUyA9rQjQgZlXhyQqWjctmo5QpomSpYnrQiQh2jxlQQj/ljjhmaQkBnViFmHQianGAokcQAlkAAzp3QAxpbAwk1QBMnpCGk2QCilzEMivQFpjrEaDmQDiC4DRIMQBNC/BfEjQBsFOA1CgQC/JFCRDaQByCrCPDuIDUFhQBuCxBUBoQBmB9BkBCUAH/AFKAjmAf/QE0EVBnE8QBdEchYEAQhTD1jYCKQjfCOkZgaQk4gdjlAZQhPAJhcASIiOAdQhgARhfAAQg/AAg/gIg");
	this.shape_1.setTransform(-282.129,-151.5771);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EAU3BAYQjWgjlyiEQq9j5ulqDQoVlusApsQibh8jol9QjxmKjEnPQjcoKhUmuQhgnzBqkkQA8ilDzrpQC/pHCNlOQDJnfDakfQEClUE3h2QGgidDKE3QCgD4AsJQQAQDUAFFCQAEFpAECqQANJiBRDbQBlEWAvB+QBRDVA9CEQCdFRC2BzQEVCxO/MhQGvFnT0Q5QFOEeB+FDQByEkhLEGQhID5jXCKQjeCPkmgfQlFgijoAVQiDAMi1AkQhJALhLAAQhVAAhZgOg");
	this.shape_2.setTransform(-290.4112,-175.4478);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EAU6BDCQjegtmPibQrkkfverNQlcj7mllQQjqi7l9k3QiniHjXmoQjamwicoCQiuo6gcnQQghoWCqkkQClkbFbpvQE+oxDrlYQE9nQEikLQFUk5FOhJQG/hiBrF5QBWEqh7KHQgtDphTFVQhhF/grCyQicJ7AVDUQAtHQBYENQBpFDC8B1QEICnP6NAIcWXYQFoEpCTFMQCFEsg/EKQg7D9jWCLQjcCOkughQlMgljrAVQiDALi0AiQg3AHg5AAQhoAAhygYg");
	this.shape_3.setTransform(-297.3057,-198.2684);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EAVEBFzQjng3msizQsPlIwRsWQlbkInLl7IqRofQiziSjAnSQjAnUhtoxQh4pmAenqQAioyDlkYQHKpDD2k1QG8otE5lTQGqnMFjj9QGikpFlgoQHdg2AJGsQAHFUkoKzQhrD7isFkQjFGQhZC5QlAKSgbDMQg6GzA1EjQA6FDC+B3QD7CdQ4NuQUsQ8JYHjQGBE2CnFVQCXE0g0EPQgxEAjUCMQjZCPk1glQlRgpjsAWQiDAMiyAgQgrAFguAAQh0AAiEggg");
	this.shape_4.setTransform(-304.0185,-221.4499);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EAVTBIoQjwhCnIjNQs8l0w9tdQlfkWnpmkQphoMhUhFQi/ifiin3Qihnyg6pXQg/qIBZn+QBlpDEYkJQCHiALirbQI8o3F1lHQISnQGfj3QHtkmF+gUQIBgchYHVQhFFznRLZQiqELkDFyImtJiQjrFPh0C3QiaDygpB4QiPGmAKE1QAKFLC+B6QDpCVR2OlQZIUgGjFMQGZFEC6FgQCnE8gqETQgnEFjSCLQjXCOk7goQlVgsjsAWQhHAHhgARQhlASgmAEQgkAEgmAAQh7AAiUgpg");
	this.shape_5.setTransform(-310.7554,-244.8318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EAV4BLgQj5hLnjjmQtomexmudQlikjoHnLQpJoGiPh5QjKiriIoXQiEoNgIp2QgJqnCPoMQCipTFGj8QD7jCMNqFQLCpIGnk8QJ7naHej4QI9kpGagJQIogLi2HzQiRGLp5L7QjoEZlXGAIo6J4Qk5FbibC6QjOD3g+B5QjaGlgjFEQgmFaC8B+QDQCLS5PmQXFTDKIH8QGwFTDLFqQC3FFggEXQgfEJjQCLQjVCOlAgsQlZgwjqAYQhFAHhgASQhhATgoAEQgfADgiAAQh/AAihgwg");
	this.shape_6.setTransform(-319.2851,-268.1717);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EAWpBOYQkBhUn+j+QuVnJyLvbQlqkzodntQpTodiliQQjUi4hqoxQhooiAoqRQArq9DCoYQDcpeFsjxQFIjXNSpjQNNpfHSkyQLlnoIej9QKPkxG5gDQJTgEkTIMQjZGgseMaQklEkmrGOIrFKOQmEFojAC+QkBD+hSB5QkgGqhTFWQhXFsC6CDQCDBdGbFUQCdCCLzJ5QWpS8MDJZQHFFiDdF0QDFFOgXEcQgWEMjPCLQjTCNlEgwQlcg0jpAaQhEAIhfATQheAUgpAEQgcADgfAAQiCAAisg4g");
	this.shape_7.setTransform(-328.7806,-291.4756);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-674.3,-798.7,856.9,1064.2);


(lib.PuppetShape_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgYjA6wQpcgXi9i0QghgfhmgCQhPgBiZASIkYAhQioARhuAAQkwgCg4iMQhHixEtmeQI1sNUFuoQHSlTJHl4QEqjAJGlmQFSjRENnAQD7mgBUmxQAIgsAKh4IAVj9QAil7A5kQQC7twHzigQHyifGyNWQE2JhDoPyQCJJSh+JoQieMLo6LpQj6FGnvGmQnFGCoqF7QoZFvnIDxQnbD7jlAcQm0A2l3AAQhfAAhbgEg");
	this.shape.setTransform(267.9773,-151.2258);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgYKA9wQpngMi3jEQgfghhngCQhPgBiZATIkaAkQiqAUhuACQkxADgziKQhCivE7mlQJSsaU2vMQHklhJUmDQFOjYIulZQFXjVDEm3QC8mlggmvQgDgsgVh+IgskJQg+mOgMkrQglvDHAkSQDuiREkCuQD+CXEdGCQDzFHD2HWQDOGICsGiQD7JkgkKJQgvNXolM0QjyFpn9HQQnKGhpEGiQomGMnkEOQntEVjxAqQnqBVm6AAIhhgBg");
	this.shape_1.setTransform(269.4866,-174.2682);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgX2BAsQpxgDirjTQgdgjhngBQhQgBiaAVQhZAMjEAeQitAZhvAEQk0ALgxiKQg/iuFKmwQJrssVqv3QHvlrJpmWQEVi3JzmOQCshsB7iuQB2imA+jQQA9jOgBjcQgCjghBjUQgXhMiQl2QiYmchQlFQj/wHGCluQDLjBFHCYQEbCDFrF/QEzFEFNHWQEZGMDpGSQFmJqA2KYQBKOPoFN/QjlGMoEH6QnMHCpbHKQovGqn9EuQn+Evj+A5QoWB4n5AAIgUAAg");
	this.shape_2.setTransform(270.9661,-196.9959);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgkIBAIQgagmhngBQhQAAibAYQhaAOjGAiQixAdhvAHQk5ATgviJQg7itFYm9QKBs9WdwoQH0lyKCmwQFjjvIxlvQCshyBqiyQBnirAhjVQAgjRgojhQgojlhtjYQgnhOjemDQjrmqiUlaQnPxBE8m0QCnjlFoCLQE3B4G1GBQFxFFGgHaQFgGREdGFQHKJxCIKdQDBO6nhPEQjVGsoLIiQnLHgpvHxQo5HEoVFNQoMFIkKBIQj1BCkXApQksAskHACIgdAAQpgAAicjcg");
	this.shape_3.setTransform(273.3516,-219.2936);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgfaBFtQjcg6hMh8QgYgohmAAQhRAAicAbQhbAQjJAnQi0AhhvAKQk+AbgtiIQg5itFlnKQKUtOXRxdQHvlzKinSIOdp8QCqh4Bai4QBXizAEjcQAEjZhNjpQhNjriXjeQg2hPknmSQk6m5jVltQqax2D6nnQCDkAGJCFQFRByH/GIQGuFJHuHgQGmGYFKF8QIpJ8DRKVQE2PYm4QFQjEHLoOJJQnLH+qBIWQpAHfotFrQoaFgkWBXQj5BOkiAxQkxA0kNAGIg8ABQkAAAiwgug");
	this.shape_4.setTransform(276.2436,-241.3953);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgfhBIkQjbg7hEiDQgWgqhmABQhRAAidAeQhcASjLArQi4AmhwAMQlCAkgriIQg4itFynYQKjtcYFyWQHclqLPoAQMEomCeh2QCph+BJjCQBFi7gZjnQgYjihwjxQhyj0i+jlQhDhRlumhQmHnJkUl/QtgyqC6oOQBhkTGsCEQFuBwJGGSQHrFRI7HoQHqGkFxF0QKIKNEOKDQGlPtmKRCQixHooPJvQnKIbqTI7QpHH4pDGKQonF4kiBlQj+BZkrA6Qk2A8kSAJQgvACgsAAQjuAAingug");
	this.shape_5.setTransform(279.4301,-263.3982);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgfrBLcQjag9g+iKQgUgshlABQhSABieAhQhdAUjNAwQi7AqhxAPQlHAsgqiIQg1itF+nlQKwtqY5zRQGxlPMSpCQK/oEDni5QCmiFA3jNQA1jFg2jyQg1juiTj7QiVj+jjjsQkTkOjyj2QnRnblUmQQwgzdB9orQBCkhHOCFQGMByKQGdQIpFcKFHzQIxGxGUFwQFIErDWD1QFFFzDEF+QIPP8lcR7QicICoRKTQnII3qjJeQpPITpYGoQo1GOktB0QkEBkkyBBQk7BDkXAMQg7ADg4AAQjhAAiegsg");
	this.shape_6.setTransform(282.9763,-285.3353);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("Egf6BOUQjYg/g3iQQgSguhlACQhSACifAjIkuBKQi/AvhxARQlLAzgpiHQgzitGKn0QGLn0KZpcQIRnhLypSQFUkMOGqtQKmoCEDjfQCkiMAljZQAjjPhTj/QhRj5i3kHQi4kKkHjyQk+kYkZkAQobnsmSmiQzd0PBDpBQAkkuHzCKQGsB2LaGrQJoFpLPH+QJ5HCG1FuQF8E/DdDiQFwF1DnF+QJxQKktSuQiIIcoRK0QnGJSqyKBQpXIspuHFQpBGlk4CBQkKBuk5BJQlABKkbAQQhFADg/AAQjZAAiYgrg");
	this.shape_7.setTransform(286.872,-307.2051);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-812.7,835.3000000000001,1070.6);


(lib.PuppetShape_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EAWCAzzQizgoj1iFQnskKo0n0Qn2m7kNlkQg3hIjhkGQkklViPirQpWrPillVQhtjikUmBQhNhsihjcQiPjFhciKQkCmDhnkcQiDlmBNkZQBpmDGEggQFFgaIiDiQGECgJ1FfIHrEVQEUCbCkBVQHyEAHSGIQAsAkEdD6QCtCYBnBHQGBELK0NeQKBMhG2LLQCwEfAAEqQABEPiODoQiIDejlB/QjqCCkEgJQkVgKkCAgQiNARjYAiQg+AHg7AAQhoAAhegVg");
	this.shape.setTransform(-274.8382,-79.8486);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EAWIA02Qi1gkj/h+Qn+j+pZnxQoUm4koloIknlZQkEkxi7joQpcrsiXlwQhhjvj8mYIjXlaQiAjPhSiQQjlmUhSkjQhmluBhkTQCHl8F/gJQFAgHIKEAQFmCwJeGDIHQEqQD/ChClBdQHVEKHEGSIE7EgQCkCVBoBIQF4EFLINOQKSMOHeLKQC/EeAMEqQAMEQiJDqQiCDgjjCBQjnCDkEgJQkXgJj+AhQiLATjUAkQhJAJhFAAQhdAAhVgRg");
	this.shape_1.setTransform(-276.4319,-86.528);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EAWJA14Qi4ghkHh4QoPjzp5nwQotm0k/ltQnhookclrQpgsKiImIQhVj5jlmvQg/h4iDjzQhzjYhJiYQjKmkg+kqQhOl2B1kOQCgl1F8AQQE8ANHzEhQFJC9JJGrIG2E/QDuCpCgBlQG4ESG2GbQDTDMBbBVQCcCSBoBIQFwEALbM8QKjL9IBLHQDNEcAXErQAVEQiEDsQh8DhjiCDQjlCEkGgJQkZgIj5AhQiJATjRAlQhRAMhMAAQhUAAhOgOg");
	this.shape_2.setTransform(-277.5348,-93.1001);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EAWOA26Qi7gdkQh0QogjnqdnvQpHmwlZlyQiCiLjAjjQj8kqjZkeQppsqh2mgQhJkCjLnIIisl8Qhkjgg/igQitmzgpkyQgyl8CIkIQC8lrF2ApQE2AiHZFBQEoDIIyHVQI2HZDcCWQGZEXGpGnQDJDMBYBVQCUCPBpBIQFpD5LxMsQKzLsIrLEQDdEaAiEtQAfERh9DvQh3DjjgCEQjkCHkHgJQkcgKj0AiQiIATjNAnQhXANhSAAQhNAAhIgLg");
	this.shape_3.setTransform(-279.2749,-99.8137);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EAWTA37Qi9gakahvQoyjerAnvQpgmrl2l5Qh8h8jUj8Qj+kujikyQpwtLhjm3Qg8kLiyngQjqp6g0iiQiQnCgTk3QgYmBCbkBQDVlhFxBDQEvA3G+FgQEGDPIbIDQH/HoDgCnQF3EZGfG0QDvD8AmAmQCNCMBqBIQFhDwMJMgQLDLYJXLFQDsEYAuEuQApESh2DyQhxDmjeCGQjjCJkIgKQkggKjxAhQiHATjJAoQhdAOhYAAQhFAAhDgJg");
	this.shape_4.setTransform(-281.1722,-106.5708);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EAWZA48QjAgYkkhrQpFjUrjnwQp1mmmVmAQh9h3jhkNQkCk0jplEQp3tthOnNQgvkTiXn4Qi+p7gvi/QhznQACk8QACmGCuj5QDtlVFpBdQEoBMGiGAQDkDSICIzQHPH6DdC1QFTEWGXHFQDIDdBCBEQCHCJBpBHQFbDpMjMTQLSLGKDLGQD7EWA6EvQA0EThvD1QhrDpjcCIQjhCLkLgKQkjgLjuAgQiFASjGApQhhAQhcAAQhBAAg+gIg");
	this.shape_5.setTransform(-283.1748,-113.3919);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EAWgA58QjDgWkuhmQpXjMsHnyQqHmgm3mJQiBh0jrkaQkFk8jvlWQp9uPg5niQghkZh7oQQiVqBgnjWQhWndAXlBQAbmKC/jxQEElJFhB3QEfBiGGGhQCVCgDDDvQBABOETFaQGhIODVDAQDGCyDFDVQB0B9DADiQCwDOBQBTQCCCHBpBGQFUDgM+MJQLeKwKzLKQEKETBGEyQBAEUhpD3QhkDrjaCKQjfCOkOgMQkngMjrAgQiFASjCApQhkARhhAAQg8AAg6gHg");
	this.shape_6.setTransform(-285.3618,-120.2439);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-637,-491.7,819.6,757.2);


(lib.PuppetShape_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgioA0BQpZgpjvi7QhCg1kYAbIj5AaQiWANhlgDQkWgKhWiLQhtiwCqmSQFWslOLukQLssAPQrDQL1olFXjlQMIoIIEjhQBDgdCXhTIE8itQHYkBFXiVQRknnHhE9QD7CmhHFKQg7ENkfGfQicDhmfIDQlzHMiADPQjCE5nlIFInGHgQklE2jWDxQjeD6lkFOQloFSl2E2QmUFOk4DRQlcDqiuAlQipAkjuANQhzAHhyAAQiHAAiFgJg");
	this.shape.setTransform(310.4672,-94.128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EggVA08QpXgsjii5QgmgfhggDQhKgDiLAPIj+AbQiYAOhogDQkagIhUiMQhpixC8mUQFxsbO5umQLSrFPtrjQCGhjFHj9QFxkfC9iQQLVoiHCjxQA9ggCHhZIEYi6QGkkUE0ijQP0oXHvEXQECCSgYFFQgUELjbGmQiCD6lFICQk2HshlDMQi0FtmkIEQinDMkIEwIn6JBQjgEAl4FYQlyFRmRE9QmkFNlLDTQlsDoi0AkQiuAjjxALQhkAFhiAAQiYAAiWgMg");
	this.shape_1.setTransform(297.6849,-101.4811);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgeDA16QpVgvjYi2Qg7gykhAgIkCAcQibAPhpgCQkggHhQiMQhmiyDOmXQGNsSPouqQKnp9QfsQQChh4EPjlQCfiGFbksQKopEFxj1QA2gkB1heID1jHQFtkmESizQOCpJH8DpQEKB5AXE8QAUEHiWGpQhhERjtH+Qj5IWhHC9QibGelsIGQlBHKpOKsQjjEHmLFiQl9FVmpFGQm0FPleDXQl9Dqi8AkQizAjj1AKQhaADhYAAQilAAihgMg");
	this.shape_2.setTransform(285.3093,-109.4245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("Egb6A21QpRgwjPiwQgigdhigBQhKgBiRAQIkGAeQieAQhsgCQkkgGhMiNQhhiyDgmZQGssLQfusQGPljIBmRQE/j4ILmCQEKjFJQpAQF9lxBYhTQEGj5C1iZQAmggE3lAQEzk6DsjEQMGqAIJCsQESBbBKEvQA9D+hNGpQg2EqiXH2QjAJ8gdB1Qh2HPk5IOQlHIloyKSQjqERmfFsQmLFanCFNQnKFTlyDaQmQDsjGAjQi7Ahj4AIQhMADhKAAQi1AAiugPg");
	this.shape_3.setTransform(274.2127,-117.5555);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgZ+A3vQpKgwjLioQgigchjAAQhKAAiUARIkMAgQigAQhtgCQkogGhIiNQhcizD0maQHMsIRXurQGZlZIUmNQD6i7JRmpQEpjWHnoZQCQigEAkmQEHkvBnhyQAfgiD3lUQDzlPDDjXQKBq/ITBlQEYA1B7EdQBpDxgFGoQgEE+hGHvQhWIhggDqQhGH9kMIcQkvJmovKWQjwEcmzF3QmbFinZFVQneFYmGDdQmjDujQAgQjFAej6AHQhHAChGAAQi6AAizgOg");
	this.shape_4.setTransform(264.7618,-125.8512);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgYjA4rQpLgpjJilQghgchlAAQhLABiXARIkRAgQijARhugCQkrgEhEiOQhUizEGmcQHusGSRuqQGolTInmIQDAiIKRnFQE8jaGRn5QEjluFIn9QAXgkCxllQCwliCXjpQHyr+IUARQIKARCQN/QA2FLAHHoQADDPgKJRQgJIkjfIzQkKKgo0KpQj1EonIGEQmrFsnzFfQnzFfmcDhQm2DwjYAcQksAnk3AAQivAAixgMg");
	this.shape_5.setTransform(259.8308,-134.4246);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgYdA5uQpUgfjEirQgigdhmgBQhNAAiYARIkVAhQilARhvgBQktgDg+iOQhOiyEamdQIRsJTMuoQG7lRI4mAQDHiHKYmyQFIjXFKnbQEhmfC6nEQAOgiBpl0QBplyBpj8QFZs6IJhIQIFhHEnNtQC+I1ByQpQA9JBixJPQjaLYo6LGQj5E2ncGTQm6F2oPFrQoHFmmxDnQnJD0jdAaQlzArlXAAQiGAAiCgGg");
	this.shape_6.setTransform(263.6452,-142.9602);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-513,924.1,770.9);


(lib.PuppetShape_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgP2AoiQjCgqiLhsQiYh2h2jcQjYmUgBpeQAAmlBhmoQA2juCknqQC+o8CHkNQCdk5BAh1QCJj5CAimQFRm2GMgXQI4ghFzHDQCgDCCOEtQBzD1B+FyQCNGgA9E6QARBSAXCTQAUCDAPBGQAkCnALEBQAMEWgXEeQg3LKjkGHQjFFSoFBWQi8AfkUAFQk5AAiQACQi6ACk/AHQj/AAicgig");
	this.shape.setTransform(1.3836,3.8407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgMrAp7Qi+gdiOhYQiehjiMjDQkElqhTpRQg6meAjmrQAWkQBSnkQBnpeBikWQAziRBpk6QBjkXBbizQEAnyGMhbQI2iCG8GqQC6C0C8EoQCQDlC5FwQDIGNBnFAQAYBLAtCeQAmCDAbBMQA7CkAtEIQAvEUAQEsQAnLViWHNQiCGRoVCYQlpBnpRgIQg/gBmzAIIhOAAQjJAAh3gSg");
	this.shape_1.setTransform(-16.4404,-4.1224);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgJrArRQi5gSiOhIQihhSieivQkllFiepAQhwmbgUmjQgQlLAJm9QANp3BCkfQAXhhBEmCQA4k5A2i1QBPkFB3imQCNjEDVhZQEoh7EXA5QD5A0D3DHQDRCoDpEoQCfDJD9F3QD7F2CRFHQAeBDBFCsQA2CFAnBNQBRCiBNENQBPESA1E6QB8LchHIGQg+G/oWDaQjZBYkSAoQjxAijygIQizgHk8AKQhmADhRAAQiBAAhLgIg");
	this.shape_2.setTransform(-33.8477,-12.5833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgGFAshQi2gJiNg8QiihFirieQlAkpjgouQilmahCmYQhImxgplkQhLqIAkknQATibAIleQAJleAVisQAikcBbi8QBtjjDNh+QEdivEnAiQEEAfEaDDQDnChEWEqQCSCcFVGSQEoFeC6FQQAhA6BgC7QBFCHAyBOQBlCdBsETQBrEQBZFHQDJLhAHIzQADD6iVDLQiFC0jxCAQjaBzkQA4Qj+AzjtgMQjUgMkcALQjDAIhpAAQgwAAgdgCg");
	this.shape_3.setTransform(-55.6558,-21.0984);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgB2AtsQizgDiLgzQijg7i1iSQlYkWkbodQjVmYhsmNQgxivgmiMQhJkJg0jZQigqXAHkvQAEiygnlZQgsmIgFibQgKkvA+jQQBMj9DAifQELjeE1APQENANE8DEQD8CbFIEvQA3AzH1HrQFOFHDjFZQAhAxB9DKQBVCJA9BOQB2CYCJEZQCEEOB9FUQEPLmBTJYQAkEFiADhQhzDLjoCYQjWCLkNBGQkEBEjtgPQjngQkOANQkqAOg/AAIgIAAg");
	this.shape_4.setTransform(-82.5255,-29.4943);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgCAAuJQikg0i/iKQltkJlQoPQkGmZiOmCQi1nDh+lhQjwqhgXk3QgOjBhRlcQhmmzgWiGQg2lAAijgQApkUCwi9QD0kGFBgBQEVAAFhDGQERCYF4E1QGoFsDGCmQFwE0EMFhQAiAtCZDVQBlCLBFBMQEQEsFWLzQFRLpCcJ4QBCEMhrD1QhgDdjcCtQjNChkJBUQkFBTjwgSQj0gSkGAOIluAVIgPAAQioAAiDgqg");
	this.shape_5.setTransform(-113.3824,-37.8706);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EAC1AvWQilgvjIiGQmEkCmCoDQk1mcitl5QjlnGilllQk9qpg0k/QghjLh7liQilnbgghyQhglPAFjvQAHkoCdjWQDbkpFNgLQEegKGFDJQEmCXGpE8QHZFrDWCeQGNEkE1FpQAhAnC3DhQB0CNBNBMQEpEfGfMMQGNLrDhKTQBdEQhUEGQhLDsjPDAQjCC0kDBgQkDBgj0gSQj/gTkDAQQiMAJjeARIgwABQiTAAh2gig");
	this.shape_6.setTransform(-145.0398,-46.2028);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EAHqAwfQingsjTiDQmbkAmwn7QllmhjIlxQgdg3ihkMQixkphwjGQmGqyhRlGQg1jSiilqIiKkuQhQi0gyh+QiJldgXj8Qgck6CKjrQC/lGFagTQEmgRGrDOQE8CYHbFDQIIFtDlCXQGoEXFdFxQAgAgDVDtQCCCQBVBKQE/EVHnMlQHHLvEhKpQB0ETg8ESQg3D5i+DPQi0DEj8BrQj/Bsj6gRQkHgSkDATQiNAKjbAWQgiACghAAQiGAAhvgeg");
	this.shape_7.setTransform(-177.1272,-54.5258);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EAMfAxmQiqgqjeiCQmzkAnen3QmUmojilsQgmg+i2kIQjWk0h+jAQnNq6hulMQhIjZjJlxIirk3Qhmi6hAiCQiylqgykIQg+lKB2j9QCjldFngaQEvgVHRDTQFTCaIOFMQI3FwD0CRQHBENGFF5QAgAfDxD0QCQCTBcBIQFUEOIuM6QIDL9FXK1QCJEWgmEcQgjEDitDaQikDQj0B1Qj3B2j/gOQkPgQkDAXQiOANjZAYQgsAEgqAAQh7AAhogbg");
	this.shape_8.setTransform(-209.6247,-62.896);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.996)").s().p("EARRAysQitgpjqiDQnOkCoKn1QnEmxj4lnQgvhEjMkGQj7lDiJi3QoSrEiKlQQhbjejul5IjNlAQh7jAhOiFQjal3hMkTQhhlZBhkLQCGlyF1geQE5gYH6DaQFrCdJBFVIHIERQEECcCbBVQHZEFGsGAQAjAgELD5QCeCVBiBIQFqELJyNNQJDMQGGK+QCcEZgSEjQgQEKibDjQiVDZjsB7QjwB9kCgLQkTgLkEAbQiOAPjZAcQgzAEgwAAQh0AAhlgYg");
	this.shape_9.setTransform(-242.2384,-71.3092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-579.3,-398.1,764.1999999999999,664.7);


(lib.PuppetShape_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgJOAo5Qj6gHi8glQoYhnh6lbQiWmnAJo6QAJpiDAo/QCGmqBWj8QCbnGCglNQC3l8D/kUQGbm8HSACQHGACEmGLQB1CeBsDwQBICiBmEdQBRDkBQF4QB0IfA+DxQA3DSAgEzQAiFGgDE+QgJMSjdEjQi6D3pyBPQjlAdkzAJQiIAElaABIiUAAQijAAgvgCg");
	this.shape.setTransform(-1.6844,-3.2112);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgGJApyQhdgHkLgBQkIgFivgiQoZhmhamaQhqnlBnp3QBnp5EcpVQDGmxB+j+QDjnHDbk9QB7izBRhnQCijNCniUQHempHqBAQD+AhCuCYQCXCDBkDmQBOCzA+EXQBAFEAgCYQAwDpARGRQAaJHAVDrQAUDYgQE3QgQFKgzE8Qg5FhhZD9QhlEeiDB4QjZDIpcAxQjBAQjgAAQkKAAk3gWg");
	this.shape_1.setTransform(14.9862,-12.7056);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgJsAqgQhGgLkigDQkVgDijgeQj2gsiNh1QisiOgekBQhAobDJqvQC+qKF3poIDClCQCBjYBlicQEonLELknID0kSQDCjRC4iMQIhmhH6B6QEGBACWC9QB/CgA3EKQAoC/AME9QARHPADAlQAUDwgtGkQgcD6gPCMQgZD3gNDUQgNDcg9E4QhAFNhfE3QhrFdh5DuQiJEPiMBdQjyChpFAdQh7AGh6AAQluAAlpg2g");
	this.shape_2.setTransform(38.7575,-21.5658);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgOVArLQhXgUkQAAQkkAAiVgZQj2gpiEh7QiiiWgKkdQgTpJEsrfQEOqXHPp4IDrlFQCdjYB+igQFqnPE1kTQBAg5DYjUQDljWDJiIQJkmgIACuQEKBbB6DcQBmC4AIEmQAGDFgpFhQgvGMgDB9QgHD5hqG1QhBECgjCRQg+EDgqDVQgsDfhnE6QhuFNiHExQlQL5kXCLQkICEovAPQhAABg/AAQnIAAlyhVg");
	this.shape_3.setTransform(70.1784,-30.3083);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgTVAr1QhbgdkKADQkzAEiHgVQj3gkh7h/QiZidANk0QAbpzGMsHQFaqkIiqFIETlHQC5jaCVikQGqnUFXkBQBHg1D3jWQEGjaDciHQKqmiH+DZQEJByBcD1QBNDLglE9QgYDIhgF/QhhGHgUCYQghEDikHBIicGhQhiEMhFDXQhJDjiPE5QiXFMitEuQmsLtkdBvQiJA1jeAfQjXAej6ACIgsAAQoRAAluhyg");
	this.shape_4.setTransform(104.327,-38.959);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgJyAupQo8gDliiKQhbgkkIAGQlCAIh8gQQj4gghziCQiPiiAllJQBKqXHrspQGgqvJyqTQH9oWC7i1QHonaF2j1QBNgzEVjXQEqjeDviGQLymlH0D7QEECDA+EIQA0DahQFPQgwDKiVGYQiQGNgmCoQg8EOjcHNIjRGrQiFEThfDaQhkDni1E7Qi+FLjPErQjoFNjFDTQjgDviXAvQiPAujbAZQjXAajrAAIgSgBg");
	this.shape_5.setTransform(138.4662,-47.3974);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgOxAvpQpHgKlJiaQhZgqkIAKIjiAIQiEAChfgKQj6gchsiFQiHilA+lbQB9q4JEtHQHkq7K/qeQIRn5D6jbQIinfGVjvQAxgdBxhOIDkieQFLjhEEiGQM6mpHmEQQD9COAjEXQAdDlh4FgQhHDPjGGtQi+GZg3CxQhZEbkSHWIkDG2QinEbh3DdQh/DqjZE9QjjFLjxEqQkMFKjcDPQj4DpiYAqQiVAojcAWQjGAUjMAAIhGgBg");
	this.shape_6.setTransform(172.3346,-55.8439);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgTwAwtQpNgRkzinQhVgukKAOIjnAMQiIAFhfgJQkAgXhliHQh/ioBZlrQCyrWKathQIlrJMIqpQI/n5EejmQJcnnGyjqQA1gdB7hOID5ihQFtjnEZiIQOBmzHgEfQD6CWAIElQAGDwigFwQhdDVj7HDQjqGnhKC5Qh1EklGHhIk1HAQjIEjiPDhQiYDuj9E/QkFFMkTErQkvFJjyDNQkRDnicAmQiaAljeATQiyAQi0AAQg8AAg8gCg");
	this.shape_7.setTransform(206.5791,-64.9667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgYuAxzQpSgZkciwQhPgxkPASIjsARQiNAIhhgHQkGgThgiIQh5isB1l5QDorzLtt4QJprcNMqwQJ7oGEyjmQKWnxHOjlQA6gdCEhQIEPijQGQjwEtiLQPKnDHfEsQD6CcgTEyQgQD7jLGAQhzDbkwHYQkZG0hcDAQiPEsl7HtIlmHLQjoEpinDmQivDxkgFEQknFNk0EtQlRFKkJDNQkpDmiiAlQieAkjiARQicAMibAAQhWAAhXgEg");
	this.shape_8.setTransform(241.1539,-74.5264);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.996)").s().p("EgdrAy5QpVgikFi1QhIgzkUAXIjzAVQiRALhjgFQkPgOhbiLQhziuCQmGQEgsNM9uOQKrruOOq5QK3oVFGjmQLPn8HpjiQA/gdCNhRIElioQG0j4FCiQQQWnUHfE1QD6CigtE+QglEFj1GQQiIDeloHuQlGHAhuDHQipEzmwH5ImWHVQkHEwi+DrQjHD2lCFJQlHFOlXEyQlxFLkhDPQlCDnioAlQiiAkjoAOQiEAJiCAAQhzAAhygHg");
	this.shape_9.setTransform(275.7645,-84.2675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.5,-410.6,860.9,669.3);


(lib.PuppetShape_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgSKA5dQh1gSicgQIj9gXQkegciVg2QjMhKh1ijQiEi4gwlQQheqJBztDQBfqzC8oeQA0iWC4k1QC/lDDzlRQERl8D8kVQEjlADciFQDsiPG9lUQISmTDLiLQGlkfE+h6QGGiVEyBEQGhBdAPF3QALEwkBIQQhhDJibEPQgsBNjkGGQlIIvhODoQhqE4jgHWQhbC/giBWQg0CEgJBZQgdEhiVLvQiKK8iMJOQg4Dti/CoQiqCWkGBXQjrBNkXASQhQAFhNAAQirAAiggZg");
	this.shape.setTransform(105.0608,-119.1444);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgPdA3pQhzgQicgNIj8gVQkcgZiXg0QjNhHh4ieQiHizg4lEQhrpyBjsqQBRqXCxoSQAxiSCqksQCyk6DhlIQD+lyDskPQERk5DQiEQDdiMGklNQHmmADIiNQGIkTEuhzQFyiMErBGQGXBhAnFmQAfEhjUH3QhRC+iEEDQghBCjHF8QkZIYhADmQhaE/i+G+QhRC9gcBPQgtCAgGBXQgWEwiDLIQiELSiGIXQhuG5o6CyQjnBJkWARQhQAEhNAAQioAAihgWg");
	this.shape_1.setTransform(87.7312,-105.3159);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgMyA11QhxgOidgLIj7gSQkagXiYgzQjOhDh7iZQiKitg/k5Qh4pbBWsRQBFp8CmoEQAuiNCckiQCkkyDPk8QDrlpDbkIQD9kyDEiDQDNiJGLlIQG4ltDDiOQFskIEehtQFdiEEkBHQGNBhBBFTQA0EUinHbQhAC1hrD1QgeBFiiFkQjqIEgxDiQhGFHifGoQhGC+gWBGQgnB9gDBVQgOE7hzKnQh7LTiHH3QhzGto2CnQjkBDkWAQQhOAEhNAAQimAAihgUg");
	this.shape_2.setTransform(70.7401,-91.6242);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgKKA0BQi5gTlNgRQkXgUiagxQjOhBh+iUQiNimhGkuQiEpCBHr3QA5pjCbn1QAriJCOkWQCXkpC8kxQHjsSFej7QC6iGFylDQGKlbC/iQQFPj9EOhnQFIh+EeBFQGFBeBaFAQBKEDh4G/QguCrhTDoQgaBKh9FLQi6HwghDfQgyFMh/GVQg8DCgQA8QgfB6gCBUQgFFHhlKIQhwLNiMHgQh6GgoxCbQjhA/kVAOQhMAEhNAAQijAAijgSg");
	this.shape_3.setTransform(53.9824,-78.0288);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgHkAyNQi5gQlLgOQkVgRibguQjNg+iAiOQiRighMkhQiSopA5reQAtpGCRnnQAoiFB/kKQCJkgCoklQG1r4FEj8QCliBFYlBQFglKC3iRQEzjzD+hkQE0h5EXBBQF8BYB2EpQBfDyhIGiQgcChg6DbQgXBWhVEqQiJHfgRDaQgcFShfGEQgxDKgKAuQgYB4ABBTQAEFThYJtQhmLHiUHMQiBGTosCPQkcBKlhAAQihAAivgQg");
	this.shape_4.setTransform(37.5641,-64.4906);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgFEAwaQi4gMlJgKQkRgOicgtQjNg6iDiIQiTiZhUkUQifoOArrEQAiosCGnXQAliBBwj8QB6kVCVkZQGFrcEnj+QCOh6FAlEQE0k5CviTQEWjpDvhiQEfh2ERA5QFzBOCQEOQB3DegYGEQgNDYhcH3QhVHSgCDTQgDFZg/F2IgpDyQgSB3AEBSQAPFehOJZQhbLAieG7QiMGGomCDQkOBBlvAAQiaAAitgMg");
	this.shape_5.setTransform(21.7122,-51.0504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgCuAumQi4gJlHgGQkMgKiegrQjKg3iGiBQiViRhckHQitnxAeqrQAXoNB8nJQAih7BhjwQBrkICCkMQFTq7EHkDQBthrEtlQQEKkoCmiWQD4jhDfhhQEKh1EIAtQFoA9CsDwQCODJAcFhQARDZgdHIQgeHOAODFQAZFjggFnQgRCngGBHQgJB3AGBRQAbFrhEJJQhSK9isGrQiXF5ofB2QkAA4mEAAQiSAAilgIg");
	this.shape_6.setTransform(7.043,-37.6033);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgB8AswQi5gFlEgCQkJgHiegoQjIgziHh7QiXiIhkj5Qi8nUASqQQAOntBym9QAeh1BTjhQBcj6Bvj9QEhqYDikGQAzg8Evl8QDfkYCciaQDajZDOhkQD0h2D8AcQFZAnDGDNQCoCuBQE7QA3DaAgGUQAoH3AVCNQA4FyAAFZIgDDqQgBB4AJBPQARCggDD1QgEENgdEXQhJK9i9GdQilFroXBrQjLAokUAHIh2ABQiMAAjOgFg");
	this.shape_7.setTransform(2.5753,-24.0123);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgBuAq5Qi5gClCADQkDgEieglQjFguiKh0QiYiAhsjqQjKm1AIp2QAFnKBpmyQBDkSDHoEQDvpuC3kKQBfiJDFkrQC0kICPigQGSm9GvAQQFEANDeChQDCCOCEEPQBnDVBZFgQBfGjAzDTQBdGHAfFJQAFAtANC7QAJB7AMBNQAZCjADD5QADERgZEZQhBLAjQGRQi1FeoNBfQjEAjkUAGIhTABIl6gCg");
	this.shape_8.setTransform(1.7273,-10.4028);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.5,-489.3,554.3,754.8);


(lib.PuppetShape_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgOqA6NQkfgVi+hXQhkgujsAUIjNATQh8AKhWgCQjvgGiJhtQitiJgvk9Qhoq3DluUQDpujHytDQETnMHWokQIep3HiliQA4gpCBhtIEKjhQGIlIEwjPQPPqYIXDbQEWBygCFAQgCEEjAGvQhgDYkoIrQj6HShGDNQg3Chh2DjQiSEQhNCSQiKEGhUDKQhwEPg6EDQgiCchXHDQhfHsg3ECQjIOvirEpQhYCZjsBvQjYBmknAvQjEAei/AAQhYAAhYgGg");
	this.shape.setTransform(117.3295,-133.3176);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgL2A4NQkegTjAhPQhkgqjtARIjOAQQh7AIhXgEQjwgLiLhrQiviIgzkwQhxqeDLtyQDQuDHTssQEFnEGxoNQH4pjHIlcQA0gnB6hrID4jXQFrk4EfjGQOQp0ITDXQEUBwASExQAPD4ieGaQhSDTj6ILQjXHAg5DEQguCchlDbIjCGSQh5D9hIDBQhhEHguD6QgUBshPHfQhKHAg2EaQivOTitEoQhYCXjrBsQjXBjkmAtQjHAejDAAQhUAAhTgGg");
	this.shape_1.setTransform(98.8341,-118.2729);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgJDA2OQkbgQjDhIQhjgkjwAOIjOAMQh7AGhZgGQjwgPiNhrQixiGg3kkQh5qECxtNQC1tjG0sUQD2m9GLn3QHSpQGtlWQBThCE2kaQFPkoEOi9QNTpSIPDRQESBtAnEiQAfDrh8GFQhBDMjOHsQi0GtgsC8QgkCXhVDSIilGDQjcIIg7GVQhlMdhSHjQiWN4iwEoQhYCUjpBpQjVBgkmArQjJAejIAAQhPAAhQgFg");
	this.shape_2.setTransform(80.4246,-103.3448);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgGRA0SQkZgOjGg/QhigfjzAKQkzAOhxgJQjxgUiQhqQiziEg6kXQiAppCXspQCbtCGSr7QDnm3FkneQGro+GRlRQBOhBEekQQEzkZD9i0QMXo0IODKQERBoA8ESQAxDfhbFuQgxDEijHPQiPGZggC0QgZCThFDJIiHF0Qi3H4gnGGQggFRgXDZQgpGJgsEqQh/NgiyEnQhYCSjpBmQjSBcknAqQjLAdjPAAQhJAAhJgDg");
	this.shape_3.setTransform(62.3837,-88.6303);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgDmAyaQkWgLjKg2QhfgZj4AHQknAJh/gNQjygYiShpQi1iCg9kKQiGpNB8sDQCBsjFyrfQDcm2E3nAQGDouF0lLQBJhBEEkGQEYkODriuQLbocITDAQETBjBRECQBCDSg7FZQggC8h5G0QhtGGgSCsQgOCNg0DBIhqFmQiSHrgTF3QgkLbg8HjQhpNJi2EnQhZCQjoBiQjQBZkmAoQjTAejZAAQg/AAg/gDg");
	this.shape_4.setTransform(45.0126,-74.4946);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgA9AwmQkRgHjPgtQhbgUj/AFQkdAFiMgRQjzgeiVhoQi3iAg+j7QiLoxBircQBnsCFRrCQDTm9EEmZQFZodFXlHQBDhBDrj9QD6kEDXioQKboHIbCpQEXBYBoDwQBWDFgZFFQgOC5hOGWQhJF4gFCgQgECIgjC5IhLFbQhqHfAAFqQABJ8g4IpQhUM3i7ElQhbCNjnBgQjNBUklAoQjaAdjmAAIhngCg");
	this.shape_5.setTransform(28.089,-60.7614);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EABqAuvQkJgFjXgjQhSgNkLABQkSABiagVQjzgjiXhmQi5h+hAjsQiPoTBJq0QBOrdEtqlQHrxTIPoxQA+hCDQj0QDcj3DFiiQJZnxIaCIQEWBGCCDZQBrC0AOEtQAJC6ggFyQggFxAHCPQAHCFgTCyQgFA3glEYQg+HXAUFeQAgJCguJPQhAMojCEkQiyELqABTQjlAej8AAIhDAAg");
	this.shape_6.setTransform(11.3193,-46.6763);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgEWAsaQg7gHklgCQkJgCimgbQoThVh2mPQiTnyAyqKQA1q3EJqGQDBnWCbkzQD8n1ENlMQA2hDC2jrQC+jpC1ifQIZnbIOBgQEQAxCZC9QCBCdA4EQQAmC4AQFKQATF9AOBuQASCDAACsQAABMgHD5QgPHQAoFUQAZDdAJEkQAKFQgRE0QgtMcjKEiQi1EEp7BRQkEAhkNAAQj0AAj8gbg");
	this.shape_7.setTransform(1.8757,-32.2956);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgD9AqsQhdgFkGAAQkCgFixggQoVheh5l2QiVnNAcpiQAeqNDkplQDDoLBZjQQDLndDdlQQCJjSA/hWQChjbCkidQHanJH2AyQEEAaCwCZQCWCDBkDqQBKCxA/EeQBAFCAjCUQAuDFAjGhQAoHYA6FAQAnDVATErQAWFKgKE4QgbMVjTEhQi4D9p2BPQkTAjlUAAQjAAAjWgMg");
	this.shape_8.setTransform(-0.1769,-17.9348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.6,-506.4,579.5,764.3);


(lib.PuppetShape_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgPoApfQjDgqiLhrQiZh3h0jdQjWmZgJpfQgGmqBammQA4kHCPneQCvpLCBkMQBDiKCNkuQCBkJByipQE6nSGVgtQJAg/GEHZQCjDGCWE6QByDsCPGDQCaGdBCFFQARBSAaCbQAWCHARBIQAnCoAOEGQAPEXgTEmQguLQjWGZQi4FfoMBlQjEAmkSAIQhTADl6AAQi5ABlAAGQkBgBibggg");
	this.shape.setTransform(-0.0956,-3.0008);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgBgAruQi5gDlCACQkGgEicgkQjHguiJhzQiZh/hrjtQjJm4ABp4QAAnMBimzQBCkgC2oAQDhp6CxkOQBciLC7k0QCtkWCFijQC2jfC4hyQDXiHDvgBQFKgBDkCgQDHCNCLEWQBsDXBiFrQBpGrA4DVQBoGJAkFTQAEAqAQDFQALB+ANBOQAcCkAGD/QAFETgXEfQg6LIjEGgQirFpoTBsQjJApkTAIQhIADhsAAQh4AAijgDg");
	this.shape_1.setTransform(0.5021,-16.2816);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgBxAtfQi4gGlFgCQkKgHidgnQjJgyiHh6QiYiJhjj6Qi7nXALqSQAJntBsnAQAdh3BOjiQBYj/Bpj/QEUqiDckLQBKhZEOlqQDZkkCUieQDVjjDLhsQDwiBD/AUQFdAcDMDLQCtCsBXFBQA7DeApGdQAyH9AZCRQBAF3AEFgIgBDwQABB8AKBRQAUCfgCD7QgCEPgcEdQhDLDi0GqQidF0obB1QkBA4mnAAQh/AAiOgFg");
	this.shape_2.setTransform(1.5008,-29.2799);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgCTAvOQi4gKlHgGQkOgKicgqQjLg2iGiBQiViRhckIQiunzAYqtQAToOB3nMQAgh8BdjyQBnkLB9kOQFJrFEBkHQByh0EglRQEGkzCfiZQD0jpDdhpQEIh9EKAmQFqAzCxDvQCUDIAiFmQAVDcgVHQQgVHWARDGQAfFpgdFtQgPCqgFBJQgIB6AHBSQAeFnhCJZQhOLDilG2QiRGAohB/QkOA/mFAAQiPAAidgJg");
	this.shape_3.setTransform(4.4367,-42.0957);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgErAw8Qi4gNlJgKQkSgOicgsQjMg6iDiIQiUiYhUkVQigoQAmrGQAeosCCnaQAkiBBsj/QB3kXCSkcQF7rjEjkEQCPh+E4lJQExlBCriWQESjwDuhoQEdh8ESAzQF1BGCVEOQB7DegSGHQgKDbhVH+QhPHYACDWQACFeg9F7IgnD2QgRB5AEBTQASFbhMJnQhYLFiZHDQiHGMonCKQkZBGlwAAQiYAAingMg");
	this.shape_4.setTransform(19.2947,-54.8428);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgHPAypQi5gQlLgOQkWgRiaguQjNg+iBiNQiRighMkiQiToqA1rfQAqpICNnpQAmiFB9kMQCGkiCmkoQGtr+FBkAQCmiEFTlGQFdlRC0iTQEwj4D9hoQEzh+EYA8QF+BTB5EoQBiDyhDGlQgaCjg4DdQgWBYhSEsQiDHkgQDcQgYFWhdGIQgwDQgJArQgYB6ACBUQAHFQhYJ5QhjLKiQHTQh+GYotCUQkiBOljAAQifAAirgQg");
	this.shape_5.setTransform(35.5298,-67.5597);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgJ6A0WQhwgMidgKIj6gPQkXgUiagwQjNhBh+iTQiOinhGkuQiFpDBEr5QA2pjCZn3QAqiJCMkYQCVkrC5kzQHesXFdj+QC5iIFvlHQGJlgC8iRQFNkBEOhrQFHiBEfBCQGGBaBdFAQBLEDh0HCQgtCshRDqQgZBJh6FPQi3H0ggDgQgwFPh8GZQg8DEgPA7QgfB8gBBUQgDFFhlKSQhuLOiKHmQh3GjoyCfQkpBVlaAAQikAAivgTg");
	this.shape_6.setTransform(52.4409,-80.3046);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgMoA2EQhygOicgMIj6gSQkbgXiYgyQjOhEh7iYQiLitg+k5Qh5pbBTsTQBEp8CkoGQAtiNCbkjQCjkzDNk+QINsuF2j+QDMiKGJlKQG2lwDDiPQFrkLEdhvQFdiHElBGQGOBeBCFUQA2ETilHdQg+C1hrD3QgcBDiiFpQjnIGgwDjQhGFIicGrQhHC/gVBGQgmB+gEBWQgME6hzKsQh6LTiFH8QhyGvo2CpQjlBFkVAQQhQAEhQAAQijAAiggTg");
	this.shape_7.setTransform(69.7138,-93.2031);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgPXA3wQhzgQicgNIj8gVQkdgZiWg0QjNhHh4idQiIizg4lFQhspyBjsrQBQqYCwoRQAwiSCqktQCxk7DglIQD+l0DrkPQEQk6DQiFQDdiMGjlPQHlmBDIiNQGIkVEth0QFyiNErBFQGYBfAnFnQAhEijUH3QhQC/iDEDIjoG/QkYIag/DlQhZFBi+G/QhQC+gcBPQgtCAgGBYQgVEuiDLMQiDLRiGIaQhtG6o6C0QjnBJkXARQhPAFhOAAQioAAiggXg");
	this.shape_8.setTransform(87.1922,-106.1328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.8,-465.2,521.6,731);


(lib.PuppetShape_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgQEAm+Qoahsh5lQQiRmUAEooQADpHCrotIC6qEQCBm7B7lFQAwiBBdicQBzjDCMidQF9mrGygSQGzgTFLE7QEUEFDgICQBwECBjFWQB9HHBgFJQA9DTAmE4QAnFFgCFDQgCFkg0EMQg7Evh1CYQi7D0pxBPQjeAdk4ALQivAGkyAGQheAChYAAQl2AAj0gwg");
	this.shape.setTransform(-1.5992,5.931);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgD4ApsQhdgCkHgBQj/gGi1ghQoXhih4ltQiTm9AVpSQAXp3DSpXQDAonA9iaQC0nODDlUQDkmLEHkAQHAm1HgAfQHNAeD+G2QBhCoBVECQAgBgBnFpQA9DYA4GJQBHH0A7EfQAsDVAYEuQAZFIgJE6QgWMSjXEiQi5D6p1BOQkbAjmVAAQicAAivgFg");
	this.shape_1.setTransform(-0.4293,-10.3622);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgEPArjQgqgEk3gEQkHgDipgcQoUhYh3mHQiSnlArp8QAtqmD5p7QC6nZCIkdQDonpD8lPQDNkQATgYQCzjeCvibQICnIICBRQEJAqCjCsQCKCSBLD9QA1C1AkEzQAyGsAJA0QAXCEAICoQAEBZADDmQAGHSAtFLQAdDbAMEmQANFNgQE1QgoMYjNEiQi2EBp5BQQkFAgkcAAQjnABj3gWg");
	this.shape_2.setTransform(1.3674,-25.7219);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EACcAt8QkFgEjaggQhOgLkQAAQkQABidgXQjzgkiYhmQi5h9hAjoQiQoJBCqoQBHrQEgqcQDDnGDCldQEcoCEplJQA7hCDIjuQDTjuC/ieQJEngIUB+QEUBBCKDOQByCrAdEhQATC5gOFfQgQFxAKCFQAKCEgMCvQgEBBgbEJQguHTAZFZQAnI0grJYQg7MjjEEjQizEJp/BSQjmAekAAAIg9AAg");
	this.shape_3.setTransform(6.3492,-41.0803);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgARAv9QkPgHjRgqQhZgSkBAEQkaAEiQgSQjzgfiVhnQi4iAg+j4QiMoqBcrSQBhr3FGq8QDPm8D4mPQFMoXFPlGQBChADkj5QDxj9DSikQKIn5IbCiQEXBVBvDpQBcC/gOE9QgIC5hBGJQg9FzgCCbQgBCGgfC2QgHAsg7EqQhdHaAEFmQAIJtg2IxQhPMzi9EkQhbCNjnBfQjNBUklAnQjaAcjoAAIhkgBg");
	this.shape_4.setTransform(23.6087,-56.2103);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EgDDAx6QkVgKjKg1QhfgYj5AHQklAJiCgOQjygaiThoQi1iCg9kHQiGpIB3r8QB7sbFqraQDam3Esm4QF6opFvlIQBIhBEAkCQEQkJDnirQLNoSIVC/QEUBjBVD9QBHDPg0FTQgcC6hxGqQhlGAgOCpQgMCMgxC+IhjFiQiJHmgPFzQhNdIkoHbQhaCQjnBiQjQBXklApQjUAcjZAAQg+AAg/gCg");
	this.shape_5.setTransform(41.4606,-70.9138);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgF1Az4QkZgOjGg+Qhigej0AKQkxAOhzgKQjxgViQhpQi0iEg6kVQiAplCSskQCXs9GNr3QDmm3FcnYQGko7GOlPQBNhBEakMQEukVD7iyQMNoqINDLQERBpA/EOQAzDchVFoQguDCicHJQiJGUgdCyQgYCRhCDHIiCFxQixH0gkGDQgeFPgWDYQgnGEgrEsQh7NbizEoQhYCSjpBlQjSBbkmAqQjMAdjQAAQhIAAhIgDg");
	this.shape_6.setTransform(59.5407,-85.7867);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgIwA19QkbgQjDhHQhjgkjwANIjOANQh7AFhZgGQjwgQiOhqQixiGg3kjQh5qBCutKQCytfGwsSQD0m8GHn0QHOpNGrlVQBShBEzkZQFMkkEMi7QNMpMIPDSQERBtApEgQAiDqh5GAQg/DKjJHoQivGpgrC8QgjCWhTDQIiiGBQjYIFg5GTQhiMahQHhQiVN1ivEpQhYCUjqBpQjUBfkmArQjIAdjJAAQhPAAhQgEg");
	this.shape_7.setTransform(78.4664,-101.4035);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgLtA4EQkdgTjAhPQhkgpjuARIjNAPQh7AIhYgEQjvgLiMhrQiviIgzkwQhxqcDKtwQDOuBHSsrQEDnEGvoMQH2phHHlbQA0goB6hqID2jXQFqk1EejFQONpxISDYQEUBwATEwQAQD3idGYQhQDSj4IJQjUG+g5DEQgtCbhlDaIjAGRQh4D8hHDBQhgEGguD5QgTBphPHiQhJG/g2EZQiuORitEpQhYCWjqBsQjXBjkmAtQjHAejDAAQhUAAhUgGg");
	this.shape_8.setTransform(97.8121,-117.2706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.5,-476.6,545,736.8);


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EAV3A4IQjSgXlAAGQk6AGhygOQjOgZiGhnQich3hxkBQjjoCiDpMQh1oMAHlaQAFkksc1tQhvjAkxmAQmioLhuiXQklmRiCktQikl5A6keQCVrYUgJsQHUDdKKGaQDRCEL9H9QIHFYGaHJQCBCOCoDUQC7DsAzA7QClC/CdGEQCRFjBzHPQBuG8A5G1QA7G7gLFAQgKEWiYDtQiKDXjuCdQjdCSkJBEQi7AwitAAQhDAAhAgHg");
	this.shape.setTransform(-145.2973,-106.3048);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EASVA2mQjMgVlDAFQk0AFh2gPQjOgaiGhmQich2hvj8Qjdnzh0pGQhln6AOlcQAHirj4o4Qh9kfktpoQhdi/kHlwQlxoDhViDQj7mAhlkfQh+loBOkSQDHq+S8JMQG2DUJUGLQEPC0J+HFQHrFcF4HAQB1CLCaDPQCpDkAyA+QCaC/CNF4QCDFdBjHBQBgGxAsGnQAtGwgUE3QgSEOieDjQiPDNjyCUQjfCKkKA/Qi6AsisAAQhDAAhBgGg");
	this.shape_1.setTransform(-122.6298,-94.7567);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EAO0A1DQjFgSlGAEQkvAFh6gRQjNgbiHhlQibh1hvj3QjYnkhmpBQhWnpAXleQALimjNovQgziJkprrQhKi7jelkQk5n2hDh3QjOlwhHkRQhZlWBkkDQEBqaRVIvQGWDMIeF9QEdDJItGpQHQFhFUG3QBpCHCLDMQCVDcAxBBQCOC9B+FuQB0FVBTGzQBRGlAeGYQAfGjgeEtQgZEGilDZQiUDDj0CLQjhCAkLA6Qi5AoirAAQhDAAhBgGg");
	this.shape_2.setTransform(-100.0828,-83.221);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EALUAzhQi9gQlLAEQkoAEiAgSQjMgciHhlQibh0hujyQjUnVhZo+QhInZAfliQAOifihoqQhYkxiyozQg3i3izlYQj9nlg0hwQihlggpkCQgzlDB7jxQE9pvPwIVQF2DGHoFwQEfDaHnGUQGxFpEwGtQBcCCB7DJQCBDRAwBGQCCC7BtFkQBmFMBDGjQBBGZAQGJQARGWgoEjQgjD9iqDNQiZC4j3CAQjiB2kMA0Qi3AkirAAQhDAAhAgFg");
	this.shape_3.setTransform(-77.7065,-71.7568);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EAH0Ax9QiygNlSAEQkiADiFgTQjLgeiHhlQibhzhujtQjRnHhLo9Qg8nKAolmQASiZhzopQg/kuh5opQgjiziIlNQi+nSglhrQh0lOgKjyQgNkvCSjcQF5o6ONH+QFXDBGxFkQEZDnGoGGQGSFzEJGiQBPB+BrDDQBuDJAtBIQB0C5BdFYQBXFFAyGSQAxGMABF5QACGIgzEXQgtD1iwDAQidCsj5B1QjiBpkNAvQi0AfiqAAQhDAAhBgFg");
	this.shape_4.setTransform(-55.4723,-60.2939);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EAETAwZQiggKlgADQkcADiJgVQjLgfiHhlQibh0htjoQjQm7g8o9Qgvm9AxltQAUiRhDotIg4nGQgfkCgLiGQgOithblDQh8m1gYhwQhGk9AVjhQAbkYCnjDQGzn6MsHsQE4C9F9FaQEJDwFuF+QFvF+DiGXQBDB4BaC+QBbC/AoBKQBmC4BMFLQBHE8AhGBQAhGAgNFnQgOF6hAELQhrHCoeDhQjgBdkNAoQiwAaiqAAQhDAAhDgEg");
	this.shape_5.setTransform(-33.2727,-48.8963);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EAA5AuzQiEgGl5ADQkWACiOgYQjJghiIhmQibhzhtjlQjPmvgupAQgjmxA5l4QAUiEgPo7QgRqQAHi6QAHilgrk8Qg2mRgJh9QgUkrA2jNQBDj/C7iiQHrmpLJHeQEYC8FHFQQDvD2E6F8QFFGKC6GJQA1BwBJC5QBICzAkBLQBXC2A7E+QA4EzAQFtQASFzgcFUQgeFqhLD/Qh/GroeDEQlwCFnAAAQhKAAhMgEg");
	this.shape_6.setTransform(-11.8337,-37.4268);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgAQAtLQhMgCmwACQkOABiTgaQjIgjiJhnQiahzhvjhQjQmlgjpHQgZmoBCmGQAQhhAtpmQAtpkApjnQAaiZALk8QANliASiUQAikWBYi3QBtjgDNh6QIblCJgHVQD2C+EOFIQDOD5EEF8QEVGWCQF3QAoBnA5CxQA0CmAfBMQBICxAqEvQApEpADFYQADFlgpE/QgrFbhYDxQiSGTobClQlZBqnWAAQhGAAhHgDg");
	this.shape_7.setTransform(-4.96,-25.8962);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgPLArIQjGgmiKhoQiZh1hyjeQjTmdgXpRQgQmkBMmXQBFmeA4k3QBspSBRj/QAkhzBSlVQBKkzA8inQBbj9B9icQCWi7DZhLQI6jFH0HTQDODBDUFAQCkD4DLF+QDcGeBoFgQAcBdAoCnQAkCXAZBMQA3CsAbEcQAbEggJFAQgXLvjCG+QilF6oVCFQlYBWpZgKQi5gClBAGIgIAAQkCAAiUgdg");
	this.shape_8.setTransform(-2.2913,-14.2574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-436.8,-466.2,619.4,731.7);


(lib.PuppetShape_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EANjA3oQhpgUjyAQQkvAVhygEQjwgIifhMQjFhghkjUQi+mTiBrLQhClyhyuUQgdjuj8oOQhHiTiak4QiIkZhQi/QgYg6jZluQjkmEh/kUQmsuhE3nAQCkjrFGAtQERAnGWDxQEdCqHEFRQJFGyBUA7QGUEVGPGnQGhG4H2KzQDMEZC6HKQCqGhB/HvQB5HXA0GkQA1GpghD4QgcDTjLC1Qi2ChklByQkPBpknAmQiNASh6AAQiFAAhvgVg");
	this.shape.setTransform(-112.1275,-116.6544);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EAKyA13QhkgQj5ANQkjAQiCgHQj0gNiehOQjFhihdjPQi1mShwqvQhMnRhCsQQgTjmjZn9Qg8iOiEktQhzkOhEi8QgUg2i6liQjClxhokJQlct2FNmoQCwjgE5ApQEGAjF6DjQENCiGgE/IFGD9QC4COBwBRQF7EQFzGcQF8GnHWKmQC/ETCqG7QCcGYBxHeQBtHLApGVQAqGegpDyQgiDNjPCtQi5CZknBsQkPBikoAlQiSASh/AAQh8AAhpgRg");
	this.shape_1.setTransform(-93.7975,-102.7045);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EAH5A0IQhbgMkDAKQkZAMiSgLQj3gSifhSQjDhmhVjNQinmThWqVQg/nrgcrSQgIjei2npQgziKhvkiQhgkCg3i3QgQg0ielTQijlghTj7QkVtIFgmTQC5jVEuAkQD+AfFiDTQEACaGBEsQGaFJCvCCQFqENFYGOQFiGdGzKaQCxEQCXGyQCLGQBdHRQBaHBAYGJQAZGSg0DoQgsDGjVCiQi9CQkpBjQkNBZkpAiQiZASiFAAQhyAAhjgNg");
	this.shape_2.setTransform(-74.4733,-89.0249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EAFOAycQhRgJkOAIQkTAIiegPQoagziPlpQifmShHp6Qg6oPAFqPQACjXiSncIiAmdQhLj4gqi1QgLgzh/lDQiClPg8juQjHscF4l7QDHjJEiAjQD3AeFIDJQDxCVFfEfQF4E+ClCCQFPEIE7GHQE+GMGPKOQChEJCHGiQB9GGBPG/QBMG0ANF5QANGGg8DfQg0C/jYCZQi/CHkrBbQkKBSkrAhQiiARiLAAQhnAAhbgJg");
	this.shape_3.setTransform(-56.9171,-75.5075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EACpAwzQg/gFkhAGQkOAEingTQoeg+iHljQiYmSg4piQgzogAipkQALjOhunSIhfmRQg2jugaizQgHgxhfk2Qhik+gljiQh6rvGUlhQDWi6EZAkQDvAfEvDCQDgCQE+EVQFXE2CZCBQEzECEcGCQEUF2FvKFQCSECB2GUQBvF7BBGtQA/GoABFpQABF6hEDWQg6C3jcCPQjBB+krBUQkIBKksAeQisASiVAAQhaAAhRgHg");
	this.shape_4.setTransform(-40.123,-62.6325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EAAEAvIQgRgBlQACQkHACixgYQoghIiAleQiTmSgrpMQgpooA7pHQAVjHhInLQg1lYgHgvQggjngLivQgCgqg+kwQg9ktgLjXQglrDGwk2QDkikEOAoQDmAiESC6QDPCMEbEJQE1EtCNCDQEVD/D9F8QDmFZFOKBQCCD6BmGEQBgFxAyGbQAyGbgKFYQgLFthNDLQh+FOqRCmQkDBCkuAbQi4ARikAAQhJAAhFgDg");
	this.shape_5.setTransform(-23.5119,-49.5139);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EgO2As7QoihSh7lZQiPmRgfo7QgeotBUo0QAdjCgdnGQgjomAHjnQAAgUgWk5QgUkaATjNQA6qRHDj8QDviGD/AuQDdAnD2CxQC/CJD1D6QETElCACHQD2EBDZF0QC0EzEtKAQByDyBVFzQBRFmAkGHQAkGOgWFHQgXFehWDBQiME7qNCSQnpBtorgNQhbgCkIADQkDgBi3gcg");
	this.shape_6.setTransform(-7.7428,-35.9033);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EgPTAq9Qohhbh4lVQiNmPgUowQgToxBsorQAli6ASnIQAWoKAfj5QAJhGARj6QAZkCA1jDQChpUHNi3QHCi0HKFgQCxCHDQDrQBjBxD8E6QDSEFCzFpQB+D/ENKIQBhDoBEFiQBDFbAWFxQAWGBggE0QgkFPhfC1QibElqIB9Qm0BUpYgBIlkACQj/gEi8ggg");
	this.shape_7.setTransform(-5.2633,-21.8839);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EgIzApnQj6gGjAgjQoehlh4lRQiOmQgIopQgJo5CIopQApikBLndQBNnoBEkZQAvjFAhhsQBGjlBei0QEQoJHIhnQHBhmGLFKQCjCICoDcQCACmCkEGQCnEKCLFcQA8CXD3K6QBQDeA0FOQA1FRAJFaQAKFygrEhQgwE/hpCnQirEOp+BnQlnA5qcALQijADhlAAIhegBg");
	this.shape_8.setTransform(-3.2335,-7.8331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-378,-474.8,560.6,733.4000000000001);


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgPqAo9QjEgqiKhsQiah3hzjfQjUmbgHpfQgFmdBXm1QAwjyCanzQCzpFCEkRQCQkqBJiJQCHj5B/ioQFNm2GLgaQI1gmF7G2QCmDACSEpQB7D7CBFvQCUGlA/E8QAQBTAXCTQAVCGAPBHQAkCqAMEDQANEWgUEiQgxLKjUGYQi2FhoMBkQjEAlkTAIQhKACmCAAQi5AAlAAGQkBAAibghg");
	this.shape.setTransform(0.0675,0.0771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgPTAqdQjFgmiKhqQiah1hxjgQjRmdgTpSQgOmcBLmgQBWnmAwjvQB0pKBWkDQAQguB1mTQBUkeBLisQBnjwCGiTQCdisDUg+QI2ikHhGzQFxFPGKMNQDUGlBgFXQAZBdAkCgQAiCVAWBLQAzCtAYEYQAYEegME7QgdLmjEG7QimF4oUCAQlPBRphgIQi4gDlBAGIgIAAQkBAAiWgdg");
	this.shape_1.setTransform(-1.6924,-10.0947);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgAcAsaQg5gBnCACQkNABiUgbQjIgkiJhoQiah0hujiQjPmkgepIQgVmhBCmNQAMhKA/p8QA7pZAwjsQAciNAdk/QAdlJAeidQAykKBiitQB3jRDNhsQIikdJEG5QGsFFIDMaQEMGdCEFuQAlBmAyCsQAwCjAdBMQBDCwAlErQAkEngCFRQgCFhgrE6QgwFWhZDuQiWGPoaCdQlTBjneAAQhEAAhFgCg");
	this.shape_2.setTransform(-3.9589,-20.8986);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EAAEAt8Qh3gFmFADQkTABiQgYQjKgiiIhnQiah0htjkQjMmugppBQgfmqA8l9QATh+AEo/QADp5ARjIQANifgZk4Qgel2gBiHQgBkeBBjDQBQjwDAiTQH7mFKkHCQHcE+J4MnQE6GQCqGBQAxBuBCC1QBBCwAiBLQBRC1A0E5QAxEwALFmQALFughFNQgjFlhPD7QiEGkoeC6QlqB8nEAAQhKAAhMgEg");
	this.shape_3.setTransform(-6.7043,-31.6727);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EACxAvcQiXgIloADQkZACiMgWQjKggiIhmQiah0hsjoQjNm4g1o9Qgom1A0lyQAUiMgtotQg6rDgEiAQgFiohHk8QhdmegSh0QgxkwAjjWQArkKCvi0QHKnYL/HRQIEE5LpMzQFgGEDQGPQA+B2BSC6QBSC8AmBJQBgC4BCFGQBAE5AZF4QAZF7gUFfQgWFzhEEGQhzG6ofDUQjfBYkOAkQitAYiqAAQhDAAhDgEg");
	this.shape_4.setTransform(-23.5967,-42.3545);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EAF7Aw6QipgMlZAEQkfADiHgVQjMgeiHhlQibh0hsjsQjOnChCo8QgznBAtlqQASiVhaomIhNnDQgtkHgSiAQgYiuhxlEQibm8gfhtQhclBAGjnQAIkgCbjOQGWoaNZHkQFIC5GWFYQEcDwGBF3QGDF4D0GbQBJB7BiDAQBkDFAqBIQBsC5BTFSQBOFBApGJQAnGGgGFwQgIGAg5ESQgzDviyC5QigClj6BvQjhBjkNArQiyAcipAAQhDAAhDgEg");
	this.shape_5.setTransform(-43.4974,-52.9321);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EAJHAyXQi3gPlPAEQklAEiCgTQjMgdiHhlQibh0htjwQjRnNhOo9QhAnPAllkQAQibiEolQhIktiQopQgqiziZlNQjXnVgqhrQiGlRgWj3Qgbk0CIjkQFgpQOxH6QFkC/HFFiQEoDoG2GAQGhFvEYGlQBUCABxDFQB2DOAtBFQB5C6BiFdQBcFIA4GZQA3GRAGF/QAHGOgvEcQgpD4itDFQicCxj4B5QjiBukNAxQi0AhipAAQhEAAhCgFg");
	this.shape_6.setTransform(-63.6859,-63.5242);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EAMSAzzQi/gRlKAFQkqAEh+gSQjMgciHhlQibh0huj0QjUnahco/QhLndAdlgQAOihitooQhgkxjDozQg8i3jAlZQkPnmg3hxQivlhgxkFQg/lHB0j3QErp7QLISQGADFH3FvQErDbHwGQQG8FmE6GvQBgCEB/DJQCIDVAvBDQCFC8ByFnQBqFQBHGnQBFGcAUGPQAUGZglEmQggEAioDRQiYC7j2CDQjiB5kMA2Qi3AliqAAQhEAAhBgGg");
	this.shape_7.setTransform(-83.9288,-74.1784);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EAPeA1QQjHgTlGAEQkwAFh6gQQjMgbiGhmQich1huj4QjYnohopCQhZnsAWldQAKimjVovQhGi4klq8QhOi7jmllQlDn1hHh6QjWlxhNkSQhhlZBgkGQD1qhRoIuQGcDMIoF9QEmDLIyGlQHVFgFcG3QBsCJCNDLQCZDfAxA/QCQC+CBFxQB3FWBWG2QBTGnAgGcQAiGlgcEvQgYEIijDaQiUDGjzCMQjhCCkLA7Qi4ApirAAQhEAAhBgGg");
	this.shape_8.setTransform(-104.2377,-84.8534);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.996)").s().p("EASqA2sQjNgVlCAFQk1AFh2gPQjNgaiGhmQich2hwj9Qjdn0h1pHQhnn7APlcQAHisj9o4QiFkrkspcQhfi/kMlxQl1oChYiFQj+mAhokgQiClpBLkTQDCrBTGJMQG4DUJZGLQEQCzKEHEQHuFcF8HAQB3CMCaDPQCrDmAyA9QCbC+CPF6QCEFeBkHCQBhGyAtGpQAvGxgUE3QgQEPieDkQiPDPjxCVQjfCKkKBAQi6AtisAAQhDAAhBgHg");
	this.shape_9.setTransform(-124.7455,-95.56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-398.4,-446.2,581,711.7);


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.996)").s().p("EgJdAoSQj7gHi8gkQoahmh1liQiMmnAQo9QAQpTC2pAQB+mgBQj3QCPm7CSlRQA4iCBliaQB+jBCWiZQGVmgG3AAQG2AAE6FQQD9EPDLITQBjEEBUFcQBoHNBQFMQA0DWAcE3QAeFIgIFAQgUMTjeEkQi7D2pyBOQjlAdkzAIQiMADlTAAIlnAAg");
	this.shape.setTransform(0.1118,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.996)").s().p("EgP+ApVQofhgh0lhQiKmgAEo8QADpDCVo8QAgh8BroWQBfneBakwQB+mvCokRQE0n5HLhNQHEhMF2FZQCaCOCcDiQB2CsCUEKQCYEQB5FgQAzCSDXLEQBEDhAqFMQAqFSABFXQABFygvEeQg1E9hqClQisENp+BiQmKA8p3gEIllABQj/gFi6gig");
	this.shape_1.setTransform(-1.4296,-11.6278);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("EgDJArlQhbgBkJACQkBgDi4gfQohhZh2lhQiJmdgIo/QgHo6B5o7QAmiwAqngQAtn/AykQQANhGAkj4QArj8BFi/QDPpCHSiYQHIiVGxFnQCpCMC/DuQBqCDDcExQDCEOCgFrQBuD8DuKNQBVDqA5FgQA3FbANFtQANF/gnEwQgqFMhiCxQieEhqHB2QmOBIn9AAIh/gBg");
	this.shape_2.setTransform(-3.3343,-23.6033);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.996)").s().p("EgCvAtNQhbgDkIAEQkEgBi1gbQoihTh4liQiMmbgSpIQgTozBipAQAgi+gFnUQgGobAVj4QAEgqgBhhIgBjAQACkTAjjKQBtp9HNjcQD0h0D5A1QDYAvDoCyQC2CMDkD7IF5GzQDlEJDFF1QCfEwEPKEQBmDyBIFxQBGFlAZGBQAZGLgdFCQgfFZhZC9QiSE0qMCJQmeBYnJAAQhVAAhVgDg");
	this.shape_3.setTransform(-5.6188,-35.622);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.996)").s().p("EgBjAuxQgagBlIACQkIABiwgXQohhKh9llQiPmagepTQgdotBKpNQAZjGgunRQg5o3gBjnQAAgigok1QglkmAFjTQARqvG/kWQDsiTEHAuQDhAoEDC6QDFCNEGEIQEiEuCGCGQEEEFDnF+QDNFTExKFQB3D6BYGAQBUFuAmGUQAmGXgTFSQgTFnhRDHQiFFFqQCdQkDA9ktAZQiqANiZAAQhUAAhQgEg");
	this.shape_4.setTransform(-13.1405,-47.4583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("EAA0AwRQg5gFknAFQkMAEipgUQoghBiCloQiUmZgrpiQgoonA0pgQARjMhVnUIhHmQQgojsgPixQgEguhKk0QhKk3gUjcQhErZGplGQDgitETApQDpAjEeDCQDVCQEoETQFBE1CSCDQEgEFEHGDQD5FvFSKIQCGEABoGOQBjF4A0GmQAzGjgIFhQgIFzhJDRQg/CzjeCJQjCB5krBPQkHBFksAbQilAPiQAAQhfAAhXgGg");
	this.shape_5.setTransform(-28.4402,-58.9407);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("EADPAxsQhLgHkUAHQkRAHiigRQocg4iJlrQiamYg5p0QgxobAap+QAJjSh3naIhomZQg7jzgei0QgJgyhnk8QhrlGgrjmQiQsBGOloQDSi+EcAlQDyAgE2DIQDlCTFIEcQFhE7CdCDQE7EIEkGIQEjGFFxKMQCVEHB4GbQBwGBBCG2QBBGuADFwQADF/hBDZQg4C6jbCSQjBCBkrBXQkKBMkrAeQifAQiKAAQhoAAhcgJg");
	this.shape_6.setTransform(-44.0581,-70.0084);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.996)").s().p("EAFrAzHQhWgLkIAKQkWAJiZgNQj3gWifhUQjDhnhRjNQkhrbgB3yQAAjaiYnjIiHmjQhPj8gsi2QgMgziFlJQiJlUhAjzQjXspF0l/QDEjLElAlQD5AfFNDPQD1CXFmElQGAFDCnCDQFXENE/GLQFGGWGTKUQCjENCIGoQB/GKBPHFQBOG5ANF9QAPGKg6DiQgyDAjYCbQi+CJkrBeQkMBTkqAhQiaAQiFAAQhwAAhhgLg");
	this.shape_7.setTransform(-60.0074,-81.0802);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.996)").s().p("EAITA0lQhdgNkAALQkbAMiPgKQj1gRifhRQjEhkhYjNQitmUheqaQhIoAgerLQgJjii5nwIijmwQhikGg4i5QgQg1iflXQimllhVj+QkatUFgmUQC6jVEvAoQEAAiFkDbQEBCdGEE1QGbFPCwCFQFoEPFZGWQFhGeG0KeQCxEQCaGxQCOGQBiHQQBeHBAdGJQAeGUgwDqQgpDIjUCkQi7CSkpBkQkOBckpAiQiXASiDAAQh1AAhlgOg");
	this.shape_8.setTransform(-77.4725,-92.4325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.996)").s().p("EAK8A2GQhkgRj4AOQklARh/gHQj0gMiehPQjFhhhejRQi2mUhwqzQhKnKhFsdQgUjojbn/Qg9iPiFkuQh1kPhFi8QgUg3i7ljQjFl0hpkJQlit7FMmqQCvjhE5AqQEIAjF8DlQEPCjGiFCIFID+QC5CPBwBSQF9ERF1GeQF/GpHXKpQC/EVCrG9QCdGZBxHgQBsHMAqGYQAqGfgnDyQgiDOjPCtQi5CaknBsQkOBjkpAlQiQASh+AAQh+AAhrgSg");
	this.shape_9.setTransform(-94.9266,-104.6428);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1799));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-345.9,-452.6,528.5999999999999,710.5);


(lib.headline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mainheadline();
	this.instance.setTransform(306.85,138.9,1.5435,1.5435,0,0,0,198.8,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(0,0,613.7,277.7), null);


(lib.רגל1כיפוףcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hip
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(866.2,126.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.1151,x:868.7277,y:166.5529},0).wait(1).to({rotation:2.2281,x:871.2508,y:206.9307},0).wait(1).to({rotation:3.338,x:873.7668,y:247.196},0).wait(1).to({rotation:4.4459,x:876.2781,y:287.3862},0).wait(1).to({rotation:5.5506,x:878.7823,y:327.4638},0).wait(1).to({rotation:6.6523,x:881.2796,y:367.4288},0).wait(1).to({rotation:7.7508,x:883.7698,y:407.2813},0).wait(1).to({rotation:8.8473,x:886.2553,y:447.0587},0).wait(1).to({rotation:9.9407,x:888.7338,y:486.7235},0).wait(1).to({rotation:11.031,x:891.2052,y:526.2758},0).wait(1).to({rotation:12.1181,x:893.6697,y:565.7155},0).wait(1).to({rotation:13.2032,x:896.1294,y:605.0801},0).wait(1).to({rotation:14.2852,x:898.5821,y:644.3322},0).wait(1).to({rotation:15.3651,x:901.0301,y:683.5092},0).wait(1).to({rotation:16.4409,x:903.4687,y:722.5361},0).wait(1).to({rotation:17.5146,x:905.9026,y:761.4879},0).wait(1).to({rotation:18.5863,x:908.3319,y:800.3647},0).wait(1).to({rotation:19.6538,x:910.7517,y:839.0914},0).wait(1).to({rotation:20.7192,x:913.1669,y:877.743},0).wait(1).to({rotation:21.7816,x:915.575,y:916.2821},0).wait(1).to({rotation:22.8418,x:917.9785,y:954.7461},0).wait(1).to({rotation:23.898,x:920.3726,y:993.06},0).wait(1).to({rotation:24.952,x:922.7619,y:1031.2988},0).wait(1).to({rotation:26.003,x:925.1443,y:1069.4251},0).wait(1).to({rotation:27.0519,x:927.5219,y:1107.4763},0).wait(1).to({rotation:28.0977,x:929.8926,y:1145.415},0).wait(1).to({rotation:29.1404,x:932.2561,y:1183.2411},0).wait(1).to({rotation:29.8219,x:933.836,y:1213.6525},0).wait(1).to({rotation:28.819,x:931.7614,y:1209.6772},0).wait(1).to({rotation:27.8191,x:929.6931,y:1205.7139},0).wait(1).to({rotation:26.8221,x:927.631,y:1201.7625},0).wait(1).to({rotation:25.8272,x:925.573,y:1197.8189},0).wait(1).to({rotation:24.8353,x:923.5212,y:1193.8873},0).wait(1).to({rotation:23.8463,x:921.4756,y:1189.9676},0).wait(1).to({rotation:22.8604,x:919.4362,y:1186.0597},0).wait(1).to({rotation:21.8765,x:917.401,y:1182.1598},0).wait(1).to({rotation:20.8955,x:915.372,y:1178.2718},0).wait(1).to({rotation:19.9166,x:913.3471,y:1174.3917},0).wait(1).to({rotation:18.9417,x:911.3304,y:1170.5274},0).wait(1).to({rotation:17.9687,x:909.318,y:1166.6711},0).wait(1).to({rotation:16.9988,x:907.3117,y:1162.8267},0).wait(1).to({rotation:16.0309,x:905.3095,y:1158.9902},0).wait(1).to({rotation:15.0669,x:903.3157,y:1155.1695},0).wait(1).to({rotation:14.105,x:901.3259,y:1151.3568},0).wait(1).to({rotation:13.1451,x:899.3403,y:1147.552},0).wait(1).to({rotation:12.1891,x:897.363,y:1143.763},0).wait(1).to({rotation:11.2352,x:895.3898,y:1139.982},0).wait(1).to({rotation:10.2843,x:893.4228,y:1136.2129},0).wait(1).to({rotation:9.3353,x:891.46,y:1132.4517},0).wait(1).to({rotation:8.3894,x:889.5033,y:1128.7024},0).wait(1).to({rotation:7.4465,x:887.5529,y:1124.9649},0).wait(1).to({rotation:6.5065,x:885.6087,y:1121.2394},0).wait(1).to({rotation:5.5686,x:883.6686,y:1117.5218},0).wait(1).to({rotation:4.6337,x:881.7347,y:1113.8161},0).wait(1).to({rotation:3.7017,x:879.807,y:1110.1223},0).wait(1).to({rotation:2.7728,x:877.8855,y:1106.4403},0).wait(1).to({rotation:1.8459,x:875.9681,y:1102.7663},0).wait(1).to({rotation:0.9219,x:874.057,y:1099.1042},0).wait(1).to({rotation:0,x:872.15,y:1095.45},0).wait(1));

	// shoe
	this.instance_1 = new lib.show_full("synched",0);
	this.instance_1.setTransform(791.2,880.2,1,1,-7.956);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-7.6411,x:790.897,y:915.9673},0).wait(1).to({rotation:-7.3261,x:790.5947,y:951.6682},0).wait(1).to({rotation:-7.012,x:790.2931,y:987.2696},0).wait(1).to({rotation:-6.6984,x:789.9921,y:1022.8047},0).wait(1).to({rotation:-6.3858,x:789.692,y:1058.2402},0).wait(1).to({rotation:-6.074,x:789.3927,y:1093.5761},0).wait(1).to({rotation:-5.7631,x:789.0942,y:1128.8126},0).wait(1).to({rotation:-5.4527,x:788.7963,y:1163.9826},0).wait(1).to({rotation:-5.1433,x:788.4993,y:1199.0532},0).wait(1).to({rotation:-4.8347,x:788.2031,y:1234.0242},0).wait(1).to({rotation:-4.527,x:787.9077,y:1268.8956},0).wait(1).to({rotation:-4.2199,x:787.6129,y:1303.7007},0).wait(1).to({rotation:-3.9137,x:787.3189,y:1338.4063},0).wait(1).to({rotation:-3.6081,x:787.0255,y:1373.0455},0).wait(1).to({rotation:-3.3036,x:786.7332,y:1407.552},0).wait(1).to({rotation:-2.9997,x:786.4415,y:1441.9921},0).wait(1).to({rotation:-2.6964,x:786.1504,y:1476.3658},0).wait(1).to({rotation:-2.3943,x:785.8603,y:1510.6069},0).wait(1).to({rotation:-2.0928,x:785.5709,y:1544.7816},0).wait(1).to({rotation:-1.7921,x:785.2823,y:1578.8567},0).wait(1).to({rotation:-1.492,x:784.9942,y:1612.8655},0).wait(1).to({rotation:-1.1931,x:784.7073,y:1646.7416},0).wait(1).to({rotation:-0.8948,x:784.4209,y:1680.5513},0).wait(1).to({rotation:-0.5974,x:784.1354,y:1714.2615},0).wait(1).to({rotation:-0.3005,x:783.8504,y:1747.9053},0).wait(1).to({rotation:-0.0045,x:783.5663,y:1781.4496},0).wait(1).to({rotation:0.2906,x:783.283,y:1814.8944},0).wait(1).to({rotation:0.5333,x:783.0371,y:1842.4026},0).wait(1).to({x:782.9635,y:1842.4177},0).wait(1).to({x:782.8902,y:1842.4327},0).wait(1).to({x:782.8171,y:1842.4476},0).wait(1).to({x:782.7441,y:1842.4626},0).wait(1).to({x:782.6714,y:1842.4774},0).wait(1).to({x:782.5989,y:1842.4923},0).wait(1).to({x:782.5266,y:1842.5071},0).wait(1).to({x:782.4544,y:1842.5218},0).wait(1).to({x:782.3824,y:1842.5365},0).wait(1).to({x:782.3107,y:1842.5512},0).wait(1).to({x:782.2392,y:1842.5659},0).wait(1).to({x:782.1678,y:1842.5804},0).wait(1).to({x:782.0967,y:1842.595},0).wait(1).to({x:782.0257,y:1842.6095},0).wait(1).to({x:781.955,y:1842.624},0).wait(1).to({x:781.8844,y:1842.6384},0).wait(1).to({x:781.814,y:1842.6528},0).wait(1).to({x:781.7439,y:1842.6671},0).wait(1).to({x:781.674,y:1842.6815},0).wait(1).to({x:781.6042,y:1842.6957},0).wait(1).to({x:781.5346,y:1842.71},0).wait(1).to({x:781.4653,y:1842.7241},0).wait(1).to({x:781.3961,y:1842.7383},0).wait(1).to({x:781.3272,y:1842.7524},0).wait(1).to({x:781.2584,y:1842.7665},0).wait(1).to({x:781.1898,y:1842.7805},0).wait(1).to({x:781.1215,y:1842.7945},0).wait(1).to({x:781.0534,y:1842.8084},0).wait(1).to({x:780.9854,y:1842.8223},0).wait(1).to({x:780.9176,y:1842.8362},0).wait(1).to({x:780.85,y:1842.85},0).wait(1));

	// low_leg
	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(871.05,675.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-0.5575,x:869.7044,y:712.2362},0).wait(1).to({rotation:-1.1141,x:868.3612,y:749.0539},0).wait(1).to({rotation:-1.669,x:867.0218,y:785.769},0).wait(1).to({rotation:-2.2229,x:865.6849,y:822.4157},0).wait(1).to({rotation:-2.7753,x:864.3518,y:858.9597},0).wait(1).to({rotation:-3.3261,x:863.0223,y:895.4011},0).wait(1).to({rotation:-3.8754,x:861.6967,y:931.7398},0).wait(1).to({rotation:-4.4236,x:860.3735,y:968.0101},0).wait(1).to({rotation:-4.9703,x:859.0541,y:1004.1777},0).wait(1).to({rotation:-5.5155,x:857.7384,y:1040.2427},0).wait(1).to({rotation:-6.059,x:856.4265,y:1076.205},0).wait(1).to({rotation:-6.6016,x:855.117,y:1112.0989},0).wait(1).to({rotation:-7.1426,x:853.8113,y:1147.8901},0).wait(1).to({rotation:-7.6825,x:852.5081,y:1183.6129},0).wait(1).to({rotation:-8.2204,x:851.2099,y:1219.1988},0).wait(1).to({rotation:-8.7573,x:849.9142,y:1254.7163},0).wait(1).to({rotation:-9.2931,x:848.621,y:1290.1654},0).wait(1).to({rotation:-9.8269,x:847.3328,y:1325.4776},0).wait(1).to({rotation:-10.3596,x:846.047,y:1360.7213},0).wait(1).to({rotation:-10.8908,x:844.7651,y:1395.8625},0).wait(1).to({rotation:-11.4209,x:843.4856,y:1430.9351},0).wait(1).to({rotation:-11.949,x:842.2111,y:1465.8709},0).wait(1).to({rotation:-12.476,x:840.9391,y:1500.7383},0).wait(1).to({rotation:-13.0015,x:839.6708,y:1535.503},0).wait(1).to({rotation:-13.5259,x:838.4051,y:1570.1993},0).wait(1).to({rotation:-14.0488,x:837.1431,y:1604.7929},0).wait(1).to({rotation:-14.5701,x:835.8848,y:1639.2839},0).wait(1).to({rotation:-14.9109,x:835.0729,y:1667.5388},0).wait(1).to({rotation:-14.4094,x:836.3434,y:1666.9053},0).wait(1).to({rotation:-13.9095,x:837.6101,y:1666.2736},0).wait(1).to({rotation:-13.411,x:838.8729,y:1665.6438},0).wait(1).to({rotation:-12.9136,x:840.1333,y:1665.0153},0).wait(1).to({rotation:-12.4176,x:841.3898,y:1664.3887},0).wait(1).to({rotation:-11.9231,x:842.6425,y:1663.764},0).wait(1).to({rotation:-11.4302,x:843.8915,y:1663.1412},0).wait(1).to({rotation:-10.9382,x:845.1379,y:1662.5196},0).wait(1).to({rotation:-10.4477,x:846.3805,y:1661.8999},0).wait(1).to({rotation:-9.9583,x:847.6205,y:1661.2815},0).wait(1).to({rotation:-9.4708,x:848.8555,y:1660.6657},0).wait(1).to({rotation:-8.9843,x:850.088,y:1660.051},0).wait(1).to({rotation:-8.4994,x:851.3167,y:1659.4383},0).wait(1).to({rotation:-8.0154,x:852.5428,y:1658.8269},0).wait(1).to({rotation:-7.5334,x:853.7639,y:1658.218},0).wait(1).to({rotation:-7.0525,x:854.9824,y:1657.6103},0).wait(1).to({rotation:-6.5725,x:856.1984,y:1657.0039},0).wait(1).to({rotation:-6.0946,x:857.4093,y:1656.4},0).wait(1).to({rotation:-5.6176,x:858.6177,y:1655.7974},0).wait(1).to({rotation:-5.1421,x:859.8223,y:1655.1967},0).wait(1).to({rotation:-4.6677,x:861.0244,y:1654.5972},0).wait(1).to({rotation:-4.1947,x:862.2227,y:1653.9997},0).wait(1).to({rotation:-3.7232,x:863.4171,y:1653.404},0).wait(1).to({rotation:-3.2533,x:864.6078,y:1652.8103},0).wait(1).to({rotation:-2.7843,x:865.7959,y:1652.2178},0).wait(1).to({rotation:-2.3168,x:866.9803,y:1651.6271},0).wait(1).to({rotation:-1.8509,x:868.1608,y:1651.0384},0).wait(1).to({rotation:-1.3864,x:869.3375,y:1650.4516},0).wait(1).to({rotation:-0.9229,x:870.5117,y:1649.8661},0).wait(1).to({rotation:-0.461,x:871.6821,y:1649.2824},0).wait(1).to({rotation:0,x:872.85,y:1648.7},0).wait(1));

	// up_leg
	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(860.1,368.4,1,1,0,0,0,-440.7,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-440.6,scaleX:1.0033,rotation:0.8926,x:859.15,y:407.7},0).wait(1).to({scaleX:1.0065,rotation:1.7836,x:858.1,y:447},0).wait(1).to({scaleX:1.0098,rotation:2.6721,x:857.05,y:486.15},0).wait(1).to({scaleX:1.0131,rotation:3.559,x:856.05,y:525.25},0).wait(1).to({scaleX:1.0163,rotation:4.4433,x:855,y:564.2},0).wait(1).to({scaleX:1.0196,rotation:5.3252,x:853.95,y:603.05},0).wait(1).to({scaleX:1.0228,rotation:6.2046,x:852.95,y:641.85},0).wait(1).to({scaleX:1.026,rotation:7.0823,x:851.95,y:680.5},0).wait(1).to({scaleX:1.0293,rotation:7.9576,x:850.95,y:719.1},0).wait(1).to({scaleX:1.0325,rotation:8.8303,x:849.9,y:757.55},0).wait(1).to({scaleX:1.0357,rotation:9.7006,x:848.85,y:795.9},0).wait(1).to({scaleX:1.0389,rotation:10.5693,x:847.85,y:834.2},0).wait(1).to({scaleX:1.042,rotation:11.4354,x:846.85,y:872.4},0).wait(1).to({scaleX:1.0452,rotation:12.2999,x:845.85,y:910.5},0).wait(1).to({scaleX:1.0484,rotation:13.1611,x:844.85,y:948.45},0).wait(1).to({scaleX:1.0515,rotation:14.0206,x:843.85,y:986.3},0).wait(1).to({scaleX:1.0547,rotation:14.8784,x:842.9,y:1024.15},0).wait(1).to({scaleX:1.0579,rotation:15.733,x:841.9,y:1061.75},0).wait(1).to({scaleX:1.061,rotation:16.5859,x:840.95,y:1099.35},0).wait(1).to({scaleX:1.0641,rotation:17.4363,x:839.9,y:1136.85},0).wait(1).to({scaleX:1.0672,rotation:18.285,x:838.9,y:1174.25},0).wait(1).to({scaleX:1.0703,rotation:19.1305,x:837.95,y:1211.55},0).wait(1).to({scaleX:1.0735,rotation:19.9743,x:836.95,y:1248.75},0).wait(1).to({scaleX:1.0766,rotation:20.8156,x:836,y:1285.8},0).wait(1).to({scaleX:1.0796,rotation:21.6552,x:835,y:1322.8},0).wait(1).to({scaleX:1.0827,rotation:22.4924,x:834.05,y:1359.7},0).wait(1).to({scaleX:1.0858,rotation:23.327,x:833.05,y:1396.45},0).wait(1).to({scaleX:1.0883,rotation:23.8846,x:832.4,y:1426.25},0).wait(1).to({rotation:23.1501,x:833.35,y:1423.3},0).wait(1).to({rotation:22.4178,x:834.3,y:1420.35},0).wait(1).to({rotation:21.6877,x:835.25,y:1417.45},0).wait(1).to({rotation:20.959,x:836.2,y:1414.55},0).wait(1).to({rotation:20.2326,x:837.1,y:1411.65},0).wait(1).to({rotation:19.5083,x:838,y:1408.75},0).wait(1).to({rotation:18.7862,x:838.95,y:1405.85},0).wait(1).to({rotation:18.0656,x:839.85,y:1402.95},0).wait(1).to({rotation:17.3472,x:840.75,y:1400.05},0).wait(1).to({rotation:16.6303,x:841.65,y:1397.15},0).wait(1).to({rotation:15.9163,x:842.6,y:1394.3},0).wait(1).to({rotation:15.2037,x:843.5,y:1391.45},0).wait(1).to({rotation:14.4934,x:844.4,y:1388.65},0).wait(1).to({rotation:13.7845,x:845.25,y:1385.8},0).wait(1).to({rotation:13.0786,x:846.15,y:1382.95},0).wait(1).to({rotation:12.3741,x:847.05,y:1380.15},0).wait(1).to({rotation:11.6711,x:847.95,y:1377.3},0).wait(1).to({rotation:10.971,x:848.85,y:1374.55},0).wait(1).to({rotation:10.2723,x:849.75,y:1371.75},0).wait(1).to({rotation:9.5759,x:850.65,y:1368.95},0).wait(1).to({rotation:8.8809,x:851.5,y:1366.2},0).wait(1).to({rotation:8.1882,x:852.4,y:1363.35},0).wait(1).to({rotation:7.4976,x:853.3,y:1360.65},0).wait(1).to({rotation:6.8092,x:854.15,y:1357.85},0).wait(1).to({rotation:6.1223,x:855.05,y:1355.1},0).wait(1).to({rotation:5.4376,x:855.9,y:1352.35},0).wait(1).to({rotation:4.7551,x:856.75,y:1349.65},0).wait(1).to({rotation:4.0748,x:857.65,y:1346.95},0).wait(1).to({rotation:3.3959,x:858.5,y:1344.2},0).wait(1).to({rotation:2.7192,x:859.4,y:1341.5},0).wait(1).to({rotation:2.044,x:860.25,y:1338.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(598.8,0,495.5,1915.8);


(lib.רגל1צעדקדימהcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hip
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(864.25,968.25,1,1,0,0,0,-7.9,-127.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:1.4057,x:868.9892,y:1095.745},0).wait(1).to({rotation:2.8113,x:865.8255,y:1095.9633},0).wait(1).to({rotation:4.217,x:862.6609,y:1096.1048},0).wait(1).to({rotation:5.6227,x:859.4971,y:1096.1697},0).wait(1).to({rotation:7.0283,x:856.3361,y:1096.1578},0).wait(1).to({rotation:8.434,x:853.1798,y:1096.0694},0).wait(1).to({rotation:9.8396,x:850.03,y:1095.9045},0).wait(1).to({rotation:11.2453,x:846.8886,y:1095.6633},0).wait(1).to({rotation:12.651,x:843.7574,y:1095.3461},0).wait(1).to({rotation:14.0566,x:840.6384,y:1094.9531},0).wait(1).to({rotation:15.4623,x:837.5334,y:1094.4847},0).wait(1).to({rotation:16.868,x:834.4442,y:1093.9412},0).wait(1).to({rotation:18.2736,x:831.3727,y:1093.323},0).wait(1).to({rotation:19.6793,x:828.3207,y:1092.6306},0).wait(1).to({rotation:21.0849,x:825.29,y:1091.8645},0).wait(1).to({rotation:22.4906,x:822.2825,y:1091.0252},0).wait(1).to({rotation:23.8963,x:819.2998,y:1090.1134},0).wait(1).to({rotation:25.3019,x:816.3438,y:1089.1296},0).wait(1).to({rotation:26.7076,x:813.4162,y:1088.0745},0).wait(1).to({rotation:26.9176,x:812.347,y:1088.89},0).wait(1).to({rotation:27.1275,x:811.2785,y:1089.7039},0).wait(1).to({rotation:27.3375,x:810.2106,y:1090.5163},0).wait(1).to({rotation:27.5474,x:809.1434,y:1091.3271},0).wait(1).to({rotation:27.7574,x:808.0769,y:1092.1363},0).wait(1).to({rotation:27.9674,x:807.0112,y:1092.9439},0).wait(1).to({rotation:28.1773,x:805.9461,y:1093.7501},0).wait(1).to({rotation:28.3873,x:804.8817,y:1094.5546},0).wait(1).to({rotation:28.5972,x:803.8181,y:1095.3576},0).wait(1).to({rotation:28.8072,x:802.7552,y:1096.159},0).wait(1).to({rotation:29.0172,x:801.693,y:1096.9589},0).wait(1).to({rotation:29.2271,x:800.6315,y:1097.7573},0).wait(1).to({rotation:29.4371,x:799.5708,y:1098.5541},0).wait(1).to({rotation:29.647,x:798.5109,y:1099.3494},0).wait(1).to({rotation:29.857,x:797.4517,y:1100.1431},0).wait(1).to({rotation:30.067,x:796.3932,y:1100.9353},0).wait(1).to({rotation:30.2769,x:795.3356,y:1101.726},0).wait(1).to({rotation:30.4869,x:794.2786,y:1102.5151},0).wait(1).to({rotation:30.6968,x:793.2225,y:1103.3027},0).wait(1).to({rotation:30.9068,x:792.1671,y:1104.0888},0).wait(1).to({x:791.5271,y:1105.0888},0).wait(1).to({x:790.8871,y:1106.0888},0).wait(1).to({x:790.2471,y:1107.0888},0).wait(1).to({x:789.6071,y:1108.0888},0).wait(1).to({x:788.9671,y:1109.0888},0).wait(1).to({x:788.3271,y:1110.0888},0).wait(1).to({x:787.6871,y:1111.0888},0).wait(1).to({x:787.0471,y:1112.0888},0).wait(1).to({x:786.4071,y:1113.0888},0).wait(1).to({x:785.7671,y:1114.0888},0).wait(1).to({x:785.1271,y:1115.0888},0).wait(1).to({x:784.4871,y:1116.0888},0).wait(1).to({x:783.8471,y:1117.0888},0).wait(1).to({x:783.2071,y:1118.0888},0).wait(1).to({x:782.5671,y:1119.0888},0).wait(1).to({x:781.9271,y:1120.0888},0).wait(1).to({x:781.2871,y:1121.0888},0).wait(1).to({x:780.6471,y:1122.0888},0).wait(1).to({x:780.0071,y:1123.0888},0).wait(1).to({x:779.3671,y:1124.0888},0).wait(1).to({x:778.7271,y:1125.0888},0).wait(1).to({x:778.0871,y:1126.0888},0).wait(1).to({x:777.4471,y:1127.0888},0).wait(1).to({x:776.8071,y:1128.0888},0).wait(1).to({x:776.1671,y:1129.0888},0).wait(1).to({x:775.5271,y:1130.0888},0).wait(1).to({x:774.8871,y:1131.0888},0).wait(1).to({x:774.2471,y:1132.0888},0).wait(1).to({x:773.6071,y:1133.0888},0).wait(1).to({x:772.9671,y:1134.0888},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// shoe
	this.instance_1 = new lib.show_full("synched",0);
	this.instance_1.setTransform(847.05,1808.95,1,1,0.5289,0,0,59.9,-36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:0.7411,x:773.5344,y:1840.0268},0).wait(1).to({rotation:0.9525,x:760.2703,y:1835.5539},0).wait(1).to({rotation:1.1638,x:747.007,y:1831.0805},0).wait(1).to({rotation:1.3752,x:733.7446,y:1826.6067},0).wait(1).to({rotation:1.5865,x:720.4829,y:1822.1324},0).wait(1).to({rotation:1.7979,x:707.2222,y:1817.6576},0).wait(1).to({rotation:2.0092,x:693.9622,y:1813.1823},0).wait(1).to({rotation:2.2206,x:680.7031,y:1808.7066},0).wait(1).to({rotation:2.4319,x:667.4448,y:1804.2304},0).wait(1).to({rotation:2.6432,x:654.1873,y:1799.7538},0).wait(1).to({rotation:2.8546,x:640.9307,y:1795.2767},0).wait(1).to({rotation:3.0659,x:627.6749,y:1790.7992},0).wait(1).to({rotation:3.2773,x:614.42,y:1786.3212},0).wait(1).to({rotation:3.4886,x:601.1659,y:1781.8428},0).wait(1).to({rotation:3.7,x:587.9126,y:1777.3639},0).wait(1).to({rotation:3.9113,x:574.6602,y:1772.8846},0).wait(1).to({rotation:4.1227,x:561.4086,y:1768.4049},0).wait(1).to({rotation:4.334,x:548.1579,y:1763.9247},0).wait(1).to({rotation:4.5454,x:534.908,y:1759.4441},0).wait(1).to({rotation:5.6546,x:526.3725,y:1756.5495},0).wait(1).to({rotation:6.7637,x:517.8607,y:1753.6436},0).wait(1).to({rotation:7.8729,x:509.3728,y:1750.727},0).wait(1).to({rotation:8.9821,x:500.9089,y:1747.8},0).wait(1).to({rotation:10.0913,x:492.4693,y:1744.8631},0).wait(1).to({rotation:11.2005,x:484.0542,y:1741.9169},0).wait(1).to({rotation:12.3097,x:475.6638,y:1738.9617},0).wait(1).to({rotation:13.4189,x:467.2981,y:1735.9982},0).wait(1).to({rotation:14.5281,x:458.9575,y:1733.0266},0).wait(1).to({rotation:15.6373,x:450.6419,y:1730.0476},0).wait(1).to({rotation:16.7465,x:442.3517,y:1727.0617},0).wait(1).to({rotation:17.8557,x:434.0868,y:1724.0692},0).wait(1).to({rotation:18.9649,x:425.8474,y:1721.0708},0).wait(1).to({rotation:20.074,x:417.6337,y:1718.0668},0).wait(1).to({rotation:21.1832,x:409.4457,y:1715.0579},0).wait(1).to({rotation:22.2924,x:401.2835,y:1712.0444},0).wait(1).to({rotation:23.4016,x:393.1472,y:1709.0269},0).wait(1).to({rotation:24.5108,x:385.0369,y:1706.006},0).wait(1).to({rotation:25.62,x:376.9526,y:1702.982},0).wait(1).to({rotation:26.7292,x:368.8944,y:1699.9556},0).wait(1).to({rotation:26.8609,x:367.0708,y:1700.8636},0).wait(1).to({rotation:26.9927,x:365.2475,y:1701.7715},0).wait(1).to({rotation:27.1244,x:363.4245,y:1702.6795},0).wait(1).to({rotation:27.2561,x:361.602,y:1703.5874},0).wait(1).to({rotation:27.3878,x:359.7798,y:1704.4953},0).wait(1).to({rotation:27.5196,x:357.958,y:1705.4031},0).wait(1).to({rotation:27.6513,x:356.1365,y:1706.311},0).wait(1).to({rotation:27.783,x:354.3154,y:1707.2188},0).wait(1).to({rotation:27.9147,x:352.4947,y:1708.1266},0).wait(1).to({rotation:28.0465,x:350.6743,y:1709.0344},0).wait(1).to({rotation:28.1782,x:348.8544,y:1709.9421},0).wait(1).to({rotation:28.3099,x:347.0348,y:1710.8499},0).wait(1).to({rotation:28.4416,x:345.2155,y:1711.7576},0).wait(1).to({rotation:28.5734,x:343.3966,y:1712.6653},0).wait(1).to({rotation:28.7051,x:341.5781,y:1713.573},0).wait(1).to({rotation:28.8368,x:339.76,y:1714.4807},0).wait(1).to({rotation:28.9686,x:337.9422,y:1715.3883},0).wait(1).to({rotation:29.1003,x:336.1248,y:1716.296},0).wait(1).to({rotation:29.232,x:334.3078,y:1717.2036},0).wait(1).to({rotation:29.3637,x:332.4912,y:1718.1112},0).wait(1).to({rotation:29.4955,x:330.6749,y:1719.0188},0).wait(1).to({rotation:29.6272,x:328.859,y:1719.9264},0).wait(1).to({rotation:29.7589,x:327.0434,y:1720.834},0).wait(1).to({rotation:29.8906,x:325.2282,y:1721.7416},0).wait(1).to({rotation:30.0224,x:323.4134,y:1722.6492},0).wait(1).to({rotation:30.1541,x:321.599,y:1723.5567},0).wait(1).to({rotation:30.2858,x:319.7849,y:1724.4643},0).wait(1).to({rotation:30.4175,x:317.9712,y:1725.3719},0).wait(1).to({rotation:30.5493,x:316.1579,y:1726.2794},0).wait(1).to({rotation:30.681,x:314.3449,y:1727.187},0).wait(1).to({rotation:28.1206,x:315.709,y:1730.4925},0).wait(1).to({rotation:25.5601,x:317.2126,y:1733.7909},0).wait(1).to({rotation:22.9997,x:318.8551,y:1737.0759},0).wait(1).to({rotation:20.4393,x:320.6359,y:1740.3412},0).wait(1).to({rotation:17.8789,x:322.554,y:1743.5807},0).wait(1).to({rotation:15.3184,x:324.608,y:1746.7884},0).wait(1).to({rotation:12.758,x:326.7964,y:1749.9582},0).wait(1).to({rotation:10.1976,x:329.1173,y:1753.084},0).wait(1).to({rotation:7.6371,x:331.5688,y:1756.1601},0).wait(1).to({rotation:5.0767,x:334.1483,y:1759.1807},0).wait(1).to({rotation:2.5163,x:336.8534,y:1762.14},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// low_leg
	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(872.85,1648.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:0.2115,x:860.3105,y:1644.5026},0).wait(1).to({rotation:0.4229,x:847.7711,y:1640.3053},0).wait(1).to({rotation:0.6344,x:835.2316,y:1636.1079},0).wait(1).to({rotation:0.8458,x:822.6921,y:1631.9105},0).wait(1).to({rotation:1.0573,x:810.1526,y:1627.7132},0).wait(1).to({rotation:1.2687,x:797.6132,y:1623.5158},0).wait(1).to({rotation:1.4802,x:785.0737,y:1619.3184},0).wait(1).to({rotation:1.6916,x:772.5342,y:1615.1211},0).wait(1).to({rotation:1.9031,x:759.9947,y:1610.9237},0).wait(1).to({rotation:2.1145,x:747.4553,y:1606.7263},0).wait(1).to({rotation:2.326,x:734.9158,y:1602.5289},0).wait(1).to({rotation:2.5375,x:722.3763,y:1598.3316},0).wait(1).to({rotation:2.7489,x:709.8368,y:1594.1342},0).wait(1).to({rotation:2.9604,x:697.2974,y:1589.9368},0).wait(1).to({rotation:3.1718,x:684.7579,y:1585.7395},0).wait(1).to({rotation:3.3833,x:672.2184,y:1581.5421},0).wait(1).to({rotation:3.5947,x:659.6789,y:1577.3447},0).wait(1).to({rotation:3.8062,x:647.1395,y:1573.1474},0).wait(1).to({rotation:4.0176,x:634.6,y:1568.95},0).wait(1).to({rotation:5.127,x:629.4925,y:1568.5625},0).wait(1).to({rotation:6.2364,x:624.385,y:1568.175},0).wait(1).to({rotation:7.3458,x:619.2775,y:1567.7875},0).wait(1).to({rotation:8.4551,x:614.17,y:1567.4},0).wait(1).to({rotation:9.5645,x:609.0625,y:1567.0125},0).wait(1).to({rotation:10.6739,x:603.955,y:1566.625},0).wait(1).to({rotation:11.7833,x:598.8475,y:1566.2375},0).wait(1).to({rotation:12.8926,x:593.74,y:1565.85},0).wait(1).to({rotation:14.002,x:588.6325,y:1565.4625},0).wait(1).to({rotation:15.1114,x:583.525,y:1565.075},0).wait(1).to({rotation:16.2207,x:578.4175,y:1564.6875},0).wait(1).to({rotation:17.3301,x:573.31,y:1564.3},0).wait(1).to({rotation:18.4395,x:568.2025,y:1563.9125},0).wait(1).to({rotation:19.5489,x:563.095,y:1563.525},0).wait(1).to({rotation:20.6582,x:557.9875,y:1563.1375},0).wait(1).to({rotation:21.7676,x:552.88,y:1562.75},0).wait(1).to({rotation:22.877,x:547.7725,y:1562.3625},0).wait(1).to({rotation:23.9864,x:542.665,y:1561.975},0).wait(1).to({rotation:25.0957,x:537.5575,y:1561.5875},0).wait(1).to({rotation:26.2051,x:532.45,y:1561.2},0).wait(1).to({rotation:26.3369,x:530.9317,y:1562.665},0).wait(1).to({rotation:26.4686,x:529.4133,y:1564.13},0).wait(1).to({rotation:26.6004,x:527.895,y:1565.595},0).wait(1).to({rotation:26.7322,x:526.3767,y:1567.06},0).wait(1).to({rotation:26.864,x:524.8583,y:1568.525},0).wait(1).to({rotation:26.9957,x:523.34,y:1569.99},0).wait(1).to({rotation:27.1275,x:521.8217,y:1571.455},0).wait(1).to({rotation:27.2593,x:520.3033,y:1572.92},0).wait(1).to({rotation:27.3911,x:518.785,y:1574.385},0).wait(1).to({rotation:27.5228,x:517.2667,y:1575.85},0).wait(1).to({rotation:27.6546,x:515.7483,y:1577.315},0).wait(1).to({rotation:27.7864,x:514.23,y:1578.78},0).wait(1).to({rotation:27.9182,x:512.7117,y:1580.245},0).wait(1).to({rotation:28.0499,x:511.1933,y:1581.71},0).wait(1).to({rotation:28.1817,x:509.675,y:1583.175},0).wait(1).to({rotation:28.3135,x:508.1567,y:1584.64},0).wait(1).to({rotation:28.4452,x:506.6383,y:1586.105},0).wait(1).to({rotation:28.577,x:505.12,y:1587.57},0).wait(1).to({rotation:28.7088,x:503.6017,y:1589.035},0).wait(1).to({rotation:28.8406,x:502.0833,y:1590.5},0).wait(1).to({rotation:28.9723,x:500.565,y:1591.965},0).wait(1).to({rotation:29.1041,x:499.0467,y:1593.43},0).wait(1).to({rotation:29.2359,x:497.5283,y:1594.895},0).wait(1).to({rotation:29.3677,x:496.01,y:1596.36},0).wait(1).to({rotation:29.4994,x:494.4917,y:1597.825},0).wait(1).to({rotation:29.6312,x:492.9733,y:1599.29},0).wait(1).to({rotation:29.763,x:491.455,y:1600.755},0).wait(1).to({rotation:29.8948,x:489.9367,y:1602.22},0).wait(1).to({rotation:30.0265,x:488.4183,y:1603.685},0).wait(1).to({rotation:30.1583,x:486.9,y:1605.15},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// up_leg
	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(860.3,1338.8,1.0883,1,2.0418,0,0,-440.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-440.6,regY:-0.1,rotation:3.4479,x:851.05,y:1336.4},0).wait(1).to({rotation:4.8534,x:842.25,y:1334.35},0).wait(1).to({rotation:6.259,x:833.5,y:1332.35},0).wait(1).to({rotation:7.6645,x:824.75,y:1330.25},0).wait(1).to({rotation:9.0701,x:815.95,y:1328.2},0).wait(1).to({rotation:10.4756,x:807.2,y:1326.15},0).wait(1).to({rotation:11.8812,x:798.4,y:1324.15},0).wait(1).to({rotation:13.2867,x:789.65,y:1322.1},0).wait(1).to({rotation:14.6923,x:780.95,y:1320.05},0).wait(1).to({scaleY:1.0001,rotation:16.0978,x:772.15,y:1318},0).wait(1).to({scaleY:1,rotation:17.5034,x:763.35,y:1316},0).wait(1).to({rotation:18.9089,x:754.65,y:1313.95},0).wait(1).to({rotation:20.3145,x:745.8,y:1311.9},0).wait(1).to({rotation:21.72,x:737.05,y:1309.85},0).wait(1).to({rotation:23.1256,x:728.3,y:1307.85},0).wait(1).to({rotation:24.5311,x:719.55,y:1305.75},0).wait(1).to({rotation:25.9367,x:710.75,y:1303.75},0).wait(1).to({rotation:27.3422,x:701.95,y:1301.7},0).wait(1).to({rotation:28.7478,x:693.2,y:1299.65},0).wait(1).to({rotation:28.9578,x:692,y:1299},0).wait(1).to({rotation:29.1677,x:690.8,y:1298.35},0).wait(1).to({rotation:29.3777,x:689.6,y:1297.7},0).wait(1).to({rotation:29.5876,x:688.4,y:1297.1},0).wait(1).to({rotation:29.7976,x:687.2,y:1296.4},0).wait(1).to({rotation:30.0075,x:686,y:1295.8},0).wait(1).to({rotation:30.2175,x:684.8,y:1295.2},0).wait(1).to({rotation:30.4274,x:683.65,y:1294.5},0).wait(1).to({rotation:30.6374,x:682.45,y:1293.85},0).wait(1).to({rotation:30.8473,x:681.25,y:1293.25},0).wait(1).to({rotation:31.0573,x:680.05,y:1292.6},0).wait(1).to({rotation:31.2672,x:678.85,y:1291.95},0).wait(1).to({rotation:31.4772,x:677.65,y:1291.3},0).wait(1).to({rotation:31.6871,x:676.45,y:1290.65},0).wait(1).to({rotation:31.8971,x:675.25,y:1290},0).wait(1).to({rotation:32.107,x:674.05,y:1289.35},0).wait(1).to({rotation:32.317,x:672.85,y:1288.7},0).wait(1).to({rotation:32.5269,x:671.65,y:1288.1},0).wait(1).to({rotation:32.7368,x:670.45,y:1287.45},0).wait(1).to({rotation:32.9468,x:669.25,y:1286.75},0).wait(1).to({x:668.2,y:1288.45},0).wait(1).to({x:667.15,y:1290.1},0).wait(1).to({x:666.05,y:1291.75},0).wait(1).to({x:665,y:1293.45},0).wait(1).to({x:663.95,y:1295.1},0).wait(1).to({x:662.85,y:1296.75},0).wait(1).to({x:661.8,y:1298.45},0).wait(1).to({x:660.75,y:1300.1},0).wait(1).to({x:659.65,y:1301.75},0).wait(1).to({x:658.6,y:1303.45},0).wait(1).to({x:657.55,y:1305.1},0).wait(1).to({x:656.45,y:1306.75},0).wait(1).to({x:655.4,y:1308.45},0).wait(1).to({x:654.35,y:1310.1},0).wait(1).to({x:653.25,y:1311.75},0).wait(1).to({x:652.2,y:1313.45},0).wait(1).to({x:651.15,y:1315.1},0).wait(1).to({x:650.05,y:1316.75},0).wait(1).to({x:649,y:1318.45},0).wait(1).to({x:647.95,y:1320.1},0).wait(1).to({x:646.85,y:1321.75},0).wait(1).to({x:645.8,y:1323.45},0).wait(1).to({x:644.75,y:1325.1},0).wait(1).to({x:643.65,y:1326.75},0).wait(1).to({x:642.6,y:1328.45},0).wait(1).to({x:641.55,y:1330.1},0).wait(1).to({x:640.45,y:1331.75},0).wait(1).to({x:639.4,y:1333.45},0).wait(1).to({x:638.35,y:1335.1},0).wait(1).to({x:637.25,y:1336.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.3,911.8,893.1000000000001,1005.8);


(lib.רגל1צעדאחורה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hip
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(864.25,968.25,1,1,0,0,0,-7.9,-127.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,rotation:1.1972,x:869.4896,y:1095.5048},0).wait(1).to({rotation:2.3943,x:866.827,y:1095.5039},0).wait(1).to({rotation:3.5915,x:864.1632,y:1095.4475},0).wait(1).to({rotation:4.7887,x:861.4995,y:1095.3353},0).wait(1).to({rotation:5.9859,x:858.8369,y:1095.1675},0).wait(1).to({rotation:7.183,x:856.1768,y:1094.9441},0).wait(1).to({rotation:8.3802,x:853.5201,y:1094.6652},0).wait(1).to({rotation:9.5774,x:850.8681,y:1094.3308},0).wait(1).to({rotation:10.7745,x:848.222,y:1093.941},0).wait(1).to({rotation:11.9717,x:845.5829,y:1093.496},0).wait(1).to({rotation:13.1689,x:842.9519,y:1092.996},0).wait(1).to({rotation:14.366,x:840.3302,y:1092.4411},0).wait(1).to({rotation:15.5632,x:837.719,y:1091.8315},0).wait(1).to({rotation:16.7604,x:835.1194,y:1091.1674},0).wait(1).to({rotation:17.9576,x:832.5324,y:1090.4492},0).wait(1).to({rotation:19.1547,x:829.9593,y:1089.6771},0).wait(1).to({rotation:20.3519,x:827.4012,y:1088.8513},0).wait(1).to({rotation:21.5491,x:824.8592,y:1087.9723},0).wait(1).to({rotation:22.7462,x:822.3343,y:1087.0403},0).wait(1).to({rotation:23.9434,x:819.8278,y:1086.0558},0).wait(1).to({rotation:21.2346,x:825.5253,y:1088.2138},0).wait(1).to({rotation:18.5258,x:831.3094,y:1090.1003},0).wait(1).to({rotation:15.8169,x:837.167,y:1091.7116},0).wait(1).to({rotation:13.1081,x:843.0852,y:1093.0444},0).wait(1).to({rotation:10.3993,x:849.0507,y:1094.0963},0).wait(1).to({rotation:7.6905,x:855.0502,y:1094.8653},0).wait(1).to({rotation:4.9817,x:861.0702,y:1095.3501},0).wait(1).to({rotation:2.2728,x:867.0973,y:1095.55},0).wait(1).to({rotation:-0.436,x:873.1181,y:1095.4651},0).wait(1).to({rotation:-3.1448,x:879.119,y:1095.096},0).wait(1).to({rotation:-5.8536,x:885.0867,y:1094.4439},0).wait(1).to({rotation:-8.5625,x:891.0079,y:1093.5107},0).wait(1).to({rotation:-11.2713,x:896.8692,y:1092.299},0).wait(1).to({rotation:-13.9801,x:902.6577,y:1090.8118},0).wait(1).to({rotation:-16.6889,x:908.3603,y:1089.0529},0).wait(1).to({rotation:-19.3977,x:913.9643,y:1087.0267},0).wait(1).to({rotation:-22.1066,x:919.4573,y:1084.7381},0).wait(1).to({rotation:-24.8154,x:924.8268,y:1082.1927},0).wait(1).to({rotation:-27.5242,x:930.061,y:1079.3965},0).wait(1).to({x:930.9576,y:1080.9827},0).wait(1).to({x:931.8541,y:1082.5689},0).wait(1).to({x:932.7507,y:1084.1551},0).wait(1).to({x:933.6472,y:1085.7414},0).wait(1).to({x:934.5438,y:1087.3276},0).wait(1).to({x:935.4403,y:1088.9138},0).wait(1).to({x:936.3369,y:1090.5},0).wait(1).to({x:937.2334,y:1092.0862},0).wait(1).to({x:938.13,y:1093.6724},0).wait(1).to({x:939.0265,y:1095.2586},0).wait(1).to({x:939.9231,y:1096.8448},0).wait(1).to({x:940.8196,y:1098.431},0).wait(1).to({x:941.7162,y:1100.0172},0).wait(1).to({x:942.6127,y:1101.6034},0).wait(1).to({x:943.5093,y:1103.1896},0).wait(1).to({x:944.4059,y:1104.7758},0).wait(1).to({x:945.3024,y:1106.362},0).wait(1).to({x:946.199,y:1107.9483},0).wait(1).to({x:947.0955,y:1109.5345},0).wait(1).to({x:947.9921,y:1111.1207},0).wait(1).to({x:948.8886,y:1112.7069},0).wait(1).to({x:949.7852,y:1114.2931},0).wait(1).to({x:950.6817,y:1115.8793},0).wait(1).to({x:951.5783,y:1117.4655},0).wait(1).to({x:952.4748,y:1119.0517},0).wait(1).to({x:953.3714,y:1120.6379},0).wait(1).to({x:954.2679,y:1122.2241},0).wait(1).to({x:955.1645,y:1123.8103},0).wait(1).to({x:956.061,y:1125.3965},0).wait(1).to({regX:-7.9,regY:-127.2,rotation:-27.523,x:890.2,y:1016.2},0).wait(107).to({startPosition:0},0).to({_off:true},1).wait(3));

	// shoe
	this.instance_1 = new lib.show_full("synched",0);
	this.instance_1.setTransform(780.85,1842.75,1,1,0.5298);

	this.instance_2 = new lib.נעלמתכוכפת("synched",0);
	this.instance_2.setTransform(1234.7,1827.2,1,1,0,0,0,1235.5,499.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{startPosition:2}}]},1).to({state:[{t:this.instance_2,p:{startPosition:9}}]},107).to({state:[]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-1.2713,x:782.1175,y:1836.14},0).wait(1).to({rotation:-3.0741,x:783.385,y:1829.53},0).wait(1).to({rotation:-4.8769,x:784.6525,y:1822.92},0).wait(1).to({rotation:-6.6797,x:785.92,y:1816.31},0).wait(1).to({rotation:-8.4825,x:787.1875,y:1809.7},0).wait(1).to({rotation:-10.2853,x:788.455,y:1803.09},0).wait(1).to({rotation:-12.0881,x:789.7225,y:1796.48},0).wait(1).to({rotation:-13.891,x:790.99,y:1789.87},0).wait(1).to({rotation:-15.6938,x:792.2575,y:1783.26},0).wait(1).to({rotation:-17.4966,x:793.525,y:1776.65},0).wait(1).to({rotation:-19.2994,x:794.7925,y:1770.04},0).wait(1).to({rotation:-21.1022,x:796.06,y:1763.43},0).wait(1).to({rotation:-22.905,x:797.3275,y:1756.82},0).wait(1).to({rotation:-24.7078,x:798.595,y:1750.21},0).wait(1).to({rotation:-26.5106,x:799.8625,y:1743.6},0).wait(1).to({rotation:-28.3135,x:801.13,y:1736.99},0).wait(1).to({rotation:-30.1163,x:802.3975,y:1730.38},0).wait(1).to({rotation:-31.9191,x:803.665,y:1723.77},0).wait(1).to({rotation:-33.7219,x:804.9325,y:1717.16},0).wait(1).to({rotation:-35.5247,x:806.2,y:1710.55},0).wait(1).to({rotation:-36.2877,x:832.7526,y:1709.9289},0).wait(1).to({rotation:-37.0507,x:859.3053,y:1709.3079},0).wait(1).to({rotation:-37.8137,x:885.8579,y:1708.6868},0).wait(1).to({rotation:-38.5767,x:912.4105,y:1708.0658},0).wait(1).to({rotation:-39.3397,x:938.9632,y:1707.4447},0).wait(1).to({rotation:-40.1027,x:965.5158,y:1706.8237},0).wait(1).to({rotation:-40.8657,x:992.0684,y:1706.2026},0).wait(1).to({rotation:-41.6287,x:1018.6211,y:1705.5816},0).wait(1).to({rotation:-42.3917,x:1045.1737,y:1704.9605},0).wait(1).to({rotation:-43.1548,x:1071.7263,y:1704.3395},0).wait(1).to({rotation:-43.9178,x:1098.2789,y:1703.7184},0).wait(1).to({rotation:-44.6808,x:1124.8316,y:1703.0974},0).wait(1).to({rotation:-45.4438,x:1151.3842,y:1702.4763},0).wait(1).to({rotation:-46.2068,x:1177.9368,y:1701.8553},0).wait(1).to({rotation:-46.9698,x:1204.4895,y:1701.2342},0).wait(1).to({rotation:-47.7328,x:1231.0421,y:1700.6132},0).wait(1).to({rotation:-48.4958,x:1257.5947,y:1699.9921},0).wait(1).to({rotation:-49.2588,x:1284.1474,y:1699.3711},0).wait(1).to({rotation:-50.0218,x:1310.7,y:1698.75},0).wait(1).to({rotation:-48.9753,x:1305.5286,y:1702.7333},0).wait(1).to({rotation:-47.9288,x:1300.3571,y:1706.7167},0).wait(1).to({rotation:-46.8822,x:1295.1857,y:1710.7},0).wait(1).to({rotation:-45.8357,x:1290.0143,y:1714.6833},0).wait(1).to({rotation:-44.7892,x:1284.8429,y:1718.6667},0).wait(1).to({rotation:-43.7427,x:1279.6714,y:1722.65},0).wait(1).to({rotation:-42.6962,x:1274.5,y:1726.6333},0).wait(1).to({rotation:-41.6496,x:1269.3286,y:1730.6167},0).wait(1).to({rotation:-40.6031,x:1264.1571,y:1734.6},0).wait(1).to({rotation:-39.5566,x:1258.9857,y:1738.5833},0).wait(1).to({rotation:-38.5101,x:1253.8143,y:1742.5667},0).wait(1).to({rotation:-37.4636,x:1248.6429,y:1746.55},0).wait(1).to({rotation:-36.4171,x:1243.4714,y:1750.5333},0).wait(1).to({rotation:-35.3705,x:1238.3,y:1754.5167},0).wait(1).to({rotation:-34.324,x:1233.1286,y:1758.5},0).wait(1).to({rotation:-33.2775,x:1227.9571,y:1762.4833},0).wait(1).to({rotation:-32.231,x:1222.7857,y:1766.4667},0).wait(1).to({rotation:-31.1845,x:1217.6143,y:1770.45},0).wait(1).to({rotation:-30.1379,x:1212.4429,y:1774.4333},0).wait(1).to({rotation:-29.0914,x:1207.2714,y:1778.4167},0).wait(1).to({rotation:-28.0449,x:1202.1,y:1782.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(112));

	// low_leg
	this.instance_3 = new lib.low_leg_full("synched",0);
	this.instance_3.setTransform(872.85,1648.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-1.8028,x:867.5175,y:1641.24},0).wait(1).to({rotation:-3.6056,x:862.185,y:1633.78},0).wait(1).to({rotation:-5.4084,x:856.8525,y:1626.32},0).wait(1).to({rotation:-7.2112,x:851.52,y:1618.86},0).wait(1).to({rotation:-9.014,x:846.1875,y:1611.4},0).wait(1).to({rotation:-10.8169,x:840.855,y:1603.94},0).wait(1).to({rotation:-12.6197,x:835.5225,y:1596.48},0).wait(1).to({rotation:-14.4225,x:830.19,y:1589.02},0).wait(1).to({rotation:-16.2253,x:824.8575,y:1581.56},0).wait(1).to({rotation:-18.0281,x:819.525,y:1574.1},0).wait(1).to({rotation:-19.8309,x:814.1925,y:1566.64},0).wait(1).to({rotation:-21.6337,x:808.86,y:1559.18},0).wait(1).to({rotation:-23.4365,x:803.5275,y:1551.72},0).wait(1).to({rotation:-25.2393,x:798.195,y:1544.26},0).wait(1).to({rotation:-27.0421,x:792.8625,y:1536.8},0).wait(1).to({rotation:-28.845,x:787.53,y:1529.34},0).wait(1).to({rotation:-30.6478,x:782.1975,y:1521.88},0).wait(1).to({rotation:-32.4506,x:776.865,y:1514.42},0).wait(1).to({rotation:-34.2534,x:771.5325,y:1506.96},0).wait(1).to({rotation:-36.0562,x:766.2,y:1499.5},0).wait(1).to({rotation:-36.8193,x:790.0342,y:1499.7605},0).wait(1).to({rotation:-37.5824,x:813.8684,y:1500.0211},0).wait(1).to({rotation:-38.3455,x:837.7026,y:1500.2816},0).wait(1).to({rotation:-39.1086,x:861.5368,y:1500.5421},0).wait(1).to({rotation:-39.8717,x:885.3711,y:1500.8026},0).wait(1).to({rotation:-40.6348,x:909.2053,y:1501.0632},0).wait(1).to({rotation:-41.3979,x:933.0395,y:1501.3237},0).wait(1).to({rotation:-42.161,x:956.8737,y:1501.5842},0).wait(1).to({rotation:-42.9241,x:980.7079,y:1501.8447},0).wait(1).to({rotation:-43.6873,x:1004.5421,y:1502.1053},0).wait(1).to({rotation:-44.4504,x:1028.3763,y:1502.3658},0).wait(1).to({rotation:-45.2135,x:1052.2105,y:1502.6263},0).wait(1).to({rotation:-45.9766,x:1076.0447,y:1502.8868},0).wait(1).to({rotation:-46.7397,x:1099.8789,y:1503.1474},0).wait(1).to({rotation:-47.5028,x:1123.7132,y:1503.4079},0).wait(1).to({rotation:-48.2659,x:1147.5474,y:1503.6684},0).wait(1).to({rotation:-49.029,x:1171.3816,y:1503.9289},0).wait(1).to({rotation:-49.7921,x:1195.2158,y:1504.1895},0).wait(1).to({rotation:-50.5552,x:1219.05,y:1504.45},0).wait(1).to({rotation:-49.5088,x:1217.6548,y:1507.469},0).wait(1).to({rotation:-48.4623,x:1216.2595,y:1510.4881},0).wait(1).to({rotation:-47.4159,x:1214.8643,y:1513.5071},0).wait(1).to({rotation:-46.3695,x:1213.469,y:1516.5262},0).wait(1).to({rotation:-45.3231,x:1212.0738,y:1519.5452},0).wait(1).to({rotation:-44.2766,x:1210.6786,y:1522.5643},0).wait(1).to({rotation:-43.2302,x:1209.2833,y:1525.5833},0).wait(1).to({rotation:-42.1838,x:1207.8881,y:1528.6024},0).wait(1).to({rotation:-41.1373,x:1206.4929,y:1531.6214},0).wait(1).to({rotation:-40.0909,x:1205.0976,y:1534.6405},0).wait(1).to({rotation:-39.0445,x:1203.7024,y:1537.6595},0).wait(1).to({rotation:-37.9981,x:1202.3071,y:1540.6786},0).wait(1).to({rotation:-36.9516,x:1200.9119,y:1543.6976},0).wait(1).to({rotation:-35.9052,x:1199.5167,y:1546.7167},0).wait(1).to({rotation:-34.8588,x:1198.1214,y:1549.7357},0).wait(1).to({rotation:-33.8123,x:1196.7262,y:1552.7548},0).wait(1).to({rotation:-32.7659,x:1195.331,y:1555.7738},0).wait(1).to({rotation:-31.7195,x:1193.9357,y:1558.7929},0).wait(1).to({rotation:-30.6731,x:1192.5405,y:1561.8119},0).wait(1).to({rotation:-29.6266,x:1191.1452,y:1564.831},0).wait(1).to({rotation:-28.5802,x:1189.75,y:1567.85},0).wait(1).to({x:1193,y:1573.6},0).wait(1).to({x:1196.25,y:1579.35},0).wait(1).to({x:1199.5,y:1585.1},0).wait(1).to({x:1202.75,y:1590.85},0).wait(1).to({x:1206,y:1596.6},0).wait(1).to({x:1209.25,y:1602.35},0).wait(1).to({x:1212.5,y:1608.1},0).wait(1).to({x:1215.75,y:1613.85},0).wait(1).to({rotation:-28.5798},0).wait(107).to({startPosition:0},0).to({_off:true},1).wait(3));

	// up_leg
	this.instance_4 = new lib.up_leg("synched",0);
	this.instance_4.setTransform(860.3,1338.9,1.0883,1,2.0427,0,0,-440.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-440.6,regY:-0.1,rotation:3.2403,x:852.35,y:1336.65},0).wait(1).to({rotation:4.4374,x:844.9,y:1334.9},0).wait(1).to({rotation:5.6346,x:837.35,y:1333.15},0).wait(1).to({rotation:6.8317,x:829.9,y:1331.35},0).wait(1).to({rotation:8.0288,x:822.4,y:1329.6},0).wait(1).to({rotation:9.226,x:814.95,y:1327.8},0).wait(1).to({rotation:10.4231,x:807.45,y:1326.05},0).wait(1).to({rotation:11.6202,x:799.95,y:1324.3},0).wait(1).to({rotation:12.8174,x:792.5,y:1322.55},0).wait(1).to({rotation:14.0145,x:785,y:1320.8},0).wait(1).to({rotation:15.2116,x:777.6,y:1319},0).wait(1).to({rotation:16.4087,x:770.1,y:1317.25},0).wait(1).to({rotation:17.6059,x:762.6,y:1315.45},0).wait(1).to({rotation:18.803,x:755.15,y:1313.7},0).wait(1).to({rotation:20.0001,x:747.65,y:1311.95},0).wait(1).to({rotation:21.1973,x:740.2,y:1310.2},0).wait(1).to({rotation:22.3944,x:732.7,y:1308.4},0).wait(1).to({rotation:23.5915,x:725.25,y:1306.65},0).wait(1).to({rotation:24.7887,x:717.75,y:1304.85},0).wait(1).to({rotation:25.9858,x:710.2,y:1303.1},0).wait(1).to({rotation:23.277,x:727.2,y:1302.95},0).wait(1).to({rotation:20.5682,x:744.1,y:1302.8},0).wait(1).to({rotation:17.8594,x:761,y:1302.65},0).wait(1).to({rotation:15.1506,x:777.95,y:1302.55},0).wait(1).to({rotation:12.4418,x:794.85,y:1302.35},0).wait(1).to({rotation:9.733,x:811.75,y:1302.2},0).wait(1).to({rotation:7.0242,x:828.7,y:1302.05},0).wait(1).to({rotation:4.3154,x:845.6,y:1301.9},0).wait(1).to({rotation:1.6066,x:862.6,y:1301.75},0).wait(1).to({rotation:-1.1022,x:879.5,y:1301.6},0).wait(1).to({rotation:-3.811,x:896.4,y:1301.45},0).wait(1).to({rotation:-6.5198,x:913.35,y:1301.35},0).wait(1).to({rotation:-9.2286,x:930.3,y:1301.2},0).wait(1).to({rotation:-11.9374,x:947.2,y:1301.05},0).wait(1).to({rotation:-14.6462,x:964.15,y:1300.9},0).wait(1).to({rotation:-17.355,x:981.1,y:1300.8},0).wait(1).to({rotation:-20.0638,x:998,y:1300.6},0).wait(1).to({rotation:-22.7726,x:1014.9,y:1300.5},0).wait(1).to({rotation:-25.4814,x:1031.9,y:1300.35},0).wait(1).to({x:1032.8,y:1301.95},0).wait(1).to({x:1033.7,y:1303.5},0).wait(1).to({x:1034.6,y:1305.1},0).wait(1).to({x:1035.5,y:1306.7},0).wait(1).to({x:1036.4,y:1308.3},0).wait(1).to({x:1037.25,y:1309.85},0).wait(1).to({x:1038.15,y:1311.45},0).wait(1).to({x:1039.05,y:1313.05},0).wait(1).to({x:1039.95,y:1314.65},0).wait(1).to({x:1040.85,y:1316.2},0).wait(1).to({x:1041.75,y:1317.8},0).wait(1).to({x:1042.65,y:1319.4},0).wait(1).to({x:1043.55,y:1320.95},0).wait(1).to({x:1044.45,y:1322.55},0).wait(1).to({x:1045.35,y:1324.15},0).wait(1).to({x:1046.25,y:1325.75},0).wait(1).to({x:1047.15,y:1327.3},0).wait(1).to({x:1048.05,y:1328.9},0).wait(1).to({x:1048.95,y:1330.5},0).wait(1).to({x:1049.8,y:1332.05},0).wait(1).to({x:1050.7,y:1333.65},0).wait(1).to({x:1051.6,y:1335.25},0).wait(1).to({x:1052.5,y:1336.85},0).wait(1).to({x:1053.4,y:1338.4},0).wait(1).to({x:1054.3,y:1340},0).wait(1).to({x:1055.2,y:1341.6},0).wait(1).to({x:1056.1,y:1343.2},0).wait(1).to({x:1057,y:1344.75},0).wait(1).to({x:1057.9,y:1346.35},0).wait(1).to({regX:-440.1,regY:0.2,rotation:-25.4808,x:1058.45,y:1346.5},0).wait(107).to({startPosition:0},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(578.6,913.3,892.1,1007.2);


(lib.רגל1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_full("synched",0);
	this.instance.setTransform(861,131.1);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.setTransform(787.25,880.2);

	this.instance_2 = new lib.up_leg("synched",0);
	this.instance_2.setTransform(859.7,368.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_3 = new lib.low_leg_full("synched",0);
	this.instance_3.setTransform(871.2,674.15);

	this.instance_4 = new lib.shoe_fill_2("synched",0);
	this.instance_4.setTransform(787,882.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(605.5,5,408.70000000000005,949.1);


(lib.קפיצה2רגליים = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LAND2
	this.instance = new lib.רגל1כיפוףcopy("synched",0);
	this.instance.setTransform(-392.9,955.75,1,1,14.9983,0,0,853.2,984.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({regX:864,regY:959.2,rotation:14.3739,x:-377.95,y:933.7,startPosition:1},0).wait(1).to({rotation:13.749,x:-380.05,y:933.5,startPosition:2},0).wait(1).to({rotation:13.124,x:-382.2,y:933.3,startPosition:3},0).wait(1).to({rotation:12.4991,x:-384.35,y:933.1,startPosition:4},0).wait(1).to({rotation:11.8741,x:-386.45,y:932.85,startPosition:5},0).wait(1).to({rotation:11.2492,x:-388.6,y:932.7,startPosition:6},0).wait(1).to({rotation:10.6242,x:-390.7,y:932.55,startPosition:7},0).wait(1).to({rotation:9.9993,x:-392.9,y:932.3,startPosition:8},0).wait(1).to({rotation:9.3743,x:-395,y:932.15,startPosition:9},0).wait(1).to({rotation:8.7494,x:-397.1,y:931.95,startPosition:10},0).wait(1).to({rotation:8.1244,x:-399.25,y:931.75,startPosition:11},0).wait(1).to({rotation:7.4995,x:-401.45,y:931.6,startPosition:12},0).wait(1).to({rotation:6.8745,x:-403.55,y:931.4,startPosition:13},0).wait(1).to({rotation:6.2495,x:-405.7,y:931.25,startPosition:14},0).wait(1).to({rotation:5.6246,x:-407.85,y:931.05,startPosition:15},0).wait(1).to({rotation:4.9996,x:-410,y:930.9,startPosition:16},0).wait(1).to({rotation:4.3747,x:-412.1,y:930.75,startPosition:17},0).wait(1).to({rotation:3.7497,x:-414.25,y:930.6,startPosition:18},0).wait(1).to({rotation:3.1248,x:-416.45,y:930.4,startPosition:19},0).wait(1).to({rotation:2.4998,x:-418.65,y:930.3,startPosition:20},0).wait(1).to({rotation:1.8749,x:-420.75,y:930.05,startPosition:21},0).wait(1).to({rotation:1.2499,x:-422.9,y:929.95,startPosition:22},0).wait(1).to({rotation:0.625,x:-425.05,y:929.8,startPosition:23},0).wait(1).to({rotation:0,x:-427.25,y:929.65,startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).to({_off:true},1).wait(5));

	// LAND1
	this.instance_1 = new lib.רגל1כיפוףcopy("synched",0);
	this.instance_1.setTransform(-487.5,883.5,1,1,14.9983,0,0,852.6,983.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).wait(1).to({regX:864,regY:959.2,rotation:14.3739,x:-472.95,y:864.1,startPosition:1},0).wait(1).to({rotation:13.749,x:-475.7,y:865,startPosition:2},0).wait(1).to({rotation:13.124,x:-478.5,y:865.9,startPosition:3},0).wait(1).to({rotation:12.4991,x:-481.3,y:866.8,startPosition:4},0).wait(1).to({rotation:11.8741,x:-484,y:867.7,startPosition:5},0).wait(1).to({rotation:11.2492,x:-486.75,y:868.65,startPosition:6},0).wait(1).to({rotation:10.6242,x:-489.5,y:869.6,startPosition:7},0).wait(1).to({rotation:9.9993,x:-492.3,y:870.45,startPosition:8},0).wait(1).to({rotation:9.3743,x:-495.05,y:871.4,startPosition:9},0).wait(1).to({rotation:8.7494,x:-497.8,y:872.35,startPosition:10},0).wait(1).to({rotation:8.1244,x:-500.55,y:873.25,startPosition:11},0).wait(1).to({rotation:7.4995,x:-503.35,y:874.2,startPosition:12},0).wait(1).to({rotation:6.8745,x:-506.1,y:875.15,startPosition:13},0).wait(1).to({rotation:6.2495,x:-508.9,y:876.1,startPosition:14},0).wait(1).to({rotation:5.6246,x:-511.65,y:877.05,startPosition:15},0).wait(1).to({rotation:4.9996,x:-514.45,y:878,startPosition:16},0).wait(1).to({rotation:4.3747,x:-517.2,y:878.95,startPosition:17},0).wait(1).to({rotation:3.7497,x:-519.95,y:879.9,startPosition:18},0).wait(1).to({rotation:3.1248,x:-522.8,y:880.85,startPosition:19},0).wait(1).to({rotation:2.4998,x:-525.6,y:881.85,startPosition:20},0).wait(1).to({rotation:1.8749,x:-528.35,y:882.7,startPosition:21},0).wait(1).to({rotation:1.2499,x:-531.1,y:883.7,startPosition:22},0).wait(1).to({rotation:0.625,x:-533.9,y:884.7,startPosition:23},0).wait(1).to({rotation:0,x:-536.7,y:885.65,startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).to({_off:true},1).wait(5));

	// back_hip
	this.instance_2 = new lib.hip_fullcopy("synched",0);
	this.instance_2.setTransform(904.55,1032.35,1,1,-27.5222,0,0,1.9,-105.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,rotation:-26.05,x:932.906,y:1142.9437},0).wait(1).to({rotation:-24.5772,x:914.3313,y:1159.274},0).wait(1).to({rotation:-23.1044,x:895.7289,y:1175.5406},0).wait(1).to({rotation:-21.6316,x:877.1004,y:1191.7428},0).wait(1).to({rotation:-20.1588,x:858.4474,y:1207.88},0).wait(1).to({rotation:-22.675,x:848.6673,y:1201.3837},0).wait(1).to({rotation:-25.1913,x:838.8124,y:1194.6988},0).wait(1).to({rotation:-27.7075,x:828.8746,y:1187.8288},0).wait(1).to({rotation:-30.2238,x:818.8459,y:1180.7776},0).wait(1).to({rotation:-32.74,x:808.7184,y:1173.5493},0).wait(1).to({x:799.2684,y:1162.2993},0).wait(1).to({x:789.8184,y:1151.0493},0).wait(1).to({x:780.3684,y:1139.7993},0).wait(1).to({x:770.9184,y:1128.5493},0).wait(1).to({x:719.9068,y:1044.557},0).wait(1).to({x:668.8953,y:960.5647},0).wait(1).to({x:617.8837,y:876.5724},0).wait(1).to({x:566.8722,y:792.5801},0).wait(1).to({x:515.8607,y:708.5877},0).wait(1).to({x:464.8491,y:624.5954},0).wait(1).to({x:413.8376,y:540.6031},0).wait(1).to({x:362.8261,y:456.6108},0).wait(1).to({x:311.8145,y:372.6185},0).wait(1).to({x:260.803,y:288.6262},0).wait(1).to({x:209.7914,y:204.6339},0).wait(1).to({x:158.7799,y:120.6416},0).wait(1).to({x:107.7684,y:36.6493},0).to({_off:true},1).wait(67));

	// back_shoe
	this.instance_3 = new lib.נעלמתכוכפת("synched",2);
	this.instance_3.setTransform(1234.7,1827.2,1,1,0,0,0,1235.5,499.6);

	this.instance_4 = new lib.show_full("synched",0);
	this.instance_4.setTransform(1174.5,1651.6,0.9999,0.9999,-42.4582,0,0,78.6,-13.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:1230.7,regY:502,rotation:-3.9333,x:1224.1,y:1828.75,startPosition:3},0).wait(1).to({rotation:-7.8666,x:1218.25,y:1827.85,startPosition:4},0).wait(1).to({rotation:-11.7998,x:1212.45,y:1827,startPosition:5},0).wait(1).to({rotation:-15.7331,x:1206.7,y:1826.1,startPosition:6},0).wait(1).to({rotation:-19.6664,x:1200.9,y:1825.2,startPosition:7},0).wait(1).to({x:1196.7,y:1820.2,startPosition:8},0).wait(1).to({x:1192.5,y:1815.2,startPosition:9},0).wait(1).to({x:1188.3,y:1810.2,startPosition:0},0).wait(1).to({x:1184.1,y:1805.2,startPosition:1},0).wait(1).to({x:1179.9,y:1800.2,startPosition:2},0).wait(1).to({x:1175.7,y:1795.2,startPosition:3},0).wait(1).to({x:1171.5,y:1790.2,startPosition:4},0).wait(1).to({x:1167.3,y:1785.2,startPosition:5},0).wait(1).to({x:1163.1,y:1780.2,startPosition:6},0).to({_off:true},1).wait(80));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-42.4588,x:1073.741,y:1627.9689},0).wait(1).to({x:1021.9827,y:1541.4855},0).wait(1).to({x:970.2244,y:1455.0022},0).wait(1).to({x:918.466,y:1368.5189},0).wait(1).to({x:866.7077,y:1282.0355},0).wait(1).to({x:814.9494,y:1195.5522},0).wait(1).to({x:763.191,y:1109.0689},0).wait(1).to({x:711.4327,y:1022.5855},0).wait(1).to({x:659.6744,y:936.1022},0).wait(1).to({x:607.916,y:849.6189},0).wait(1).to({x:556.1577,y:763.1355},0).wait(1).to({x:504.3994,y:676.6522},0).to({_off:true},1).wait(67));

	// back_low_leg
	this.instance_5 = new lib.low_leg_full("synched",0);
	this.instance_5.setTransform(1215.75,1613.85,1,1,-28.5787);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-33.1071,x:1194.38,y:1617.78},0).wait(1).to({rotation:-37.6346,x:1173.01,y:1621.71},0).wait(1).to({rotation:-42.1622,x:1151.64,y:1625.64},0).wait(1).to({rotation:-46.6897,x:1130.27,y:1629.57},0).wait(1).to({rotation:-51.2173,x:1108.9,y:1633.5},0).wait(1).to({rotation:-49.4473,x:1112.71,y:1629.63},0).wait(1).to({rotation:-47.6773,x:1116.52,y:1625.76},0).wait(1).to({rotation:-45.9073,x:1120.33,y:1621.89},0).wait(1).to({rotation:-44.1373,x:1124.14,y:1618.02},0).wait(1).to({rotation:-42.3673,x:1127.95,y:1614.15},0).wait(1).to({x:1118.5,y:1602.9},0).wait(1).to({x:1109.05,y:1591.65},0).wait(1).to({x:1099.6,y:1580.4},0).wait(1).to({x:1090.15,y:1569.15},0).wait(1).to({x:1039.1385,y:1485.1577},0).wait(1).to({x:988.1269,y:1401.1654},0).wait(1).to({x:937.1154,y:1317.1731},0).wait(1).to({x:886.1038,y:1233.1808},0).wait(1).to({x:835.0923,y:1149.1885},0).wait(1).to({x:784.0808,y:1065.1962},0).wait(1).to({x:733.0692,y:981.2038},0).wait(1).to({x:682.0577,y:897.2115},0).wait(1).to({x:631.0462,y:813.2192},0).wait(1).to({x:580.0346,y:729.2269},0).wait(1).to({x:529.0231,y:645.2346},0).wait(1).to({x:478.0115,y:561.2423},0).wait(1).to({x:427,y:477.25},0).to({_off:true},1).wait(67));

	// back_up_leg
	this.instance_6 = new lib.up_leg("synched",0);
	this.instance_6.setTransform(1070.95,1337.5,1.0883,1,-25.4808,0,0,-421.8,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-440.6,regY:-0.1,rotation:-24.0081,x:1028.5,y:1369},0).wait(1).to({rotation:-22.5355,x:1002.6,y:1387.85},0).wait(1).to({rotation:-21.063,x:976.8,y:1406.7},0).wait(1).to({rotation:-19.5904,x:950.95,y:1425.5},0).wait(1).to({rotation:-18.1178,x:925.15,y:1444.35},0).wait(1).to({rotation:-20.6333,x:925.7,y:1433.5},0).wait(1).to({rotation:-23.1488,x:926.3,y:1422.65},0).wait(1).to({rotation:-25.6642,x:926.95,y:1411.7},0).wait(1).to({rotation:-28.1797,x:927.65,y:1400.85},0).wait(1).to({rotation:-30.6952,x:928.35,y:1389.85},0).wait(1).to({x:918.9,y:1378.6},0).wait(1).to({x:909.45,y:1367.35},0).wait(1).to({x:900,y:1356.1},0).wait(1).to({x:890.55,y:1344.85},0).wait(1).to({x:839.55,y:1260.85},0).wait(1).to({x:788.55,y:1176.85},0).wait(1).to({x:737.55,y:1092.85},0).wait(1).to({x:686.5,y:1008.9},0).wait(1).to({x:635.5,y:924.9},0).wait(1).to({x:584.5,y:840.9},0).wait(1).to({x:533.5,y:756.9},0).wait(1).to({x:482.5,y:672.9},0).wait(1).to({x:431.45,y:588.9},0).wait(1).to({x:380.45,y:504.9},0).wait(1).to({x:329.45,y:420.95},0).wait(1).to({x:278.45,y:336.95},0).wait(1).to({x:227.4,y:252.95},0).to({_off:true},1).wait(67));

	// front_hip
	this.instance_7 = new lib.hip_fullcopy("synched",0);
	this.instance_7.setTransform(831.6,1020.8,1,1,30.9068,0,0,-8.7,-119);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:34.0594,x:792.0739,y:1146.2372},0).wait(1).to({rotation:37.212,x:806.3779,y:1164.8111},0).wait(1).to({rotation:40.3646,x:820.8788,y:1183.0825},0).wait(1).to({rotation:43.5172,x:835.593,y:1201.0625},0).wait(1).to({rotation:46.6698,x:850.536,y:1218.7635},0).wait(1).to({rotation:43.5283,x:826.3052,y:1200.0179},0).wait(1).to({rotation:40.3867,x:802.3017,y:1180.9953},0).wait(1).to({rotation:37.2452,x:778.51,y:1161.6834},0).wait(1).to({rotation:34.1036,x:754.9141,y:1142.0712},0).wait(1).to({rotation:30.9621,x:731.497,y:1122.1484},0).wait(1).to({rotation:28.8369,x:704.4691,y:1106.7445},0).wait(1).to({rotation:26.7117,x:677.5096,y:1091.1915},0).wait(1).to({rotation:24.5865,x:650.613,y:1075.487},0).wait(1).to({rotation:22.4613,x:623.7738,y:1059.6287},0).wait(1).to({rotation:20.4883,x:579.979,y:981.6933},0).wait(1).to({rotation:18.5153,x:536.2239,y:903.6222},0).wait(1).to({rotation:16.5423,x:492.504,y:825.4141},0).wait(1).to({rotation:14.5693,x:448.8143,y:747.0679},0).wait(1).to({rotation:12.5963,x:405.1502,y:668.5826},0).wait(1).to({rotation:10.6233,x:361.5069,y:589.9574},0).wait(1).to({rotation:8.6503,x:317.8794,y:511.1918},0).wait(1).to({rotation:6.6773,x:274.2631,y:432.2851},0).wait(1).to({rotation:4.7043,x:230.6529,y:353.2372},0).wait(1).to({rotation:2.7312,x:187.0441,y:274.0478},0).wait(1).to({rotation:0.7582,x:143.4318,y:194.7171},0).wait(1).to({rotation:-1.2148,x:99.8111,y:115.2453},0).wait(1).to({rotation:-3.1878,x:56.1772,y:35.6326},0).to({_off:true},1).wait(67));

	// front_shoe
	this.instance_8 = new lib.show_full("synched",0);
	this.instance_8.setTransform(427.85,1746.95,1,1,2.5144,0,0,86.9,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:0,rotation:2.5154,x:340.4986,y:1755.4486},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.9783,x:337.5774,y:1758.053},0).wait(1).to({rotation:-4.4719,x:334.9782,y:1760.6063},0).wait(1).to({rotation:-7.9656,x:332.6972,y:1763.0888},0).wait(1).to({rotation:-11.4593,x:330.7296,y:1765.4812},0).wait(1).to({rotation:-13.4317,x:312.2527,y:1691.4132},0).wait(1).to({rotation:-15.4041,x:293.8726,y:1617.307},0).wait(1).to({rotation:-17.3764,x:275.5877,y:1543.1595},0).wait(1).to({rotation:-19.3488,x:257.3967,y:1468.9673},0).wait(1).to({rotation:-21.3212,x:239.298,y:1394.7272},0).wait(1).to({rotation:-23.2936,x:221.2899,y:1320.4362},0).wait(1).to({rotation:-25.2659,x:203.3705,y:1246.0911},0).wait(1).to({rotation:-27.2383,x:185.538,y:1171.6889},0).wait(1).to({rotation:-29.2107,x:167.7903,y:1097.2266},0).wait(1).to({rotation:-31.1831,x:150.1253,y:1022.7014},0).wait(1).to({rotation:-33.1554,x:132.5408,y:948.1104},0).wait(1).to({rotation:-35.1278,x:115.0344,y:873.451},0).wait(1).to({rotation:-37.1002,x:97.6039,y:798.7204},0).to({_off:true},1).wait(67));

	// front_low_leg
	this.instance_9 = new lib.low_leg_full("synched",0);
	this.instance_9.setTransform(486.85,1605.2,1,1,30.1575);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:30.3117,x:487.03,y:1605.59},0).wait(1).to({rotation:30.4651,x:487.21,y:1605.98},0).wait(1).to({rotation:30.6186,x:487.39,y:1606.37},0).wait(1).to({rotation:30.772,x:487.57,y:1606.76},0).wait(1).to({rotation:30.9254,x:487.75,y:1607.15},0).wait(1).to({rotation:29.0841,x:483.28,y:1605.54},0).wait(1).to({rotation:27.2428,x:478.81,y:1603.93},0).wait(1).to({rotation:25.4015,x:474.34,y:1602.32},0).wait(1).to({rotation:23.5602,x:469.87,y:1600.71},0).wait(1).to({rotation:21.7189,x:465.4,y:1599.1},0).wait(1).to({rotation:19.5939,x:456.7875,y:1592.025},0).wait(1).to({rotation:17.4689,x:448.175,y:1584.95},0).wait(1).to({rotation:15.3438,x:439.5625,y:1577.875},0).wait(1).to({rotation:13.2188,x:430.95,y:1570.8},0).wait(1).to({rotation:11.2463,x:405.7692,y:1494.5962},0).wait(1).to({rotation:9.2737,x:380.5885,y:1418.3923},0).wait(1).to({rotation:7.3012,x:355.4077,y:1342.1885},0).wait(1).to({rotation:5.3286,x:330.2269,y:1265.9846},0).wait(1).to({rotation:3.3561,x:305.0462,y:1189.7808},0).wait(1).to({rotation:1.3836,x:279.8654,y:1113.5769},0).wait(1).to({rotation:-0.589,x:254.6846,y:1037.3731},0).wait(1).to({rotation:-2.5615,x:229.5038,y:961.1692},0).wait(1).to({rotation:-4.534,x:204.3231,y:884.9654},0).wait(1).to({rotation:-6.5066,x:179.1423,y:808.7615},0).wait(1).to({rotation:-8.4791,x:153.9615,y:732.5577},0).wait(1).to({rotation:-10.4517,x:128.7808,y:656.3538},0).wait(1).to({rotation:-12.4242,x:103.6,y:580.15},0).to({_off:true},1).wait(67));

	// front_up_leg
	this.instance_10 = new lib.up_leg("synched",0);
	this.instance_10.setTransform(637.25,1337.5,1.0882,1,32.9471,0,0,-432.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:-440.6,regY:-0.1,rotation:36.1,x:636.45,y:1338.9},0).wait(1).to({rotation:39.2526,x:641,y:1347.65},0).wait(1).to({rotation:42.4051,x:645.6,y:1356.5},0).wait(1).to({rotation:45.5577,x:650.25,y:1365.35},0).wait(1).to({rotation:48.7103,x:654.9,y:1374.2},0).wait(1).to({rotation:45.5687,x:640.9,y:1364.2},0).wait(1).to({rotation:42.427,x:627,y:1354.25},0).wait(1).to({rotation:39.2854,x:613.1,y:1344.3},0).wait(1).to({rotation:36.1437,x:599.2,y:1334.4},0).wait(1).to({rotation:33.0021,x:585.35,y:1324.5},0).wait(1).to({rotation:30.8767,x:566.3,y:1313.75},0).wait(1).to({rotation:28.7513,x:547.2,y:1302.9},0).wait(1).to({rotation:26.6258,x:528.1,y:1292.15},0).wait(1).to({rotation:24.5004,x:509.1,y:1281.4},0).wait(1).to({scaleX:1.0883,rotation:22.5272,x:473.6,y:1204.75},0).wait(1).to({scaleX:1.0882,rotation:20.554,x:438.2,y:1128.1},0).wait(1).to({scaleX:1.0883,rotation:18.5808,x:402.75,y:1051.45},0).wait(1).to({scaleX:1.0882,rotation:16.6076,x:367.35,y:974.85},0).wait(1).to({rotation:14.6344,x:331.9,y:898.2},0).wait(1).to({scaleX:1.0883,rotation:12.6612,x:296.45,y:821.6},0).wait(1).to({scaleX:1.0882,rotation:10.688,x:261.05,y:745.05},0).wait(1).to({rotation:8.7148,x:225.65,y:668.4},0).wait(1).to({scaleX:1.0883,rotation:6.7416,x:190.25,y:591.8},0).wait(1).to({rotation:4.7684,x:154.9,y:515.2},0).wait(1).to({scaleX:1.0882,rotation:2.7952,x:119.55,y:438.6},0).wait(1).to({rotation:0.822,x:84.15,y:362},0).wait(1).to({scaleX:1.0883,rotation:-1.1513,x:48.8,y:285.45},0).to({_off:true},1).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-817.1,-127.1,2239.8,2082.1);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol13("synched",0);
	this.instance.setTransform(252.4,365,1.4485,1.4485,10.1859,0,0,0.4,0.2);

	this.instance_1 = new lib.hip_fullcopy("synched",0);
	this.instance_1.setTransform(-257.55,-414.3,1,1,-34.2405,0,0,-7.9,-127.2);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(135.6,141.1,1,1,-35.2972);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(-51.95,-106,1.0883,1,-32.1986,0,0,-440.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.5,-478.2,747.7,1031.6);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol13("synched",0);
	this.instance.setTransform(215.95,382.05,1.4485,1.4485,10.1859,0,0,0.4,0.2);

	this.instance_1 = new lib.hip_fullcopy("synched",0);
	this.instance_1.setTransform(-207.75,-443.85,1,1,-27.523,0,0,-7.9,-127.2);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(117.8,153.8,1,1,-28.5798);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(-39.5,-113.55,1.0883,1,-25.4808,0,0,-440.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.8,-495,669.5,1065.4);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(128.3,73.5,1,1,-27.523,0,0,-7.9,-127.2);

	this.instance_1 = new lib.נעלמתכוכפת("synched",2);
	this.instance_1.setTransform(472.8,884.5,1,1,0,0,0,1235.5,499.6);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(453.85,671.15,1,1,-28.5798);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(296.55,403.8,1.0883,1,-25.4808,0,0,-440.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(10.2,22.3,650.5999999999999,950.6), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(128.3,73.5,1,1,-27.523,0,0,-7.9,-127.2);

	this.instance_1 = new lib.נעלמתכוכפת("synched",2);
	this.instance_1.setTransform(472.8,884.5,1,1,0,0,0,1235.5,499.6);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(453.85,671.15,1,1,-28.5798);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(296.55,403.8,1.0883,1,-25.4808,0,0,-440.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(10.2,22.3,650.5999999999999,950.6), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(679.4,73.7,1,1,30.9068,0,0,-7.9,-127.2);

	this.instance_1 = new lib.show_full("synched",0);
	this.instance_1.setTransform(246.3,781.6,1,1,2.5153,0,0,60,-36.2);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(334.75,657.95,1,1,30.1583);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(485.35,390.35,1.0882,1,32.9471,0,0,-440.2,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(1.4,5.9,780.8000000000001,882.2), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_full("synched",0);
	this.instance.setTransform(255.5,126.1);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.setTransform(181.75,875.2);

	this.instance_2 = new lib.up_leg("synched",0);
	this.instance_2.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_3 = new lib.low_leg_full("synched",0);
	this.instance_3.setTransform(265.7,669.15);

	this.instance_4 = new lib.shoe_fill_2("synched",0);
	this.instance_4.setTransform(181.5,877.2);

	this.instance_5 = new lib.hip_full("synched",0);
	this.instance_5.setTransform(255.5,126.1);

	this.instance_6 = new lib.shoe("synched",0);
	this.instance_6.setTransform(181.75,875.2);

	this.instance_7 = new lib.up_leg("synched",0);
	this.instance_7.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_8 = new lib.low_leg_full("synched",0);
	this.instance_8.setTransform(265.7,669.15);

	this.instance_9 = new lib.shoe_fill_2("synched",0);
	this.instance_9.setTransform(181.5,877.2);

	this.instance_10 = new lib.hip_full("synched",0);
	this.instance_10.setTransform(255.5,126.1);

	this.instance_11 = new lib.shoe("synched",0);
	this.instance_11.setTransform(181.75,875.2);

	this.instance_12 = new lib.up_leg("synched",0);
	this.instance_12.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_13 = new lib.low_leg_full("synched",0);
	this.instance_13.setTransform(265.7,669.15);

	this.instance_14 = new lib.shoe_fill_2("synched",0);
	this.instance_14.setTransform(181.5,877.2);

	this.instance_15 = new lib.hip_full("synched",0);
	this.instance_15.setTransform(255.5,126.1);

	this.instance_16 = new lib.shoe("synched",0);
	this.instance_16.setTransform(181.75,875.2);

	this.instance_17 = new lib.up_leg("synched",0);
	this.instance_17.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_18 = new lib.low_leg_full("synched",0);
	this.instance_18.setTransform(265.7,669.15);

	this.instance_19 = new lib.shoe_fill_2("synched",0);
	this.instance_19.setTransform(181.5,877.2);

	this.instance_20 = new lib.hip_full("synched",0);
	this.instance_20.setTransform(255.5,126.1);

	this.instance_21 = new lib.shoe("synched",0);
	this.instance_21.setTransform(181.75,875.2);

	this.instance_22 = new lib.up_leg("synched",0);
	this.instance_22.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_23 = new lib.low_leg_full("synched",0);
	this.instance_23.setTransform(265.7,669.15);

	this.instance_24 = new lib.shoe_fill_2("synched",0);
	this.instance_24.setTransform(181.5,877.2);

	this.instance_25 = new lib.hip_full("synched",0);
	this.instance_25.setTransform(255.5,126.1);

	this.instance_26 = new lib.shoe("synched",0);
	this.instance_26.setTransform(181.75,875.2);

	this.instance_27 = new lib.up_leg("synched",0);
	this.instance_27.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_28 = new lib.low_leg_full("synched",0);
	this.instance_28.setTransform(265.7,669.15);

	this.instance_29 = new lib.shoe_fill_2("synched",0);
	this.instance_29.setTransform(181.5,877.2);

	this.instance_30 = new lib.hip_full("synched",0);
	this.instance_30.setTransform(255.5,126.1);

	this.instance_31 = new lib.shoe("synched",0);
	this.instance_31.setTransform(181.75,875.2);

	this.instance_32 = new lib.up_leg("synched",0);
	this.instance_32.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_33 = new lib.low_leg_full("synched",0);
	this.instance_33.setTransform(265.7,669.15);

	this.instance_34 = new lib.shoe_fill_2("synched",0);
	this.instance_34.setTransform(181.5,877.2);

	this.instance_35 = new lib.hip_full("synched",0);
	this.instance_35.setTransform(255.5,126.1);

	this.instance_36 = new lib.shoe("synched",0);
	this.instance_36.setTransform(181.75,875.2);

	this.instance_37 = new lib.up_leg("synched",0);
	this.instance_37.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_38 = new lib.low_leg_full("synched",0);
	this.instance_38.setTransform(265.7,669.15);

	this.instance_39 = new lib.shoe_fill_2("synched",0);
	this.instance_39.setTransform(181.5,877.2);

	this.instance_40 = new lib.hip_full("synched",0);
	this.instance_40.setTransform(255.5,126.1);

	this.instance_41 = new lib.shoe("synched",0);
	this.instance_41.setTransform(181.75,875.2);

	this.instance_42 = new lib.up_leg("synched",0);
	this.instance_42.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_43 = new lib.low_leg_full("synched",0);
	this.instance_43.setTransform(265.7,669.15);

	this.instance_44 = new lib.shoe_fill_2("synched",0);
	this.instance_44.setTransform(181.5,877.2);

	this.instance_45 = new lib.hip_full("synched",0);
	this.instance_45.setTransform(255.5,126.1);

	this.instance_46 = new lib.shoe("synched",0);
	this.instance_46.setTransform(181.75,875.2);

	this.instance_47 = new lib.up_leg("synched",0);
	this.instance_47.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_48 = new lib.low_leg_full("synched",0);
	this.instance_48.setTransform(265.7,669.15);

	this.instance_49 = new lib.shoe_fill_2("synched",0);
	this.instance_49.setTransform(181.5,877.2);

	this.instance_50 = new lib.hip_full("synched",0);
	this.instance_50.setTransform(255.5,126.1);

	this.instance_51 = new lib.shoe("synched",0);
	this.instance_51.setTransform(181.75,875.2);

	this.instance_52 = new lib.up_leg("synched",0);
	this.instance_52.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_53 = new lib.low_leg_full("synched",0);
	this.instance_53.setTransform(265.7,669.15);

	this.instance_54 = new lib.shoe_fill_2("synched",0);
	this.instance_54.setTransform(181.5,877.2);

	this.instance_55 = new lib.hip_full("synched",0);
	this.instance_55.setTransform(255.5,126.1);

	this.instance_56 = new lib.shoe("synched",0);
	this.instance_56.setTransform(181.75,875.2);

	this.instance_57 = new lib.up_leg("synched",0);
	this.instance_57.setTransform(254.2,363.4,1,1,0,0,0,-440.7,-0.1);

	this.instance_58 = new lib.low_leg_full("synched",0);
	this.instance_58.setTransform(265.7,669.15);

	this.instance_59 = new lib.shoe_fill_2("synched",0);
	this.instance_59.setTransform(181.5,877.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,408.7,949.1), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(273.7,126.1);

	this.instance_1 = new lib.show_full("synched",0);
	this.instance_1.setTransform(182.4,873.45,1,1,0.5316);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(274.4,679.35);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(261.8,369.45,1.0883,1,2.0436,0,0,-440.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0.3,0,426.59999999999997,946.5), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hip_fullcopy("synched",0);
	this.instance.setTransform(273.7,126.1);

	this.instance_1 = new lib.show_full("synched",0);
	this.instance_1.setTransform(182.4,873.45,1,1,0.5316);

	this.instance_2 = new lib.low_leg_full("synched",0);
	this.instance_2.setTransform(274.4,679.35);

	this.instance_3 = new lib.up_leg("synched",0);
	this.instance_3.setTransform(261.8,369.45,1.0883,1,2.0436,0,0,-440.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0.3,0,426.59999999999997,946.5), null);


(lib.רגל1מתפצל = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.instance = new lib.Symbol7();
	this.instance.setTransform(809.8,479.5,1,1,0,0,0,204.3,474.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:true},1).wait(1));

	// Layer_1_copy
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(809.8,479.5,1,1,0,0,0,204.3,474.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:204.4,x:862.9,y:457.5},0).wait(1).to({x:915.95,y:435.5},0).wait(16).to({_off:true},1).wait(2));

	// Layer_1_copy
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(917.15,434.85,1,1,0,0,0,204.3,474.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:204.4,x:1021.95,y:391.55},0).wait(13).to({_off:true},1).wait(4));

	// Layer_1_copy
	this.instance_3 = new lib.Symbol7();
	this.instance_3.setTransform(1020.35,390,1,1,0,0,0,204.3,474.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:204.4,x:1127.95,y:349.5},0).wait(10).to({_off:true},1).wait(6));

	// Layer_1_copy
	this.instance_4 = new lib.Symbol7();
	this.instance_4.setTransform(1126.7,349.5,1,1,0,0,0,204.3,474.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1).to({regX:204.4,x:1236,y:309.5},0).wait(7).to({_off:true},1).wait(8));

	// Layer_1_copy
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(1234.25,311.15,1,1,0,0,0,204.3,474.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).wait(1).to({regX:204.4,x:1348,y:265.5},0).wait(4).to({_off:true},1).wait(10));

	// Layer_1_copy
	this.instance_6 = new lib.Symbol7();
	this.instance_6.setTransform(1345.65,262.6,1,1,0,0,0,204.3,474.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).wait(1).to({regX:204.4,x:1456.05,y:219.45},0).wait(1).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(605.5,-255,1054.9,1209.1);


// stage content:
(lib.סולו_HTML5Canvasnew = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,1517];
	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
		
		self.play1.addEventListener("click",startPlaying);
		
		function startPlaying(){
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		playSound("new2soloSoundNadav");
	}
	this.frame_1517 = function() {
		var self = this;
		self.stop();
		
		self.addEventListener("click",playAgain);
		
		function playAgain(){
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1516).call(this.frame_1517).wait(3));

	// BATTONS
	this.play1 = new lib.play();
	this.play1.name = "play1";
	this.play1.setTransform(1645.5,842.5,1.4584,1.4584);
	new cjs.ButtonHelper(this.play1, 0, 1, 2);

	this.again1 = new lib.again();
	this.again1.name = "again1";
	this.again1.setTransform(963.95,550.55,1.8169,1.8169);
	new cjs.ButtonHelper(this.again1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play1}]}).to({state:[]},1).to({state:[{t:this.again1}]},1516).to({state:[]},1).wait(2));

	// end_txt1
	this.instance = new lib.סתיו("synched",0);
	this.instance.setTransform(983.25,543.3,1.8807,1.8807,0,0,0,0.5,0.5);

	this.instance_1 = new lib.נדב2("synched",0);
	this.instance_1.setTransform(968.1,551,1.8047,1.8047,0,0,0,0,0.3);

	this.instance_2 = new lib.אלומה("synched",0);
	this.instance_2.setTransform(976.25,542.55,1.7626,1.7626,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1395).to({state:[{t:this.instance_1}]},41).to({state:[{t:this.instance_2}]},41).to({state:[]},40).wait(3));

	// withe
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTArrQhuhQhUipQg8h6hNjxQhulTgfhWQhdj9griGQg5i3ggijQg/lLgBpHQAAzWFDtsQFCtsHHAAQHIAAFCNsQFCNsABTWQAAIhhiFxQgmCThKDHQhdDxg2CSQgzCLhJEXQhBD2gvBqQhICmh0BRQiFBfjbAJIgdABQijAAhzhVg");
	this.shape.setTransform(430.2,-374.5428);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTAu2QhuhWhUi1Qg8iDhNkDQhulrgfhcQhdkQgriQQg5jEggiuQg/lkgBpxQAA0wFDurQFCurHHAAQHIAAFCOrQFCOrABUwQAAJJhiGMQgmCehKDUQhdEDg2CdQgzCVhJErQhBEIgvByQhICxh0BYQiFBljbAKIgdAAQijAAhzhag");
	this.shape_1.setTransform(430.2,-353.7161);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTAyBQhuhchUjCQg8iLhNkVQhumEgfhiQhdkigriZQg5jSggi6Qg/l7gBqcQAA2KFDvrQFCvqHHAAQHIAAFCPqQFCPrABWKQAAJxhiGmQgmCohKDkQhdEUg2CnQgzCghJE/QhBEZgvB6QhIC+h0BdQiFBsjbAKIgeABQiiAAhzhgg");
	this.shape_2.setTransform(430.2,-332.8856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTA1MQhuhihUjOQg8iUhNkmQhumdgfhoQhdk0grikQg5jeggjGQg/mUgBrGQAA3jFDwrQFCwqHHAAQHIAAFCQqQFCQrABXjQAAKYhiHCQgmCzhKDxQhdEmg2CyQgzCphJFUQhBErgvCCQhIDJh0BjQiFBzjbALIgeABQiiAAhzhmg");
	this.shape_3.setTransform(430.2,-312.0588);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTA4WQhuhnhUjbQg8ichNk4Qhum1gfhvQhdlHgrisQg5jsggjSQg/msgBrwQAA49FDxqQFCxqHHAAQHIAAFCRqQFCRqABY9QAALAhiHcQgmC9hKEBQhdE3g2C8QgzC0hJFoQhBE8gvCKQhIDVh0BpQiFB6jbAMIgeABQiiAAhzhtg");
	this.shape_4.setTransform(430.2,-291.2321);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTA7hQhuhthUjnQg8imhNlJQhunOgfh0Qhdlagri2Qg5j5ggjeQg/nEgBsaQAA6XFDyqQFCypHHAAQHIAAFCSpQFCSqABaXQAALnhiH3QgmDIhKEPQhdFJg2DHQgzC9hJF8QhBFPgvCRQhIDhh0BwQiFCAjbANIgcABQikAAhzhzg");
	this.shape_5.setTransform(430.2,-270.3842);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTA+sQhuhzhUjzQg8ivhNlaQhunngfh6QhdlsgrjAQg5kHggjpQg/ncgBtFQAA7xFDzpQFCzoHHAAQHIAAFCToQFCTpABbxQAAMPhiISQgmDThKEdQhdFag2DSQgzDHhJGRQhBFggvCZQhIDth0B1QiFCIjbANIgdAAQijAAhzh4g");
	this.shape_6.setTransform(430.2,-249.5538);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBB2Qhuh4hUkAQg8i3hNlsQhun/gfiBQhdl+grjKQg5kUggj1Qg/n0gBtvQAA9LFD0oQFC0oHHAAQHIAAFCUoQFCUoABdLQAAM3hiIsQgmDdhKEsQhdFsg2DcQgzDRhJGlQhBFygvChQhID5h0B7QiFCPjbANIgdABQijAAhzh/g");
	this.shape_7.setTransform(430.2,-228.727);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBFBQhuh/hUkMQg8i/hNl9QhuoYgfiHQhdmRgrjUQg5khggkAQg/oMgBuZQAA+lFD1oQFC1oHHAAQHIAAFCVoQFCVoABelQAANdhiJIQgmDnhKE6QhdF+g2DnQgzDbhJG5QhBGEgvCoQhIEFh0CCQiFCVjbAOIgdABQijAAhziFg");
	this.shape_8.setTransform(430.2,-207.9002);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBIMQhuiFhUkYQg8jIhNmPQhuoxgfiNQhdmjgrjdQg5kvggkMQg/okgBvEQAA/+FD2oQFC2nHHAAQHIAAFCWnQFCWoABf+QAAOGhiJiQgmDzhKFIQhdGPg2DxQgzDmhJHNQhBGWgvCwQhIERh0CHQiFCcjbAPIgeABQiiAAhziLg");
	this.shape_9.setTransform(430.2,-187.0698);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBLWQhuiKhUkkQg8jShNmgQhupJgfiUQhdm1grjnQg5k8ggkYQg/o8gBvuUAAAghYAFDgXnQFC3nHHAAQHIAAFCXnUAFCAXnAABAhYQAAOthiJ9QgmD9hKFXQhdGgg2D8QgzDwhJHhQhBGogvC4QhIEdh0CNQiFCjjbAPIgeACQiiAAhziSg");
	this.shape_10.setTransform(430.2,-166.243);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBOhQhuiQhUkxQg8jahNmyQhupigfiZQhdnIgrjxQg5lJggkkQg/pUgBwYUAAAgiyAFDgYnQFC4lHHAAQHIAAFCYlUAFCAYnAABAiyQAAPVhiKXQgmEIhKFlQhdGyg2EHQgzD5hJH2QhBG5gvDAQhIEph0CTQiFCqjbAQIgeABQiiAAhziXg");
	this.shape_11.setTransform(430.2,-145.3913);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBRsQhuiWhUk9Qg8jjhNnEQhup6gfigQhdnagrj6Qg5lWggkwQg/psgBxCUAAAgkMAFDgZnQFC5lHHAAQHIAAFCZlUAFCAZnAABAkMQAAP8hiKyQgmEShKF0QhdHDg2ERQgzEEhJIKQhBHLgvDHQhIE2h0CYQiFCxjbARIgdABQijAAhzidg");
	this.shape_12.setTransform(430.2,-124.5645);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBU2QhuibhUlJQg8jthNnVQhuqSgfimQhdntgrkEQg5ljggk8Qg/qEgBxtUAAAgllAFDgamQFC6lHHAAQHIAAFCalUAFCAamAABAllQAAQkhiLNQgmEdhKGCQhdHVg2EcQgzEOhJIeQhBHdgvDPQhIFBh0CeQiFC4jbARIgeACQiiAAhzikg");
	this.shape_13.setTransform(430.2,-103.734);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBYBQhuihhUlWQg8j0hNnnQhuqrgfisQhdn/grkOQg5lxgglHQg/qdgByWUAAAgnAAFDgblQFC7kHHAAQHIAAFCbkUAFCAblAABAnAQAARLhiLoQgmEohKGQQhdHmg2EnQgzEYhJIyQhBHvgvDWQhIFOh0CkQiFC+jbASIgeABQiiAAhzipg");
	this.shape_14.setTransform(430.2,-82.9073);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBbMQhuinhUliQg8j+hNn4QhurEgfiyQhdoRgrkYQg5l+gglTQg/q0gBzBUAAAgoaAFDgclQFC8jHHAAQHIAAFCcjUAFCAclAABAoaQAARyhiMDQgmEyhKGfQhdH4g2ExQgzEihJJGQhBIBgvDeQhIFah0CqQiFDFjbATIgeABQiiAAhzivg");
	this.shape_15.setTransform(430.2,-62.0805);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBeWQhuithUluQg8kGhNoKQhurcgfi5QhdojgrkiQg5mLgglfQg/rMgBzrUAAAgpzAFDgdlQFC9jHHAAQHIAAFCdjUAFCAdlAABApzQAASahiMdQgmE9hKGtQhdIKg2E7QgzEshJJcQhBISgvDmQhIFlh0CwQiFDNjbASIgeACQiiAAhzi2g");
	this.shape_16.setTransform(430.2,-41.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBhhQhuizhUl6Qg8kPhNobQhur1gfi/Qhdo2grkrQg5mZgglqQg/rlgB0VUAAAgrNAFDgekQFC+jHHAAQHIAAFCejUAFCAekAABArNQAATChiM4QgmFIhKG7QhdIbg2FGQgzE2hJJvQhBIlgvDtQhIFyh0C2QiFDTjbAUIgdABQijAAhzi8g");
	this.shape_17.setTransform(430.2,-20.4022);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBksQhui5hUmGQg8kZhNosQhusOgfjFQhdpIgrk1Qg5mmggl2Qg/r9gB0/UAAAgsnAFDgfkQFC/iHHAAQHIAAFCfiUAFCAfkAABAsnQAATphiNTQgmFShKHKQhdItg2FQQgzFBhJKDQhBI2gvD1QhIF+h0C8QiFDajbAUIgdACQijAAhzjCg");
	this.shape_18.setTransform(430.2,0.4246);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBn2Qhui+hUmTQg8khhNo+QhusmgfjLQhdpbgrk/Qg5mzggmCQg/sVgB1pUAAAguBAFDggjUAFCggiAHHAAAUAHIAAAAFCAgiUAFCAgjAABAuBQAAUQhiNuQgmFdhKHYQhdI+g2FcQgzFKhJKXQhBJIgvD9QhIGKh0DCQiFDgjbAWQgPACgOAAQijAAhzjJg");
	this.shape_19.setTransform(430.2,21.2513);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBrBQhujEhUmfQg8kqhNpPQhus/gfjSQhdptgrlIQg5nAggmOQg/stgB2UUAAAgvbAFDghiUAFCghhAHHAAAUAHIAAAAFCAhhUAFCAhiAABAvbQAAU4hiOJQgmFnhKHnQhdJQg2FlQgzFVhJKsQhBJZgvEFQhIGWh0DHQiFDojbAWQgPABgPAAQiiAAhzjOg");
	this.shape_20.setTransform(430.2,42.0818);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(253,253,253,0.992)").s().p("EgFTBuMQhujKhUmsQg8kyhNphQhutYgfjXQhdqAgrlSQg5nNggmaQg/tFgB2+UAAAgw1AFDgiiUAFCgigAHHAAAUAHIAAAAFCAigUAFCAiiAABAw1QAAVghiOjQgmFyhKH1QhdJhg2FxQgzFehJLAQhBJsgvEMQhIGih0DNQiFDvjbAWQgPACgPAAQiiAAhzjUg");
	this.shape_21.setTransform(430.2,62.9085);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(253,253,253,0.992)").s().p("EAB3BxLQi9kgi/oUQixntiUpmQiOpShTo0Qhdp/grlSQg5nOggmaQg/tEgB2/UAAAgw0AFDgiiUAFCgihAHHAAAUAHIAAAAFCAihUAFCAiiAABAw0QAAVghiOjQgmFzhKH1QhdJhg2FwQhEHYAdKdQAKDmAaFKIAnIHQAoI5gpD2Qg2FGjXAWIgVABQiuAAjEkrg");
	this.shape_22.setTransform(430.2,90.6842);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(253,253,253,0.992)").s().p("EAMhB3VQhLAJhgglQixhOjBkYIgdgrQjblCjCnGQiPlFh5luQhGjVg9jdQinpdhLpUQgSiSgOiLQgqmagllSIgUi6QgvmYgbkyIgMiHQhUu1AA0FIAAgDUAAAguyAEoghpQAcjJAei8QD34WFFkLQC8i3C3DtQEjETDjUqQA9FnA1GcUADyAdYAAYAnBQAFJZgbIqIgGB4QgeHhhBHCQgnFUhlHbIhiIHQgqDRglDNQgsDogcD0QgfEHgCDtQgGEWAdD0QAMCEAXCMQAlEUCBGjIArCeQBUEAArDoIANA7IBhGuIATBYQAlCrAQB5QAWCWgLBgQgNBbg3AqQghAmguAIQgyArhIAAQgXAAgYgEg");
	this.shape_23.setTransform(432.2224,110.9343);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(253,253,253,0.992)").s().p("EAL8B5sQkHjjkamGQnXqPk6s1Ql5vVg7vuQganOg3oJQhAo+gfkoQhww8AAzCUAAAgw1AFCgiiUAFCgihAHIAAAUAHHAAAAFCAihUAFDAiiAAAAw1QAALchEJDQg5Hnh1HdQhBEDivJIQiqI1heGDQh/IOA2HnQAtGOCwGhQBjDtD2HBQDiGcBODUIC3HrQBZD2AgCIQAoCogWBVQgZBdhpALIgRABQiIAAjsjMg");
	this.shape_24.setTransform(449.255,135.6704);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(253,253,253,0.992)").s().p("EAc5CDmQjJg6jpiCQolk0pxnUQqLnpi9kFQnYqPk6s1Ql5vVg7vuQganOg3oJQhAo+gfkoQhww8AAzCUAAAgw1AFCgiiUAFCgihAHIAAAUAHIAAAAFCAihUAFCAiiAAAAw1QAALdhEJCQg4Hnh1HdQhBEDivJIQiqI1heGDQh/IOA2HnQAtGOCwGhQBjDtD2HBQDhGcBODUQBkENHyG+QCYCHEkDzQE5EDB3BpQEiD/B8CwQCMDIhpA8QgPAJgeAAQg6AAhxghg");
	this.shape_25.setTransform(531.1582,181.9835);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(253,253,253,0.992)").s().p("EAvBCGkQilgEnAhJQq+hzpIh4QqgiKjRhVQiYg+jwiIQkXidkQi9QrPnylDnUQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEBGWHiGcQGbFhGjDnQD3CHICDcQKEETIICgQCyA3C4AbQBZANCqAOQBxAJAeAOQAnATgZA1QgkBLi3AAIgeAAg");
	this.shape_26.setTransform(646.9345,197.7489);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(253,253,253,0.992)").s().p("EAXuCHWQpjhkpoi5QpJiwmDi9QnIjfnjlKQrZnyk+nLQnVqpk3snQl/vig7vlQganPg3oIQhAo+gfkpQhww7AAzCUAAAgw2AFCgiiUAFCgigAHIAAAUAHIAAAAFCAigUAFDAiiAAAAw2QAALchEJDQg5Hnh1HcQhBEDivJIQiqI1heGDQjvPZFFNrQB4FCDaFwQB9DSD4F7QENGoHQGXQG3GAGPC7QEzCQBeArQEFB1DhBSQJnDfITAeQB2AHEAAbIHwA2QKsBHFxACQCrABDihDQBsggAPgDQAvgLAFASQAQA0guA/QgrA8hYA3QjAB6jVAPQrwBBmLAeQmfAfj8AAQi0AAhggPg");
	this.shape_27.setTransform(737.9798,204.2391);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(253,253,253,0.992)").s().p("EASACHsQkygLiTgYQpihkpni5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJbDQIcBAQHHA3KygsQKFgqEshWQA6gQDXgrQEgg6CQggQJtiKFciUQBEgcBVgwIB6hFQA4geAVgBQAaAAgGAnQgQBbhZBVQhMBKieBfQmvEBm5DjQnLDti7A5QmkB/t7AWQiWADiRAAQjDAAi6gGg");
	this.shape_28.setTransform(819.84,205.5306);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(253,253,253,0.992)").s().p("EAJnCHsQkygLiTgYQphhkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIbBAQGzA1LEgzQJcgsFXhLQE0hDH9i7QJ1jnFNjXQA+goE+izQFRjKDpjPIEEjoQBihRAUASQAnAjhKBzQhABhiMCUQi0C+lRGLQkOE8g/AxQl7EqqXEGQk1B7neCSQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_29.setTransform(873.52,205.5306);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(253,253,253,0.992)").s().p("EAFqCHsQkygLiSgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIbBAQGzA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEujACaiAQDWixDxkkQBChQD4kRQD1kSB3ioQBBhaBbhwQBchxACAJQAZBbguBiQgbA4hABpQhLCVhwF/QgyCqgaBLQgqBzgmAwQj4EylzE7QkQDoj+CpQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_30.setTransform(898.8257,205.5306);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(253,253,253,0.992)").s().p("EACICHsQkxgLiTgYQpjhkpoi5QpKiwmDi9QnIjfnjlKQrZnyk+nLQnVqpk3snQl/vig7vlQganPg3oIQhAo+gfkpQhww7AAzCUAAAgw2AFCgiiUAFCgigAHIAAAUAHIAAAAFCAigUAFDAiiAAAAw2QAALchEJDQg5Hnh1HcQhBEDivJIQiqI1heGDQjvPZFFNrQB4FCDaFwQB9DSD4F7QENGoHQGXQG3GAGPC7QHdDhGcCOQJcDQIdBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFOjTQEQitCyiYQDEioEKkoQC4jOClj/QCfj4CZk6QAKgVBSiNQBjipBCh4QDqmsBFj5QAYhXAZiBQAShrABABQBcBiAIBjQAEAwgaBvQg3Dmg/HQQg5GegOAkQhoEFi2EvQjCFEjiESQj7ExlwE7QkWDtj4ClQmYEPqGEPQm9C6lJBlQmkB/t8AWQiVADiRAAQjDAAi6gGg");
	this.shape_31.setTransform(921.4827,205.5306);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(253,253,253,0.992)").s().p("EAA2CHsQkxgLiTgYQpjhkpoi5QpKiwmDi9QnIjfnjlKQrZnyk+nLQnVqpk3snQl/vig7vlQganPg3oIQhAo+gfkpQhww7AAzCUAAAgw2AFCgiiUAFCgigAHIAAAUAHIAAAAFCAigUAFDAiiAAAAw2QAALchEJDQg5Hnh1HcQhBEDivJIQiqI1heGDQjvPZFFNrQB4FCDaFwQB9DSD4F7QENGoHQGXQG3GAGPC7QHdDhGcCOQJcDQIdBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFOjTQEQitCyiYQDEioEKkoQDGjcCdjwQCukHCEksQCflnBTlOQA9j3AtlnQADgaAniIQA1i3AchvQBxm/gCkoQgBiLgajWIgai7QAsh2BDCSQA6B/ATCkQAPCCBiL7QBEIPgHAsQgxE0h1GZQh1GYhbC0Qi1Fnh0DIQjNFjjMD4Qj7ExlwE7QkWDtj4ClQmYEPqGEPQm9C6lJBlQmkB/t8AWQiVADiRAAQjDAAi6gGg");
	this.shape_32.setTransform(929.6577,205.5306);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(253,253,253,0.992)").s().p("EAAXCHsQkxgLiTgYQpjhkpoi5QpKiwmDi9QnIjfnjlKQrZnyk+nLQnVqpk3snQl/vig7vlQganPg3oIQhAo+gfkpQhww7AAzCUAAAgw2AFCgiiUAFCgigAHIAAAUAHIAAAAFCAigUAFDAiiAAAAw2QAALchEJDQg5Hnh1HcQhBEDivJIQiqI1heGDQjvPZFFNrQB4FCDaFwQB9DSD4F7QENGoHQGXQG3GAGPC7QHdDhGcCOQJcDQIdBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFOjTQEQitCyiYQDEioEKkoQDGjcCdjwQCukHCEksQCRlHBTlxQAYhrAljGQAljJAWhhQBKlPAGmoQAGnvhklbQgNgsgPhjQgTiCgNhQQgzk/hVkWQgriMgFiPIAEhzQgNgqAfAIQAeAHA1AxQCFB5BGCoQBhDnDKFHQBpCrARAeQAzBZAHAlQCTNBiFPEQgpErh6GjQh1GPheC8Qi1Fnh0DIQjNFjjMD4Qj7ExlwE7QkWDtj4ClQmYEPqGEPQm9C6lJBlQmkB/t8AWQiVADiRAAQjDAAi6gGg");
	this.shape_33.setTransform(932.7781,205.5306);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjPnIjkkyQgigugchDIg2iUQhajziVkBQg6hkhdiTIhRiBQAYhxCiBpQCLBaB8CdQC9DyEzEhQCyCoAQARQBZBXAhAzQDBEwC/HmQCzHLBKFhQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_34.setTransform(933.1251,205.5306);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkJljjKjbQiTigjjjIQjTjUjDi/Ql+l1j/jCQhEg0gxhVIgkhKQAHghBqgCQB0gBBhAzQIhEeEcCcQHbEGBRBOQESEIEvGSQDSEWDVFKQDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_35.setTransform(933.1251,205.5306);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1IlYkvQjLizich2Qm9lQp5kVQithZjFhMQl9iUmVg5QiQgUjOgaIixgXQhRgpAcgbQAZgYBmgLQBbgJB3AFQB3AEBTAQQGIBMJQBPIJFBNQHqBmLMHbQD0CiDoC1QCzCKBDBBQESEIEvGSQDSEWDVFKQDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_36.setTransform(933.1251,205.5306);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1QjpjJhzhfQjCiiiqh7Qmzk7p6k9Qi4hcmAhoQmfhxkPgTQiSgKo2AHQplAJl/AXQh5AHi8A6IikA4QgbgNAlgfQAjgdBPgkQC3hSDAgdQGyhBI4hAQJJhCBwAHQJGAjD0AnQGAA8GLCeQI5DkIOEtQIwFCEREQQEQEPEuGMQDjErDHE0QDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_37.setTransform(933.1251,205.5306);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1QjpjJhzhfQjCiiiqh7Qmzk7p6k9QishWmNhoQmThrkagfQosg+pGBJQn0A+ljCHInzCzQnACij7BtQhKAghDAFIg0gBQgRgJA2g+QA9hFBVgsQGtjgDyh3QGEjAB/gjQFUhdJHg+QJ5hDHcAYQIpAaERAtQF6A9GRCgQI5DkIOEtQIwFCEREQQEQEPEuGMQDjErDHE0QDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_38.setTransform(933.1251,205.5306);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALchDJDQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1QjpjJhzhfQjCiiiqh7Qmzk7p6k9QishWmNhoQmThrkagfQoig9pOBNQngA+l5CCQl/CFmLC1Qk9CSjCBxQicBcjrCUQl0DrjhCmQhsBPhWAcQgbAJgWADIgQABQgHgEBAhKQBLhXBXhGQDEieFPkjQEnkAAigYQDrioFLiUQFdidIIilQE+hkJbg9QJqg+HtAZQIpAaERAtQF6A9GRCgQI5DkIOEtQIwFCEREQQEQEPEuGMQDjErDHE0QDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGg");
	this.shape_39.setTransform(933.1251,205.5306);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALOhBI7QAEgHDWiwQBLg+AngwQApg0AegaQFzlHCxiTQEzj/CPhMQHMj2Bzg3QGSjAHKiRQE+hkJbg9QJqg+HtAZQIpAaERAtQF6A9GRCgQI5DkIOEtQIwFCEREQQEQEPEuGMQDjErDHE0QDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGgEg+bACmQg5Hnh2HcQhAEDiwJIQiqI1hdGDQjvPZFFNrQB3FCDbFwQB9DSD4F7QEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1QjpjJhzhfQjCiiiqh7Qmzk7p6k9QishWmNhoQmThrkagfQoig9pOBNQngA+l5CCQl7CDmOC4Qk1COjLB0QkWChltEjIkhDpQilCHhrBNQhrBQiMAGQgrACgqgGIghgGIgCAWg");
	this.shape_40.setTransform(933.1251,205.5306);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALOhBI7QADgFDXiyQAdgZA5g+QA7hCAogjQFzlHCxiTQEzj/CPhMQHMj2Bzg3QGSjAHKiRQE+hkJbg9QJqg+HtAZQIpAaERAtQF6A9GRCgQI5DkIOEtQIwFCEREQQEQEPEuGMQDjErDHE0QDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGgAkW46QngA+l5CCQl7CDmOC4Qk1COjLB0QlqDRktDeQlBDtjcDlQj4EEhRBtQh2CfhUDfQiuHNiFJmQgpC8hBFMQhFFmggCYQjQPkE4NkQB1FFDRFqQA8BoEzHkQEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1QjpjJhzhfQjCiiiqh7Qmzk7p6k9QishWmNhoQmThrkagfQjygbj8AAQk6AAlIArg");
	this.shape_41.setTransform(933.1251,205.5306);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(253,253,253,0.992)").s().p("EAATCHsQkxgLiTgYQpihkpoi5QpKiwmDi9QnJjfnilKQranyk9nLQnWqpk3snQl/vig6vlQgbnPg2oIQhBo+gekpQhxw7AAzCUAAAgw2AFCgiiUAFDgigAHIAAAUAHIAAAAFCAigUAFCAiiAAAAw2QAALOhBI7QADgFDXiyQAdgZA5g+QA7hCAogjQFzlHCxiTQEzj/CPhMQHMj2Bzg3QGSjAHKiRQE+hkJbg9QJqg+HtAZQIpAaERAtQF6A9GRCgQI5DkIOEtQIwFCEREQQEQEPEuGMQDjErDHE0QDBEpC/HqQCzHLBKFkQBVGXAAHUQgBGjhFH3QgpErh6GjQh1GPhfC8Qi1FnhzDIQjNFjjMD4Qj7ExlxE7QkWDtj3ClQmYEPqHEPQm9C6lJBlQmkB/t7AWQiWADiQAAQjEAAi6gGgAkW46QngA+l5CCQl7CDmOC4Qk1COjLB0QlqDRktDeQlBDtjcDlQjPDZiEDZQhyC8hrESQjiI/hsHYQhNFPhKJCQiDQAEYNPQBvFOC8FdQB2DbDnFuQEMGoHRGXQG3GAGOC7QHeDhGcCOQJcDQIcBAQGyA1LEgzQJcgsFXhLQEshCIEi+QJ0jpFPjTQEQitCyiYQDEioEJkoQDGjcCejwQCtkHCEksQCRlHBTlxQAYhrAljGQAmjJAVhhQBHk8ABm6QACnlhYlmQh1nZjYnbQjQnIjjkyQkRlujAjSQiiixjWi1QjpjJhzhfQjCiiiqh7Qmzk7p6k9QishWmNhoQmThrkagfQjygbj8AAQk6AAlIArg");
	this.shape_42.setTransform(933.1251,205.5306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1332).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},124).wait(1));

	// black4
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AIcYhQhsjBhmjGQhxjZAEgOQBhlik/mIQhxiLiXh8QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAbgaAbALQAXAJAeAlIA9BSQApA5AkAjQBWBWBSDLQAhBQBMDnQASA2CUB8QBZBKDmC0QDVCrB1B5QCfCjAlB8QA/DRiMFIQgrBnhICFQhQCTgGANQgZA4gRBjQgEAcgRCGQgLBTgKAUQgGAKgHAAQgMAAgRgeg");
	this.shape_43.setTransform(375.8308,302.0727);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AKFZ9Ihkh4QhghzhWh6IgDgFQhJhggbg5IhFiaQg3h7gBgIIAWiIQAHgugGgxQgHg/gxhOQg/hbgggwQgdgtgfgqQgegrgXgcQhFh5hvh0QhlhmhdhFIhxhDQgTgQgPgbQgcg3ghg9QgFgIgLhAQgKhAgKgRQglhJg3iCQhjjqiOlsIgCgDQgHgSBjg9IA1gfQBMgsAygiQAjgYAlgTIBEgpQAUgOAUgBQALgBAJADQAcAIAiAhQAmAkAlAnQAuAyAoAmIAFAEQBnBfBiDKQAPAdAUAsQAnBXBFCkQAVAvBWBUIBEBDQBTBQC9CuIAxAtQDPDBB8CTQBoB2A5BnQAdAzAQAuQBaD2hgFFQgKAugPAxQgTBPggBTQg7CagLAZIgVAsQgXAugYA6QgVAcglBwQgWBFgXAQQgHAHgIAAQgPAAgTgag");
	this.shape_44.setTransform(385.5385,310.0919);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AL0baQg8gxg/g2IgvgpQhfhUhVhaIgEgFQgagagVgXQg1g6gagoQgSgYgTgrIgrheQgUgthPiSIhOiSQAXhjABhdQABiyhii3Qh7jliMhwQgvgmg4gfQg5gcgWgMQgKgGgOgKIgWgSQgLgIhGgiQhHgjgLgIQgIgHgriOIgtiRQgjg8g7iJIgHgQQhmjviamKIgCgEIAAAAQgIgTBng+IAGgDIA5giQBQguAwgjIAGgFQAggWAogRIAIgEQAqgVAjgPQAWgLAWgBIAAAAQAMgBAKADQAhAHAlAcQAuAfArAlIBkBXIADADIABABQB5BpBzDIQATAfAWAqIACADQAvBYBXCuQAdA1BOBTIAIAJIBHBMQBUBcCyC+IALALIAxA0QDKDWCDCuQBfB5A+BsIAJARQAeA2AUAyQB0Eag0FAQgDAwgIAxIAAAEQgHBYgVBWQgmChgQAlQgLAYgOAWIgBAEIhABcQgjAcg1BaQgKAPgKAMQgWAggXAJQgIAFgJAAQgSAAgWgWg");
	this.shape_45.setTransform(395.9924,318.1903);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ANnc4QhHgnhLgtIg4gkIgrgcQhag8hQhBIgFgFIg3gtIg1guQgZgYgSgVQgbgZgXgnQgUgdgPghIgPgiQgdg+hMiPIhWihQABgdg0hJQg4hMgDgaQAMg4AGg/QANh7gehBQgQgkgTgiQgphPgZgqQg5ifhfhxQgqgvg1gqQgygigZgVIgYgVIgWgUQgHgIgTgMIg2gjQg/glgUgSQgUgTgthoIgKgVQgYg1g3glQg1gdgHgEQgBgBAPgjQAPgjgBgBQgOgWgOgeIgthnIgHgRIgEgHQhqj3ipmwIgBgDIgBgBQgIgTBwhCIABgBIAGgEIA9gkQBWgyAvglIAEgCIAHgFQAfgVArgQIAEgCIAJgEQAtgSAogMQAWgIAWgCIAFAAIAAAAQANAAALACQAmAGAoAXQA1AbAxAjQA9ArA0ArIACACIABAAIABABQCLBzCDDIQAXAhAZAoIABACIACAEQA4BZBqC4QAkA7BKBUIAFAGIAIAJQAeAiArA0IECE4IAHAJIALAMIAvA6QDFDrCLDKQBbB/BBB1IAGAJIAJARQAgA6AXA2QCOE9gKE7QAEAygBAyIAAABIABAEQAFBggKBYQgRCmgTAyQgMAbgQAXIgDADIgGAIQgiAmgnAmQgvAchCBGQgNAMgNAJQgOAMgOAIQgNAHgNAEQgJAEgKAAQgVAAgYgSg");
	this.shape_46.setTransform(407.5739,326.3253);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("APLeWQhRgchWgkIg/gdIgzgYIgWgLQhbguhSgzIgGgDIg/gpIg9gqIgagTIgagWQgigZgbgiQgcgcgRgfQgKgQgIgQIgCgEQgkhOhJiMIhdixQgKgnguhFQghgxgUglQgIgPgDgMQgBgPg9hYQg3hRAOgTQAegngHiAQgIiOg0iUQg/iyhviDQiEidi6hFQgPgGhehrQhjhwgOgJQgTgMgsh0Qgrh8gJgUIgIgTIgDgHIgDgFQhvj+i5nZIgBgCIgBgCIAAAAQgIgUB5hHIABgBIABgBIAHgEIBCgnQBbg2AvgmIADgCIADgDIAIgFQAfgVAwgPIACgBIAFgCIAKgDQAvgQAvgIQAVgGAWgBIAFAAIAFAAIAAAAIAaACQArAFAqASQA8AWA3AgQBDAnA6AvIABABIACACIABAAIABABQCdB9CUDHQAaAiAbAnIABACIACADIACADQBABbB+DDQArBBBHBWIAEAEIAFAGIAIAJQAfAmAsA7IEBFYIAEAFIAGAJIALAOIAvBAQDAECCSDmQBXCFBFB9IAFAJIAFAJIAKATQAiA+AbA6QCnFfAhE2QAKAxAFAwIABAGIAAABIABAFQARBnABBaQADCpgWA/QgMAfgTAWIgDAEIgGAGIgCACQgmAjgvAgQg6AchNAyQgQAIgPAHQgRAIgQAFIgQAFIgOADQgKACgLAAQgYAAgagNg");
	this.shape_47.setTransform(421.2629,334.4708);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AQnf1QhZgRhfgcIhJgWIg7gUIgagJIgBAAQhlglhbgrIgGgDQgkgRgigSIhGgmIgegRIgFgDIgZgRQgpgZgfgcQgjgbgVgcQgOgPgIgQIgCgDIgFgKQgqhbhEiEIhljDQgUgwgohBQgegygZgsIgEgKIgLgVQgQgkgvhJQgbgsg1hvQg7h7AEgRQAYh+g5jaQgyjBg+hhQhGhrhkhcQg7g1hCgsQgmghhQhSIgTgSQhPhOgmgaQgXgQgbgjQgPgTgYgxQgnhcgdhAIgIgTIgEgHIgCgHIgCgCQh1kHjKoFIgBgCIAAgBIgBgBQgIgUCDhMIABgBIABgBIACgBIAHgEIBFgoQBlg9AugoIAAAAIACgCIAEgDIAHgFQAfgVA3gPIADgBIAGgCIAKgDQAygNA1gGQAXgDAYAAIACAAIADAAIAFAAIABAAIAcABQAvAEAtAOQBEASA9AdQBJAkBAAxIABABIACACIABABIABABQCwCHClDIQAdAiAdAmIABABIACACIADADIACADQBIBeCSDPQAyBGBEBXIAGAHIAEAFIAFAGIAGAJQAgAqAuBBQBdCFCgDxIAIALIAEAFIAGAJIALAQIAvBHQC7EZCaEEQBRCGBHCCIAIAPIAFAJIAFAKIALAUQAjBCAfA+QDBGDBKExQANAqAJApIAEAPIACAIIAAABIACAFQAdBuALBbQAVCugcBJQgNAhgXAUIgCACIAAAAIgHAGIgCACQgtAhg3AaQhEAahZAeQgQAFgSADQgRAFgSADIgRACIgRACIgSAAQgcAAgfgHg");
	this.shape_48.setTransform(435.8188,342.6438);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("EAMFAgUQjpg7i4hZQi0hYgehCQh3kHjpmlQhsjBhmjGQhxjZAEgOQBhlilAmHQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAfgdBNgSQBTgVBjACQD9AECzCGQDpCuDWD6QBtB/ESFvQBfB/EHGwQE/IKD/HeQFJJnCLGBQCoHXiEBWQiRBej+ABIgDAAQjZAAkEhCg");
	this.shape_49.setTransform(450.525,350.7913);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("EASyAjGQjHghlSisQlMiqhohaQgpgkgVgjIgdhAQh3kHjpmmQhsjBhnjFQhwjaAEgNQBglhlAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAfgcBOgTQBTgUBjACQD9ADCzCHQDoCuDXD6QBsB+ETFwQBhCBEHGrQFDILECHYQFNJlCMF/QCrHUiEBWQgyAgg1BxQg3B2gzAnQg+AwhlAAQgoAAgvgIg");
	this.shape_50.setTransform(451.3713,362.8039);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("EAE6AkNQkyicA1lcQANhWAziaQAmh1gKgXQh3kHjpmlQhsjBhnjGQhwjZAEgOQBglhlAmIQhxiLiXh9QhxhfhYgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQDpCuDWD6QBsB/ETFvQBaB4D6GhQErHwD4HTQLQVKiaD3QgoBBhpDUQhvDNh6ByQjBC0kFAAQjtAAkliWg");
	this.shape_51.setTransform(449.8503,384.0775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("EgLqAsaQkpilJAt/QB4i6ExmsQDJkdgLgZQh3kHjpmlQhsjAhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAfgdBNgSQBTgVBjACQD9AECzCGQDpCuDWD6QBtB/ESFvQBdB9D/GhQEzH5D8HUQFCJXCTGGQCyHchkB5QgXAbg6CIIiEE2QjYHljkE3QnjKRpPAAQlHAAlojIg");
	this.shape_52.setTransform(450.3109,441.5767);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("EgUUAx+QqQldPqyEQETk8HgnKQDhjYAogoQBmhlgHgPQh3kHjpmlQhsjBhmjFQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAfgcBNgTQBTgUBjACQD9ADCzCHQDpCuDWD6QBtB+ESFwQBTBvD0GjQEWHfD1HaQK1U6hZEYQgUA8g+CPQhSC8hnDIQkqJFlVGyQnMJLnXDfQkXCEkUAAQkrAAkmibg");
	this.shape_53.setTransform(449.0127,472.7151);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("EgUTAw7QqSlYPryFQESk9HhnLIEKkBQBlhmgGgPQh3kHjpmkQhsjBhnjGQhwjZAEgOQBglilAmIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQDoCuDXD6QBsB/ETFvQBTBvDyGjQEVHfD1HaQK0U5hWEZQgDALgtDVQgyDpg2DGQizKUkMHGQl1J5oJDDQjiBVj8AAQnQAAolkhg");
	this.shape_54.setTransform(448.9762,479.3525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("EgUbAwgQpYl2BinnQBNmDIFnEQFUkqI9liQCIhUDFh4QCBhQgGgPQh3kHjpmkQhsjBhnjGQhwjZAEgOQBglilAmIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQDoCuDXD6QBsB/ETFvQBfB/D8GJQE1HiEEHBQL4UdhVEWQgJAdgxDMQg+DxhEDXQjcK4kqHgQmfKaoUDAQjSBMjjAAQnhAAonlXg");
	this.shape_55.setTransform(449.7706,482.0696);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("EgULAwgQw2qhQVuvQEmkJInldQEgi3AjgYQCDhYAHgfQAhiohDkHQg3jUhLiHQhsjBhnjGQhwjZAEgOQBglilAmIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQDoCuDXD6QBsB/ETFvQBfB/D8GJQE1HiEEHBQL4UdhVEWQgJAdgxDMQg+DxhEDXQjcK4kqHgQmfKaoUDAQjSBMjjAAQnhAAonlXg");
	this.shape_56.setTransform(448.19,482.0696);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("EgW4At9QxkpLPYvsQEXkdIPl+IE4jiQB/hhAHgfQArjTAEi/QAEjfg2hhQhsjBhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAfgdBNgSQBTgVBjACQD9AECzCGQDpCuDWD6QBtB/ESFvIGRIPQGHIHEpGrQOjU4hUERQgJAfAWDtQAgFSAJDHQAoNGi4IPQkFLwrBCDQiUAcimAAQs0AAz9qdg");
	this.shape_57.setTransform(465.4265,498.3649);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("EgrwAxjQpzlHENoTQDZmrMVofQI2mGM3moQGijYF6iwQBRgqBShrQBLhjA6h/QA4h8AThqQAVhvgdgzQhrjBhnjGQhxjZAFgOQBglik/mIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAfgdBOgSQBSgVBkACQD9AECzCGQDnCuDWD6QBtB/ETFvQAwA/GsIkQHnJzFuH2QSRZDhTERQggBnhBChQhtEKiNEIQmvMmpTIYQszLhwGB7QjLAZjSAAQxUAA0Lqkg");
	this.shape_58.setTransform(390.2001,522.0568);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("EgrxAxDQlEiqhTlHQhLkqCKlsQCFlhEgkwQEqk7FyifQDjhiG4hyQDog8BegcQCxg0CBg2IIQjfQDeheAogVQBRgqBShrQBLhjA5h/QA4h8AUhqQAVhvgdgzQhsjBhmjFQhxjaAEgOQBhlhk/mJQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgVCNhRQCzhnA9g4QAfgdBNgSQBTgUBjABQD9AECzCGQDoCvDWD5QBtB/ETFvQAwA/GhHtQHiJBFgHOQR+XjgiICQgMCqhQEFQhdEsiaE0QmQMfp0IEQskKVwZA/QhtAHhwAAQydAA2Frkg");
	this.shape_59.setTransform(390.2048,525.2503);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("EgsOAxDQlDipgsm/QgomVC/oKQC4n7FFmdQFWm0FtieQCUhACwA0QCCAmCpBvQBdA+CcBuQB3BLA0gXQDWhdE6iEQDqhiAcgPQBRgqBShrQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjFQhwjaAEgOQBglhk/mJQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgVCNhRQCzhnA9g4QAfgdBOgSQBTgUBjABQD9AECzCGQDnCvDXD5QBsB/EUFvQAvA/GiHtQHhJBFhHOQR+XjgjICQgLCqhREFQhdEsiaE0QmPMfp0IEQslKVwXA/QhuAHhxAAQydAA2Erkg");
	this.shape_60.setTransform(393.1789,525.2503);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("EguKAw0QlCiogEnmQgEm0D2o+QDsonFsnCQF/nYFuicQBpgtB9BdQBZBCB9CiQCuDhANAPQBeBpA1gYQDWhdE6iEQDqhiAdgPQBRgqBRhrQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhvjZAEgOQBflik/mIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQDnCuDXD6QBsB/EUFvIHwJPQIJJsF+HvQTiZTgjIBQgLCnhZD+QhlEfipEoQmvL1qZHiQtOJkwzAkQhBAChCAAQzeAA2+sCg");
	this.shape_61.setTransform(405.5931,526.772);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Egv4AxSQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk7CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DLA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShrQBKhjA6h/QA4h8AThqQAVhvgcgzQhsjBhmjGQhwjZAEgOQBglilAmIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQDoCuDWD6QBsB/EUFvQALAPH9JRQIqKGGSH7QUvaKgjIBQgLCmhgD9QhsEcizEmQnILsq1HcQtvJbxHAdQg4ACg5AAQz9AA3JsIg");
	this.shape_62.setTransform(416.5819,530.3677);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("EgvvAxSIgPgIQiahWg8jrIgCgKQg2jfAglRIAAAAQAek7Bml9IADgMQBhllCQlqIAJgXQCNlfCikmIASghQCikgCci4IAfgjQCZisCCguQAagJAZgEQCDgXBdB4QARAWASAcQBSCACKDdIAkA6QBdCUAyBNIAoA6QAtBAAiAlQAfAhAZANQALAGAKACQAnANAigPQDNhfDyhkIBQghIC8hOQA7gaASgOQAvgeAwgzQAfgiAegqQAshBAnhLQAXgsATgvQAdhEARg/QAPg3AFgvQADgigDgaQgGg8gWgnQhQiRhMiSIg1hmQgvhcgQgmQgZhRAEgaQA/kvjwlMQgmg1gug1QhKhWhahSQg1gwg1gqQgugkgogcQgzglg4g7Qgbgeg1huQgdg7gjhQQhrjziwm8QgWg3AbhPIAAgEQAVgdBxhDQA+glAqgdQAxgiAygYIAsgZQAogWBJgMIAHgBQBVgMBaAHQCUANB5A8QBRApBIA5QCPBxCHCNQA3AeCDBIQAsAeA9AyQCNBqDWDAQALAFAkAjQBOA4BwB/QBNBYBaCAQAwBCA4BVQAnA5AnA+QB1DDBYB2QCaDJDbFAIDIEXQE6HLCnDuQLwRpAUGTQAGBTgQBRQgUBwgzCOQgaBKghBOQhaDWiDDcQglA/goA+QmwKip6G7IhbA9QtOIswTAgIhGACIg+ABQz9AA3JsHg");
	this.shape_63.setTransform(416.1713,530.6291);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("EgvqAxUIgPgIQidhVg9jsIgCgKQg4jfAhlUIAAAAQAfk9Bml/IADgMQBhlnCSlsIAJgXQCPlhCjknIASggQClkjCdi3IAfgjQCeisCDgnQAbgIAZgCQCAgOBbCBQARAYARAcQBUCDCJDcIAkA5QBgCZAwBIQAWAhATAZQAvBCAjAiQAhAhAcAGQAMADALgBQAlgCAkgQQDPhfDzhkIBQghIC7hOQAwgXAdgYQAtgiAtg2QAegkAcgqQArhCAlhNQAWguASguQAbhGAPhAQANg5ABgtQAAgjgIgZQgQg1gYgsQhRiRhMiUIg0hlQg2hrgGgYQgEhFADgrQArkuj9lKQgog0gugzQhOhWhchQQg3gwg1goQgvgjgqgbQgmgZg4hXQgcgtgvhiQgcg9gjhPQhtj8itm3QgPgnBUhQIABgCQAzgnBVgzQBBgoAlgeQAngfBBgWQAZgKAXgHQAwgQBFgFIAIgBQBYgFBWANQCSAWB1BKQBOAvBHA8QCNB1CFCRQAcgYC0AzQA1ASBFAhQCsBJDyCJQASAHAgAVQBnAwBmBxQBOBXBPCJQAnBCAuBdQAeA8AhBFQBqDxA4BeQBeCTD7GbIC5EhQFSIoBtCkQK8R/BDGUQARBcgKBDQgOBvgvCTQgZBKggBQQhXDZiBDfQglBAgoA/QmsKrp5HCQgtAgguAfQtQI3wYAlIhGACIhRABQz8AA3JsFg");
	this.shape_64.setTransform(416.1699,530.72);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Egv3AxQQijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk7CpjAQCzjNCTgjQCggnBqCmQBbCNClEJQB/DLA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShrQBKhjA5h/QA4h8AUhqQAVhvgdgzQhsjBhljGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAfgdBNgSQBTgVBjACQD9AECzCGQDYCiDHDiQAAhjFxBJQDeAsEwBeQB/AoBcBiQBQBWBDCTQAvBpBDDJQBfEeAZBGQAiBeEbH1QIJOcA8BuQMnWzgTERQgLCmhgD9QhrEai0ElQnHLmq1HXQtuJVxHAaIhjABQ0CAA3SsMg");
	this.shape_65.setTransform(416.4339,530.575);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("EgvqAxRIgTgKQiZhVg9jpIgDgMQg2jfAhlSIAAAAQAek8Bml8IAEgPQBglkCQlpIAMgdQCMlcCgkjIAXgpQCgkbCai1IAngtQCVijB+grQAigMAggDQB4gNBYBxQAWAcAXAkQBRB+CCDRIAuBKQBWCJAvBHQAdAsAXAfQAmA1AdAfQArAtAhAEIADAAQAwALArgTQDGhaDmhgIBngqICkhEQBGggAcgaQAlgaAkgoQAngrAmg3QAjg3Agg+QAeg7AXg7QAVg2ANgzQAUhLAAg4QgBgQgCgOQgLhKgdg1QhJiDhFiFIhDiBQgmhNgKgaQgThhACgrQArkgjik5QgxhDg8hDQhBhIhLhEQhGg/hDgzIg4goQg3gohGheQgWgeglhKQgjhJguhpQhojviimaQgSguA3hOIAMglQAlgkBhg7QAmgXAbgUQArgfA7gXQAxgXApgOQAegMAsgHIAogFQBagIBcAOQB3ASBjA0QAzAYA6AnQAwAeAtAXIABABQB3BFC8A4QA6AmCMAlQAegdBZgEQB0gGCQAOQBsAHBmAMQCmAQCcAeQCQAWBeA8QA5AeAjApQAuAzAnBJQAtBVAqCHQANAqANAwQBBDgAZCbIADANQAdCOB8F3QAQAzASAyQA/DGA/CIQBcCxCSEwQBmDHAvBkQCUEsBqDeQHPPHAgEtQAJBhgQBVQgRBpgsCEQgcBSgkBYQhWDPh8DVQgqBHgtBHQmqKZpvG5Qg2Alg2AkQtIInwMAjIhWACIg6AAQz9AA3MsHg");
	this.shape_66.setTransform(416.115,530.9392);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Egv3AxQQijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk7CpjAQCzjNCTgjQCggnBqCmQBbCNClEJQB/DLA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShrQBKhjA5h/QA4h8AUhqQAVhvgdgzQhsjBhljGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAfgdBNgSQBTgVBjACQD9AECzCGIBnBOQAyAkAvAQQBoAmD7gMQAygCFEgUQEegSC3gGQJFgRBuBVQB6BfBDDyQAyC1AgFGQASC4AfFuQAiEvA5CfQAdBPDDG1QD3IoCEE2QIASygTEYQgLCmhgD9QhrEai0ElQnHLmq1HXQtuJVxHAaIhjABQ0CAA3SsMg");
	this.shape_67.setTransform(416.4472,530.575);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Egv3AxQQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk7CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DLA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShrQBKhjA6h/QA4h8AThqQAVhvgcgzQhsjBhmjGQhwjZAEgOQBglilAmIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAfgdBOgSQBTgVBjACQD9AECzCGQA9AuAqATQArASA2ADQBIAEEbgWQBggEE/gdQF2giC7gNQLNgxBrBTQB6BfBMEMQA5DKAsFrQAZDMAsGTQAqFLA5CdQA6CfB0FkQCSG+B6GcQFgSggUEkQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxHAaIhjABQ0DAA3RsMg");
	this.shape_68.setTransform(416.467,530.575);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Egv4AxqQijhVg9j0Qg4jhAhlWQAek/BomBQBilvCWl0QCTlwCqkyQCwk6CpjAQCzjNCTgkQCggnBqCmQBbCNClEJQB/DLA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShrQBKhiA5iAQA4h8AUhpQAVhwgdgzQhsjBhljFQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBqAPBYgLQA+gIBXgbQB1glAsgKQBrgZB4gFIIFgeQHNgbFCgNQQOgpBtBVQB5BeAHEXQAGDEg5GIQhKH9gKB5QgeFQA8CjQAqBzBIGdQBFGHBFHyQCmSogXFJQgLCmhgD8QhrEai0ElQnHLmq1HYQtuJVxHAZIhjABQ0CAA3SsMg");
	this.shape_69.setTransform(416.5478,527.9419);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Eg3cA15QijhVg+j0Qg4jhAhlWQAfk/BnmBQBjlvCVl0QCUlwCqkyQCwk7Coi/QC0jNCTgkQCggnBqCmQBbCNCkEIQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhiA6h/QA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPEKgzQC7gjFghXQHNhyBagVQEchAB4gGQBcgEHEhwQIgiIEug2QRtjJB8GpQBaE5g5FZQgsEKiQFPQhRC+ioFcQiEElgUCxQgTCnikUsQieUUgTEZQgLCmhgD8QhsEaizElQnHLmq1HYQtuJVxHAZIhkABQ0CAA3RsMg");
	this.shape_70.setTransform(464.9777,500.8294);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Eg/yA44QijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk8CpjAQCzjMCTgjQCggnBqClQBbCNClEJQB/DMA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShsQBLhjA5h/QA4h8AUhpQAVhvgdgzQhsjBhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBqAPGIhTQETg6IfiJQK3iuCGggQGahiB5gFQBjgFHpiRQJ2i8E3hKQI/iKFNAIQGjAKBFDtQBbE7idGtQh9FVkpG+QiFDJl/IEQkbF+hFCVQhnDikGS4QkESxgYFbQgLCmhgD9QhrEai0ElQnHLmq1HXQttJVxIAaIhjABQ0CAA3SsMg");
	this.shape_71.setTransform(518.3178,481.7619);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("EhRVA8NQijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk8Cpi/QCzjOCTgjQCggnBqCmQBbCNClEJQB/DMA1BOQBOBzAxAqQA0AuAogTQDuhuEfh1QD7hoAPgHQBRgqBShsQBLhjA5h/QA4h8AUhqQAVhvgdgyQhsjBhmjFQhxjaAEgOQBhlhlAmJQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBqAPHwhvQFbhNK8izQN0jhCugrQICh8B5gGQA9gDDohCIIciiQOCkMJLiAUAgTgHAACOAMMQBMGbmkHRQlCFkqfG5QjYCOlcDUQmcD8hnBCQkECliKBuQimCEgrBeQmkOVj2I8Qo0UkgUEgQgLCmhgD9QhrEai0ElQnHLmq0HXQtuJVxIAaIhjABQ0CAA3SsMg");
	this.shape_72.setTransform(630.6205,460.4503);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("EhgmA+4QijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk8CpjAQCzjNCTgjQCggnBqCmQBbCNClEJQB/DMA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShsQBLhjA5h/QA4h8AUhqQAVhvgdgzQhsjAhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBpAPJliMQGthhNsjeQRQkXDTg0QJ1iaB5gFQA9gDEchLQCxguH1iJQRtkyMAidUApvgIiACOAMNQBNGcpLIAQnHGOuRH1Qk/CvnIDoQnvD4jYBvQluC7i8BwQjsCMhGBVQheBzkwGvQleHvlCHmQuTVngUEmQgLCmhgD9QhqEai0ElQnHLmq1HXQtuJVxIAaIhjABQ0CAA3SsMg");
	this.shape_73.setTransform(728.3045,443.3512);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("EhvLBArQijhVg9j0Qg4jhAhlWQAek/BomBQBilvCWl0QCTlwCqkyQCwk7CpjAQCzjNCTgkQCggnBqCmQBbCNClEJQB/DMA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShsQBLhiA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjEQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPLWilQH8hzQTkCQUslIDvg5QLlizB5gFQA8gDFPhOQDQgxJXiRQVFlAOzisUAytgJPACPAMOQBMGdq7IJQooGcw6H8QmRC8oSDkQiIA6rZE0QnVDGjfBnQkwCMhtBQQhsBPnMHYQnsH5nzIlQpQKOlgHBQmoIagLCfQgLCmhgD8QhrEai0ElQnHLmq1HYQtuJVxIAZIhjABQ0CAA3SsMg");
	this.shape_74.setTransform(821.6155,431.8312);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("EiCFBGJQijhVg9j0Qg4jhAhlWQAek/BomBQBilvCWl0QCTlwCqkyQCwk7CpjAQCzjNCTgkQCggnBqCmQBbCNClEJQB/DMA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShsQBLhiA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjFQhxjaAEgNQBhlhlAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPMFjEQIXiHRikzQVal3EphOQMWjSB5gFQA8gDGphnIQXkDQbym1Tej/UBDQgNvACPAMNQBMGdwTK7Qs2In4hL2QsbGA7dMUQqTEnkbCGQmOC9htBQQiFBhnWGPQozHbn3HIQ2/UygUEkQgLCmhgD8QhrEai0ElQnHLmq1HYQtuJVxIAZIhjABQ0CAA3SsMg");
	this.shape_75.setTransform(942.6496,396.8366);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("EiXxBMdQijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk8CpjAQCzjNCTgjQCggnBqCmQBbCNClEJQB/DMA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShsQBLhjA5h/QA4h8AUhqQAVhvgdgzQhsjBhmjGQhxjZAEgOQBhlilAmHQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBpAPL4jmQIDicRWlqQUNmlFYhsQMHj0B6gGQA8gCIliEQFYhSQEj5UAksgI2AZ9gFcUBZqgSyACPAMNQAPBTiBD4QiBD1jTEnQjlE+jwD9QkQEfjkCKQiRBYiNgcQhRgQifhZQiahXhdgPQiVgYifBeUgUyAMXgvtAa3Q1VMBnNEHQsVHCiSBsQhFAypiFLQsoG1mrDzQ61PQgTEXQgLCmhgD9QhrEai0ElQnHLmq1HXQtuJVxIAaIhjABQ0CAA3SsMg");
	this.shape_76.setTransform(1081.421,356.4792);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAQBXj4IfQkEI3lXJfQmQLGlPGyQmPIHjoAXQipAQgZktQgQi8AvnRQAvnVgKiMQgSj3ieBeUgUyAMXgvtAa3Q1WMBnNEHQsUHCiTBsQhFAyphFLQsoG1mrDzQ61PQgTEXQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhkABQ0CAA3RsMg");
	this.shape_77.setTransform(1081.3866,356.4598);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAIAqheDwQhgDyilFjQmQNbnOMhQo+Pgm3HiQoZJLkIkJQjajbBYnzQBClzD1opQCFkrDZm4QBAiLABgoQABgthNA8Qj5DCweKpQu7JqzzMZQzpMTugIxQv0JkiyBMQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhkABQ0CAA3RsMg");
	this.shape_78.setTransform(1081.3694,356.4598);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAJAthXEsQheFJiaG0QmZSNnxPsQqNUpp4KYQsMM0qqkFQpIjeCbrZQB5o6I5thQFhobI/rIQEElDASgYQAqg3ADgMQADgNgnAfQj5DCweKpQu7JqzzMZQzpMTugIxQv0JkiyBMQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhkABQ0CAA3RsMg");
	this.shape_79.setTransform(1081.3762,356.4598);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAJAwhXE9QhlFrihHNQnAT+pPRhQsYXatwNeQxDQsx9AIUgRaAAFAaDgncQGoqDL7v/QEpmPBFhjQB0inhJA6Qj4DBu7JlQtcIox3LDQxhK1tMH3QuPIfizBMQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhkABQ0CAA3RsMg");
	this.shape_80.setTransform(1081.3802,356.4598);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAJAxh4F4QiLG0jWIgQpdX/sEUjQwObqxpPOQ13S32ghzQpugyGBtlQEuqpOVyUQJArhOIwDIHOoQQCXivhIA4UgHfAF1glHAVKQusIXsRGsQsbGzi5BPQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhkABQ0CAA3RsMg");
	this.shape_81.setTransform(1081.3696,356.4598);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAJAwjVHmQjzIoliK9QvgepxKZWUgXFAiHgU3AQJQ54UC0fpXQv2nRJGx9QHPuRWd0KQQEuaVAvCIDYiZQrhHE1DMAQusIXsRGsQsbGzi5BPQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhjABQ0CAA3SsMg");
	this.shape_82.setTransform(1081.3564,356.4598);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQAJAvikG2QjAIBkdKBQsscmvpZDUgZsApKgbLAUoUgioAaTgiFgJqQtSjwD0sYQDNqdPLwIQMRtCSyvbQOqsCN2puQv8JwyOJ8Qv+IulfCVQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhjABQ0CAA3SsMg");
	this.shape_83.setTransform(1081.3592,356.4598);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("EiXwBMdQijhVg+j1Qg4jgAhlXQAfk+BnmBQBjlvCVl0QCUlxCqkxQCwk8CojAQC0jNCTgjQCggnBqCmQBbCNCkEJQB/DMA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShsQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmHQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQALA7huHWQiLJNjYKYQqKfLvaYsQrQSBuqP1QvuQ/w+LhQymMnyDEmQz5FDx5lEQtSjwDKsGQCrqQOSvuQLnszR/vCQOXsBNepeQu4JHuPG6QmhDLp4ENQ2bJosYGBQ5vMigUEjQgLCmhgD9QhsEaizElQnHLmq1HXQtuJVxIAaIhkABQ0CAA3RsMg");
	this.shape_84.setTransform(1081.388,356.4598);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("EgZKBWgQtRjwD0sAQDOqIPOvpQMLsfS7vJQN8rKOlqPQuZIzxsG+QlEB/m4CbQmICKhTAjQpED5i3BRQoZDumDDFQxTI0gUEmQgLCmhgD8QhrEai0ElQnHLmq1HYQtuJVxIAZQ0rAg4MsrQijhVg9j0Qg4jhAhlWQAek/BomBQBilvCWl0QCTlwCqkyQCwk7CpjAQCzjNCTgkQCggnBqCmQBbCNClEJQB/DMA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShsQBLhiA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjFQhxjaAEgNQBhlilAmIQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQAEAZgJCKQgKCqgaDaQhJJxiYKhQjMOOk8NFQmGQMoYNaQq3RZyXRSQykRe1bM0Q2yNp1KFXQsdDKq6AAQpbAAoTiXg");
	this.shape_85.setTransform(1081.4132,357.8045);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("Egl2BevQsVggpLimUgYdgG7AgXgeaQLZquS+uDQGuk/IlmEQEzjZIFlqQmPCmuaFrQs7FFmDCnQpVEBkpC4QleDagLChQgLCmhgD8QhrEai0ElQnHLmq1HYQtuJVxIAZQ0rAg4MsrQijhVg9j0Qg4jhAhlWQAek/BomBQBilvCWl0QCTlwCqkyQCwk7CpjAQCzjNCTgkQCggnBqCmQBbCNClEJQB/DMA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShsQBLhiA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjFQhxjaAEgNQBhlhlAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQAFAfAIDWQAJESAAFHQgBPYhWPEQh3UtkIQvQlIUzoYNbQqWQl5LPOQ3LOA+qJ9QulEvuuDOQuxDQttBdQqqBJpZAAQi/AAi3gHg");
	this.shape_86.setTransform(1082.4382,396.1435);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("EhgCBq3QtcjHDnr4QDDqDPAv2IB+iDQp9ERreARQ0sAg4LsrQijhVg+j0Qg4jhAhlWQAfk/BnmBQBjlvCVl0QCUlwCqkyQCwk7CojAQC0jMCTgkQCggnBqCmQBbCMCkEJQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhiA6iAQA4h8AThoQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQAGAgANECQAQFMAIGHQAXSghARqQhaYXj3S0Qk0XboXNaQlQIZq8IuQqTIMu5IIQuIHtxbHMQwvG6yhF7QyIFyyKEUQyNEVwfCbQw5CftiARQhoADhkAAQsBAAoTh8gEg0VAYRQg4AfglBfQgXA+gjCcQgoC0gbBbQgyCjhIB8IAnggQOpsANwprQw0HAk8BIQhdAVgSgPQgDgCgCgIQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBAAIgFACg");
	this.shape_87.setTransform(1083.777,485.404);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("EhnABtdQtjjIHRvQQFpr3Rbx6Qp9ESreARQ0sAg4LsrQijhVg+j0Qg4jhAhlWQAfk/BnmBQBjlvCVl0QCUlwCqkyQCwk7Coi/QC0jNCTgkQCggnBqCmQBbCNCkEIQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhiA6h/QA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQAHAjATEQQAYFiARGbQA1TogoSkQg4ZpjjTkQkcYVoXNaQlPIZrWIsQqpIKvkIGQuvHpyRHIQxgG2zbF3Qy8FuzAEQQy/ERxJCYQxiCct7APQhgAChcAAQsiAAoah9gEg2JAXnIgBABQgXA+gjCcQgoC0gbBbQgyCjhIB8QDpi/CEiHQBThVBLhiQBGhdAugtQBRhQChhyQiQA9jZgJIiWgGQhNAAgtASg");
	this.shape_88.setTransform(1086.1781,502.1334);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("EhV8BxHQuvgFpaiLQtMjDKkw5QEHmlH7pDQFjmTJIpZQp8ERrfARQ0rAg4MsrQijhVg9j0Qg4jhAhlWQAek/BomBQBilvCWl0QCTlwCqkyQCwk6CpjAQCzjNCTgkQCggnBqCmQBbCNClEIQB/DMA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShsQBLhhA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjFQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQAGAhAPEvQAUGFAMHGQAkVng2UTQhLb/jvU5QkpaCoYNaQlPIZrlIXQq3H2wCHiQvFHGy3GeQx7GJ0FFJQzZE/zpDmQzbDkxqB3QxQB0t1AAIhCgBgEg3LAZSIAAACQgoCzgcBcQgyCjhHB8QEKi4BvifQAog5AchCIAohoQiRA8gzgiQgigWgEgBQgHgCgKAAQgSAAgbAJg");
	this.shape_89.setTransform(1084.7082,513.109);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("EhWBBxSQutgtpeiMQtujLFPs8QEMqWQrxIQl1CflWAFQlHAFmMiJQlNhzohkWQrOl7nLjwQijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk7CpjAQCzjNCTgjQCggnBqCmQBbCNClEIQB/DMA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShsQBLhiA5h/QA4h8AUhqQAVhvgdgzQhsjBhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBpAPL+jnQIHicRglrQUYmnFahtQMNj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACPAMNQAGAgARFZQAWG1APICQAsYYgvWqQhBfRjpWwQkjcYoXNaUgKLAQTghpANfUgdnAL4gqlAH2QzSDjz4CSQzSCOx6A0QpkAbolAAQnZAAmqgUg");
	this.shape_90.setTransform(1085.4144,516.1698);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("EhWUBxNQuwhApgiNQnUhsj3j4QjsjvgKlWQgKlRDTmLQDWmSGemaQinBEiug1QiSgtkei2QmNkGkii1QoSlJpDkwQijhVg+j0Qg4jhAhlWQAfk/BnmBQBjlvCVl0QCUlwCqkyQCwk6CojAQC0jNCTgkQCggnBqCmQBbCNCkEIQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhhA6iAQA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQAHAiAWFrQAeHPAWIeQBFZwgaXyUgAkAg3gDZAXrQkNdgoYNaUgKJAQRgiAAMZUgdsAK1grNAGYUgm6AFwgmKAAmQj7AEjxAAQtYAArXgyg");
	this.shape_91.setTransform(1087.8809,518.6484);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Eg2EByiQx8gSuxhVQuzhWpkiNQkKg+mzjqQmojkmFkdQmgkyjDjzQjekTB8h8QDojoEDhUQCvg5EMgCIDOgBQBzgCBTgQQDXgoCeidQjNg2iNhmQg4gphQhIIieiPQjsjTkdjCQmfkbpllBQijhVg9j1Qg4jgAhlXQAek+BomBQBilvCWl0QCTlxCqkxQCwk7CpjAQCzjNCTgjQCggnBqCmQBbCNClEIQB/DMA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShrQBLhjA5h/QA4h8AUhqQAVhvgdgzQhsjBhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBpAPL+jnQIHicRglrQUYmnFahtQMNj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACPAMNQAGAkAeF/QAlHtAgI5QBibRgCZBUgACAimgDFAYrQj1exoXNaUgKIAQOgiaALLUgdzAJtgr7AExQzfCH0gA7QujApuBAAQktAAkqgFg");
	this.shape_92.setTransform(1091.4143,522.6587);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("EgyjByxQyfgpvNhkQvJhkpmiOQlfhRq2kBQtPk7pllDQsOmcjSlMQj+mUJoj+QErh6FVAfQDLATFpBqQCuAzBQASQCGAgBjADQDyAJCiigQjHg1hBhhQgWgggdhJQgkhYgZgwQhmi/jujHQlHkRpqlEQijhVg+j0Qg4jhAhlWQAfk/BnmBQBjlvCVl0QCUlwCqkyQCwk6CojAQC0jNCTgkQCggnBqCmQBbCNCkEJQB/DLA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShrQBLhiA6iAQA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQBbJrBlOTQDKcWBWZuUAB3AjwgB/AZUQiffloXNaUgKHAQMgjxAKZUge0AI+gt6ADtQ70CQ8IAAQscAAsggcg");
	this.shape_93.setTransform(1077.6851,526.4282);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("EguoBy0QyfgqvMhlQvIhlpliRQsAi4uNmVQuQmXqEm/Qq/nnh4lqQiJmcKTikQEAhAH7ACIF3AEQDEAABogNQCCgSAqgrQAvgyg3hZQh4jCqJm0QiYhng3j+QgzjqAjlaQAhlBBmmAQBiluCSlvQCRlsCnkrQCsk1Cli6QCwjHCRggQCdgjBqCmQBbCNClEJQB/DLA1BOQBOBzAxAqQA0AuAogTQDuhuEfh2QD7hnAPgHQBRgqBShrQBLhjA5h/QA4h8AUhqQAVhvgdgzQhsjBhmjGQhxjZAEgOQBhlilAmIQhxiLiXh9QhyhfhYgzQglgWhyj8Qh6kRjeo0QgIgWCNhRQCzhmA9g4QAwgsDbAkQApAGCtAhQCSAcBfANQBpAPL+jnQIHicRglrQUYmnFahtQMNj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACPAMNQBaJrBmOSQDJcXBWZuUAB3AjwgB/AZUQiffloXNZUgKGAQMgjzAKcUge1AJAgt6ADvQ72CQ8HAAQscAAsggcg");
	this.shape_94.setTransform(1052.2243,526.7948);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("EgrgByaQyVglvahZQvFhXpvh5QybjnwpoXQvQnppmpZQkkkeigkOQiikRgJjlQgJjtCdinQCmiwFVhVQEhhIGEA1QDOAdFbBbQB6AgAoAGQA6AIgHgYQgMgvlKkKQiPh0gxkGQgujxAllcQBHqTEysIQCPloCjknQCokwCii2QCtjDCPgdQCbggBqCmQBbCNCkEJQB/DLA2BOQBOBzAwAqQA0AuAogTQDvhuEfh2QD7hnAOgHQBRgqBShrQBLhjA6h/QA4h8AThqQAVhvgcgzQhsjBhnjGQhwjZAEgOQBglilAmIQhxiLiXh9QhyhfhXgzQgmgWhxj8Qh7kRjdo0QgJgWCNhRQCzhmA9g4QAwgsDbAkQAqAGCtAhQCSAcBfANQBpAPL9jnQIIicRflrQUZmnFZhtQMOj1B6gFQA8gDIjiDIVXlLUAkmgI1AZ2gFbUBZXgSvACOAMNQBbJrBlOSQDKcXBWZuUAB3AjwgB/AZUQiffloXNZUgKGAQKgjwAKMUgelAItguEADiQ7lCI8fAAQsUAAsfgZg");
	this.shape_95.setTransform(1033.3539,523.8676);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("EgoEBxbUgiegAxgYYgCYQ76izzTpwQohkTmRlaQl1lCjhlpQjUlTg8lVQg6lJBbkeQBakdDhjIQDojOFYhWQErhLGMCWQDNBODLB9Qg4hkgbiRQgujxAllcQBHqTEysIQCPlpCjknQCokvCii3QCtjCCPgeQCbggBqCmQBbCNCkEIQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhhA6iAQA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQBbJrBlOTQDKcWBWZuUAB3AjwgB/AZUQiffloXNaUgKDAQFgjsAJkUgeAAICgufADDQ65By+BAAQruAAsNgSg");
	this.shape_96.setTransform(1013.2706,516.8144);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("EgnwBxVUghsgAtgZLgCPQwihgtnkbQsgkEpmmXQoyl2l3ncQlam3icnmQiTnLAom2QAmmrDRlNQDUlTFei0QFxi+HSASQB4AEEHnWQBSiRCmlAQC3lfBVidQFKpYDcjSQEmkZC+EpQBbCNCkEIQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhhA6iAQA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhxhehYgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQBbJrBlOTQDKcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJgUgd8AH9guiADBQ6vBv+HAAQrvAAsQgRg");
	this.shape_97.setTransform(1011.3504,516.142);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Egn3BxYUgiEgAvgYygCTQz+h4vMlYQt6k8pfnuQopnDkjpAQkKoQgZpOQgYokC4oWQCxoAFQmXQFRmZGsjdQHAjoHUASQB4AFCXksQAxhfBUjCQBijfAnhTQCnlhCIhSQC1huC/EpQBbCNCkEIQB/DMA2BPQBOByAwAqQA0AuAogSQDvhuEfh2QD7hnAOgIQBRgqBShsQBLhhA6iAQA4h8AThpQAVhwgcgzQhsjBhnjFQhwjaAEgNQBglilAmJQhxiKiXh+QhyhehXgzQgmgWhxj9Qh7kQjdo1QgJgVCNhRQCzhnA9g4QAwgsDbAkQAqAHCtAhQCSAbBfAOQBpAPL9jnQIIidRflrQUZmnFZhsQMOj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACOAMNQBbJrBlOTQDKcWBWZuUAB3AjwgB/AZUQiffloXNaUgKDAQFgjsAJhUgd+AIAguhADCQ61Bw+GAAQrtAAsNgRg");
	this.shape_98.setTransform(1011.9901,516.4481);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBtAEEjimIEKiaQClhdB8g6QFYifD0AQQE2AVC/ErQBbCNClEIQB/DMA1BPQBOByAxAqQA0AuAogSQDuhuEfh2QD7hnAPgIQBRgqBShsQBLhhA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjFQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_99.setTransform(989.0052,516.4481);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBBACB9g9QBigwCshrQDSiHB0hIQDOiBCYhTQGujqEggYQFxgfDAErQEEGWGREQQCRBjB9A3QBuAwAagOQBRgqBShsQBLhhA5iAQA4h8AUhpQAVhwgdgzQhsjBhmjFQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_100.setTransform(989.0052,516.4481);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBCACCGh0QBwhhC6jNQBRhZEclEQD4kaCbinQHroME3ixQGZjmC+EpQEJGdH7I3QC+DUCAB+QB+B7geg1QhsjBhmjFQhxjaAEgNQBhlilAmJQhxiKiXh+QhyhehYgzQglgWhyj9Qh6kQjeo1QgIgVCNhRQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_101.setTransform(989.0052,516.4481);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBDACB9i5QBrieCqlFQBvjVDhnJQD+oGBzjhQHIt/EblmQF8ngC+EpQCzhnA9g4QAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRgEhfRgb4QBtD4BiDlQAbkwkOlLQghgogjgnIBoDtg");
	this.shape_102.setTransform(989.0052,516.4481);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBBACBNjqQA7i4BfmsQBzoeBFkzQB7ojBvmOQE5xfF4nqQHlp3JwFXQBFgoBCHLQAQByAbDIQAUCMANgMQAwgsDbAkQApAHCtAhQCSAbBfAOQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_103.setTransform(989.0052,516.4481);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBBACBYkjQA/jQB9ojQCwsBBDkQQCgqNCcnsQGo07H8oaQKIqvMqI6QB+BZALEOQAHCvgwFoQgzF5AAB0QABDcBtAQQBpAPL+jnQIHidRglrQUYmnFahsQMNj1B6gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_104.setTransform(989.0052,516.4481);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQBAACBRlEQA2jVB3pwQCQr0BVmIQCZrHChoeQGv2vI7ohQLVq1PILkQB7BdAREQQALCtgkFpQgmFzAFB3QAJDaBuAQQBpAPLMi6QHviAQNkkQTqljEdhNQLejIB5gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_105.setTransform(989.0052,516.4481);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQA/ACA3lIQAdixBOqkQBTrLBInPQBwrYCSo+UANog1wAkfAQGQEBBxAhErQAZDchjFtQgYBXg9DHQgzCngSBOQgbBzAIA7QAKBEA7AIUACuAAZAgfgGgIXDkmQK/iJB4gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_106.setTransform(989.0052,516.4481);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQA/ACAwl7QAUiWBNs9QBJsVBMoqQBxs1CeqGUAOrg8EAqjAXvQD1CIADFCQACDsiIF/QghBehRDOQhECugaBQQgmB4ADA8QAEBGA6AIQC0AaeVkFIVmi8QKZhYB1gGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_107.setTransform(989.0052,516.4481);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("EgkSBxYUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQA+ACAGmPQADiZgDksIgHpCQgHsnAcpXQAntVBzqfQEs7aM+psQQXsOdVP/QECCMKPDzQJQDcLhDtQLRDpIeCTQJDCeCGgGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_108.setTransform(989.0052,516.4481);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("EgkSBxrUgiEgAvgYygCTQz9h4vwl9QubldqcosQphn9lvqPQlRpXhrqjQhkpyBspkQBopKEUnVQEVnWGKkAQGdkLHUASQA9ACgkmoQgNiXgklIIhBpjQhWtGgZqCQgit9BGq6QC38bOBpHUARqgLfAjEATNQECCMKODzQJRDcLgDtQLRDpIfCTQJDCeCGgGQA8gCIjiDIVXlMUAkmgI1AZ2gFaUBZXgSwACPAMNQBaJrBmOTQDJcWBWZuUAB3AjwgB/AZUQiffloXNaUgKCAQFgjtAJhUgd9AIAguhADCQ61Bw+GAAQrtAAsOgRg");
	this.shape_109.setTransform(989.0052,514.5191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_43}]},1261).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[]},1).to({state:[]},158).wait(33));

	// black3
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("EgAVAzPQycqfs92bQs92bAJ1OQAJ1PNJnlQNKnmScKfQScKgM9WbQM9WagJVPQgJVOtJHmQlhDMmdAAQo7AAqtmGg");
	this.shape_110.setTransform(-307.8,-162.1916);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("EACvA7sQzBrkuR5pQuQ5phJ4vQhI4uMqpUQMqpUTCLkQTBLkORZqQOQZpBJYuQBIYusqJVQlpEJm7AAQolAAqjmag");
	this.shape_111.setTransform(-287.0711,-125.9047);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("EAFzBEIQzmsovk84Qvl84iZ8OQia8PMLrBQMLrCTnMoQTmMoPlc5QPjc3CacPQCacOsLLCQlrFJnSAAQoXAAqemwg");
	this.shape_112.setTransform(-266.3319,-89.5983);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("EAI3BMlUgULgNtgQ4ggGUgQ4ggHgDrgfuQjr/uLssvQLrswUNNsUAULANtAQ4AgHUAQ4AgFADrAfvQDrfursMwQloGJnnAAQoLAAqenGg");
	this.shape_113.setTransform(-245.6014,-53.3174);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("EAL7BVBUgUwgOxgSMgjVUgSMgjVgE8gjOUgE8gjOALMgOdQLNueUxOwUAUwAOxASNAjWUASLAjUAE9AjPUAE8AjNgLNAOfQliHJn4AAQoEABqgneg");
	this.shape_114.setTransform(-224.888,-17.0434);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("EASUBZmQjhhYjgiKQi4hsiliHQyUu4wR/UQg1hng0hnUgRKgiJgExgiDUgEtgheAJ5gOtQAthDAxg8QKbswScLvQBxBIB0BWQSzN0QteyQBuDNBsDUQG8NvE6NkQGJQ9C/QwQA8FRBNFTQAbB7AcB4QAvDXAyDTQAhC7AyDQQAsDKAOCkQAYCmACCRQAOEShQDiQhuFajzEHQhTBiheBVQkQEJlWBVQiiApisAAQlYAAl/ijg");
	this.shape_115.setTransform(-211.0168,-18.9865);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("EARmBaBQjyhGjeh0QjGhhikiAQyzumwq/yQg2hng1hpUgRggijgE1gicUgEygiDAKVgOoQAvhCAzg7QKnsWSuMZQByBLBzBYQSzOQQrfTQBuDQBqDVQG+OAE1NuQGFRSCtQ8QA2FRBrFXQAlB5ApB4QBDDMBVDTQAyCjBfDaQBVDNAiCRQA2ClAUCLQA0EYhsDcQiDEylBDsQhlBThwBHQkpDSlrBLQjCAnjGAAQlSAAldhzg");
	this.shape_116.setTransform(-195.2439,-20.9699);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("EAQ2BabQkCgzjbheQjWhVijh6UgTSgOVgRCggOQg4hpg2hrUgR2gi9gE5gi0UgE3gioAKxgOjQAxhCA1g6QK1r6TANDQBxBOByBYQSyOsQqf0QBvDUBoDVQHAOTEvN3QGCRnCbRIQAwFSCJFbQAuB3A3B3QBXDBB3DTQBDCLCNDkQB8DQA3B+QBUClAlCDQBbEfiGDWQiaEKmPDRQh3BEiCA5QlCCcmAA/QjyAojsAAQk6AAkxhGg");
	this.shape_117.setTransform(-179.2644,-22.9813);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("EAQGBa0Qo3hEk8jhUgUxgOwgSLgjVUgSMgjXgE8gjNUgE9gjOALNgOdQLMueUyOxUAUxAOxASLAjWQJUSFFtRMQF+R/CJRSQA5HEEVHZQBrC3CaDSQBTBzC6DvQClDTBLBrQByClA3B7QCBEmihDQQivDineC2QnMCvpBBLQlOArkzAAQj1AAjkgcg");
	this.shape_118.setTransform(-163.2171,-24.8933);
	this.shape_118._off = true;

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("EAPhBa0Qpbg8k8jhUgUwgOwgSMgjVUgSMgjXgE8gjNUgE8gjOALMgOdQLNueUxOxUAUxAOxASMAjWQJTSFFuRMQF+R/CJRSQA8HgEjHuQCzEwFxHCQAQAUA1A5QA4BDA5BdQCJDgCFEBQCJEKgPASQixDgoDC+QnvC2puBUQmTA3lqAAQjdAAjOgUg");
	this.shape_119.setTransform(-155.9748,-25.6729);
	this.shape_119._off = true;

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("EiXbBWrMAAAitVMEu4AAAMAAACtVg");
	this.shape_120.setTransform(960.4,548);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_110}]},1248).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[]},190).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_118).wait(1256).to({_off:false},0).wait(4).to({_off:true},1).wait(259));
	this.timeline.addTween(cjs.Tween.get(this.shape_119).wait(1261).to({_off:false},0).wait(67).to({_off:true},1).wait(191));

	// black2
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0CI1uMQI1uMMeAAQMfAAI1OMQI2OMAAUCQAAUDo2OMQo1OMsfAAQseAAo1uMg");
	this.shape_121.setTransform(1634.1,1481.85);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uLAA0EQAA0CI1uMQI1uMMeAAQMfAAI1OMQI2OMAAUCQAAUEo2OLQo1OMsfAAQseAAo1uMg");
	this.shape_122.setTransform(1634.1,1373.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0DI1uLQI1uLMegBQMfABI1OLQI2OLAAUDQAAUDo2OMQo1OLsfAAQseAAo1uLg");
	this.shape_123.setTransform(1634.1,1264.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0DI1uLQI1uMMeAAQMfAAI1OMQI2OLAAUDQAAUDo2OMQo1OMsfAAQseAAo1uMg");
	this.shape_124.setTransform(1634.1,1156.15);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uLAA0EQAA0DI1uLQI1uLMeAAQMfAAI1OLQI2OLAAUDQAAUEo2OLQo1OLsfAAQseAAo1uLg");
	this.shape_125.setTransform(1634.1,1047.55);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0DI1uLQI1uLMeAAQMfAAI1OLQI2OLAAUDQAAUDo2OMQo1OLsfAAQseAAo1uLg");
	this.shape_126.setTransform(1634.1,939);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAlQQo1vcAA10QAA10I1vbQI1vbMeAAQMfAAI1PbQI2PbAAV0QAAV0o2PcQo1PbsfAAQseAAo1vbg");
	this.shape_127.setTransform(1634.1,666.15);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAoQQo1wrAA3lQAA3kI1wrQI1wrMeAAQMfAAI1QrQI2QrAAXkQAAXlo2QrQo1QrsfAAQseAAo1wrg");
	this.shape_128.setTransform(1634.1,610.425);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTArRQo1x7AA5WQAA5VI1x7QI1x7MeAAQMfAAI1R7QI2R7AAZVQAAZWo2R7Qo1R7sfAAQseAAo1x7g");
	this.shape_129.setTransform(1634.1,554.725);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAuRQo1zKAA7HQAA7GI1zKQI1zLMeAAQMfAAI1TLQI2TKAAbGQAAbHo2TKQo1TLsfAAQseAAo1zLg");
	this.shape_130.setTransform(1634.1,499);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(0,0,0,0.996)").s().p("EABsA74QhNAOhWg1Qingmieh+Qj3jEjalCQjCkqjrm4IhEiDQh+j6h9kXQhhj0h5krQhukXg/kJQhJjvgqjsQhYlgAZlOIAAgKQAvq3FZoZQCKlTDJksQB6jZCbjIQBGhoBXhdQA6hIA/hAQDjkEDxibQE5jaE8glQCYgPCWAZQCcAdCHBHQItE/GDPhQCiGtBkHlQDLQDhKR3QgRDngeDdQiQOxk6JLQjVGFj0DgQiVC4icBnQijCVipA6QiaBSimAAQg8AAg+gLg");
	this.shape_131.setTransform(1604.7754,481.3815);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(0,0,0,0.996)").s().p("EAFwA3uQiwAKi8iIQg5ALhJhsQiDhKiBiuQjIkNizlGQijk+kQnDIhPiDIkzoLQhtjbi1k2QikkdhWjvQh0jxhEjfQiYl6Ayk/IAAgIQBfqKJLmrQDSkGEkjeQCmihDTiTQBXhNB1g+QBIgxBSgpQETisEXhPQFgh3E9AbQCdASCOAxQCaA7B3BcQIAG7FBPsQCKHGBLH9QCYRfiTRlQgjDtgyDhQj5P4mzG4QkpEkklAXQiiBIihgSQhIAThGAAQhSAAhPgag");
	this.shape_132.setTransform(1577.0294,469.1126);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(0,0,0,0.996)").s().p("EAMUA3cQiugnimiNQiUhDiAiZQiMhbiQjmQgnAGg7ihQhghwhijdQialViMlMQiDlRk2nOIhaiFQiejrjMkXQh6jEjyk/QjYkkhvjVQifj0hcjTQjZmTBLkwIAAgFQCPpdM9k9QEZi5GBiQQDShpEKheQBpg0CTgdQBWgbBjgRQFDhUE/gDQGHgUE+BaQChAzCHBJQCXBYBnByQHTI3EAP4QBxHdAyIWQBmS8jdRSQg1D0hFDlQliQ+ouEmQjGBli8AAQitAAijhVg");
	this.shape_133.setTransform(1550.5753,479.1211);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(0,0,0,0.996)").s().p("EAI8A3pQi7iXiskGQiLiwhqkCQhqjAhllGQgUACgujXQg8iVhFkMQhrmehllQQhklllbnYQgwhCg0hDQiujkj0kYQiHirkulLQkNkqiHi8QjKj2h1jGQkamsBlkhIAAgDQC/owQvjPQFhhsHchCQD+gxFCgoQB6gaCwACQBkgEB1AGQF0AEFmBKQGuBOE/CaQCmBTB/BiQCUB2BYCHQGlKzC/QDQBZH2AZIuQAzUZkmQ/QhHD6haDqQnLSEqmCTQhfAThcAAQllAAk3ktg");
	this.shape_134.setTransform(1525.1685,490.7802);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(0,0,0,0.996)").s().p("EgAdAuuQiDkchXlrQhGklg6mlIhgsFQg9nmg+lVQhOmrnmo3Qi+jdkbkXQiViTlplWQlCkwigiiQj1j4iOi6QlanFB/kSQDuoEUhhhQGogfI5ANQEpAGF6ANQDZAAF5BSQGlBcGNCWQHVCxFADaQF4EACEEeQI1TLAAbGQAAbHo1TKQo1TLsfAAQsfAAo1zLg");
	this.shape_135.setTransform(1500.6316,496.1204);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(0,0,0,0.996)").s().p("EAVQA8mQkMhTjijRQjOi4iekbQhfiqhYjVQgohfgjhnQg0iegniPQgWhSgUhRIggiLQhBkPhEkwIgGgeQg7imiDnfIgOgqQhwmXjBk2QhKidiNizQiujmlKkbIhmhYQjLiijdi2QiChZipiNQh3hYiJhrQlSkHjAiYQkEjWifilIgKgLQmcmoB/kTQDon4TxhvIBWgHQGBgdHwAFICEACQDrAEEbAJICsAEQC6AAE2ArIByASQG1BFGVB2IBwAgQGZB+EzCaQGJDKC7DoQDfEJCdEuQERHBChIXQCUHNBMIgIAOB0QA9HDgCGSQgEJAhkI3Qg7E4hzEqQhPDNhmDBQgxBdg0BXQioEdi/DQQjBDTjIB3QjGB3jkAkQhdAPheAAIgGAAQi2AAirg2g");
	this.shape_136.setTransform(1452.5306,463.4391);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(0,0,0,0.996)").s().p("EAatA4SQkghJjni+Qjli0iWkdQhZirhSjdQglhighhsQgziwgiiCIgqimIgjiMQhMklhdkYQgDgGgGgVIklpXIgVglQiklGlDkZQhziCisiSQjMi4l+jyIh0hKQjyiQjgiSQijhVifhuQiHhOiNhaIpDlqQkbi9ixiUIgLgKQndmLB/kUQDqn8UOh0IBYgHQGJgfH4AEICGACQDxADEfAIICyADQC7AAFCAcIB1AMQHEAvGdBUIB0AYQGlBbFKBzQGaCWDzCwQEnDNDMDwQGEF9D2HeQDpGqCQIdIAcBwQB6HMAhGHQAuIxhFJiQgoE7h/E2QhUDNh0DDQg1Bbg7BXQi4ETjYDNQjUDLjQBsQjHBpjzAhQhgANhhAAIgLAAQi4AAisgtg");
	this.shape_137.setTransform(1407.1587,430.7791);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(0,0,0,0.996)").s().p("EAf6Az+Qk0hAjriqQj8ixiNkeQhUirhNjnQghhkgehvQgzjDgeh2IgqioQgThMgShCQhXk7h1kAQgGgIgGgRQiSj+j8krIgcgdQjXj2nFj8QidhmjLhyQjqiKmyjKIiAg8QkZh9jjhvQjFhRiVhPQiWhDiShIQlxi0kDiDQkzijjBiEIgNgJQoeltB/kVQDsoBUrh4IBZgIQGSggIAADICIABQD2ADEkAHIC4ABQC8AAFOANIB2AGQHVAZGkA0IB6AOQGvA4FhBMQGtBhEqB6QFwCPD5CzQH4E5FKGmQE+GGDWIaIAoBsQC3HUBFF+QBgIggnKOQgVE+iLFCQhYDOiCDFQg6BZhCBXQjIEJjvDJQjnDDjYBgQjKBbkCAeQhjAMhjABIgYAAQi0AAisglg");
	this.shape_138.setTransform(1363.3206,398.0949);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(0,0,0,0.996)").s().p("EAk9AvqQlIg2jviXQkTitiFkhQhwj0hfmBIhLk+Qgti9gkh9QhnlhiYjuQi9krk4jQQlXjkvPlUQkshppQjDQqEjUkSheQwoltnXkCQpvlVCBkYQDuoGVIh9QG8gqJAACQExABF+AJILUgDQJ0ABIUAaQZVBOLeEjQJrD1GfFtQGTFjEaIWQEfIdBzGeQCRIPgHK5QgDFAiWFOQiHErjuEZQjYEAkHDFQj6C7jgBVQjMBMkQAbQh4AMh0AAQi1AAisgcg");
	this.shape_139.setTransform(1320.4619,365.4106);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.996)").s().p("EAtIArIQlRg2kciEQh6g5hthHQiihxh8iSQi7jNixk4QhaishIhcQhUiZhQhrQixkhjajOQiViVi4h/Qh5hWiYhOQmijTv9k+IiigyQlVhlnKiKQqRjElWhiQkIhPjkhHQi0g5i5g5QjrhEhvgvQkghji6hYIhAgfQjlhzhziAQi0jBBIjRQChm0OciMQEQgqFbgSQBMgEBPgCQBngIDLABQB+AABngCQCpgED2AAQE7gBGoAFICFgBIJ9gDQKDABH9ATIBZAEQR/AyQGCOQDXAoCxAvQLTC3GxETQCTBLBoBXQFXDgEOEuQEwE6DCETQBIBkA4BgQDxFPAsGxQAXDSACDpQABBmgLBoQgZD8hcD6QglBogvBlQhqDqibDQQg5BNg9BGQivDKjTCMQg1Ajg0AdQjLB3jnA1QjeA5knAMQhIADhIAAQj1AAj2gng");
	this.shape_140.setTransform(1208.1904,338.8432);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(0,0,0,0.996)").s().p("EA/6AnfQlGgBlig3QlZg2lKhyQiLgwiGg8Qi9hailhzQkEilkFjwQiBiCh3hOQh8h3h6hYQj8jhkbitQi8h7jUhsQiHhIixhHQnsjBwskpIiygxQmNhonIh9Qqci0mchmQkchKj0hBQi5gyjWg0QkohDhMghQlBhXjGhRIhGgdQj9hxh1iRQiljDBEj5QCLncP6hxQEdgiF3gFICmgBQBIgFEDAIQCUAEBfgBQCdgDElgCQFGgBHSAAICPgBQElgCF7gCQLDAAIGASIBiADQQIAnU1BdQDmAaDDAfQM7B5HDC5QC1AzBpA7QGkCdFRDcQGNDnEODeQBlBSBTBQQF8ExA8GnQAjDcAGD7QACBsgHBwQgSEThNELQggBxgqBuQhhELiUDeQg4BWg+BNQi2DkjlCIQg5Aig7AbQjPBmkYAjQjfAlkjAAIgtAAg");
	this.shape_141.setTransform(1095.964,312.2349);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(0,0,0,0.996)").s().p("EBIxAjQQlQgQmFg7Qlig2l3hfQicgoifgvQjXhFjPhTQlOh9lXioQiphZilhAQilhTikhGQlHiildiMQjihfjvhbQiVg6jLg/Qo3iwxakVIjBgvQnGhsnFhuQqoiknhhqIo1iAQi9grjzgwQlmhDgpgQQlihMjThKQgogOgjgOQkVhuh2iiQiWjFA/kiQB2oFRWhWQErgYGTAHICwAEQApgCE9AQQCpAIBXgBIHlgEINMgHICagCQFYgDFqgBQMDgBIRAPIBpAEQORAcZlAqQD1ANDVAPQOjA8HVBeQDWAbBqAgQHyBaGUCJQHqCVFaCpQCCA+BuBBQIHETBNGcQAtDoALENQAEBxgEB5QgLEqg/EaQgbB8gkB4QhZEqiMDtQg3Bfg/BUQi9D+j3CDQg+AhhBAZQjTBUlJAUQiKALihAAQiOAAiggJg");
	this.shape_142.setTransform(983.7912,285.668);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(0,0,0,0.996)").s().p("EAzxAadQ5Lk59kn9QqVix7Ml/Q7jmDwTjEQjAgkkRgrImphEQnPhNjkhRQkthrh4izQiGjHA5lKQBhotSzg7QF7gTIoAgIF/AYQC/AMBQAAQEKAAUhgTQVKgNL5AUUAL6AAVAgngAIQfRgIFuAPQUIAzL7DRQOoEABwHjQBPFYgDGzQgEHRhmGgQhxHTjZE2Qj1FfljBuQjfBGmQAAQtYAA6ClDg");
	this.shape_143.setTransform(871.6691,259.1965);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(0,0,0,0.996)").s().p("EBFoAcjQp1hPtmiuQj/g0kKg5Qnzhro6iIQpwiWnMh2QlRhWlNhYQm8hxqbiTQoVhwp0gaIgLAAQkKgNj5AQQkJgKkBAdQkoAjjwgSQkGAPjpgDQjDAFi0gJIhQgEQihgIjLgbQhYgMhJgMQjcgkgcgMQmOhWjGiFIgUgLQjyh+hcjFQhljJAzk2IAAgCQBMnWL7jwQBhgkBqgbQCIg0CbgYQC7g9DSgaIA1gKQAPgnEngOQCbgSBNgWQCDgoFUgYQDLgUEYgIQDJgFENgDIA4gBQLMgGKcAHQFqAEEqAHQIAAOOjAFQI9AFK8ACQbiACIQAVIEFAMQJKAfIdBDQFLAsEFA/QCVAjB8AoQFwB4DBCvQCTCGAvCqQAYBUAQBcQAvEKABEtQAABogGBlQgRFRhOEvIgcBkQhxF4jEEDQjwE/lbBwQgrAOgwALQjLAxk/AAQlwAAoLhBg");
	this.shape_144.setTransform(809.95,242.8753);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(0,0,0,0.996)").s().p("EA+9Aa4QpPhMtFiuQjzgykAg5QnIhlo4iKQqyiqlNhVIp/iiQnuh7oshzQoehnomBnIgKADQjnAqjaBbQjUAwjgB3QkDCNi1AaQjgBcjIAvQivAzipATQglAFgnACQibANjAgUQhSgJhJgNQi8gfgzgXQljhkipi8IgQgOQi2iShAjYQhGjKAskiIABgDQBDm9I1l6QBKg8BOgvQBrhgBwgxQCSh9CUhCIAngXQAVhODXgzQB4gxBLgrQCBhREjgrQDAgmEKgNQCzgHERgCIAxgBQJggDLaAKQFRAEErAHQIZAONDAJQI0AIKGAHQX0ANKzAbID5ALQIFAZI7A0QFDAjD4AyQCRAdB3AhQFmBmC9CgQCPB6A4CjQAaBQARBYQAyEDAEEaQACBjgFBhQgOFEhPEgQgOAwgPAvQhxFijKDzQjpEflVByQgoAOgtAMQjGAzk6AAQlbAAnog/g");
	this.shape_145.setTransform(748.2196,224.9056);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(0,0,0,0.996)").s().p("EhNSAb+QhMgGhKgNQiagbhMgjQk3hwiNj0IgLgRQh7imgjjrQgmjMAlkOIABgFQA6mkFvoDQAzhTAzhEQBNiLBFhLQBpi8BXhqQALgTANgSQAah1CJhZICciQQCAh4DyhAQC0g2D8gSQCdgKEVgBIAqAAQH0gCMZAOQE3AFEtAHQIxANLjANIR9AYQUFAXNWAhIDtAKQG+AUJcAlQE5AZDrAmQCOAWBxAbQFcBSC5CSQCMBvA/CcQAeBKARBUQA2D+AHEFQADBfgDBeQgLE3hREQQgNAugQAsQhyFMjODkQjkD/lNB0QgnAOgqALQmKBxt3h2QophKsjitQjmgyj4g5Qmchfo2iMQr0i9jPg1QlBhRkehGQohiCm9hUQolhenZDoIgJAGQjEBfi8CoQieBqi/DSQjeD2h8BFQi4CpinBhQibBiifAvQgjAKgjAIQhtAYh7AAQgxAAgygDg");
	this.shape_146.setTransform(686.4379,218.6323);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(0,0,0,0.996)").s().p("EhKvAg1Qm/hUiYmaQh9lSBIpHQAxmLCpqMIB9nfQBAj7AZiSQBlpJG1i8QCohIDugWQCIgNEYAAQGDAAN/ASQNMARPNAZQa+AwZyBCQF3APJ7AWQHwAYEUA0QFSBAC3CEQDHCQA6D9QBPFUgJFJQgKFehtEjQj7Keq7DaQl0B1tLh1QqVhcw4kCQlxhZo0iOIuHjlQv/j+nihLQoyhXmOFyQihCWidDzQhpClieEsQi5FghCBwQiQD3iHCSQikCxi5BHQiDAyiTAAQhYAAhdgRg");
	this.shape_147.setTransform(624.3906,243.7481);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(0,0,0,0.996)").s().p("Eg+bAgeIgGgCQlbhxh2lmQhjk2A8nzIAAgBQArlkCRo1IBummQA3jVAbiJQAKgyAMgvQBsmuE2itQCHhSC6goQAcgHAjgGQBngZCigTQE+hTK8g2IAsgFQDzgbEKgiQFZgoF1geQBwgKBzgIQLDhAK/AVQLdAVKyBrIBTANQE+A3H9BSQFHA0DUBKQAqAMAmANQEKBTCRCGQBwBiA5CMQAXA5APA/QBEEvABEbQACERg5DeIgRBBQh7GgkrD+Qh1BiiRBHQjcCDnLAKQhpAJh2ACQnuBOtNh9QhMgGhWgKQkDgYlyg2QqZiEiEADIg2gJQoNhil+g2QjUgjiegSQjsgdjNAwQjbA0jCCLQg8Asg+A3QhbBQhZBoQhxB0iWDXIgwA/QiJDGhCA+QiKCqh9BdQiTBzibAiQg/AMhDAAQh1AAh+gng");
	this.shape_148.setTransform(558.5328,375.9428);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(0,0,0,0.996)").s().p("EgtqAiDQiPgHiRhPIgEgDQj9iLhVk3QhKkZAxmfIAAgBQAkk+B4ndQA6jhAmiMQAuiwAdh/QAJgrALgpQBhlvDiixQBlhcCGg5QAVgKAZgKQBNgsB1gmQD6imH4h8IAhgMQC1g9DThKQEQhbEqhHQBbgXBdgVQJQiVJVANQJ7AOI0C5IBEAVQEFBeF/CPQDyBUCkBsQAgARAcARQDBBlBuCJQBRBdAsB6QARAyAMA2QA6EKALDsQAODwgeC4QgDAcgFAcQhBFdi7EGQhKBihdBQQiJCnkvBRQhFAghPAZQlID4piAHQg7AMhCAGQjOAbk9gBQn8g4i4AbIgxgDQmzgrlfgZQi0gSiNgKQjLgPiyAfQi7Aji0BWQg4Abg5AiQhYAxhVA/Qh5BDiNCCIgxAkQiBB3hLAaQiEBehyAnQh4AyhzAAIgUgBg");
	this.shape_149.setTransform(492.9113,504.2616);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(0,0,0,0.996)").s().p("EgflAjfQhxgIhfgqQhvgzhbhfIgDgDQieimg2kHQgwj9AllMIAAgBQAekXBgmFQAsiuAliHIBEj/IAThHQBVkwCOi1QBEhnBShKQANgNAPgNQAzg+BIg7QC1j4E2jDIAVgSQB3hfCbhyQDHiODghwQBGglBHggQHdjsHrAHQIZAHG3EFIAzAeQDNCFEBDLQCeB1B0CPQAUAUATAWQB5B2BJCNQAzBYAeBoQANAsAJAsQAwDkAUC+QAZDPgCCRIABAwQgIEbhKEMQgeBjgpBZQg4DKiTCYQghA3gnAwQihGil5CMQgpAdgvAWQiZBPkIA0QleAUjrAzIgsADQlcALk9AFIkRgCQirgDiXAQQibARimAgIhoAXQhVAShRAXQiAASiFAtIgxAJQh4AnhVgKQhGALhAAAQgyAAgtgHg");
	this.shape_150.setTransform(428.0117,635.9085);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(0,0,0,0.996)").s().p("EgJDAnuQj7gqjahNQpAjPh4lrQiDmLAwnoQArmvDGpzQB9mhBQj3QCQm6CSlSQA4iBBlibQB+jACWiaQGVmfG3gBQG2AAE7FSQD8EODLITQBbDvAzEFQBcHdAzDSQA3DnAqErQAxFZAME6QAeMpjYEbQjDEDp5CeQkDBAkfAkQkJAgjcAAQigABjTglg");
	this.shape_151.setTransform(372.1129,787.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(0,0,0,0.996)").s().p("EgEiAn3QhogGhzgPQkEghjpg/QkyhVjSh5Qi5hwhdiNQkllNANm0QgCi3BNjlQBEjnCQkuIA0hyQAwhnAkhUQBNimA4iEIBIilQBZjQBBi3QBQjmBLi8QAghQAohQQAihFAohIQB1jSCIirQAlgwAngsQBdhoBphaQCeiBCohEQBjgpBlgSQFEg/EWCLQBlAxBcBJQC1CLCaD2QBpCqBfDiQBGCmA1C5QAWBOAcBXQAdBiAjBfQBJEFBfDJIALAcQBgDoA9ECIAJAfQBBDuAZDYQANBuACBwQAGE6g/EPQg/FWiXDOQhBBYhkBRQjTCpnaBxQheAXhkATQi1AjjFAXQhlALhiAIQijANiQACIgNAAQhKAAhRgGg");
	this.shape_152.setTransform(428.1736,789.8445);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(0,0,0,0.996)").s().p("EgDMAn0QhvgEh0gLQkPgXj4gwQk7hAjzhdQjNhUiBhrQnGkQgWmAQgWi4BqjwQBUjWDJk2IBDhtQBDhpAshOQBlikBHh/QAxhYAphNQBxjWA/i5QBSj2BHjBQAghXAjhRQAghLAlhMQBsjjB4i8QAig1AigyQBRhxBohwQCTiVCihhQBgg6BigkQFCh+EsBdQByAgBnA8QDUB1CuDxQB5CnBrDrQBNCoA+DDQAYBNApBbQAnBeAzBjQBVDcCYDuIAQAdQCKD2BTDsIAMAfQBjD2AiDXQASBwgBB3QAAEyhiEwQhWFDisDxQhDBdheBbQjDC4oDB1QhiAXhqATQi8AjjOAXQhoALhnAIQiqANiXADIgvAAQg/AAhAgDg");
	this.shape_153.setTransform(483.5873,790.3208);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(0,0,0,0.996)").s().p("EgB1An+Qh1gCh3gGQkagPkGggQlDgqkWhCQjgg5ikhIQppjTg5lLQgqi6CJj7QBkjFECk/IBRhoQBVhqA0hHQB9iiBXh8QA7hWAxhQQCJjbA+i7QBSkGBEjFQAfheAghSQAehRAghPQBjj1BpjNQAfg7Aeg4QBEh5BniFQCIirCch9QBdhLBfg2QFBi9FCAvQB9AQByAuQDzBfDDDsQCICkB4D0QBTCqBJDNQAZBLA2BgQAwBbBEBmQBhC0DQESIAVAeQC2EDBoDYIAQAfQCED9ArDVQAXBzgEB/QgFEqiGFPQhsEwjBEUQhHBkhYBkQiyDGosB7QhlAWhxATQjDAijXAXQhrAMhtAIQixANieAEIhZABIhagBg");
	this.shape_154.setTransform(538.8567,789.5149);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(0,0,0,0.996)").s().p("EgXOAm/QyviSh0leQg+i7CnkGQB0izE6lIQCuizBWhdQCWieBlh6QELlDBRkAQB9mhBQj3QCQm6CSlSQA4iBBlibQB+jACWiaQGVmfG3gBQG2AAE7FSQD8EODLITQAzCGC5DoQBtCLEKE4QDzElCFDMQC1EXA3DiQBZFxj3IbQiwF/lGGsQi9D6sYCEQktAylfAaQkjAWjxgBQsHAAqqhTg");
	this.shape_155.setTransform(594.1412,787.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(0,0,0,0.996)").s().p("EgGSAoBQkEgGjsgVQlHgfkThCQijgph/g3Qq6jbhGlvQgti/CEj2QBgjND9k6QBWhtBAhVQAngxAdgnQB9iiBWh9QBeiJBEh2QBhiqAwiVQBllDBOjiIAfhYQAth9Azh4QBkj0BrjKIAVgoQBEh6BmiHQCIiuCbiAQB6hlB+hAQElidEmAnQCcASCLBCQDVBgCvDTQCUCyCCERQBICXBCC3QAtB8B5C6IAjA3QBcCSDZE7QBQBzBDBuQBiCVBBCFQA+B0ArBxQA6CPAZCAQAnDKgpDwQgiDShYDiQiIF+kAFbQgYAggaAgQi5DhqVBzIhpARQjjAikIAUQhCAGhLAEQjAAMjCADIiBABQisAAh1gCg");
	this.shape_156.setTransform(599.652,789.2449);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(0,0,0,0.996)").s().p("EgHWAn6QkCgGjbgaQlGgpjwheQiTg+hkhUQoAkegqm0QgcjDBhjnQBLjlDAktQBDhtA2hcQAfgyAYgqQBlikBIiBQBOiMA5h1QBRikAxiTQBjkwBUjfIAhhVQAuhzA5h1QBtjiB5i6IAZglQBPhzBnhzQCSibChhnQB+hQCBgrQEmhpETBNQCPAlB+BQQC8ByCeDWQCFC2B1EHQBCCUA8CwQAsCCBeCyIAcA4QBKCaCqE9QA+ByA2B1QBMCPAzCPQAuByAhB0QAqCKATCAQAdDJgdDgQgYDVhCDSQhtGcjgEuQgYAfgaAeQjBDZpyBjQgxAIg0AHQjZAdkCAQQg9AEhLADQiuAIjIADIh9AAQi/AAhTgCg");
	this.shape_157.setTransform(605.1351,789.9167);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(0,0,0,0.996)").s().p("EgIbAoAQj+gHjMgfQlEgzjOh7QiChRhKhxQlGljgNn5QgLjGA9jYQA3j+CDkfIBcjSIAqheQBMimA6iGQA9iPAvhyQBCihAyiQQBgkbBZjeQARgoASgoQAvhrBBhxQB1jRCIiqIAbgiQBbhsBohfQCciICmhNQCCg9CEgVQEng0ECBzQCBA3ByBfQCiCCCMDbQB2C5BqD9QA7CQA3CrQArCIBCCpIAVA5QA5ChB6FAQAsBxAqB9QA2CJAlCZQAeBvAWB3QAbCGAMCAQATDHgRDRQgPDXgrDCQhSG6jAEBQgXAdgaAcQjKDSpOBUIhiAMQjOAZj8ALQg4ADhNABQiaAFjQABIh3ABQjSAAgygBg");
	this.shape_158.setTransform(610.6168,789.4904);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,0,0,0.996)").s().p("EgJdAoSQj8gHi7gkQoahmh1liQiNmnAQo9QARpTC2pAQB+mhBQj3QCPm6CTlSQA4iBBkibQB+jACWiaQGVmfG4gBQG2AAE6FSQD9EODLITQBjEFBUFaQA0DYCEJBQA0DXAcE3QAdFJgIFAQgUMTjeEjQi6D3pzBOQjlAckzAIQiLAElVgBIlmAAg");
	this.shape_159.setTransform(615.8535,787.7);

	this.instance_3 = new lib.PuppetShape_1("synched",1,false);
	this.instance_3.setTransform(615.85,787.7);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_3("synched",1,false);
	this.instance_4.setTransform(615.85,787.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.PuppetShape_5("synched",1,false);
	this.instance_5.setTransform(615.85,787.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.PuppetShape_7("synched",1,false);
	this.instance_6.setTransform(615.85,787.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.PuppetShape_9("synched",1,false);
	this.instance_7.setTransform(615.85,787.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.PuppetShape_11("synched",1,false);
	this.instance_8.setTransform(615.85,787.7);
	this.instance_8._off = true;

	this.instance_9 = new lib.PuppetShape_13("synched",1,false);
	this.instance_9.setTransform(615.85,787.7);
	this.instance_9._off = true;

	this.instance_10 = new lib.PuppetShape_15("synched",1,false);
	this.instance_10.setTransform(615.85,787.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("EAZyBR7QgwgNhEgbIh8gzQmFidmrj1QlHi7mhkYQoOlmmLk9QmwlbmVmTQiIiKj2jmQkBjxh5hkQkIjchFhAQiSiGhUh9QheiMhCjFQhBjFg7lDQgDgNABgXIACgnQAAiYACi5QACi5AAiYQAAgLAXiPQAXiQAAgOQAAjdB2lvQCuofDAlhQCsk6DTjPQCmijD/iWQCVhZFLi2QDUh+Mvn/QMQnsBCgmQGLjhLKmjQI0lAD7hFQCEgkE0g9QFdhFBgAAQALAACbAUQCbAUAJAAQCYBjgVCPQgQBrh9ChQiKCxhIBXQh3CQhlBlQkAECl0FGQmBFSkAC8Q8XU6qLMgQkUFTheESQhMDdAiDXQCvCfGLGJQETETEVDVQI2G2O5MaQQRNjGhFKQFKEFCTDxQDDFCAPHUQhuC5hKA+QhbBNjXBAQgLAEiAABIiNAAIjSgZQh+gQhnAKQiYAPhOAAQAAAOhBAGQhBAFAAALQg0AFgwAAQhuAAhZgZg");
	this.shape_160.setTransform(926.5857,465.8605);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#323232").s().p("AAiAEIhKAAIAAgHQAoAAApADIAAAEIgHAAg");
	this.shape_161.setTransform(475.025,440.875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#6D6D6D").s().p("AAXAEIg0AAIAAgHIA0AAIAHAAIAAAHIgHAAg");
	this.shape_162.setTransform(482.9,334.375);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#818080").s().p("AgDAxIAAgIIAAhZIAHAAIAABZIAAAIIgHAAg");
	this.shape_163.setTransform(401.525,391.375);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#323232").s().p("AgogDQAoAAApADQgsAEglAAIAAgHg");
	this.shape_164.setTransform(475.025,440.875);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#6D6D6D").s().p("AgZgDIAzAAQgaAHgZAAIAAgHg");
	this.shape_165.setTransform(482.525,334.375);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("EAaKBSAQgXgFgXgHQgggKgngPIgrgRIhTgiIgqgRQlziYmWjnIgjgUQk6i1mOkLIgdgTQn+lcmCk1IgVgRQmnlVmMmJIgOgOQiGiIjrjcIgMgLQj4joh4hkIgJgIQj+jThHhBIgHgGQiNiDhTh6IgEgGQhdiLhBjCIgBgEQhAjEg8lBQgCgOABgWIAAgBIABgnQAAiXADi4QACi6AAiWQABgXAViDQAWiJABgVQABjgB0lpQCvogC9leIAIgPQCnkwDMjKIAPgPQChibDyiRIAVgMQCThXE2irIAZgOQDdiDMKnoIAegUQLOnCBng9IAigUQByhDCQhhQB3hNC0h9QCbhrCMhTQBzhFBwg0IA2gXQA8gYBCgTQAvgQBAgOQB2geBNguQBDgnAhhXQAWgyAWgPQANgZAUgFQAdgHApgGQCGgXE3gmIAmgEQEoglB7gCQA4gCBnAKIABAAICeAUIAPABQBqAiAVAeQAxA0ALA9QASBCgeBSQgVA6gvBHQgqA/gwA9QhFBYgxA8Qg0BBgqAxQg/BKg6A8Qg0A4g0AzQjdDaksEKIhrBeQk4EPjfCoIhsBRQ67T7qNMMIhGBXQjfEbhdDrQgUA0gPAzQgvCnAPCjQATAsAcAwQCmCZFFFDIBKBJQDuDrDvC7IBOA9QIlGrOBLrIBCA2QPXMzGfFKIA3AsQEhDqCODZQATAdAQAdQCtEuATGrIgOA5QhVCMg+A9QgWAWgYARQhVA9ioA1QgRAFgqAGQgUABg7ABIg6AAIhUABIg4gEIicgSIg1gGQhfgKhQAFIg1AEQhwALhDABQgOAHgkADQgEADgKADIgzAIQgPACgFAEQghAEgMAFQgmACgjAAQhhAAhRgTg");
	this.shape_166.setTransform(926.5107,465.9173);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("EAZyBR7QgwgNhEgbIh8gzQmFidmrj1QlHi7mhkYQoOlmmLk9QmwlbmVmTQiIiKj2jmQkBjxh5hkQkIjchFhAQiSiGhUh9QheiMhCjFQhBjFg7lDQgDgNABgXIACgnQAAiYACi5QACi5AAiYQAAgLAXiPQAXiQAAgOQAAjdB2lvQCuofDAlhQCsk6DTjPQCmijD/iWQCVhZFLi2QDUh+Mvn/QMQnsBCgmQB7hGCmh+QBghJC+iYQCoiDB1hGQCaheCCggQA9gQBKgFQArgEBOgDQCHgHBEgxQAvgigIiPQgEhQAAgOQACgpASgCQBegOHggUQG+gTCDAAQALAACbAUQCbAUAJAAQCYBjgVCPQgQBrh9ChQiKCxhIBXQh3CQhlBlQkAECl0FGQmBFSkAC8Q8XU6qLMgQkUFTheESQhMDdAiDXQCvCfGLGJQETETEVDVQI2G2O5MaQQRNjGhFKQFKEFCTDxQDDFCAPHUQhuC5hKA+QhbBNjXBAQgLAEiAABIiNAAIjSgZQh+gQhnAKQiYAPhOAAQAAAOhBAGQhBAFAAALQg0AFgwAAQhuAAhZgZg");
	this.shape_167.setTransform(926.5857,465.8605);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("EAZyBO6QgwgNhEgaQhOgggugRQmFiXmrjsQlHi0mhkOQoOlZmLkxQmwlPmVmDQiIiGj2jdQkBjoh5hgQkIjUhFg9QiSiChUh4QheiHhCi+QhBi+g7k2QgDgNABgWIACgmQAAiSACiyQACizAAiSQAAgKAXiKQAXiLAAgNQAAjVB2lhQCuoMDAlTQCskvDTjHQCmidD/iRQCVhVFLiwQDUh5MvnsQMQnaBCgkQB7hECmh5QBghHC+iSQCoh+B1hEQCahaCCgfQA9gPBKgFQArgEBOgCQCHgHBEgwQAvghgIiJQgEhNAAgNQACgoASgCQBegNHggUQG+gSCDAAQALAACbATQCbATAJAAQCYBggVCJQgQBoh9CaQiKCrhIBUQh3CLhlBhQkAD4l0E6QmBFFkAC2Q8XUJqLMCQkUFGheEIQhMDVAiDPQCvCZGLF6QETEJEVDNQI2GmO5L9QQRNDGhE9QFKD8CTDoQDDE2APHDQhuCyhKA8QhbBKjXA+QgLADiAABIiNABIjSgZQh+gPhnAKQiYAOhOAAQAAAOhBAFQhBAFAAALQg1AEgwAAQhuAAhYgXg");
	this.shape_168.setTransform(926.5857,484.3796);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("EAZyBL4QgwgMhEgaQhOgegugRQmFiRmrjjQlHitmhkEQoOlLmLklQmwlCmVl1QiIiAj2jVQkBjgh5hcQkIjMhFg7QiSh8hUh0QheiChCi2QhBi3g7kqQgDgNABgVIACgkQAAiMACisQACisAAiMQAAgKAXiFQAXiFAAgNQAAjMB2lUQCun4DAlGQCskjDTjAQCmiWD/iMQCVhSFLipQDUh0MvnZQMQnIBCgjQB7hBCmh1QBghEC+iMQCoh5B1hCQCahWCCgeQA9gPBKgFQArgDBOgDQCHgGBEguQAvgggIiEQgEhKAAgMQACgmASgDQBegMHggTQG+gSCDAAQALAACbATQCbASAJAAQCYBcgVCEQgQBkh9CUQiKClhIBQQh3CGhlBdQkADvl0EuQmBE5kACuQ8XTXqLLlQkUE6heD9QhMDOAiDHQCvCSGLFsQETD/EVDFQI2GWO5LfQQRMkGhExQFKDxCTDgQDDEqAPGxQhuCshKA5QhbBHjXA8QgLADiAABIiNABIjSgYQh+gOhnAJQiYAOhOAAQAAANhBAFQhBAEAAALQg0AFgvAAQhvAAhZgXg");
	this.shape_169.setTransform(926.5857,502.9108);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("EAZyBI2QgwgMhEgYIh8gtQmFiLmrjaQlHimmhj6QoOk+mLkaQmwk1mVllQiIh8j2jMQkBjWh5hZQkIjEhFg4QiSh4hUhvQheh9hCivQhBivg7kfQgDgMABgUIACgjQAAiHACikQACilAAiHQAAgJAXiAQAXiAAAgMQAAjFB2lGQCunjDAk5QCskYDTi4QCmiRD/iFQCVhPFLiiQDUhwMvnGQMQm2BCghQB7g/CmhwQBghBC+iHQCoh0B1g/QCahTCCgdQA9gOBKgFQArgDBOgCQCHgHBEgsQAvgegIh/QgEhHAAgMQACglASgCQBegMHggSQG+gRCDAAQALAACbASQCbARAJAAQCYBZgVB/QgQBfh9CPQiKCehIBNQh3CAhlBaQkADll0EiQmBEskACoQ8XSmqLLHQkUEtheD0QhMDEAiC/QCvCOGLFdQETD0EVC+QI2GFO5LCQQRMDGhElQFKDpCTDWQDDEeAPGgQhuClhKA3QhbBEjXA6QgLADiAAAIiNABIjSgXQh+gOhnAKQiYANhOAAQAAAMhBAFQhBAFAAAKQg0AEgwAAQhuAAhZgWg");
	this.shape_170.setTransform(926.5857,521.413);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("EAZyBF0QgwgLhEgXIh8grQmFiGmrjRQlHifmhjvQoOkxmLkOQmwkomVlXQiIh2j2jEQkBjNh5hWQkIi7hFg2QiShyhUhrQheh4hCioQhBing7kTQgDgMABgTIACgiQAAiBACieQACidAAiCQAAgJAXh6QAXh7AAgMQAAi8B2k4QCunPDAktQCskMDTiwQCmiLD/iAQCVhLFLicQDUhrMvmzQMQmjBCghQB7g7CmhsQBgg+C+iCQCohvB1g8QCahQCCgcQA9gNBKgFIB5gFQCHgGBEgqQAvgdgIh6QgEhEAAgMQACgjASgCQBegLHggSQG+gQCDAAQALAACbARQCbARAJAAQCYBUgVB6QgQBch9CJQiKCXhIBKQh3B7hlBWQkADbl0EWQmBEgkAChQ8XR0qLKqQkUEhheDpQhMC8AiC3QCvCIGLFOQETDrEVC1QI2F1O5KlQQRLjGhEZQFKDfCTDNQDDESAPGPQhuCehKA1QhbBBjXA3QgLADiAABIiNAAIjSgVQh+gOhnAJQiYANhOAAQAAAMhBAEQhBAFAAAKQgzADgwAAQhvAAhZgVg");
	this.shape_171.setTransform(926.5857,539.9443);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("EAZyBCyQgwgKhEgXIh8gpQmFiAmrjIQlHiYmhjlQoOkjmLkCQmwkcmVlIQiIhxj2i7QkBjFh5hRQkIi0hFgzQiShuhUhmQhehyhCihQhBigg7kHQgDgLABgTIACggQAAh7ACiXQACiXAAh8QAAgJAXh0QAXh2AAgLQAAi0B2krQCum7DAkgQCskADTipQCmiED/h7QCVhIFLiVQDUhmMvmhQMQmRBCgfQB7g5CmhnQBgg7C+h8QCohrB1g5QCahMCCgbQA9gNBKgEIB5gFQCHgGBEgoQAvgcgIh1QgEhBAAgLQACghASgCQBegLHggRQG+gQCDAAQALAACbARQCbAQAJAAQCYBRgVB0QgQBYh9CDQiKCQhIBHQh3B2hlBSQkADSl0EKQmBETkACaQ8XRDqLKMQkUEUheDfQhMC1AiCvQCvCBGLFAQETDhEVCtQI2FlO5KIQQRLDGhEMQFKDVCTDFQDDEGAPF+QhuCXhKAyQhbA/jXA0QgLADiAABIiNAAIjSgUQh+gNhnAIQiYAMhOAAQAAAMhBAEQhBAEAAAKQg0AEgvAAQhvAAhZgVg");
	this.shape_172.setTransform(926.5857,558.4633);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("EAapBABQgbgEgagGQgggHgngLIgrgOIhagcIgigLQmBh5mni+IgZgMQk7iNmOjRIg/giQnkkClyjnIhcg7Ql/j1lpkXIhhhMQh0hZiph7IhghGQi3iEhjhAIhmhDQishyg7goQg6gqgtglQhLg+g1g7Qgpgugjg1QgzhKgnhaQgSgngQgsQgyiHgvjEQgCgOAAgMIAAgDIACgaIABjTIABhBIACiRQAAgsAEg0IABgcIAOhQIAIgrIAYiAQAEhaAih4QAih0A7iLQBZjQBdiqQBji2BqiNQArg7Aug1QCLilCnh4IA9gqQCShiDWhiIB/g5QCEg8DahfQC5hTIfkMIEgiOQG1jTC/hfQCthWAsgTIBFgiQBfgwB7hJIBPgwQBYg0B2hKIBVgyQBxhABXgnQAtgUArgRQBggmBjgQQAbgGAdgDQAlgEAogDIB2gIQBKgHAogWQAngRAcgSQAMgIAJgLQAZggAIhMQABg3AGgKQAEgdASgCQBVgIE2gLICpgHQFVgLCWgCIBPAAIBhAJIBBAGIB7AMIAmAFQBrA5AQBJQAHAfgIAiQgPA7hDBQQgdAhgjAkIiICGIhMBJQhGBBg+A1QguAngsAiQjgCvk3DXIhdBAQlGDejoCLIhSAwQ7oP5qTJqIggAeQjiDZhmC3QgZAsgSAqQglBagFBZQAABQAbBRQCRBmEaDbICOBtQDMCeDNCEQBHAtBIArQIXFDNoI3IBqBFQO/JuGoEJIBHAsQENCnCRCcQAiAkAbAlQCKC2ArDxQAFBjgFBmIgeAkQhYBrhKApQgpAZg+AXQg2AVhYAUIg8ANQgNAChTABIgoAAIiLgBIg4gFIiXgOQg0gFgvgBQhEgBg6AEQhKAGg3ACQghADgjABIgeABQgGAJgoAEIgSACQg8ADgEAIQgwADgsAAQhRAAhFgKg");
	this.shape_173.setTransform(925.6708,576.9213);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("EAagA9GQgagEgagGQgfgHgngLIgrgMIhYgbIgigKQl9h0miizIgagLQk5iHmLjGIg+gfQnij2lwjcIhdg3Ql+jqlpkJIhhhIQhyhUiqh3IhhhDQi0h9hlg/Ihlg/IjniTQg9gogqgiQhMg7g2g4QgrgrgkgyQg1hHgqhWQgSgmgRgqQg0iEgxjBQgDgOABgMIAAgCIABgaQAAhhAChuIABhAIABiPQABgmAGg4IACgdIAPhMIAHgrQAShjAHgbQAIhZAmh0QAnhzA8iEQBdjJBiikQBnitBxiGQAtg3AwgyQCMiWCvhxQAdgTAggTQCNhZDcheIB8g2QCAg4DehdQDFhVILj4IEciFQHFjQCohTQChhMA6gZQAggPAkgSQBbgtB9hHIBPguQBcg0BxhCIBVgvQBvg8BYgjQAugTAqgPQBZghBqgOQAagEAdgDIBMgHQAwgDBEgIQBDgIAighIA7gpIATgRQAcgcAUg/QAGgvAMgIQAHgZATgBQBegIElgKICmgGQFTgLCQgBQAkgBArACQAQAABPAIIBAAGIB4ALIAmAHQBsA3AKBJQAFAegLAhQgSA5hFBLQgdAhgkAiIiICAQgsAogiAeQhFA+hAAyQgtAlgtAhQjhCmk2DNIhcA9QlGDUjnCDIhSAtQ7lPLqPJMIggAeQjmDShkCwQgZAsgQAqQgkBZgBBYQAKBHAlBLQCVBlEWDOICOBoQDMCWDNB9QBHArBIApQIYE1NiIbIBqBBQO+JSGkD6IBHAqQEOChCOCXQAiAjAbAkQCKCzAmDuQgJBfgPBcIggAiQhUBehVAnQgqAWg9AVQguAShfAQQgbAGggAFQgRAChOABIgngBIiIgCIg3gFIiVgMQgzgEgvAAQhDgBg4AEQhKAFg2ACQgbAEgoABIgeABQgLAIghAFIgSABQg3ADgJAHQgqADgoAAQhVAAhIgLg");
	this.shape_174.setTransform(925.7208,595.378);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("EAaXA6KIgzgJQgfgHgngKIgqgMIhYgaIghgJQl6htmdiqIgagKQk3h/mIi7Ig+geQnejplwjQIhcg0Ql+jeloj8IhhhEQhxhQirhxIhihBQiyh2hmg9Ihlg9IjniLQg/gngogeQhNg3g3g1QgtgqgkguQg3hEgshTQgTgkgSgpQg3h/gyi/QgDgNAAgNIAAgCIACgYQAAhgAChtIABg+IABiNQAAggAKg9IADgcIAPhKIAGgqQAQhaAKgjQANhWAphwQAshzA9h9QBhjDBnidQBsikB3h/QAvgzAyguQCNiJC2hpIA+gjQCJhPDghbIB7gyIFciPQDShWH4jlIEXh9QHWjMCRhGQCUhDBHgfIBEgfQBYgrB/hFIBOgrIDMhwIBVgsQBug2BZghQAtgRArgNQBRgcBxgLQAagEAdgCIBLgGQAygFA+gJQA9gLAcgrQAbgcAXgTIATgQQAdgXAhgzQAMgmARgHQAJgTAUgCQBngHEWgJICigFQFSgKCIgCQAfAAAxACIBdAIIA/AGIB1AKQAcAFAKADQBtA3AEBJQADAcgOAhQgVA2hGBHQgfAfgjAgIiKB7QgrAmgjAdQhGA7hAAvQgtAjgtAfQjiCfk2DCIhcA6QlGDJjlB8IhSArQ7iObqLIwIggAcQjqDMhiCqQgYArgQAqQgiBYAEBXQAUA+AuBGQCYBiETDDICNBiQDNCODNB2ICPBQQIYEnNdH+IBpA+QO+I2GfDsIBHAoQEPCbCNCQQAhAjAbAjQCKCwAhDqQgYBdgYBRIghAfQhRBShgAlQgqAUg8ASQgoAPhlANIg7AJQgVAChHAAIgmgBIiGgDIg3gFQhLgGhHgFQgzgDguAAQhCAAg3AEQhJAFg0ABQgWAFgtACIgeABQgQAGgbAFIgRACQgzACgNAGQgmACgjAAQhYAAhKgMg");
	this.shape_175.setTransform(925.8964,613.8147);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("EAaOA3PQgZgEgagFQgfgHgmgKIgpgLIhXgYIgigJQl2hnmYifIgagKQk1h3mFixIg+gcQnbjclvjEIhcgyQl9jRlpjvIhhhAQhvhMishsIhig+Qivhvhpg7Ihlg6IjmiEQhBgmgmgbQhNgzg5gxQgugoglgrQg6hBguhPQgUgjgSgoQg5h7g1i8QgEgNABgNIAAgBIACgYQAAheAChrIABg9IABiLQAAgaANhCIAEgbQAJgkAGgkQACgTAEgWQANhRAOgqQARhVAshsQAxhyA+h1QBmi+BsiVQBwicB+h3QAxgwA0grQCOh6C9hhIA+ghQCGhFDjhXIB7gvQB1gvDlhZQDehYHkjSQCMg6CIg7QHljIB6g5IDehfIBCgeQBVgoCAhCIBPgqIDKhpIBWgoQBsgyBbgeQAsgPArgLQBKgXB4gJIA2gFIBKgFQA1gFA5gMQA2gNAWg1QAUgiAUgSQAJgKAKgGQAegSAvgnQAQgdAXgFQAMgPAUgBQBxgGEGgJICegEQFRgKCCgBQAYAAA3ADIBcAHIA9AGIBzAJQAaAGALAEQBuA2gCBIQABAbgQAgQgZA0hHBDIhCA7IiLB2IhPA/QhHA4hBAuQgtAgguAeQjiCXk1C3IhcA3QlFC/jlB0IhSApQ7eNsqHITIghAbQjtDGhgCjQgZAqgPAqQggBXAJBWQAeA2A4BAQCbBgEPC3ICNBdQDNCGDNBuICQBMQIYEZNXHiIBoA7QO/IZGbDdIBHAnQEQCUCJCLQAiAhAbAjQCKCtAcDnQgnBZgiBHIgiAcQhOBGhqAjQgsARg6ARQggALhsAKIg6AHIhbABIgmgBIiDgEIg2gFQhKgGhGgEQgxgCguABQhBABg2ADQhJAEgzABQgQAGgyACIgdABIgqALIgQABQguADgSAEIg5ABQhfAAhPgMg");
	this.shape_176.setTransform(926.0639,632.2721);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("EAaFA0TIgzgIQgfgHglgJIgogLIhXgWIghgJQlyhhmUiUIgagKQkzhwmCilIg+gbQnYjOlti5IhcgvQl9jFlojhIhhg9QhuhHiuhoIhig7Qithnhqg6Ihlg3Ijmh9QhDglgkgXQhOgwg6guQgwgmglgnQg8g9gwhNQgVgigTgmQg8h3g2i5QgEgNABgMIAAgBIABgYQAAhcAChpIABg9IACiJQAAgTAQhGIAFgbQALgrAEgaQABgTAEgWQALhIARgxQAVhTAwhoQA2hxA/hvQBqi4BxiOQB0iTCFhwQAzgsA2gnQCPhsDFhaIA+gdQCCg8DnhUIB6grIFYiCQDrhZHRi/QCNg4CCg1QH1jEBkgsQB7gyBjgpIBCgdQBSgmCChAIBOgoIDJhhIBWgmQBrgtBcgaQAsgNAqgKQBDgSB/gHIA1gDIBJgFQA4gFAzgOQAwgPAQhAQAOgnARgTQAJgKAKgFIBbgoQAWgTAcgFQAPgJAUgBQB6gGD2gHICbgFQFPgIB7gBQATAAA9ADIBaAHIA7AFIBxAJQAYAGAMAGQBvA1gHBIQgBAagTAeQgcAyhJA/IhCA4IiNBwIhPA8QhIA1hBArQgtAeguAdQjjCOk1CtIhbA0QlGC0jjBtIhSAnQ7bM9qDH1IgiAaQjwDAhdCdQgZAqgPApQgeBWANBUQAoAvBCA6QCeBeEMCqICNBYQDNB+DNBoICQBHQIZELNRHFIBnA4QPAH9GVDPIBHAkQERCOCICFQAhAhAbAiQCKCqAXDjQg2BXgsA8QgSAPgRALQhLA5h0AhQgsAPg5AOQgaAIhyAHIg6AEIhZABIgkgBIiBgGIg1gEQhKgGhEgDQgxgBgtABIh1AFQhIADgxABQgLAHg3ACIgdABQgbAFgNAFIgQABQgqADgWACIguABQhjAAhSgNg");
	this.shape_177.setTransform(926.24,650.7072);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("EAZ7AxYIgygJQgegGglgJIgogKIhWgUIghgIQluhbmPiKIgagJQkxhpl/ibIg+gZQnVjBlsitIhcgsQl9i6lojTIhgg5QhthDiuhjIhjg3Qirhhhsg5IhkgzIjmh2QhGgjghgUQhOgtg8gqQgxgkgngkQg+g6gyhJQgWghgUglQg9hyg5i2QgEgNABgNIABgXQAAhaADhoIABg8IABiHQAAgNAThLIAGgbQAOgxACgRQAAgTADgVQAJg+AVg6QAZhRA0hkQA6hwBAhoQBviyB2iHQB4iKCLhpQA1goA4gkQCQheDNhSIA/gaQB9gyDshQIB4goIFXh8QD4hbG8iqIEMhmQIEjBBOgfQBvgoBwgvIBBgcQBPgjCEg+IBNgmQBrgxBegpQAtgTAogPQBqgpBdgXQAsgLAqgIQA8gMCFgFIA1gCQAmgBAigEQA6gFAvgRQApgRAJhLQAIgsAPgTQAIgLAKgCIBqgYQAbgKAigDQARgFAVgBQCDgFDmgGICXgEQFOgIB1AAQANgBBDAFIBXAHIA7AEIBtAIQAWAHAPAGQBwA1gNBHQgEAZgVAeQggAuhKA7IhDA1IiNBqIhRA6QhIAyhCAoIhcA4QjjCGk0CjIhbAwQlGCqjiBlIhRAkQ7YMOqAHZIghAZQj1C5hbCXQgYApgOAoQgdBWASBTQAyAnBMA0QChBbEICfQBGAqBHAoQDNB2DOBhICPBDQIaD+NLGoIBnA0QO/HhGRDAIBIAjQESCICEB/QAhAgAcAhQCKCnARDgQhEBTg1AyQgUANgRAKQhHAth/AfQguAMg3AMQgTAFh5ADIg5ADIhXABIgkgDIh+gGIg0gFQhJgFhCgBQgxgBgsACIhzAFQhIADgwAAQgFAHg8ADIgcACQggADgHAGIgPABIhAADIgdAAQhrAAhYgNg");
	this.shape_178.setTransform(926.415,669.1845);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("EAZyAudQgwgIhEgPIh8gdQmFhZmriLQlHhqmhifQoOjLmLizQmwjFmVjkQiIhPj2iCQkBiJh5g5QkIh9hFgjQiShMhUhHQhehQhChwQhBhvg7i3QgDgIABgNIACgWQAAhWAChpQAChpAAhWQAAgGAXhRQAXhRAAgIQAAh+B2jQQCuk0DAjIQCsiyDTh1QCmhcD/hVQCVgzFLhnQDUhHMvkiQMQkXBCgWQB7gnCmhIQBggpC+hWQCohKB1goQCag1CCgTQA+gJC4gBQB7gBBAgkQAUgLADhWQADhPAdgCQBegIHtgMQHKgLCEAAQALAACbAMICkALQCYA4gVBRQgQA9h9BbQiKBlhIAxQh3BShlA5QkACSl0C5QmBC/kABrQ8XL3qLHFQkUDBheCbQhMB9AiB6QCvBaGLDeQETCcEVB5QI2D4O5HDQQRHrGhC7QFKCUCTCJQDDC2APEKQhuBphKAjQhbArjXAlQgLACiAAAIiNABIjSgPQh+gJhnAGQiYAIhOAAQAAAIhBAEQhBACAAAHQgzADgwAAQhvAAhZgOg");
	this.shape_179.setTransform(926.5857,687.6268);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("EAZyArmQgwgHhEgPIh8gbQmFhTmriDQlHhjmhiVQoOi/mLioQmwi5mVjWQiIhKj2h6QkBiBh5g1QkIh1hFghQiShIhUhCQhehLhChpQhBhpg7irQgDgHABgNIACgUQAAhRAChiQAChjAAhRQAAgFAXhMQAXhNAAgHQAAh2B2jDQCukhDAi8QCsinDThuQCmhWD/hQQCVgwFLhhQDUhCMvkRQMQkFBCgUQB7gmCmhDQBggnC+hQQCohGB1glQCagyCCgRQA+gJC0gBQB3gBBAgiQAUgKAEhQQAEhLAdgCQBegHHwgLQHMgLCFAAICmALICkALQCYA1gVBMQgQA5h9BVQiKBehIAvQh3BMhlA2QkACJl0CuQmBCzkABlQ8XLHqLGqQkUC1heCRQhMB2AiByQCvBUGLDRQETCSEVByQI2DpO5GmQQRHOGhCvQFKCLCTCAQDDCrAPD5QhuBjhKAhQhbApjXAiQgLACiAAAIiNABIjSgOQh+gIhnAFQiYAIhOAAQAAAHhBAEQhBACAAAGQg0ADgwAAQhuAAhZgNg");
	this.shape_180.setTransform(926.5857,705.8708);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("EAZyAovQgwgHhEgOIh8gZQmFhOmrh6QlHhcmhiMQoOiymLidQmwitmVjIQiIhFj2hyQkBh4h5gyQkIhthFgfQiShDhUg+QhehGhChiQhBhig7igQgDgHABgLIACgUQAAhLAChcQAChcAAhMQAAgFAXhHQAXhHAAgHQAAhuB2i3QCukODAivQCsicDThnQCmhRD/hKQCVgtFLhaQDUg/Mvj+QMQj0BCgTQB7gjCmg/QBggkC+hLQCohBB1gjQCagvCCgQQA+gICwgBQBzgBBAggQAUgJAFhLQAFhGAdgCQBegHHzgKQHPgKCFAAICmALICkAJQCYAygVBHQgQA1h9BQQiKBYhIAsQh3BHhlAyQkACAl0CiQmBCokABeQ8XKZqLGOQkUCoheCIQhMBuAiBrQCvBPGLDDQETCIEVBrQI2DZO5GLQQRGvGhCkQFKCCCTB3QDDCgAPDpQhuBchKAfQhbAmjXAgQgLACiAAAIiNABIjSgNQh+gIhnAFQiYAHhOAAQAAAHhBADQhBADAAAGQg0ACgvAAQhvAAhZgMg");
	this.shape_181.setTransform(926.5857,724.1375);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("EAZyAl3QgwgGhEgNIh8gXQmFhImrhyQlHhWmhiCQoOilmLiSQmwihmVi6QiIhAj2hqQkBhwh5guQkIhmhFgdQiSg+hUg6QhehBhChbQhBhbg7iVQgDgGABgLIACgSQAAhGAChVQAChWAAhGQAAgFAXhCQAXhCAAgHQAAhmB2ipQCuj8DAijQCsiRDThfQCmhLD/hGQCVgpFLhUQDUg6MvjtQMQjjBCgRQB7ghCmg6QBggiC+hGQCog8B1ghQCagrCCgPQA+gHCsgCQBvAABAgeQAUgJAGhFQAGhBAdgCQBegGH2gKQHRgJCGAAICmAKICkAJQCYAugVBCQgQAxh9BLQiKBRhIApQh3BChlAvQkAB3l0CXQmBCckABXQ8XJqqLFyQkUCdheB+QhMBmAiBjQCvBKGLC1QETB/EVBjQI2DKO5FvQQRGRGhCYQFKB5CTBvQDDCVAPDYQhuBWhKAdQhbAjjXAeQgLABiAABIiNAAIjSgMQh+gHhnAFQiYAGhOAAQAAAHhBADQhBACAAAGQgyACguAAQhwAAhbgMg");
	this.shape_182.setTransform(926.5857,742.4189);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("EAZyAjAQgwgGhEgLIh8gWQmFhDmrhpQlHhQmhh3QoOiZmLiHQmwiVmVisQiIg7j2hiQkBhnh5grQkIhehFgbQiSg5hUg2Qheg8hChUQhBhUg7iKQgDgGABgKIACgQQAAhBAChPQAChPAAhBQAAgEAXg9QAXg+AAgGQAAheB2idQCujoDAiXQCsiGDThYQCmhGD/hAQCVgmFLhOQDUg1MvjbQMQjSBCgQQB7geCmg2QBggfC+hBQCog4B1geQCagoCCgOQA+gHCogBQBrAABAgcQAUgIAHhAQAHg8AdgCQBegGH5gJQHTgICHAAICmAJICkAIQCYArgVA9QgQAuh9BEQiKBMhIAlQh3A+hlArQkABul0CLQmBCQkABRQ8XI8qLFVQkUCRheB1QhMBfAiBbQCvBEGLCnQETB2EVBbQI2C7O5FUQQRFyGhCNQFKBvCTBnQDDCKAPDIQhuBPhKAbQhbAgjXAcQgLABiAABIiNAAIjSgLQh+gHhnAFQiYAGhOAAQAAAGhBADQhBABAAAGQgxACguAAQhxAAhbgLg");
	this.shape_183.setTransform(926.5857,760.6607);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("EAZyAgJQgwgFhEgLIh8gUQmFg9mrhhQlHhJmhhuQoOiMmLh8QmwiJmVieQiIg2j2haQkBhfh5gnQkIhXhFgYQiSg1hUgxQheg3hChOQhBhMg7h/QgDgFABgJIACgQQAAg7AChJQAChJAAg7QAAgEAXg4QAXg4AAgGQAAhXB2iPQCujWDAiKQCsh7DThRQCmhAD/g7QCVgjFLhIQDUgxMvjIQMQjBBCgPQB7gbCmgyIEehYQCogzB1gcQCaglCCgNQA+gGCkgBQBnAABAgaQAUgHAIg7QAIg3AdgCQBegFH8gIQHWgICHAAICmAIICkAIQCYAngVA4QgQAqh9A/QiKBGhIAiQh3A4hlAoQkABll0CAQmBCEkABKQ8XINqLE6QkUCFheBrQhMBXAiBUQCvA+GLCaQETBsEVBUQI2CrO5E4QQRFUGhCCQFKBmCTBeQDDB/APC4QhuBIhKAZQhbAdjXAaQgLABiAABIiNAAIjSgKQh+gGhnAEQiYAFhOAAQAAAGhBACQhBACAAAFIhdACQhyAAhcgKg");
	this.shape_184.setTransform(926.5857,778.9276);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AZydSQgwgFhEgKIh8gSQmFg4mrhYQlHhCmhhkQoOiAmLhxQmwh9mViPQiIgyj2hSQkBhWh5gkQkIhPhFgWQiSgwhUgtQhegyhChHQhBhGg7hzQgDgFABgIIACgOQAAg2AChCQAChDAAg2QAAgDAXgzQAXg0AAgFQAAhPB2iDQCujCDAh+QCshwDThKQCmg6D/g2QCVggFLhBQDUgtMvi3QMQivBCgOQB7gZCmgtIEehQQCogvB1gZQCagiCCgLQA+gGCggBQBjAABAgXQAUgHAJg2QAJgyAdgBQBegFH/gIQHYgHCIAAICmAIICkAHQCYAjgVAzQgQAnh9A5QiKA/hIAgQh3AzhlAkQkABcl0B1QmBB4kABEQ8XHeqLEeQkUB5heBiQhMBPAiBMQCvA5GLCMQETBiEVBNQI2CcO5EcQQRE2GhB2QFKBdCTBWQDDBzAPCnQhuBChKAXQhbAbjXAXQgLABiAABIiNAAIjSgJQh+gGhnAEQiYAFhOAAQAAAFhBACQhBACAAAEIheACQhyAAhbgJg");
	this.shape_185.setTransform(926.5857,797.1714);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#323232").s().p("AgogCIAAgBQAoAAApADQgtAEgkAAIAAgGg");
	this.shape_186.setTransform(475,440.875);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#6D6D6D").s().p("AgYgDIAvAAQADAEgDAAQgXADgXAAIgBgHg");
	this.shape_187.setTransform(482.375,334.375);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AZyakQgwgEhEgJIh8gRQmFgymrhQQlHg9mhhaQoOh0mLhnQmwhxmViCQiIgtj2hLQkBhOh5ggQkIhIhFgUQiSgshUgoQheguhChAQhBg/g7hpQgDgEABgIIACgNQAAgxACg8QACg8AAgxQAAgDAXguQAXgvAAgEQAAhIB2h3QCuiwDAhzQCshlDThEQCmg0D/gxQCVgdFLg7QDUgpMvimQMQifBCgMQB7gXCmgpIEehJQCogqB1gXQCageCCgLQBDgFCYAAQBhABBAgVQATgGAKgyQAJguAdgCQBdgEIDgHQHagGCIAAICmAHICkAGQCYAggVAuQgQAjh9A0QiKA6hIAcQh3AvhlAhQkABTl0BqQmBBtkAA9Q8XGyqLEEQkUBtheBZQhMBIAiBFQCvAzGLB/QETBaEVBFQI2COO5EBQQREaGhBrQFKBUCTBOQDDBpAPCXQhuA8hKAVQhbAYjXAVQgLABiAABIiNAAIjSgIQh+gFhnADQiYAFhOAAQAAAEhBACQhBACAAAEIhdABQhyAAhcgIg");
	this.shape_188.setTransform(926.5857,814.6633);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AZyX2QgwgEhEgIIh8gPQmFgtmrhIQlHg2mhhRQoOhpmLhcQmwhlmVh1QiIgoj2hEQkBhGh5gdQkIhAhFgSQiSgnhUglQhegphCg5QhBg5g7heQgDgEABgHIACgLQAAgsACg2QACg2AAgsQAAgDAXgpQAXgqAAgEQAAhBB2hqQCuifDAhnQCshbDTg8QCmgvD/gsQCVgaFLg1QDUglMviVQMQiPBCgLQB7gUCmglIEehBQCogmB1gVQCagbCCgJQBHgFCRABQBgABA+gSQAUgGAJgtQAJgrAdgBQBdgEIGgGQHcgGCJAAICmAGICkAGQCYAdgVApQgQAgh9AuQiKA0hIAZQh3AqhlAeQkABLl0BfQmBBikAA3Q8XGFqLDpQkUBjheBPQhMBBAiA+QCvAuGLByQETBQEVA/QI2B/O5DnQQRD8GhBhQFKBLCTBGQDDBeAPCIQhuA2hKATQhbAWjXASQgLABiAABIiNAAIjSgHQh+gFhnADQiYAEhOAAQAAAEhBACQhBABAAAEIhbACQh0AAhcgIg");
	this.shape_189.setTransform(926.5857,832.1552);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#323232").s().p("AgogDQAoAAApADQgvAEgiAAIAAgHg");
	this.shape_190.setTransform(474.975,440.875);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#6D6D6D").s().p("AgWgDIAsAAQABABAAAAQAAABAAAAQAAABAAAAQgBAAgBAAQgVAEgWAAIAAgHg");
	this.shape_191.setTransform(482.2068,334.375);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AZyVIQgwgDhEgHIh8gNQmFgomrhAQlHgwmhhIQoOhdmLhRQmwhamVhoQiIgjj2g8QkBg+h5gaQkIg4hFgRQiSgihUghQhegkhCgzQhBgyg7hUQgDgDABgGIACgKQAAgnACgwQACgwAAgnQAAgCAXglQAXglAAgEQAAg5B2heQCuiNDAhbQCshRDTg1QCmgqD/gmQCVgXFLgwQDUggMviEINSiJQB7gRCmghIEeg6QCogiB1gSQCagYCCgIQBLgFCKADQBeACA+gRQATgFAKgpQAJgnAdgBQBdgEIIgFQHegFCKAAICmAFICkAFQCYAagVAlQgQAch9ApQiKAuhIAWQh3AlhlAaQkABDl0BUQmBBXkAAxQ8XFZqLDOQkUBYheBGQhMA5AiA3QCvApGLBlQETBHEVA4QI2BwO5DNQQRDgGhBVQFKBDCTA+QDDBTAPB5QhuAwhKAQQhbAUjXAQIiLABIiNAAIjSgGQh+gEhnACQiYAEhOAAQAAAEhBACQhBABAAADIhZABQh1AAhdgHg");
	this.shape_192.setTransform(926.5857,849.6471);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#323232").s().p("AgogDQAoAAApADQguAEgjAAIAAgHg");
	this.shape_193.setTransform(475,440.875);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#6D6D6D").s().p("AgXgDIAuAAQAAABABABQAAAAAAABQAAAAgBAAQAAAAgBAAQgWAEgWAAIgBgHg");
	this.shape_194.setTransform(482.2818,334.375);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AZySbQgwgDhEgGIh8gMQmFgjmrg3QlHgqmhg/QoOhQmLhHQmwhPmVhaQiIgfj2g0QkBg2h5gXQkIgxhFgOQiSgehUgdQhegfhCgtQhBgsg7hIQgDgDABgFIACgJQAAgiACgqQACgqAAgiQAAgBAXghQAXggAAgDQAAgyB2hSQCuh7DAhPQCshGDTgvQCmgkD/giQCVgUFLgpQDUgdMvhzQMQhuBCgJQB7gPCmgdIEegyQCogeB1gPQCagWCCgHQBPgECEAEQBcADA8gOQAUgEAJgmQAJgjAdgBQBdgDILgFQHggECLAAICmAFICkAEQCYAWgVAgQgQAZh9AjQiKAohIAUQh3AghlAXQkAA6l0BJQmBBMkAArQ8XEsqLC0QkUBMheA+QhMAyAiAvQCvAkGLBYQETA+EVAwQI2BiO5CzQQRDDGhBKQFKA7CTA2QDDBIAPBpQhuAqhKAOQhbARjXAPIiLABIiNAAIjSgGQh+gDhnACQiYADhOAAQAAADhBACQhBABAAADIhaAAQh0AAhdgFg");
	this.shape_195.setTransform(926.5857,867.0909);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6D6D6D").s().p("AgYgCIAAgBIAvAAQADAEgDAAQgXADgXAAIgBgGg");
	this.shape_196.setTransform(482.375,334.375);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AZyPtQgwgChEgGIh8gJQmFgemrgvQlHgkmhg2QoOhFmLg8QmwhDmVhNQiIgaj2gtQkBguh5gTIlNg2QiSgahUgYQhegbhCgmQhBglg7g+QgDgDABgEIACgIQAAgdACgjQACgkAAgdQAAgBAXgcQAXgbAAgDQAAgqB2hGQCuhpDAhEQCsg8DTgnQCmgfD/gdQCVgRFLgjQDUgYMvhiQMQhfBCgHQB7gNCmgYIEegsQCogZB1gNQCagSCCgGQBTgEB9AFQBaAEA7gMQAUgEAJghQAJgfAdgBQBdgDIOgEQHjgECLAAICmAEICkAEQCYATgVAbQgQAVh9AfQiKAihIAQQh3AchlATQkAAyl0A+QmBBBkAAkQ8XEBqLCZQkUBBheA0QhMArAiAoQCvAfGLBLQETA1EVApQI2BTO5CZQQRCmGhA/QFKAyCTAuQDDA+APBaQhuAjhKAMQhbAPjXAMIiLABIiNAAIjSgFQh+gDhnACQiYADhOAAQAAADhBABQhBABAAACIhcABQhzAAhcgFg");
	this.shape_197.setTransform(926.5857,884.5847);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AZyM/Ih0gGIh8gIQmFgZmrgnQlHgemhgsQoOg5mLgyQmwg3mVhAQiIgWj2gkQkBgnh5gPQkIgjhFgLQiSgVhUgTQhegXhCgfQhBgfg7g0QgDgBABgEIACgHQAAgYACgdQACgdAAgYQAAgBAXgXQAXgXAAgCQAAgjB2g6QCuhWDAg4QCsgyDTghQCmgaD/gXIHggsQDUgTMvhRINShUQB7gLCmgUIEegkQCogVB1gLQCagPCCgFQBXgDB2AGQBYAFA7gKQATgDAKgeQAJgbAdgBQBdgCIQgDIJxgDICmADICkADQCYAPgVAXQgQARh9AaIjSAqQh3AXhlAPQkAApl0A0QmBA1kAAeQ8XDVqLB/QkUA1heAsQhMAjAiAhQCvAZGLA+QETAsEVAiQI2BFO5B+QQRCKGhA0QFKApCTAmQDDA0APBKQhuAdhKAKQhbAMjXAKIiLABIiNAAIjSgEQh+gChnABQiYADhOAAQAAAChBABQhBAAAAADIhYAAQh1AAhegEg");
	this.shape_198.setTransform(926.5857,902.0767);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#6D6D6D").s().p("AgZgCIAAgBIAxAAQADAFgDAAQgYACgYAAIgBgGg");
	this.shape_199.setTransform(482.4625,334.375);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AZyKSIh0gGIh8gGQmFgUmrgeQlHgYmhgjQoOgtmLgnQmwgsmVgyQiIgSj2gdQkBgeh5gMIlNgkQiSgRhUgPQhegShCgZQhBgZg7goQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAIACgGQAAgTACgXQACgXAAgTQAAAAAXgTQAXgRAAgCQAAgcB2guQCuhEDAgtQCsgnDTgaQCmgUD/gTQCVgLFLgXQDUgQMvhAINShCQB7gJCmgQIEegcQCogRB1gIQCagMCCgEQBcgDBuAHQBXAGA5gHQAUgDAJgZQAJgYAdgBQBdgCIUgCIJzgDICmADICkACQCYANgVASQgQANh9AUIjSAhQh3AThlAMQkAAhl0AoQmBArkAAXQ8XCoqLBlQkUAqheAiQhMAcAiAaQCvAUGLAxQETAjEVAbQI2A2O5BkQQRBtGhApQFKAhCTAeQDDApAPA6QhuAXhKAIQhbAKjXAIIiLABIiNAAIjSgEQh+gChnACIjmACQAAABhBABQhBAAAAACIhaABQh0AAhdgDg");
	this.shape_200.setTransform(926.5857,919.5205);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#323232").s().p("AgogCIAAgBQAoAAApADQgsAEglAAIAAgGg");
	this.shape_201.setTransform(475.025,440.875);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#6D6D6D").s().p("AgZgCIAAgBIAyAAQADAGgDAAIgxABIgBgGg");
	this.shape_202.setTransform(482.5375,334.375);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAAgOACgRQACgRAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_203.setTransform(926.5857,937.0125);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(0,0,0,0.969)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_204.setTransform(926.5857,937.0125);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(0,0,0,0.937)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_205.setTransform(926.5857,937.0125);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(0,0,0,0.902)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_206.setTransform(926.5857,937.0125);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(0,0,0,0.871)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_207.setTransform(926.5857,937.0125);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(0,0,0,0.839)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_208.setTransform(926.5857,937.0125);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.808)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_209.setTransform(926.5857,937.0125);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(0,0,0,0.776)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_210.setTransform(926.5857,937.0125);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.741)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_211.setTransform(926.5857,937.0125);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(0,0,0,0.71)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_212.setTransform(926.5857,937.0125);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.678)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_213.setTransform(926.5857,937.0125);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(0,0,0,0.647)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_214.setTransform(926.5857,937.0125);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(0,0,0,0.616)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_215.setTransform(926.5857,937.0125);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(0,0,0,0.58)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_216.setTransform(926.5857,937.0125);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.549)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_217.setTransform(926.5857,937.0125);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(0,0,0,0.518)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_218.setTransform(926.5857,937.0125);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(0,0,0,0.486)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_219.setTransform(926.5857,937.0125);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(0,0,0,0.455)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_220.setTransform(926.5857,937.0125);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(0,0,0,0.424)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_221.setTransform(926.5857,937.0125);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(0,0,0,0.388)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_222.setTransform(926.5857,937.0125);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(0,0,0,0.357)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_223.setTransform(926.5857,937.0125);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(0,0,0,0.325)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_224.setTransform(926.5857,937.0125);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(0,0,0,0.294)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_225.setTransform(926.5857,937.0125);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(0,0,0,0.263)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_226.setTransform(926.5857,937.0125);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(0,0,0,0.227)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_227.setTransform(926.5857,937.0125);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(0,0,0,0.196)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_228.setTransform(926.5857,937.0125);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(0,0,0,0.165)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_229.setTransform(926.5857,937.0125);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(0,0,0,0.133)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_230.setTransform(926.5857,937.0125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(0,0,0,0.102)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_231.setTransform(926.5857,937.0125);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(0,0,0,0.067)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_232.setTransform(926.5857,937.0125);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(0,0,0,0.035)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgwAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_233.setTransform(926.5857,937.0125);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(0,0,0,0.004)").s().p("AZyHkIh0gEIh8gFQmFgOmrgXQlHgRmhgaQoOghmLgdQmwggmVglQiIgNj2gVQkBgXh5gJIlNgaQiSgMhUgMQhegNhCgSQhBgSg7geQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIACgEQAAgOACgRQACgRAAgOQAAAAAXgOQAXgNAAgBQAAgVB2ghQCugzDAggQCsgdDTgTQCmgPD/gOIHggZIQDg7INSgxQB7gGCmgMIEegVQCogMB1gGQCagJCCgDQBggCBnAIQBVAHA4gFQAUgCAJgWQAJgUAdAAQBdgCIXgBIJ2gCICmACICkABQCYAJgVAOQgQAKh9AOIjSAZQh3ANhlAJQkAAYl0AeQmBAfkAASQ8XB7qLBKQkUAfheAaQhMAUAiATQCvAPGLAkQETAZEVAUQI2AoO5BKQQRBQGhAeQFKAYCTAWQDDAeAPArQhuARhKAGQhbAHjXAGIiLABIiNAAIjSgDQh+gBhnABIjmABQAAABhBABQhBAAAAACIhTAAQh4AAhggCg");
	this.shape_234.setTransform(926.5857,937.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_121}]},819).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125,p:{y:1047.55}}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_125,p:{y:830.4}}]},1).to({state:[{t:this.shape_125,p:{y:721.85}}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},10).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_166},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_168},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_169},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_170},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_171},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_172},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_173},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_174},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_175},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_176},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_177},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_178},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_179},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_180},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_181},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_182},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_183},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_184},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_185},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_188},{t:this.shape_163},{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_163},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_192},{t:this.shape_163},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_195},{t:this.shape_163},{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_197},{t:this.shape_163},{t:this.shape_196},{t:this.shape_186}]},1).to({state:[{t:this.shape_163},{t:this.shape_199},{t:this.shape_186},{t:this.shape_198}]},1).to({state:[{t:this.shape_163},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_204}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_205}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_206}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_207}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_208}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_209}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_210}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_211}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_212}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_213}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_214}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_215}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_216}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_217}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_218}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_219}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_220}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_221}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_222}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_223}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_224}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_225}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_226}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_227}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_228}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_229}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_230}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_231}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_232}]},1).to({state:[{t:this.shape_163},{t:this.shape_165},{t:this.shape_164},{t:this.shape_233}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_234}]},1).to({state:[]},505).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(860).to({_off:false},0).to({_off:true},10).wait(650));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(860).to({_off:false},10).to({_off:true},9).wait(641));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(870).to({_off:false},9).to({_off:true},9).wait(632));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(879).to({_off:false},9).to({_off:true},9).wait(623));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(888).to({_off:false},9).to({_off:true},10).wait(613));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(897).to({_off:false},10).to({_off:true},7).wait(606));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(907).to({_off:false},7).to({_off:true},8).wait(598));

	// black1
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0CI1uMQI1uMMeAAQMfAAI1OMQI2OMAAUCQAAUDo2OMQo1OMsfAAQseAAo1uMg");
	this.shape_235.setTransform(316.95,-348.75);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uLAA0EQAA0DI1uLQI1uLMeAAQMfAAI1OLQI2OLAAUDQAAUEo2OLQo1OLsfAAQseAAo1uLg");
	this.shape_236.setTransform(316.95,-248.25);
	this.shape_236._off = true;

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0DI1uLQI1uMMeAAQMfAAI1OMQI2OLAAUDQAAUDo2OMQo1OMsfAAQseAAo1uMg");
	this.shape_237.setTransform(316.95,53.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uMAA0DQAA0DI1uLQI1uLMegBQMfABI1OLQI2OLAAUDQAAUDo2OMQo1OLsfABQsegBo1uLg");
	this.shape_238.setTransform(316.95,153.65);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAiPQo1uLAA0EQAA0CI1uMQI1uMMeAAQMfAAI1OMQI2OMAAUCQAAUEo2OLQo1OMsfAAQseAAo1uMg");
	this.shape_239.setTransform(316.95,254.15);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAl4Qo1vsAA2MQAA2LI1vsQI1vsMeAAQMfAAI1PsQI2PsAAWLQAAWMo2PsQo1PssfAAQseAAo1vsg");
	this.shape_240.setTransform(316.95,409.175);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTApiQo1xNAA4VQAA4UI1xNQI1xNMeAAQMfAAI1RNQI2RNAAYUQAAYVo2RNQo1RNsfgBQseABo1xNg");
	this.shape_241.setTransform(316.95,463.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAtLQo1yuAA6dQAA6dI1ytQI1ytMeAAQMfAAI1StQI2StAAadQAAado2SuQo1StsfAAQseAAo1ytg");
	this.shape_242.setTransform(316.95,518.225);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(0,0,0,0.996)").s().p("EgVTAw0Qo10OAA8mQAA8lI10PQI10NMeAAQMfAAI1UNQI2UPAAclQAAcmo2UOQo1UOsfAAQseAAo10Og");
	this.shape_243.setTransform(316.95,572.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(0,0,0,0.996)").s().p("EAArBEhQhagDhcgSQluhGlDkjQkdjvjnl3Qg/hjg6hrQh2jMhQjbQmwyiAA48QAA48GwyiQBUjlBhjQQFYrZGukAQFRjWFqBJQGfBAFdG1QCwDbCXE/QBZC5BUDpQAmBpAkBvQB5GaBOE+QBXF/BCGFQBMHFBrIGQAnDqAsD+IALBDQAFDiBIEtQAoEZAGD5QAUDzgIDeQAJF3hgE/QiDGwkLFdQh1CxiECSQjmEkkRCuQkHCljUBCQiEAmiWAAIg4gCg");
	this.shape_244.setTransform(333.5542,575.0081);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("rgba(0,0,0,0.996)").s().p("EAAJBEPQhcgGhhgTQmBhMlZj/QlRjgkAlRQhMhdhChjQiRjKhTjbQnSy9AA52IAAAAQAA52HRy+QBcjtBnjQQF9rwHijBQFnigFpCSQGGCBFIHfQCkDtCEFSQBNC9BJD4QAgBuAfB2QBuHkA/EJQBRGZBJGDQBTG+DAISQBCDhBYD9IAWBCQAKCxCfFVQBgEcAqDoQBDD1AYDXQBOGNhoE5QiPGqltEzQiPCViqB3QkIDnlECEQk9B6jAAxQhqAXh7AAQg8AAhBgGg");
	this.shape_245.setTransform(357.9964,575.8199);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(0,0,0,0.996)").s().p("EgAiBEJQhfgKhmgUQmUhQlvjcQmFjRkakrQhYhXhKhdQisjIhXjZQnzzYAA6wIAAgBQAA6xHzzYQBij1BvjQQGhsJIWiAQF8hrFpDbQFtDBEyIKQCZEBByFjQBBDBA8EIQAcByAZB8QBjIuAvDWQBLGxBQGCQBbG2EUIhQBfDWCDD8IAgBAQARCBD1F+QCYEeBPDYQBwD3A4DQQCUGjhwExQibGlnOELQiqB4jPBbQkrCrl4BYQlxBQiuAhQhLALhYAAQhgAAhtgNg");
	this.shape_246.setTransform(383.392,575.4701);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("rgba(0,0,0,0.996)").s().p("EgBRBEMQhggNhrgWQmnhVmGi5Qm5jBkzkGQhkhQhThWQjHjGhajYQoVzzAB7qIAAgBQAA7sITzzQBrj9B1jQQHFshJJhAQGTg1FoEkQFUEBEdI0QCNEUBgF2QA0DEAxEYQAWB2AUCDQBZJ4AfCiQBFHKBXGBQBhGtFpIwQB7DMCvD6IArA/QAXBRFLGmQDREhByDGQCgD5BXDJQDYG6h3EqQimGfowDiQjFBbj0BAQlNBumtAuQmmAliaARQgpADguAAQiCAAingYg");
	this.shape_247.setTransform(409.05,574.2111);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(0,0,0,0.996)").s().p("EAEQBE7QjfAAmEhQQm6hamciVQnsiylNjgQmIkGiEkuQo10OAA8nQAA8kI10PQI10OMfAAQMgAAIzUOQCBEmBOGIQA4EcA0HYQBOLCAPBuQBAHjBeF+QBoGoG+I8QCoDaD/EfIG/HvQEIEjCXC3QDOD6B3DCQEeHPiAEkQjvIlxNCRQlwAxngAEQncgGiFAAg");
	this.shape_248.setTransform(434.8407,572.55);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("rgba(0,0,0,0.996)").s().p("EAMqBBlQi2gDiMgEQjDgEhhgEQj2gJlqhLQnEhdmRicQifg/iNhFQkgiMjciiQgfgWgdgXQkqjoiLkNIgRgjQk+quiXuPQh/sAgErtIAAgHQgDqrBmqBQA1lVBmk9QBik5CIkYQB6j7COjYIALgRQCIjFCCiKQCSigCihpQDYieDcg5QDrg/DoAwQAeAHAdAIQEaBQDbD3QDLDlCtGLQBgDrBZD0IBHDsQA5DYAvDtQAaCAAbCWIBZHVQAiCyAkCSQBDFiA/BtQBkFYCPElQAeBHAiBEQBeDECzDnQCQDGEBD3IAwAvQDLC7DXDTQAMAKAgAgQCMBwD3EAIAoAoQCECFBZBxQBoCGAsBwIACAEQB9D6AcC8QCGGAjCDvIgPAWQijDelZCHQjEBQkwAzQi7AijMAWQh0AMh6AJQkUATkwAAIgfgBg");
	this.shape_249.setTransform(444.7272,599.8023);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(0,0,0,0.996)").s().p("EAKmA+pQizgEiSgGQi1gHhygIQkOgSlOhGQnOhhmFijQidhCiLhKQkZiXjXiuIg6gxQkWjqiWkZIgTgjQlDqRiiuvQiOs7gHquIAAgFQgHqbB6qYQA9lRCEk5QB8ksCukFQCdjqCwi4IANgOQCuiqCahcQCqhrC/gwQDthQDiAJQDtAFDSBiQAaAMAaAOQD/CNCkESQCZD9B6GgQBFEFA/DgQAdCRAYBcIBbHHQAaCFAfCPQAyDbBEDzQAwCrA4CSQBYEvBzCKQCVEtDXEKQAsA8AwA8QCFCpDRDEQCZCfExDgIA0ApQD5CuDOCsQAQAKAdAZQC9B6DcDTIAoAlQCOCCBQBzQBfCKAIB9IAAAFQAvD8g+C4QgFFFkcDBIgUAQQjNColgBfQi7A5lEAiQjBAZjEAQQh4AJh3AGQjyAMj4AAIh5gBg");
	this.shape_250.setTransform(460.782,624.0138);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("rgba(0,0,0,0.996)").s().p("EAHKA8iQiwgFiYgJQingJiCgMQkngbkzhBQnXhll6iqQibhFiHhQQkTiijSi5Ig4g0QkBjtijkkIgTgkQlJp0itvPQict2gLpwIAAgCQgLqMCPquQBElNCik0QCWkhDVjyQC/jYDRiXIAQgMQDUiPCxguQDDg2DbAKQEEgDDnBLQDvBKC7CSIAvAnQDjDIBtEtQBmEXBIG0QArEfAlDMQAUCjAOBLQAhDtAsDdQAcCKAiCIQA8DhBXDlQA+CjBMCUQBtD7CoCmQDGEEEfDtQA5AzA+AzQCtCODtChQCjB4FgDJIA5AiQEmCjDGCDQAVALAZATQDvCEDBClIAoAhQCYB/BHB2QBVCOgcCLIgBAFQggD9iYC1QiREKl2CSIgXALQj4BxlnA5QizAhlXARQjIAPi8AKQh7AGh0AEQi7AHi3AAQh6AAh3gDg");
	this.shape_251.setTransform(485.6434,642.9184);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(0,0,0,0.996)").s().p("EgBuA7MQ0YherYnVQkwjDjgjlQjrjwivkvQlepdi9wNQiruygOowQgOp+CirEQBLlJDBkwQCwkVD7jeQDrjPD9h3QD5h1DJAAQDaAAD5BCQEZBLDsCNQERCiCuDjQDHEEA3FIQAzEwAXHIQAfJpAKB3QAmGdBfFAQB0GKDmFjQEVGtKoGLQEGCYFqCrQC6BYHADHQGDCrC+BeQEfCPCnB3QDCCMBGCHQBMCUhECbQjyIrtaC3QktBBl/ASQiqAJlsAAQlgALkRAEQhxAChsAAQmGAAlKgYg");
	this.shape_252.setTransform(512.2906,655.0676);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(0,0,0,0.996)").s().p("EgApA2vQwJg8r+kQQing+iNhHQh3g5hmg9QjDhwieiAIgwgoQi6icifjFQgngxgng0QiCixh7jeQizk6h9l8QhPjog7kEQgRhLgPhKQhDlSgmlBQgul4gKluQgJlABHlPQBAk9B8k/IAQgoQBrkHCvjlQAjguAlgrQB8iJCBhlQBzhUB+hIQEBiUEKhDQAugMAsgJQDHgqCnAWQDeAeDpBbQCwBGCaBiQBQA0BMA4QD/C9C1DlQDMECBkEpIAEANQBxEuBfGTQBqIRBgCMIAVA+QBlE9CmD7QCpEpEGEMIAyAzQDPDSFWDIQC3B9FNCGQBBAeBJAfIIEDQIB1AtQDbBMEZB4IAkAPQCnBGBxBDQB/BMA5BKQAUAVAQATQC3CjAyCDQBnCAgEB3QATB8hgB/Qg/BThSBJQlkFDq5B1QiQAYifAPQijARjtAQIiAAGQivAJjuAFQkLAMjeAHIiVAEQisAEikAAQlJAAkrgRg");
	this.shape_253.setTransform(544.5189,682.5831);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(0,0,0,0.996)").s().p("EgAkAydQvugttVjbQiygwiTg3QiBgthqgwQjUhaishsIg1gjQjMiHi4i2QgtgtgugwQiUijiZjTQjlkziWlnQhljlhGkEQgUhMgShMQhJlFgmlfQgnlRgOmtQgKlEBplTQBek5CukvIAWgmQCWj7DMjHQArgpArglQCYh7CLhDQCEg4CKgrQEWhZEXgOQAwgDAugBQDHgGCpAsQDjA9DZByQCpBbCNB4QBKA+BHBBQDuDWC7DoQDVEGCPESIAGANQCvErCmFeQC4G4C1ChIAkA2QCjEID0DRQDoDtFDDQIA8AnQD4ChFwCZQCgBZGMBwICTAvQEdBTD9BTQA6ARA+AUQEEBHD/BnIAkAOQCzBJBlBMQB1BZAPBmQAIAZAEAYQBPC4hECOQANB1hOBoQgmBjh7BiQhTBBhjA5QmmD4q1BVQiVARiiAKImcAhIiCAJQjAAOjhAIQkRARjiAJIiZAFQjpAIjiAAQkNAAkBgLg");
	this.shape_254.setTransform(583.2584,708.9551);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("rgba(0,0,0,0.996)").s().p("EgClAupQvSgdusinQi8gjiZgmQiMghhtgjQjmhEi6hZIg7gdQjehyjRinQgzgpgzgtQioiUi1jIQkYkriwlTQh6jjhRkDQgYhNgUhOQhQk5gml7QggkqgRntQgLlJCLlWQB8k1DgkfIAcgkQDBjuDqirQAygjAwgfQC1htCVghQCVgcCVgOQEtgeEkAmQAwAGAwAIQDIAeCrBCQDoBbDJCKQChBxCBCMICGCSQDcDxDCDqQDdEKC6D7IAJAMQDsEqDvEoQEEFgELC1IAyAuQDiDTFCCpQEmCvGACTIBHAcQEgBwGLBqQCJA0HMBbICcAiQE+BADwA7QBAAOA7APQEuBCDkBWIAlAOQC+BKBbBWQBpBmgbCBQgDAegIAdQgZDNi5CaQhPBoiXBZQhfBLiXBGQhnAuh0ApQnnCuqxA0QiaAKikAFQh8AGktAbIiEALQjRATjVANQkVAUjnAMIicAHQkvAMktAAQjLAAjJgGg");
	this.shape_255.setTransform(635.3267,732.3524);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(0,0,0,0.996)").s().p("EgkEApmQmFgqjogsQkeg3jghVQjyhdjpiYQjsiakUj2QlJkljKk9Qi7kkhjldQhWktgnmYQgYkDgUosQgMlOCtlZQCakyESkPQD7j4EaiYQEWiWDKAAQImAAH3CmQK8DnFuH2QHvKmHpHoQKPKNLPGPQIfEtO0C8QFjBGHcBDQCCATKfBXQHKA7D4ArQFYA8DJBFQDoBQBWBqQBfBzhECcQjxIoy2DaQqqB7tyAAQh8AAnAAuQoeA4mSAXQnMAanfAAQwpAAyLiBg");
	this.shape_256.setTransform(691.034,750.9375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("rgba(0,0,0,0.996)").s().p("EgKJApBQmlgNm/gjQjkgTj+gZQiigQiKgRQimgVh6gVQkRgwjRhMQgngNgngQQi+hMi4hxQh1hHh9heQh4hZh/htQiChwhth2QiZilhxixQhYiIhEiVQhFiZgwimQhUkegml+QgZj9gToDIAAgBQgKk7CalHQCIkkD1kGQAiglAkgkQDAi8DXiHQD4iTC2gTQBngHBlgCQGAgHFkBcQFhBTEECoQDQCBCUC0IDBDeQEQErEOD6QBbBTBbBOQHbGNIBExQCeBdCiBUQINELNdDPIAKADQFIBRGvBXQA1ANCPAZQC9AoFTA/QFQA9DVA3IBWAVQE0BIC1BOQDOBTBPBpQBVBug5CSQgNAggQAfQhRCeimCIQh8BpisBSQkOCJmHBnIgPACQmWBvntA6QjgAdjzARQhtAUmLA6QngBVlsAuIhLAJQpBBAqBAAQihAAilgEg");
	this.shape_257.setTransform(801.1016,767.3784);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("rgba(0,0,0,0.996)").s().p("EgGhAmzQmIgGmpgdQjMgQj8gVQiXgOiFgPQibgShzgSQkEgpjChCQglgMgkgNQi3hCithkQhxg/h2hUQh0hQh3hkQh8hnhohuQiQiZhsinQhTh/hAiNQhCiQgvicQhRkOgmllQgaj2gQnbIAAgBQgKkqCHk0QB3kWDXj8QAfglAfgiQCoizDAiPQDZiPCigmQBbgPBagKQFUgpE7AzQE6AnDqB6QC9BYCHCKQBbBSBWBVQD9DcD5C/QBVA+BWA7QHAEmHoECQCYBPCZBJQH/DsMNDlIAJACQEtBcGDBqQAxATB+AcQCrA1EsBNQEpBKC/BIIBNAaQEPBUChBWQC2BXBHBnQBLBqgvCHQgKAegNAdQhECUiKCKQhnBtiSBQQjhCQlMB7IgNADQlYCImnBZQjAAujQAjQhgAnlVBGQmiBzlGBFIhDANQp4B0sAAAIggAAg");
	this.shape_258.setTransform(911.1921,783.1563);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("rgba(0,0,0,0.996)").s().p("EgO4AkdImtgfIkLgYQiRgPhtgPQj3gjizg3QgjgKgigMQiug4iihWQhug4huhKQhwhHhwhaQh2hehjhmQiHiNhnieQhNh3g+iEQg+iGgtiSQhPj/gllMQgcjugOmzIAAgCQgIkXBzkiQBnkIC5j0IA1hFQCRipCoiWQC6iMCPg4QBPgXBOgTQEohLESALQEUgHDPBNQCqAvB6BhQBUAzBOA8QDpCODlCDICfBRIN0GTIEiB/QHxDMK+D5IAIADQERBnFXB/QAtAXBuAhQCZBCEFBbQEBBWCqBaIBDAeQDrBfCNBfQCcBZA/BnQBDBlglB9QgIAcgKAbQg2CJhvCMQhTBxh2BPQi2CXkQCPIgLACQkZCilgB4QigBAiwAzQhRA8kgBRQlkCRkhBcIg6ARQo4CdrxAPIgtAAQlWAAl6gVg");
	this.shape_259.setTransform(1021.2675,797.6089);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("rgba(0,0,0,0.996)").s().p("EgKeAjFQicgLj2gOIj7gTQiGgMhngMQjpgcilgtQghgIgfgKQimgviXhIQhqgwhog/Qhqg/hqhRQhwhUhehfQh9iAhiiWQhIhtg7h8Qg7h9griIQhMjvglkzQgdjngMmLIAAgCQgHkFBfkQQBWj5CcjrIAthDQB4igCRidQCciJB8hLQBCgeBDgcQD7htDpgdQDug0C0AfQCYAGBsA3QBOAVBFAjQDVBADRBHICTApQGMBYG1ClQCKAyCJA1QHjCsJuENIAIAEQD1BxEqCUQAqAcBcAkQCIBPDeBpQDZBjCVBrIA5AjQDGBrB6BpQCDBcA3BkQA6BggbBzQgFAagIAaQgoB+hUCOQg+B1hcBNQiJCejVCjIgIACQjbC7kaCYQiABSiOBEQhDBQjrBdQkmCuj7BzIgyAUQnrDErPAgQh0AEh8AAQjiAAj3gLg");
	this.shape_260.setTransform(1131.3691,809.3049);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("rgba(0,0,0,0.996)").s().p("EgGFAiRQiDgHjzgKIjrgOQh7gJhhgKQjcgViWgjQgfgHgcgHQiegliNg8Qhmgnhgg1Qhmg2hkhIQhphKhYhYQh1h0hdiMQhDhlg4h0Qg3hzgph+QhKjfgkkaQgfjigKlhIAAgCQgGj0BNj8QBEjsB+jiIAlhBQBgiXB6ijQB9iGBphfIBthKQDQiODAhGQDHhhCZgPQCFgiBfANQBHgKA9ALQDBgPC9AMQBDgCBEACQFygOGcB2QCDAkCAAqQHVCMIfEiIAHAEQDZB9D/CnQAlAhBMAoQB1BcC3B3QCzBvB+B9QAaAUAWATQCiB3BlByQBrBfAvBkQAwBcgQBoQgDAZgFAYQgaByg6CPQgpB5hBBMQhdCliYC4IgHABQicDVjUC3QhgBjhtBVQg1Bki1BpQjpDLjUCKIgrAZQmdDrqtAxQi2AJjLAAQiGAAiPgEg");
	this.shape_261.setTransform(1241.4642,817.3287);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(0,0,0,0.996)").s().p("EgBrAkTIlcgLIjagJQhxgGhagHQjPgOiHgZQgdgFgagFQiWgciCguQhigfhZgrQhiguhcg9QhjhChThQQhshohYiDQg+hcg0hrQg0hqgohzQhHjQgkkBQggjbgHk6IAAgCQgFjhA5jqQAzjdBhjZIAcg/QBIiOBiirIC0j0IBWhaQCkixCWhtQChiPB/g8QByhLBSgdQBAgoA0gPQCuhcCogxQA9gWA+gRQFYh1GDBHQB8AVB4AgQHGBsHQE4IAGAEQC+CHDSC7QAiAnA7ArQBkBpCPCFQCMB8BpCOIAmAsQB9CDBSB6QBRBjAoBiQAmBYgGBdQAAAXgCAWQgMBpgfCQQgUB9gnBLQgwCrheDMIgEACQheDuiNDWQhAB0hLBnQgnB3iBB1QiqDpiuChIgjAdQlQERqKBDQjoATkXAAIhkgBg");
	this.shape_262.setTransform(1351.6453,807.2359);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(0,0,0,0.996)").s().p("EgCWAmsIjJgEIi6gHQjDgIh4gPIgygGQiNgSh4ggQhegYhRghQhegkhWg1Qhcg4hPhIQhihchTh6Qg5hTgxhjQgxhgglhqQhFjAgkjnQghjUgFkSIAAgDQgEjQAljXQAjjOBDjRIAUg9QAwiEBLiyQBAh/BCiEIA9hrQB4jSBuiWQB7i8BkhqQBeh0BGhGQA5hHArgnQCbirCThsQA3gsA5gkQE9jcFqAZQB1AHBwAVQG4BMGBFMIAFAFQCiCSCmDPQAeArAqAwQBSB1BpCTQBjCJBUCgIAcAwQBaCPA9CDQA4BlAgBiQAdBTAFBTIACApQACBegECTQABCAgMBJQgECzgiDgIgCABQggEIhGD2QggCFgqB3QgZCMhLCAQhtEHiIC4IgbAhQkDE4pnBUQjzAek+ACIlAgFg");
	this.shape_263.setTransform(1462.0891,794.377);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(0,0,0,0.996)").s().p("EgJqApSQjzgOijgzQi9g7iLh7QiViEh0jiQjVmbgHpTQgFmUBXmzQAvjsCSnVQCqogCEkTQCQkqBKiIQCGj5CAioQFNm2GLgbQI1glF7G2QCmC/CSEqQB8D6CAFvQCUGlA/E8QAQBTAXCVQAVCFAPBHQAoC6AaD0QAfEiAAEVQAALWjNGNQi2FfpFBlQjVAlkoAIQhPACmPAAQllAAiRgJg");
	this.shape_264.setTransform(1581.2364,780.4021);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("rgba(0,0,0,0.996)").s().p("EgEwAo7Qj2gBiXgKQhHgEg0gHQiQgRhygiQhRgYhEggQhxg0hbhQQg1gtgugyQiQiihujaQhQiggziiQhzliAKljQADiKAwi2QApjpBkkcIABgBQBnj/Bqk4IAyh+QBDikAuh9QBgj7BIifQAghIAgg9QBMiVA+huQA9hsAwhHQCej0CfiKQAegaAegYQFokjFqBDQA1AIAzANQDvAzDJCgQCqB+CSDQQAkAzAjA5QBzC+BiDhQAtBpApByQAgBWAiBvIA6C1IARAzQBAC1BPDEQApB+BBCpIAZBOQAgBeAgCGIAJAiQAbBoAVBDQBBDKAlDnIAJA0QAvEZgaDsIgCAMQgvJxmuEtIgCADQjODkneBQQhJAMhMAIQj2AUjVAIIg9ACQiHADk3AAIgpAAg");
	this.shape_265.setTransform(1507.4986,783.873);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(0,0,0,0.996)").s().p("EgHsAoyQj+gBiegRQhIgHg4gKQiTgZhygwQhQgghDgsQhqhChThhQgvg1grg4QiKjAhojTQhUitg0icQiMmPAZlHQAHh5BVjKQA/jSCTkvIABgBQCmkzBjj5QAfg/Adg9QBWitAwh2QBwkKBIiYQAjhJAjhAQBRiXBHhwQBChpA6hKQC2juC/hsQAjgVAjgQQGXjOFoCfQAyAUAwAZQDXBiC3DOQCSCXCEDoQAgA4AgA9QBrDXBWDgQApByAjBzQAbBVAeB8QAbBsAYBRQAHAZAKAcQA7CmBtDcQAkBhBkDIIAiBPQAwBoApB6IAMAhQAkBjAeBJQBZDaAxDZIAMA1QBGEvg1DjIgDAMQhfINqQDNIgCACQj9CanyArQhNAHhMAEQkuAHimAFIg/ABQjCAEkEABIgpAAg");
	this.shape_266.setTransform(1433.867,784.9991);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("rgba(0,0,0,0.996)").s().p("EgKoAo+QkFgBimgXQhIgJg8gPQiWghhzg9QhOgphBg3QhkhRhMhxQgpg+gmg9QiFjehhjLQhZi8g2iVQikm+AnkpQAMhnB6jfQBVi9DClAIABgBQDllnBbi6IBHh7QBqi2AwhuQCAkaBJiQQAmhLAmhCQBXiZBPhzQBHhmBEhMQDNjpDghOQAogOAogKQHFh4FmD6QAwAgAuAlQC9CRClD7QB8CxB1EAQAcA9AcBBQBlDwBIDgQAmB7AdB0QAWBUAaCIQAYB5AUBMQAGAZALAeQA2CXCLDzQAfBFCIDpIAqBPQBABzAxBsIAQAgIBTCtQBzDqA7DMIAQA1QBcFHhPDXIgFANQiOGptxBuIgDABQksBPoFAIIieABQllgHh3ACIhBACQj/AFjQAAIgqAAg");
	this.shape_267.setTransform(1360.1877,783.915);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(0,0,0,0.996)").s().p("EAFoApeQowgdhYAAQluAHirAAQkrABi6gfQjxgpikhqQi7h4hyjdQk6pgh7lAQi8nsA1kMQARhWCej0QBrilDylUQEkmbBUh8QDAkZBAiFQCQkqBKiJQCGj5CAioQFNm2GLgaQI1gmF7G2QCmDACSEpQB8D7CAFvQCUGlA/E8QAQBTAXCUQAVCGAPBHQAcCDDQFJIDEExQCBDIBQCEQDwGOBZEOQBzFdhqDNQivFSxrAOIhkABQlBAAnOgYg");
	this.shape_268.setTransform(1286.5007,783.0583);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("rgba(0,0,0,0.996)").s().p("EgRNAoiQhGgJg8gMQiYggh0g8QhPgmhBg1QhlhPhMhvQgog6glg6QiEjXhhjJQhcjCg3ibQikm9AnkpIAAgBQANhnB5jfQBVi9DClAIAGgLQDglfBbi5QAzhXArhOQBYiZAqhhQB/kaBIiRQA+h6A8hkQA9hnA6hTQBmiWBkhhQDTjWDmg3IAHgBQHuiHF7EyIAQANQC/CMCmD2QCUDMCME5IAPAiQB8EjBSELQAVBHASBGQAVBUAbCIQAYB4AVBNQAPA9ArBcQA6B/BfCoQAfBFCJDoQAyBcApBPQAuBTAkBQIAdA7IBhDRQBiDRAuC9IAKAnQBLEqhODNQgUAxgjAsQjUFcsCBsQgrALgvAKQkVBHmyAMIjRADQk8gFhsADIhMABQj4AFjLAAIgkAAIgMAAQkBAAikgVg");
	this.shape_269.setTransform(1281.5127,784.5616);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(0,0,0,0.996)").s().p("EgN9AocQhFgGg4gIQiWgWhzgrQhRgchCgpQhtg9hUhbQgvgxgpg0QiLi3hnjRQhYizg1iiQiKmPAZlGIAAgBQAHh5BVjJQA/jUCTkuIAEgLQCjktBhj4QAqhUAmhRQBIiSAphnQBukKBHiZQA5h5A1hgQA5hlAzhSQBgibBThgQC5jgDDhcIAGgCQG5jsF/DDIASAIQDYBZC5DDQC0CpCdEbIARAfQCHEABjEPQAYBDAVBDQAcBVAfB7QAbBsAZBSQASA/AlBUQA4CGBNCdQAkBgBnDHQAoBbAhBQQAjBOAeBYIAWA8QArB5AiBWQBMDAAjDMIAIAmQA1EUg4DYQgOAxgYAuQidG/o8DMQgjAVgnAUQjpCOmcAwQhoALhkAIQkLAHiWAFIhJACQi8AEj/AAIgjAAIgxAAQjgAAiRgMg");
	this.shape_270.setTransform(1276.5223,785.9285);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(0,0,0,0.996)").s().p("EgKsAowQhEgDg0gFQiUgLhxgaQhVgThDgaQh0gthdhIQg0gogugtQiTiYhsjXQhTilg0ipQhwlhAKljIAAgBQADiLAwi0QAojqBkkdIADgLQBmj5Bok3IBBinQA4iLAohtQBdj6BFihQA0h4AwhbQAzhjAuhRQBZigBCheQCfjrCgiBIAFgDQGDlSGEBVIAUADQDwAmDNCQQDTCGCvD9IAUAdQCQDcB2ESQAaA/AZBCQAhBVAkBvQAeBfAdBXQAWBAAeBOQA1CLA8CRQApB8BECpQAgBZAYBRQAXBIAYBgIAQA8QAgB/AZBPQA3CvAXDcIAFAlQAgD9giDjQgIAxgOAwQhlIhl2EtQgcAggdAeQi+DUmHBUQhgAUhlAOQjbATi+AIIhHADQiCADkxAAIgjAAIiUABQiWAAhpgEg");
	this.shape_271.setTransform(1271.4349,784.6504);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(0,0,0,0.996)").s().p("EgJOApeQkCAAibghQjDgqiLhsQiZh3hzjfQjVmcgHpeQgEmeBXm0QAwjyCanzQCzpFCEkSQCQkqBJiIQCHj5B/ioQFNm2GLgbQI1glF8G2QClC/CTEqQB7D6CBFvQCUGlA+E8QAQBTAXCVQAVCFAQBHQAkCqAMEEQAMEVgUEiQgxLKjUGZQi3FgoMBkQjDAlkTAIQhLACmCAAQlHAGiaAAIgXAAg");
	this.shape_272.setTransform(1266.2543,780.7039);

	this.instance_11 = new lib.PuppetShape_2("synched",1,false);
	this.instance_11.setTransform(1266.25,780.7);
	this.instance_11._off = true;

	this.instance_12 = new lib.PuppetShape_4("synched",1,false);
	this.instance_12.setTransform(1266.25,780.7);
	this.instance_12._off = true;

	this.instance_13 = new lib.PuppetShape_6("synched",1,false);
	this.instance_13.setTransform(1266.25,780.7);
	this.instance_13._off = true;

	this.instance_14 = new lib.PuppetShape_8("synched",1,false);
	this.instance_14.setTransform(1266.25,780.7);
	this.instance_14._off = true;

	this.instance_15 = new lib.PuppetShape_10("synched",1,false);
	this.instance_15.setTransform(1266.25,780.7);
	this.instance_15._off = true;

	this.instance_16 = new lib.PuppetShape_12("synched",1,false);
	this.instance_16.setTransform(1266.25,780.7);
	this.instance_16._off = true;

	this.instance_17 = new lib.PuppetShape_14("synched",1,false);
	this.instance_17.setTransform(1266.25,780.7);
	this.instance_17._off = true;

	this.instance_18 = new lib.PuppetShape_16("synched",1,false);
	this.instance_18.setTransform(1266.25,780.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("Ege6BRkQhAgPgBgDQhegjhHhSQhOhpgvg6QhnALjtAvQjOAqh5AeQjJAzgtALQhoAXg/ADQhFADg6gUQg4gUhJgxQCSnAJAprQHTn2M6qzQFzk2RruDQOVrZGumCQCHh4A8huQBhiyAOkaQhklbirkcQiVj3jbjfQioiskIjQQkzjqibh8QwLszpuqVQiri3h1iQQhlh8i4j4Qh1icgyhNQhLhwgnhcQhWjKAXkUQAHhYB4gJQBEgFCPAMQALAABuAeQBuAeALAAQMUE5LGGXQImE7MLIcQNWJQHWGLQLkJtGpJjQCaDcBZETQBIDcBBF7IAALtQAAAMgGAZQgEAZAAANQiuH+hjDoQihF4jFEFQkvGXmIGcQnTHZkUElQrZMFr/GlQukIBw3A0QAAgPg+gRg");
	this.shape_273.setTransform(905.9,458.5536);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("EgeLBR1QgGgHgXgIIgkgKIgfgJQgYgHgJgFQhMggg8hCIgVgZQhAhWgqg0IgZgKQhmAMjTAqIgWAEQjBAnh1AdIgOAEIjqA7IgKACQhiAWg8ADIgIAAQhBACg3gSIgGgCQg2gUhGgvIgCgBQCRm9I5plIAQgSQHMnsMkqiIAtgmQF2k3QstQIBIg6QNMqhGml2QAxgrApgoQBGhFAshCQAmg3AYg7QA9iJARi+QgEhEgKhGQhUkMiBjmQglhCgqhAQh0iziainQg2g6g+g8QiBh8iviPIiJhrQjFiYh+hiIiPhyQuarfpIpeQhShWhIhPQhLhSg9hIQhIhVhPhlQg6hKhOhmQhPhphChcIgZgkQhShzgqhQIgIgOQg6hugahtQgbhngCh2QgDhVA9gxQATgYAggWQAbgeA+gJQARgFAwAGIA3AHQBSAPAsADIAYAGIB4AmIB8AnQBuAqB/AyQEaBuBRAtQg6A/BEBDQAPATAgAZQAFADCSANQCYANAxAVQAdALCRBlQCNBiANADQBrAXBvBLQEBCrFjDiQDYCKDACBQB/BUBoBIQKzHkGnFaQBkBRBbBOQJrIXGCIPQBBBZA5BdQBXCOA9CiQAkBbAfBtQAuCkAsDqIASDGIAAItQgBAPgCAWQgDAWAAAQIgRBqIgIAkIgJAkQiAF2hUDPQgiBTgfBFQiBEciXDWQgtBAguA9QkLFflNFkIheBhQmTGZj/ENIhNBRQq3LXrZGYIhDAmQuOHrwYA2QgKgEgZgGg");
	this.shape_274.setTransform(905.9,458.9864);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("Ege6BRkQhAgPgBgDQhegjhHhSQhOhpgvg6QhnALjtAvQjOAqh5AeQjJAzgtALQhoAXg/ADQhFADg6gUQg4gUhJgxQCSnAJAprQHTn2M6qzQFzk2RruDQOVrZGumCQCHh4A8huQBhiyAOkaQhklbirkcQiVj3jbjfQioiskIjQQkzjqibh8QwLszpuqVQiri3h1iQQhlh8i4j4Qh1icgyhNQhLhwgnhcQhWjKAXkUQAHhYB4gJQBEgFCPAMQALAABuAeQBuAeALAAQBaAkGqCeQF4COgUAFQj9BAACBDQAAAYAiAiIA5A4QCECgB0AeQBSAVBvgtIBaglQA1gUAqgGQBxgOBzBUQDrCsF9DpQGpEDDcCYQNWJQHWGLQLkJtGpJjQCaDcBZETQBIDcBBF7IAALtQAAAMgGAZQgEAZAAANQiuH+hjDoQihF4jFEFQkvGXmIGcQnTHZkUElQrZMFr/GlQukIBw3A0QAAgPg+gRg");
	this.shape_275.setTransform(905.9,458.5536);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("Ege6BOjQhAgPgBgCQhegihHhPQhOhlgvg4QhnAKjtAuQjOAoh5AdQjJAygtAKQhoAWg/ADQhFADg6gUQg4gShJgwQCSmwJApUQHTnjM6qaQFzkqRrthQOVq/GulzQCHh0A8hqQBhisAOkPQhklOirkRQiVjujbjXQioimkIjIQkzjiibh3QwLsUpup9Qiriwh1iLQhlh3i4jwQh1iWgyhKQhLhsgnhZQhWjCAXkJQAHhWB4gIQBEgFCPAMQALAABuAdQBuAdALAAQBdAjGeCLQFuB8gTAEQj9A+gGBXQgCAgAeAoQARAaAlAkQCECaB8AbQBYAUB4guIBignQA5gWArgGQB1gSBuBMQEFCtFlDWQGNDtD2ChQNWI6HWF9QLkJWGpJMQCaDUBZEJQBIDUBBFtIAALRQAAAMgGAYQgEAYAAAMQiuHshjDfQihFqjFD8QkvGHmIGNQnTHIkUEaQrZLor/GWQukHuw3AyQAAgOg+gRg");
	this.shape_276.setTransform(905.9,477.3515);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("Ege6BLiQhAgOgBgCQhegghHhNQhOhhgvg1QhnAJjtAsQjOAnh5AcIj2A5QhoAWg/ACQhFADg6gTQg4gShJguQCSmeJAo+QHTnQM6qAQFzkfRrtBQOVqjGullQCHhvA8hnQBhilAOkEQhklCirkGQiVjljbjPQioifkIjBQkzjZibhzQwLr2pupkQiriph1iGQhlhyi4jnQh1iQgyhHQhLhognhVQhWi7AXj/QAHhSB4gJQBEgECPALQALAABuAcQBuAcALAAQBfAjGTB3QFiBqgQAEQj+A7gOBtQgEAnAaAuQASAhAiAiQCFCUCDAZQBfASCAgvIBqgoQA+gXArgIQB6gWBoBEQEdCuFODDQFzDZEPCpQNWIkHWFuQLkJAGpI1QCaDMBZD+QBIDNBBFeIAAK1QAAAMgGAXQgEAXAAAMQiuHZhjDXQihFbjFDzQkvF4mIF9QnTG3kUEPQrZLMr/GGQukHbw3AwQAAgOg+gQg");
	this.shape_277.setTransform(905.9,496.1367);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("Ege6BIhQhAgNgBgCQhegghHhJQhOhdgvgzQhnAJjtAqQjOAlh5AbQjJAugtAJQhoAVg/ACQhFADg6gSQg4gRhJgsQCSmPJAomQHTm+M6pnQFzkTRrsfQOVqJGulXQCHhqA8hiQBhifAOj6Qhkk1irj8QiVjcjbjGQioiZkIi5QkzjQibhuQwLrYpupMQirijh1iAQhlhui4jdQh1iLgyhEQhLhkgnhSQhWizAXj1QAHhPB4gIQBEgECPALQALAABuAbQBuAaALAAQBiAjGHBkQFYBYgPADQj+A6gWCAQgIAvAZA0QARApAgAfQCFCPCLAWQBjARCLgwIBxgqQBDgZAsgJQB8gaBkA8IJsFgQFZDDEoCyQNWIOHWFgQLkIoGpIfQCaDEBZD0QBIDEBBFRIAAKaQAAALgGAWQgEAWAAALQiuHGhjDOQihFOjFDpQkvFpmIFvQnTGlkUEEQrZKvr/F3QukHIw3AuQAAgNg+gQg");
	this.shape_278.setTransform(905.9,514.9347);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("Ege6BFgQhAgNgBgCQhegehHhGQhOhZgvgxQhnAJjtAoQjOAjh5AbIj2A0QhoAUg/ACQhFACg6gQQg4gRhJgqQCSl+JAoPQHTmsM6pNQFzkIRrr+QOVpuGulIQCHhmA8heQBhiYAOjwQhkkoirjyQiVjSjbi/QioiSkIixQkzjIibhpQwLq6puozQirich1h8Qhlhpi4jTQh1iFgyhBQhLhhgnhOQhWirAXjsQAHhLB4gIQBEgECPALQALAABuAZQBuAaALAAQBkAiF8BQQFNBHgNADQj/A3gdCVQgLA2AWA7QAQAwAfAdQCECICTAUQBqAPCUgxIB3grQBIgaAtgKQCBgeBeAzQFQCyEdCdQE/CuFBC6QNWH5HWFRQLkIRGpIIQCaC8BZDqQBIC8BBFDIAAJ+QAAALgGAVQgEAVAAALQiuGzhjDFQihFAjFDfQkvFbmIFfQnTGTkUD5QrZKTr/FoQukG1w3AsQAAgNg+gPg");
	this.shape_279.setTransform(905.9,533.7198);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("Ege6BCfQhAgMgBgCQhegdhHhDQhOhVgvgvQhnAIjtAnQjOAih5AZIj2AyQhoATg/ACQhFACg6gQQg4gQhJgoQCSltJAn5QHTmZM6ozQFzj9RrrdQOVpSGuk7QCHhhA8haQBhiSAOjlQhkkbirjnQiVjKjbi2QioiMkIipQkzi/ibhlQwLqcpuobQiriVh1h2Qhlhki4jLQh1h/gyg+QhLhcgnhLQhWikAXjhQAHhIB4gIQBEgECPAKQALAABuAZQBuAYALAAQBmAiFxA9QFDA1gMACQj/A1gmCqQgNA+ATBAQAQA3AcAbQCFCDCaASQBwANCdgyICAgtQBLgbAtgMQCHgiBYAsQFpCzEGCKQEjCZFbDDQNWHiHWFDQLkH6GpHyQCaCzBZDgQBIC0BBE1IAAJiQAAAKgGAVQgEAUAAAKQiuGghjC9QihEyjFDWQkvFLmIFQQnTGCkUDuQrZJ2r/FYQukGiw3ArQAAgNg+gOg");
	this.shape_280.setTransform(905.9,552.5179);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("EgePA/9QgEgLg6gOQg6gMgGgEQgZgIgYgLQg+gfgyguIgZgYQg7g5gughQhPAHiTAWIhsAQQiVAYhoATIhGANIjFAnIguAIQhSAOg3AEIgcACQg8ABg0gMIgNgDQg2gPhIgmIgBAAQCMlOIWnIIA4gvQHHl8MYoHIAtgdQF0jzRjq5IAGgDQOJozGtksIAughQBkhLAzhGQAQgWANgXQBIh9AOi1IABgNQhYjoiKjEQgagkgbgjQh5iZimiPQgpgjgtgjQiMhvjOiCIhUg1Qj5iUiThaIhAgoQvypwpnn6IgbgWQiWh/huhmIgcgbQhbhXieikIgmgpQhNhQgvg1IgsgxQgogwgcgqQgbgmgRgkQgzhhgIh4QgFhKAXhKIACgFQAOg+B0gGQAbgBAoAAQAvABBRAHIANABQAUACBhAVIAPADQBYATARABQBHASCuAbQBgAOB7AQICPASQCJAcgPAJQhqAeg9A4Qg7AygTBFQgFARgCAQQgEAkAGAhQAEAaAKAYQATAzAeAZQBMBFBTAiQA9AaBDAGQBJAHBcgSQAvgJA1gQQAfgJBfggIAngNQAxgPAggHQBcgUBGAOQAeAHAcANII+ETIAwAYQElCPFHCyIAMAHQNQHKHVE0IAtAdQLEHVGdHOIAeAhQCGCeBSDBIADAGQA9CSA4DsIATBhIAAF0IgBAYIgBAXIgMCxQgBALgGAUQgFASgBALQhJCkg7B8QhWC5hEBwQg5Bjg9BZQh3CqiGCJQisCyjKC0QidCLioCJQjpC5i3CUIlIEJQo2HOpOEqQioBVirBIQtTFpvNA7IhGABIhOACIgLAAg");
	this.shape_281.setTransform(905.9,571.0417);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("EgdMA9AQgugBgeABIgKgBQgJgLg0gMQg2gMgJgGQgZgJgXgLQg+ghgxgrIgYgYQg6gvg1gaQhQAHiOAVIhqAPQiUAXhlASIhFANIjDAkIgtAIQhRANg2AEIgbABQg7ABg0gLIgNgDQg2gPhGgjIgBgBQCNlAIdm2IA4guQHIlqMWnuIAtgcQF3jpRYqUIAGgDQOEoXGtkeIAugfQBkhHA0hDQARgUANgWQBNh6AOiwIgBgNQhZjiiQi9QgagigcghQh6iTioiIQgpghgtghQiOhpjMh8IhUgyQj4iNiRhVIhAgnQvvpSpmnjIgagVQiXh4hthjIgdgaQhchUidicIgngnQhOhOgvgyIgqgwQgpgugdgqQgZglgTgjQgwhggEh3QgDhGAng+IADgFQAUg0BwgEIBCAAQApABBXAIIALABQAdAEBXASIANACQBQASAZAAQBJAQCoAUIDXAVICNALQBkAcgVAQQhjAjgyBAQgxA1gLBFQgCAQgBAQQgBAkAIAeQAHAXANAXQAVAuAgAYQBNA/BTAeQA9AXBCAFQBJAGBZgRQAugJA3gPQAigJBZgdIAogLQAugNAigHQBagRBEAQQAeAHAcAMQEdCFEfB+IAxAWQEsCJE6ClIANAGQNJGzHVElIAsAcQLFG/GfG4IAdAgQCJCYBTC7IADAGQA+CPA6DnIAQBgIAAFuIgCAYIgCAWIgXCrIgIAdQgGASgCALQhMChg8B1QhZCwhJBvQg9BehABUQh6CgiKCDQivCpjLCrQihCFilCBQjrCyi1CMQi1CNiUBwQo3GzpNEXQioBQiqBDQtIFOvAA2IhFgCg");
	this.shape_282.setTransform(905.9,589.6875);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("EgdiA6CQgygCgYAAIgKAAQgMgKgwgMQgygMgMgHQgZgKgVgLQg+gjgugpIgagWQg5glg6gUQhRAIiKATIhoAOQiSAWhjARIhFAMIjAAiIgtAIQhPAMg1ADIgaABQg7ABgzgLIgMgDQg2gOhFgiIgBAAQCOkzIkmlIA4grQHJlZMTnUIAtgbQF6jfRPpwIAFgDQN+n6GukQIAugeQBjhDA3g/QAQgTAOgVQBRh1AOitIgCgNQhbjaiVi3QgaghgdggQh8iLiqiBQgogfgtggQiPhkjMh1IhSguQj4iHiQhQIg/glQvro1pknKIgagUQiYh0hthdIgcgZQhehRieiWIgmglQhQhLgtgvIgsgvQgpgtgdgoQgZgkgRgjQguhggBh1QgBhCA4gzIADgEQAbgqBtgDIBAABQAiABBcAKIALABQAnAFBJAPIANACQBIAQAiABQBLAMChAOIDTAMQBNADA/ABQA9AbgaAXQhbApgoBIQgnA4gCBFIgBAfQAEAkAKAaQAKAWAOAUQAZApAhAXQBOA5BUAaQA7AUBCAEQBJAEBWgQQAtgIA3gOQAlgIBWgaIAmgKQAtgMAjgFQBYgOBDARQAdAHAdAMQEGB2E1B8IAwAVQEzCCEvCYIANAGQNCGbHTEWIAsAaQLGGqGgGjIAdAeQCOCTBUC1IACAFQBACLA7DkIANBeIAAFoQAAAKgCANQgDANAAAKIgkCjIgJAdIgKAcQhPCfg9BuQhaCmhRBuQg/BZhEBPQh8CViPB/QixCgjNCiQijB/iiB5QjuCqiyCFQizCFiYBrQo3GZpOEEQimBKioA+QtBE0uyAwIhDgGg");
	this.shape_283.setTransform(905.9,608.475);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("Egd4A3FQg2gEgRAAIgLgBQgQgJgqgMQgtgLgRgJQgXgJgWgNQg8glguglIgYgWQg5gbhBgMQhSAHiFASIhlAOQiRAUhiAQIhDALIi+AgIgrAHQhPALg0ADIgaABQg6AAgygKIgLgDQg2gOhEgfIgBAAQCPkmIrmTIA5gpQHIlHMRm8IAtgZQF9jVRFpMIAFgDQN5ndGtkDIAtgbQBlhAA3g7QASgSAOgUQBVhxAOiqIgDgLQhdjUiZiwQgbgggdgeQh+iFirh6QgpgdgugeQiPhejKhuIhTgsQj4h/iMhMIhBgiQvnoYpimzIgagTQiYhuhthZIgdgYQhehOieiPIgngiQhShKgsgsIgsgtQgpgsgbgnQgagjgQgjQgtheADh0QACg+BHgoIAEgDQAgggBqgBQAcAAAjABQAdAABfAMIAMACQAwAGA9AMIAMACQBAAPAqAAQBOAKCaAGQBhACBuABQBLAABAgCQAWAagfAfQhVAugcBQQgcA7AFBEIADAfQAHAjAMAXQAOAUAPATQAcAkAjAVQBPAzBUAXQA6ARBCACQBHADBXgPQArgIA3gMQApgJBPgWIAmgJQAsgKAjgEQBZgLBBASQAcAIAdAMQDxBmFJB7IAwATQE6B7EjCLIANAGQM7GEHSEGIAsAZQLHGUGhGOIAeAdQCQCNBVCvIADAEQBBCIA9DfIAJBdIAAFiQAAAJgEAOQgCANAAAJIgwCdIgKAbIgMAbQhTCeg+BoQhcCchXBsQhCBVhHBKQh/CKiTB5QizCYjOCZQioB5ifBwQjvCjixB+QiwB9icBmQo3F/pPDxQilBEimA5Qs3EaukAqQgQgEgzgFg");
	this.shape_284.setTransform(905.9,627.2688);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("EgeOA0IIhGgGIgKgBQgUgIglgLQgogLgVgLQgWgKgWgMQg6gogsgjIgagUQg2gRhIgGQhTAIiAAQIhkANQiPAThfAPIhEALIi6AeIgrAGQhOAKgzACIgZABQg5AAgygKIgLgCQg1gOhDgdIgBAAQCQkZIymBIA5gnQHJk1MPmjIAtgXQF/jLQ7ooIAFgDQNynBGvj1IAtgZQBlg8A5g3QASgSAOgSQBZhtAOimIgEgLQhfjNidiqQgcgegegdQiAh9ish0QgqgbgtgcQiQhZjJhnIhTgpQj3h5iLhHIhAggQvkn6pgmbIgagSQiZhphshUIgdgXQhfhLieiIIgoghQhShHgsgpIgsgrQgqgrgbgmQgZgigQgjQgrhdAHhzQAEg6BXgdIAFgBQAngWBmAAIA9ACQAXAABkANIAMACQA5AIAwAJIAMACQA3AMAzABQBSAGCSAAQBhgCBqgEQBIgDBBgGQgPAagmAlQhMA0gSBYQgSA+ANBEIAGAeQAMAjAOAUQAQASARAQQAgAgAkATQBPAuBVATQA6AOBCABQBGABBUgOQAqgHA3gLQAsgJBLgSIAmgJQArgIAjgCQBXgIBAATQAbAIAeALQDbBYFeB5IAwARQFBB0EXB+IANAGQM0FsHRD4IAsAXQLHF/GiF4IAfAcQCTCIBXCoIACAEQBECEA8DbIAHBcIAAFbQgBAJgDAOQgDANAAAJIg9CWIgMAbIgMAaQhXCbg+BhQheCThfBqQhEBQhKBGQiDB/iXB1Qi0CPjRCPIlHDbQjxCcivB2QitB1igBiQo4FkpPDeQijA+imA1QstD/uXAkQgKgFg3gHg");
	this.shape_285.setTransform(905.9,646.0494);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("EgekAxLIhEgIIgJgCIg5gRQgjgLgYgMQgWgLgVgNQg6gpgrggIgagUQg1gHhNABQhVAIh7APIhiAMQiNASheAOIhCAKIi4AcIgrAFQhMAKgyABIgZABQg4AAgwgKIgMgCQg1gNhCgbIAAAAQCRkLI5lwIA5glQHKkjMMmKIAugWQGCjCQwoDIAFgCQNtmlGvjnIAtgYQBlg4A6gzQASgRAPgRQBdhpAOiiIgFgLQhhjGihijQgdgdgfgbQiBh3ivhsQgogagugaQiRhTjJhhIhRgmQj3hxiJhCIhAgfQvgncpemEIgagRQiahjhshQIgegWQhghIieiAIgngfQhVhFgqgnQgYgVgUgUQgrgqgbglQgYghgQgjQgphcAMhxQAFg3BngQIAFgBQAvgMBiACIA8ACQAQAABqAPIAKACIBoAPIAKACQAwALA6AAQBUAECNgHQBhgGBmgKQBFgGBCgJQg2AZgrAtQhFA5gGBgQgJBBAVBDIAKAdQAPAkARAQIAlAfQAjAaAmASQBQAoBWAQQA4AKBCAAQBGAABSgNIBggRQAwgJBFgOIAmgIQApgGAkgCQBWgEA/AUIA4ATQDFBJFzB3IAwAQQFIBuELBxIAMAFQMuFVHQDoIArAWQLIFpGkFjIAeAaQCXCCBYCjIACAEQBFCAA+DXIAEBaIAAFWQgBAIgEAOQgEANAAAIIhHCQIgOAZIgOAaQhbCYg/BbQhfCJhlBpQhIBMhNBAQiHB1iaBvQi3CGjSCHIlIDNQjyCVitBuQirBtikBeQo4FJpPDLQiiA4imAwQsiDluKAeQgGgHg6gIg");
	this.shape_286.setTransform(905.9,664.8107);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("Ege6AuVQhAgJgBgBQhegUhHgvQhOg7gvghQhnAGjtAbQjOAYh5ARIj2AjQhoANg/ABQhFACg6gLQg4gLhJgcQCSj+JAlfQHTkcM6mIQFziwRrn+QOVmdGujbQCHhEA8g+QBhhlAOifQhkjFirihQiViMjbh/QiohhkIh2QkziFibhGQwLnQpul3Qirhoh1hSQhlhGi4iNQh1hYgygrQhLhAgng0QhWhzAXicQAHgyB4gFQBEgDCPAHQALAABuARQBuARALAAQBaAUDsgYQClgRCjgdQjMA2AHC9QACBEAdBDQAZA7AaARQCFBbCaAUQBxAQCcgYQBWgNCigcQCHgPBYAeQCgA3HPCMQFtBuERBrQNWFPHWDgQLkFhGpFaQCaB8BZCcQBIB9BBDXIAAGoQAAAHgGAOQgEAOAAAIQiuEhhjCDQihDVjFCVQkvDmmIDpQnTENkUCmQrZG2r/DvQukEjw3AdQAAgIg+gKg");
	this.shape_287.setTransform(905.9,682.925);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("EgekArvQgQgEgXgDQg7gIgHgDQglgIghgNQgygTgqgaIgkgaQg0ghgngUQhWAFinARIhSAJQijAShtAOIgzAHIjVAcIgeAEQhZAKg7ACIgRABQhAACg2gKIgHgBQg4gKhGgaIgCgBQCMjkIZk3IA3gfQHGkEMZliIAsgUQF1ilRfnbIADgBQOPmCGujNIAegOQBwg4A2g0IAUgVQBJhQAShxIAAglQhQiQh8h8QglgkgpgjQhwhiiYhaQgzgfg4geQiHhIi/hUIhogsQjnheiPg8IhWgkQvbmgpilUIg4gfQiEhLhjg/Ig5glQhTg2iIhhIhEgwIhghGQgtghgagWIgpgjQgtgqgagmQgbgogMguQgSg7ARhCQAFgWAGgWQARguBugEIAPgBQAwgBBjgBIAvABQAXgCBdAOIABAAQBjAMAWgBQA/AKB9gHQA9gEBHgHQBigLBYgQQAwgEAzgBQgSAHgRAIQhRAnggBFQgbA5AGBKQABANADAOQAJA1AZAxIAPAYQAUAhAWAMQBnBCB1AYQAgAHAhADQBhAMCAgQIApgFQBTgMCTgYIAPgCQCFgPBXAdIAHACQCiA0HAB/IApAMQFQBgEABeIBKAbQMZEnHCDIIB2A2QKPEuGKEpQA0AnAsAqQBcBUA/BiQAVAhAVAoQA1BlAxCUIACAGIAAEbIgBAOIgBAPIgMBlQgBAIgFANQgFANgBAHQhRB7g/BaQhRBzg/BIQhGBThLBHQhqBkh2BSQjECKjpCLQiCBOiKBNQkRCTjNByIkKCTQpdFSp3DSQh/AqiBAlQtnD8vmAmIhDAAIg0AAQgCgEgUgFg");
	this.shape_288.setTransform(905.9,700.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("EgdtApOIgzAAQgGgEgPgEIgngHQg2gIgLgEQgkgIgigNQgxgTgpgZIgmgYQgwgagsgPQhYAFiiAQIhQAHQiiARhrANIgyAHIjSAaIgeADQhYAKg6ACIgQAAQhAABg2gIIgGgBQg3gKhGgYIgCgBQCOjWIgklIA3geQHHjyMWlKIAtgSQF4icRVm4IACgBQOKlnGujAIAdgNQBxg0A4gwIAUgTQBOhMARhvIgEgjQhUiJiCh1QglgigqghQhzhaiZhUQgzgcg4gcQiHhDi/hOIhngpQjnhXiMg4IhXgiQvYmEpfk9Ig4gdQiEhHhkg7Ig5gjQhVgziHhaIhEguQg7gngngbQgrgfgcgWIgoghQgsgpgZgnQgZgpgHguQgNg3Ahg9IARgmQAagoBmgEIAOgBICTgFIAuAAQAigFBOAKIABAAQBXAIAigDQBAAHB4gIQA/gEBEgHQBhgMBUgRQAaACAhAJQgQAIgQAKQhHAtgaBJQgVA6AJBHIAGAaQAMA1AbAsQAJAMAJAKQAVAdAXAMQBnA7B2AVQAfAGAgADQBhAJB9gPIAqgFQBSgLCQgWIAQgCQCCgOBXAaIAFACQChAxG9B2IAoALQFNBZD+BXIBJAZQMSERHEC7IB0AxQKPEZGMEUQA0AlAvAmQBfBPBBBcQAYAgAVAlQA6BhAzCRIACAFIAAEYIgCANQgCAIAAAHIgWBgIgJATQgGALgCAIQhWB4hABUQhSBqhFBFQhIBNhQBCQhsBbh5BNQjFCAjqCCQiGBIiHBHQkTCKjJBqQiSBLh6A+QpcE4p2DAQh/Anh/AiQteDlvaAhIhCgCg");
	this.shape_289.setTransform(905.9,717.275);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("EgeAAmnIgygBIgVgGIglgIQgxgHgRgEQgjgJgggNQgygUgogXIgmgWQgvgUgxgKQhZAFicAOIhPAIQigAPhpAMIgxAGIjQAXIgdADQhYAKg4ABIgQABQg/AAg2gHIgGgBQg2gJhHgXIgBAAQCPjJIokTIA3gcQHIjgMUkyIAsgRQF8iSRKmWIADAAQOElNGuiyIAegMQBwgwA5gsIAVgRQBShKARhsIgJggQhWiDiIhuQgmgggrgeQh1hTiahOQgzgag5gZQiIg+i9hHIhnglQjohTiJgyIhVgfQvWlppdknIg4gbQiFhChjg3Ig6ghQhWgxiIhUIhDgqQg9glglgaQgrgcgdgVQgWgSgSgPQgtgogVgoQgXgpgDgvQgHgzAwg2IAWghQAlgjBcgDIAOgBQAjAABugJIAtgCQAwgGA+AGIABAAQBLAEAugFQBBADB0gIQA/gEBAgIQBkgNBNgTQAEAJAQATQgPALgNAMQg/AygTBMQgPA8ANBDIAGAaQARA0AeAoQAIALAKAIQAYAZAYALQBmA2B2ASQAeAFAhACQBfAHB8gOIAogFQBTgLCNgUIAQgCQCAgMBWAXIAFACQCfAtG5BtIApAKQFIBSD9BQIBJAXQMKD8HFCtIB0AtQKOEEGPD/QA1AiAvAjQBjBJBEBWQAaAeAWAjQA9BcA3CPIABAFIAAETQgBAGgCAJQgDAHAAAGIgiBaIgJASIgKASQhbB0hBBOQhTBihNBDQhLBGhSA9QhvBTh7BIQjIB2jrB3QiIBEiFBAQkVCCjHBhQiOBGh/A5QpaEep1CvQh9Ajh+AfQtXDOvNAdQgRgCgwgCg");
	this.shape_290.setTransform(905.9,734);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("EgeUAkAIgwgCIgUgFIglgHQgsgGgWgGQgjgJgfgNQgygWgngUIglgWQgugLg2gHQhaAGiYAMIhNAHQieAOhnAMIgxAFIjMAWIgeACQhWAJg3AAIgQABQg+ABg0gIIgHgBQg2gIhGgVIgBAAQCPi7IxkBIA3gZQHKjPMQkaIAsgQQF/iIRAlzIADgBQN/kxGvikIAdgMQBwgrA7gpIAUgQQBYhGAQhqIgOgeQhZh7iOhoQgngdgsgcQh2hNichGQgzgYg5gXQiJg4i8hCIhlgiQjohMiHgtIhWgdQvUlOpakQIg4gZQiFg+higzIg7gfQhYguiHhNIhEgnQg9gjgkgYQgsgbgcgUQgYgRgSgQQgsgmgTgpQgVgqACgvQgBguA+gxIAdgaQAugfBTgDIAOAAQAcAAB0gNIAtgEQA8gIAuADIABAAQA+gBA6gGQBEgBBvgJQBAgEA9gIQBkgNBJgVQgTAPgCAeQgOAMgMAOQg2A3gLBPQgJA+AQBAIAIAZQAUA1AgAiQAJAKALAIQAZAUAaAMQBmAvB2AOQAeAEAhACQBeAFB5gOIApgEIDcgdIAPgCQCAgLBUAWIAFACQCdAoG1BkIApAJQFFBLD7BKIBJAUQMCDmHGCgIBzAqQKNDuGTDqQA1AfAwAgQBnBEBHBPQAbAdAXAhQBABYA7CMIABADIAAERQgBAFgDAIQgDAIAAAHIguBTIgLARIgLAQQhgByhDBGQhUBahTBBQhPBAhUA3QhyBJh+BDQjJBtjtBtIkMB5QkYB5jEBZQiNA/iBA3QpaEDpzCeQh8Afh+AbQtMC5vCAZQgMgDg1gEg");
	this.shape_291.setTransform(905.9,750.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("EgenAhZIgwgDIgTgEIgkgGQgngHgagGQgjgKgfgNQgxgWglgTIgogTQgrgFg6gBQhcAFiSAMIhMAFQidANhkALIgxAEIjJAUIgdACQhVAIg3ABIgQAAQg9AAg0gHIgGAAQg2gJhFgSIgBAAQCRiuI4jvIA3gXQHKi+MOkBIAsgPQGEh+Q1lQIADgBQN5kXGuiWIAegKQBwgpA7glQAMgGALgIQBchCAOhoIgRgbQhdh0iUhiQgngagtgaQh5hFidhBQgygVg6gVQiJg0i7g6IhkgfQjqhGiEgpIhVgaQvRkzpYj5Ig4gXQiFg5hjgvIg7gdQhZgsiHhHIhEgkQg/ghgkgVQgqgZgegUQgYgQgQgPQgsgmgSgpQgSgqAHgxQADgqBOgrIAjgUQA4gaBJgCIAPAAQAUgBB6gQIAsgFQBIgLAeAAIABAAIB5gNICvgOQBBgFA5gHQBmgPBDgWQgoAVgUApQgMANgLAQQgsA9gFBSQgDBAAUA9IAJAXQAXA0AjAeQAKAKAMAGQAaARAbAKQBmAqB2ALQAeADAgABQBeADB3gNIAogEIDagaIAOgCQB9gKBUATIAFACQCbAkGxBbIApAJQFCBDD5BDIBIATQL7DQHHCSIByAmQKNDZGVDVQA2AdAxAdQBqA+BLBJQAdAbAXAeQBFBUA9CKIABACIAAENQAAAEgFAKQgEAHAAAGIg5BOIgNAPIgLAPQhnBvhDBBQhWBQhaA+QhQA7hZAxQh0BBiBA+QjLBjjuBkIkMBsQkaBwjBBRQiLA5iEAzQpZDppyCMQh7Ach8AYQtFCju2AUQgFgEg6gFg");
	this.shape_292.setTransform(905.9,767.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("A+6eyQhAgGgBgBQhegMhHgeQhOglgvgVQhnAEjtARQjOAPh5ALIj2AWQhoAIg/ABQhFABg6gHQg4gHhJgSQCSigJAjdQHTizM6j3QFzhvRrlBQOVkFGuiJQCHgrA8goQBhg/AOhlQhkh7irhmQiVhYjbhQQiog9kIhLQkzhTibgtQwLkkpujtQirhBh1gzQhlgti4hYQh1g4gygbQhLgpgnggQhWhJAXhiQAIgmBeglQBdglBbAAQAPAAB/gUQB9gTARgEQBIgSDdgTQC/gQBegkQhQAigoBMQgjBEADBVQACBQAiBCQAjBEA0AXQB9A3CXALQBxAHCfgRID+gcQCJgLBYATQCgAjHPBYQFtBFERBEQNWDTHWCOQLkDeGpDaQCaBOBZBjQBIBOBBCIIAAELQAAAEgGAJQgEAJAAAFQiuC2hjBTQihCGjFBeQkvCRmICTQnTCpkUBpQrZEUr/CXQukC3w3ASQAAgFg+gGg");
	this.shape_293.setTransform(905.9,784.125);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("A9ub5IglgDQgGgCgTgDIgkgDIgggDIgigFIgDAAQhGgKg4gUIgGgCIgagKQg1gXgqgPIgggGQhKADiCAIIhmAGIgXABQiMAKhjAIIhDAFIgPABIi9AQIgpADIgLABQhMAFg0ACIgcAAIgHAAQg5ACgxgFIgPgCIgCAAQg3gGhFgQIgCAAIAAAAQCPiPIyjFIAQgFIAGgCQHMihMojdIAfgIIApgMQGAhoP+kIIA7gPIB4gfQL0jHGKhwIBOgYQBIgXAvgXQAhgQAZgSIAJgHQAygmAVgzQABgdgIgdIgCgCQgUgmgmgmQg/gxhRgsIgkgUQgmgUgrgTQhsgyiJguIgvgPIhSgaQiBgniqgtIgzgMIhjgZIk2hPIgzgNIh/ghQt6jqo3jBIhKgaQh0gphbgiIgGgDIhMgeQhWgih3g1IgHgDIhJggIhYgoQgugWghgRIgcgQIgLgHQgqgagXgcQgcgfgHgkQgDgIgBgIQgIgeAaghQADgFAGgGQAFgKAPgKQARgKAYgKIAEgBQAvgRA4gGIAggDIA3gFIBRgLIApgGIARgCIBUgNIAqgHIASgDQA8gJBYgIIBNgHIBDgGQAigDAdgFIA5gLQATgDAVABIAaACQAFAAAJAMQgFAJgEAKQgHAjgLAMQgGALgDAMQgFAUgCAXIAAACQgGA7AUA8IAIAUQALAcAQAWQAJAOAMALQAQARAUAPQAuAqA5AQQAjAKAkAHIAeAFQBPAOBhAAIBEgBIAYgBQBMgDBigKIA2gFIAYgCQBQgHBZgCQAgAAAdACQBPADBTAQIEAAvIDLAkICSAaQC5AgCfAgICZAgICCAeQK6CeGuByIBHATIBoAcQKCCyGMCvIAdANQArATAnAUQBGAjA3AoQAYARAWATQAjAeAfAjIAEAFQAUAdATAjIADAGIADAGIAQAqIAKBfQgHA4gFA2IgCAOQgBAEgDAHQgCAGgBAFIgrBdIgHALIgIALQhUBMhFA1IgYATQg6Avg0AjQhxBNiBA9Qg9AdhAAbIiXA+QjGBNjcBOIh0AoIjzBQImGCDIhpAkQoKCwodB2QikAkilAfIhSAOQs+CRuxAbIhDABIhNABIgLAAg");
	this.shape_294.setTransform(904.775,803.9714);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("A+WZAQgHgEg1gFIhCgGIgngGQhFgLg2gTIgFgDQhEgag1gPQhSADiVAIIhkAGQiYAJhnAIIhBAFIjIAOIgpADQhSAFg3ACIgaAAQg7ABgygEIgQgBQg2gGhEgOIgDgBQCQiAIxivIAWgIQHPiRMwjJIApgKQF6hcQoj4IB2gcQMki+GYhpQB1gfBDgeIAKgFQBogyAZhOIgCgCQgHgqgkgqQhLg3hngxQgmgTgrgSQh7g0ikgxIhSgYQiQgojJgvIhlgXIllhRIh9geQuhjbpGizQhxgkhbgeIhTgdQhZgdh5gyIhKgcQhpgshAgYIgfgNQg1gZgggUQgogZgTgbQghgmACgsQgBgIADgIQgFgZA2gaIAFgCQApgRA7gJQAqgHAogBQAYgBBigNIAQgCIB9gQIAQgDQA+gJBSgJQA5gGBVgGQAhgCAcgFIA3gKQAPgCAYAHQAYAGgBAHQgCAGANA0IAPA5QgDANAEAMQAEAXAHAXQATA+AsAyQAbAiAiAUQAQAKARAFQBuAmCGAJIAeACQBiAECQgLIAWgCQBcgHCEgLIAYgCQB6gHBlAQIGYBDIDJAgQEHApDVAoICXAeQMPCfHFBvIBGARQLFCuGhCsIAdAMQB7AyBQA9QAZARAVATQAjAeAhAoQAPAgAPAjQABACgBADIACAGIAIAsQgjBngUBjIgEANQgBAEgFAHIgHALQiYCBh0BEIgXAPQimBqjJBMQiCAyiSAzQjJBDjUBDIliBqQjYBDiqAyQo1CupNBwQigAfijAaQtQCHvIAXIhBAAIhLABIgMAAg");
	this.shape_295.setTransform(905.1,822.7765);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("A+kWJIgWgEIglgEIhBgFIgmgGIghgFQgygJgogNIgGgCIgegLQgvgPgsgJQhTADiSAHIgXABIhNAEIj8APIgQABIgxADIjGANIgLABIgdACQhRAEg2ABIgKAAIgRABQg7ABgygEIgEAAIgLgBQg2gGhEgMIgCAAQCQhyIviaIAFgCIAXgGQHOiBMsiyIAOgDIAagFQF5hSQjjcIBGgOIAxgKQMeioGYhdQBGgQA0gQQAjgLAbgKIAKgEQBIgeAkgpQASgTAKgWIgBgBQAEgegUgfIgOgPQhLgyhogsQgcgMgegMIgYgJQh7gvikgrIg1gOIgdgHQiQgkjJgqIhEgNIgfgHIljhIIhdgTIgggHQuajBpHifIiXgqIg0gQIhTgZQhGgUhUgdIg4gVIhKgZQhTgfg/gUIgZgJIgegMQg2gVghgSIgTgLQgagQgQgSQgZgXgKgZQgEgLgCgMQgCgHADgHQgLgUAhgVIARgJIAEgBQAggNAugIIAXgEQApgGApgBQAYgBBEgIIAbgDIARgCQA0gHAsgEIAdgDIAQgCIBtgNIAggDQA4gGBVgFQAggCAdgFQAjgGAUgCIAKAAQANAAAQAEQAOADAFAEQAEACABACQAAADAHAVQAGALAFAQIADAIQAMAnAEAFQAAAKADAJIACAFQAGAWAJAVIADAHIALAVQAFANAJALQATAZAYAWQAdAdAjAQQAQAJARAFQAyAOA2AKQBBALBKAEIAdACQAzABA/gBQA5gCBFgFIAXgCIB0gIIBpgIIAXgBQA7gDA1ACQA4ACA2AIIGWA7IB3ARIBRALQEFAlDVAjIBpATIAtAIQMJCMHFBiIBGAPIAMADQK5CZGeCWIAdALIAlANQBjAoBFAtQAZAQAWAQIALAJQAeAYAdAfQASAbARAeIABADQABADgBADIACAFIAGAsIgDAMIgDAGIgCAHQgoBPgbBLIgGAMIgHAJIgHAJIg/AtQhyBRhiAwIgZAOQgnAVgpAUQiHBDibA0QiDAsiSAsIhuAgIkvBXIlgBeIhiAaQicAriEAiQozCZpLBiIhPAOQh4ATh5ARQtMB3vBAUIgkAAIgdAAIgiAAIgpAAIgLAAg");
	this.shape_296.setTransform(905.225,841.325);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("A9ATSIgdAAIgiAAIgoAAIgLAAIgVgDIglgEIhAgFIgmgFIgggEQgygKgogLIgGgCIgegIQgugMgugIIjjAJIgYABIhLAEQiWAHhlAFIgPABIgwADIjFAMIgLAAIgcACQhRADg2ABIgJAAIgRABQg6AAgygDIgFAAIgKgBQg2gEhEgLIgBgBQCQhiIziIIAFgBIAWgFQHNhwMpibIAOgCIAagGQF3hGQfi/IBFgMIAygJQMXiSGahRQBEgOA1gOQAigJAbgJIALgDQBKgZAlgjQAUgQAMgSIgBgCQANgagNgdIgPgMQhMguhqgnIg6gVIgYgIQh7gpilgmIg1gMIgdgGQiPgfjIgkIhEgMIgfgGIlhg+IhcgRIgfgFQuWippGiJIiWgmIg1gNIhTgVQhJgShQgZIg5gSIhKgWQhQgahDgTIgZgHIgfgLQg2gSghgPIgTgJQgbgOgSgQQgbgSgMgWQgHgKgDgKQgDgGAAgGQgRgTAfgVQAGgEAKgEIAFgBQAegLAwgIIAWgDQApgGApgBQAbgCA/gFIAcgDIARgCIBggKIAcgDIAQgBIBrgLIAhgEQA2gEBVgFQAggCAdgDQAhgGAWgBIAKAAQAOAAAPACQANADAGADQADABACADIALATQAIALAGANIAEAIQAMAgAJAJQACAJADAIIACAFIATAnIAFAHIALATQAGAMALAJQAVAVAaASQAfAYAkAOQAQAHARAEQAxAMA2AHQBAAKBKADIAdABQAzABA+gBIB9gHIAWgBIB0gIIBogGIAWgBQA7gCA0ACQA1ACA5AHIGTAzIB4AQIBQAKQEDAfDTAfIBpAPIAsAHQMFB7HEBVIBFANIANACQK2CFGeCDIAdAJIAlAMQBlAjBGAnQAaAOAWAOIALAIQAgAVAeAbQAVAZATAbIAAADIABAGIABAGIAFAqIgDANQAAACgDADIgDAGQgyBFglBAIgGAKIgIAIIgIAIIhAAnQhyBGhpAqIgaAMIhRAjQiIA5icAsQiEAniSAnIhuAcIkvBKIlfBSIhiAXQiZAliGAeQoyCEpJBUIhOAMQh4ARh5APQtFBmu5AQIglAAg");
	this.shape_297.setTransform(905.375,859.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("A9OQcIgegBIghAAIgoAAIgLAAIgUgDIgkgDIhAgFIgmgEIgggEQgygJgngJIgGgCIgegHQgsgJgwgFQhWACiMAFIgYABIhKADIj5ALIgOAAIgxADIjCAJIgLABIgcABQhQAEg2AAIgJAAIgSABQg4AAgygDIgFAAIgKAAQg2gFhDgIIgCgBQCRhUI2h0IAFgBIAWgFQHNhfMliDIAOgDIAagEQF2g8QbiiIBEgLIAygHQMQh8GchFQBDgMA1gLIA9gOIAKgDQBMgVAngcQAVgNAPgPIAAgBQAXgYgIgZIgQgMQhNgnhsgiIg6gSIgYgHQh7gjimghIg1gKIgcgGQiPgajHgfIhEgLIgegEIlfg1IhbgOIgggFQuPiPpHh1IiVgfIg1gLIhTgTQhMgPhNgVIg5gPIhLgSQhMgWhIgRIgZgGIgfgJQg2gQgigMIgTgIQgcgLgUgMQgcgQgQgRQgIgIgFgJQgEgFgCgFQgXgSAbgUQAGgEAKgEIAGgBQAdgKAxgHIAWgDQApgFAogCIBZgGIAcgCIARgBQAtgFAzgEIAcgCIAQgCIBogJIAhgDQA1gEBVgEIA+gFIA2gFIAKAAQAPAAAOACQANACAGACIAFADQAEACALAOQALAIAHALIAFAHQAMAbAOAMQACAIAFAIIACAFIAXAjIAFAGIANATQAFAKAOAHQAYARAbAOQAhATAlALQAQAFASAEQAwAJA1AGQBAAHBKACIAdABQAzABA8gCIB8gFIAWgCIBzgGIBmgFIAXgBQA6gBAzACQAzACA8AGIGQAsIB3AMIBQAJQECAbDRAaIBoANIAsAGQMBBoHDBIIBFALIAMACQK0BxGeBwIAdAIIAkAJQBmAeBHAhQAbAMAYANIAJAGQAiATAgAYQAXAWAWAZIAAADQABACAAADIABAGIAEAqIgCANQgBACgDACQgDAEAAACQg/A6gtA0IgIAIIgJAHIgIAHIhCAhQhxA6hvAlIgbAKIhTAdQiJAvieAmQiEAhiSAgIhuAYIkuA/IlfBGIhhATQiWAfiJAaQowBvpHBIIhOAJQh4AOh4ANQs/BVuxAOIglAAg");
	this.shape_298.setTransform(905.5,878.525);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("A9eNmQgEgBgZgBIghAAIgngBIgKAAIgUgCIgkgCIhAgFIglgEIgfgDQgzgIgmgIIgGgBIgegGQgqgGgzgDIjgAGIgZAAIhJADIj3AJIgOABIgvACIjBAHIgLABIgbABIiEADIgKAAIgSAAQg4ABgxgDIgGAAIgKAAQg1gEhDgHIgBAAQCRhGI5hgIAFgBIAWgEQHNhPMhhsIAOgCIAagDQF0gyQWiFIBGgJIAxgGQMJhlGdg5IB4gTIA9gLIAKgDQBNgQAogVQAYgKARgMIABgBQAfgVgBgWIgSgKQhMghhugeIg8gPIgYgGQh6gdimgcIg2gIIgcgFQiNgWjIgZIhDgJIgegEIlcgrIhbgMIgfgEQuKh1pHhgIiVgZIg1gJIhTgQQhPgNhJgQIg6gMIhLgQQhJgRhMgPIgagFIgdgHQg4gNgigKIgTgGQgdgJgVgJQgggNgSgNQgKgGgGgHQgGgEgCgEQgegRAXgTQAFgEAMgEIAFgBQAcgJAzgGIAVgDQApgFAogBIBXgFIAcgCIARgBQAqgEA2gDIAdgCIAPgBQBJgFAegDIAggCQA0gEBWgDIA9gEIA3gEIAKAAQAPAAANACIATACIAGACQAFACANALQANAGAIAJIAGAGQAMAUASAQQAEAHAGAIIAEAEIAZAgIAGAFQAHAHAIALQAFAIAQAGQAaAMAdALQAjAOAnAIQAQAEAQACQAxAHA1AFQA+AFBKABIAdAAIBugBIB7gFIAXgBIBxgFIBlgEIAWgBQA7gBAxADQAxACA+AFIGOAkIB3AKIBPAHQEAAXDRAVIBmALIAtAFQL8BVHCA8IBEAJIALACQKyBdGeBbIAdAHIAlAIQBmAYBJAcQAcAKAXAKIAKAFQAjARAiAVQAaATAYAWIABADIAAAFIABAGIACAqIgBAMQgBACgDADQgEADAAACQhKAvg2ApIgKAGIgJAGIgJAFIhEAbQhxAvh1AfIgcAIQgpAMgrALQiKAmifAfQiEAaiTAbIhvATIktA0IldA5IhhAQQiUAaiLAVQovBbpEA6IhPAHQh2AMh3AKQs7BFupALIgmAAg");
	this.shape_299.setTransform(905.625,897.125);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("A9tKvQgCgBgbgBIghAAIgmgBIgKAAIgTgBIgjgCIhAgFIglgDIgfgDIhZgNIgFgCIgfgEQgogDg1gBIjeAFIgZAAIhJACIj0AIIgOAAIgvABIi/AHIgKAAIgcABIiDACIgKAAIgRAAQg4ABgxgCIgFgBIgLAAIh3gIIAAgBQCRg3I9hNIAFAAIAVgDQHMg+MehVIAOgBIAZgDQFzgnQShpIBFgHIAygFQMChOGeguIB3gOIA+gIIAKgCQBPgMApgOQAagHATgJIABgBQApgRAEgUIgSgHQhNgdhwgYIg8gNIgYgFQh7gXimgWIg2gHIgcgEQiMgRjIgUIhCgHIgdgDIlbgiIhagJIgfgDQuFhbpHhMIiUgUIg0gHIhUgLQhSgLhGgNIg5gJIhMgMQhGgNhQgMIgagFIgegFIhagRIgUgFQgdgGgXgHQgigJgUgJQgMgFgJgFIgLgGQgkgQAVgTQADgEANgDIAFgBQAbgIA1gGIAVgCQAogEAogCIBWgDIAcgCIARAAIBggGIAcgBIAQgCQBPgDAVgCIAhgDICIgFIA9gDIA3gCIAKAAQAQgBAMABIASABIAHACQAHABAPAHQAQAGAJAGIAGAFQAMAOAXATIAMAOIAEAEIAeAcIAHAFQAHAFAIALQAGAHARAFIA8AOQAlAJAoAFIAgAEQAxAFA0ACQA9ADBLAAIAcAAQAzAAA6gCIB6gEIAWgBIBxgEIBjgCIAWgBQA7AAAwADIBvAGIGLAcIB3AJIBOAFQD/ASDPAQIBmAJIAsAEQL4BDHBAvIBDAHIAMABQKvBJGfBIIAdAFIAkAGQBoATBJAWQAdAIAYAJIAJAEQAmANAjATQAcAQAbATIAAADIABAFIAAAFIABAqIgBANQAAACgEACIgFAEQhUAlhAAdIgKAFIgKAEIgKAEIhFAWQhxAjh7AZIgeAGIhVASQiMAbigAZQiEAUiTAVIhvAPIktAoIlcAtIhhANQiRAUiNAQQotBGpDAtIhOAFQh2AJh3AIQs1A0uhAIIgmAAg");
	this.shape_300.setTransform(905.775,915.7167);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_301.setTransform(905.9,934.2833);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("rgba(0,0,0,0.969)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_302.setTransform(905.9,934.2917);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(0,0,0,0.937)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_303.setTransform(905.9,934.2917);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("rgba(0,0,0,0.902)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_304.setTransform(905.9,934.2917);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(0,0,0,0.871)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_305.setTransform(905.9,934.2917);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("rgba(0,0,0,0.839)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_306.setTransform(905.9,934.2917);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("rgba(0,0,0,0.808)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_307.setTransform(905.9,934.2917);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("rgba(0,0,0,0.776)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_308.setTransform(905.9,934.2917);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(0,0,0,0.741)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_309.setTransform(905.9,934.2917);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("rgba(0,0,0,0.71)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_310.setTransform(905.9,934.2917);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(0,0,0,0.678)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_311.setTransform(905.9,934.2917);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(0,0,0,0.647)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_312.setTransform(905.9,934.2917);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("rgba(0,0,0,0.616)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_313.setTransform(905.9,934.2917);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(0,0,0,0.58)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_314.setTransform(905.9,934.2917);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("rgba(0,0,0,0.549)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_315.setTransform(905.9,934.2917);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(0,0,0,0.518)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_316.setTransform(905.9,934.2917);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("rgba(0,0,0,0.486)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_317.setTransform(905.9,934.2917);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(0,0,0,0.455)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_318.setTransform(905.9,934.2917);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("rgba(0,0,0,0.424)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_319.setTransform(905.9,934.2917);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(0,0,0,0.388)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_320.setTransform(905.9,934.2917);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("rgba(0,0,0,0.357)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_321.setTransform(905.9,934.2917);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(0,0,0,0.325)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_322.setTransform(905.9,934.2917);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("rgba(0,0,0,0.294)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_323.setTransform(905.9,934.2917);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(0,0,0,0.263)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_324.setTransform(905.9,934.2917);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("rgba(0,0,0,0.227)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_325.setTransform(905.9,934.2917);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(0,0,0,0.196)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_326.setTransform(905.9,934.2917);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(0,0,0,0.165)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_327.setTransform(905.9,934.2917);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(0,0,0,0.133)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_328.setTransform(905.9,934.2917);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(0,0,0,0.102)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_329.setTransform(905.9,934.2917);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(0,0,0,0.067)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_330.setTransform(905.9,934.2917);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(0,0,0,0.035)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_331.setTransform(905.9,934.2917);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(0,0,0,0.004)").s().p("A+6H2IhBgBQhegEhHgHIh9gPIlUAFIlHAHIj2AFQhoADg/AAQhFAAg6gCQg4gChJgEQCSgpJAg6QHTguM6hAQFzgcRrhTQOVhEGugjQCHgLA8gKQBhgRAOgaQhkgfirgaQiVgXjbgUQiogQkIgUInOghQwLhLpug9QirgRh1gNIkdgjQh1gOgygHQhLgKgngJQhWgTAXgZQAIgKBegJQBdgKBbAAICOgFICOgGQBIgFDdgEIAugBQAGgBAaAGQAcAGAJAGQAOAKAoAhQAhAaAMAHQAIAEAJAKQAGAHATACQB9AOCXADQBxACCfgEID+gIQCJgCBYAEQCgAKHPAWQFtASERARQNWA3HWAlQLkA5GpA4QCaAVBZAZQBIAUBBAjIAABEQAAACgGACQgEACAAABQiuAvhjAWQihAijFAZQkvAlmIAmQnTAskUAbQrZBHr/AnQukAvw3AFQAAgBg+gCg");
	this.shape_332.setTransform(905.9,934.2833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_235}]},819).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},10).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_16}]},10).to({state:[{t:this.instance_17}]},7).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[]},505).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.shape_236).wait(820).to({_off:false},0).wait(1).to({y:-147.75},0).wait(1).to({y:-47.3},0).to({_off:true},1).wait(3).to({_off:false,y:354.65},0).to({_off:true},1).wait(693));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(860).to({_off:false},0).to({_off:true},10).wait(650));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(860).to({_off:false},10).to({_off:true},9).wait(641));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(870).to({_off:false},9).to({_off:true},9).wait(632));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(879).to({_off:false},9).to({_off:true},9).wait(623));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(888).to({_off:false},9).to({_off:true},10).wait(613));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(897).to({_off:false},10).to({_off:true},7).wait(606));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(907).to({_off:false},7).to({_off:true},8).wait(598));

	// withe
	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQHfAAMgCLQOnCiMfEKQPMFDIhGcQKIHqgSI+QgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_333.setTransform(-475.4757,1038.375);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQHSAAMKCFQOLCcMOEAQPpFCI2GgQKmHxgSJKQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_334.setTransform(-417.8254,1028.275);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQHGAALzCAQNuCVL9D2QQGFAJMGlQLEH4gSJWQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_335.setTransform(-360.1264,1018.175);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQG5AALdB7QNSCOLsDsQQiE/JiGoQLjIAgTJiQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_336.setTransform(-302.4762,1008.075);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQGtAALGB1QM1CILbDiQQ/E+J4GsQMBIHgTJuQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_337.setTransform(-244.7759,997.975);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQGgAAKwBwQMZCBLKDYQRbE8KOGxQMgIOgUJ6QgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_338.setTransform(-187.1256,987.875);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQGTAAKZBqQL9B7K5DOQR4E7KkG1QM+IVgUKGQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_339.setTransform(-129.4265,977.775);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQGHAAKDBlQLgB0KoDEQSVE5K5G5QNcIdgUKSQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_340.setTransform(-71.7761,967.675);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQF7AAJsBgQLEBuKXC5QSxE4LPG9QN7IlgVKdQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_341.setTransform(-14.1258,957.525);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQFuAAJVBbQKoBnKGCvQTOE3LlHBQOZIsgVKpQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_342.setTransform(43.5734,947.425);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQFhAAI/BVQKMBhJ1ClQTqE1L7HGQO3IzgVK1QgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_343.setTransform(101.2238,937.325);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQFVAAIoBQQJvBaJkCbQUIE0MQHKQPWI6gWLBQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_344.setTransform(158.9241,927.225);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQFIAAISBLQJTBTJTCRQUkEzMmHNQP0JCgWLNQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_345.setTransform(216.5745,917.125);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQE8AAH7BFQI2BNJCCHQVBExM8HSQQSJJgWLZQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_346.setTransform(274.2738,907.025);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(255,255,255,0.996)").s().p("Eg1PAdXQyRsKAAxNQAAxMSRsLQSSsKZ2AAQEvAAHlBAQIaBGIxB9QVdEwNSHWQQxJQgXLlQgWJ9qPJRQotH4u7GpQsnFmuGDkQsnDMnHAAQ52AAySsLg");
	this.shape_347.setTransform(331.9241,896.925);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(255,255,255,0.996)").s().p("EgVQAoSQr+hDp5jcQnNiamVj1Qm3kJkplAQospVAAruQAAlVB6k5QBAioBkijQBlipCTiqQCxjNDbizQCiiFC6h2IAUgMQCuhtC7hYQDPhkDkhOQExhzF9gnQG9hEHoADIGwgCIB1AAQCpAADfALQB8AHCQALICsANIBgAJQESAYEFAoQDOAfDZAwIBuAZQCqAoCoAuQDVA4DcBEQDLA/CyA4IE2BlIG6CgQD4BjDYBqQFZCpDwC0QH9F1BYGrQASBGAFBHQAYDuhmDtQirGTngF5QjjC4khCsQndEfqDEAQp9D/rAC6QjuBAj0A3Qs7DBoDAEIg3AAQlgAAlRgeg");
	this.shape_348.setTransform(366.0363,901.0839);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("rgba(255,255,255,0.996)").s().p("EgWhAn9Qs1g4qTjGQnuiLmxjuQnVkClJlJQpppnAAsRQAAllCPlJQBIirBwirQBsipCii2QDEjaDhi2QCuiMDCh2IAWgMQC5huDKhVQDYhfD5hGQErhoGpAHQHPgeH8AsQDUAPDxABIB6AAQCyAADrAFIEcAJQBRAFBjADIBmAFQEpAMEKAjQDWAbDpA1QA5AMA7APQCwArC0A0QDXA8DxBQQDbBIC1A4QCWAvC0A1QC4BCEjBaQEKBfDmBlQF1CjEDCsQIzFnB/GdQAaBGANBHQA4D0hyD6Qi1GaoeF3Qj2Czk6CoQoAEVqwD1QqgD0rzCyQj8A8kDA1QtPC1o/AJIhyAAQlVAAlLgXg");
	this.shape_349.setTransform(400.6474,903.149);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(255,255,255,0.996)").s().p("EgX0AoHQtugtqsiwQoPh8nNjnQnzj7lolSQqnp5AAs0QAAl1CklZQBQivB9iyQByiqCyjCQDWjnDoi5QC6iSDKh3IAXgMQDFhvDYhRQDjhaEMg+QEmhcHVA0QHhAIIPBVQDZAeEBAEICAAAIGygBIEqABQBTABBrAAIBqACQFBABEPAdQDfAVD4A6IB7AeQC2AuDAA8QDYA/EHBcQDrBRC4A4QCWAuDIA1QCpA8FSBbQEcBbD1BhQGQCcEXCkQJpFZClGQQAkBFAUBHQBYD7h+EIQjAGfpbF2QkKCulTCjQojELrcDrQrEDnsmCqQkJA6kSAyQtiCpp8AOQhlABhkAAQk9AAk2gQg");
	this.shape_350.setTransform(435.4507,902.1488);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("rgba(255,255,255,0.996)").s().p("EgZIAoeQulgirGiaQowhsnojhQoSj0mHlaQrkqLAAtXQAAmFC5lpQBXizCKi6QB4iqDCjOQDoj1Dui7QDGiZDTh3IAZgNQDPhwDnhNQDthUEgg3QEhhQIBBhQHzAvIiB9QDeAuESAGQBAABBEAAQDFgBEDgGQCIgDCwgFQBVgBBygEIBwgCQFYgKEUAXQDoAREIA+QA/APBCASQC8AxDMBDQDaBDEbBoQD8BZC8A4QCVAtDcA1QCZA1GCBeQEuBXEDBdQGtCVEqCbQKfFLDLGDQAtBFAbBHQB5EBiKEVQjKGlqZF1QkdCqlsCdQpGECsJDgQroDctYCiQkYA2kgAvQt2Ceq4ASQidADidAAQkXAAkWgKg");
	this.shape_351.setTransform(470.339,899.7949);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(255,255,255,0.996)").s().p("EgadAo4QvcgXrhiEQpRhcoDjbQoxjsmmljQshqdAAt6QAAmVDOl5QBei2CYjCQB+irDSjZQD5kDD2i9QDRihDch2IAagOQDbhxD1hJQD3hPE0gvQEchFItCPQIEBVI2ClQDjA+EiAJQBDABBHAAQDNgBEPgNQCNgFC5gLQBYgDB5gIIB2gGQFvgVEZARQDxAMEXBEQBBAQBGATQDCA0DYBKQDbBHExBzQEMBjC/A4QCWAsDwA1QCJAvGyBfQFABUESBYQHICOE9CTQLVE+DyF0QA2BFAjBHQCYEIiVEjQjVGrrXFzQkwClmFCYQppD4s2DWQsLDQuLCZQklA0kwAsQuJCSr0AXQjlAGjkAAQjlAAjkgGg");
	this.shape_352.setTransform(505.3004,897.051);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("rgba(255,255,255,0.996)").s().p("EgbyApVQwUgMr6huQpyhNofjTQpOjmnGlrQtfqwAAueQAAmkDjmJQBmi6CkjJQCFirDijmQEMkPD7jBQDeinDkh3IAbgNQDlhyEFhGQEBhKFJgnQEVg5JZC8QIXB8JJDOQDpBNEyALQBEACBKAAQDXgCEbgSQCRgJDDgQQBZgGCCgLIB7gJQGGghEfALQD4AIEoBIQBEARBJAUQDIA4DkBRQDdBKFGCAQEcBrDCA4QCWArEEA2QB5AnHiBhQFSBREgBTQHkCIFQCKQMMEwEYFnQA/BFAqBGQC5EPiiEwQjfGxsUFyQlEChmeCTQqMDutiDLQsvDEu9CSQk0Awk+AqQudCGswAcQlGAJlHAAQiYAAiYgCg");
	this.shape_353.setTransform(540.2816,894.1297);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(255,255,255,0.996)").s().p("EgdHApzQxMgBsThYQqUg+o6jNQptjenll0QucrCAAvBQAAm0D3mZQBvi9CxjSQCLirDyjxQEdkdEDjDQDpivDth2IAcgOQDwhzEThCQEMhFFdgfQEQguKFDqQIoCiJdD2QDuBdFCANQBGADBOAAQDfgCEngZQCVgLDNgWQBcgICKgPIB/gNQGegsEkAGQEAACE4BOQBGARBNAWQDPA7DvBYQDeBOFcCLQEsB1DGA3QCVAqEZA3QBpAhISBiQFjBNEwBPQH/CBFjCCQNCEjE/FZQBIBEAyBGQDZEWiuE+QjqG3tSFvQlXCdm3COQqvDkuPDBQtSC4vwCJQlCAulNAnQuxB7tsAgQnSAPnaAAIg7AAg");
	this.shape_354.setTransform(575.2966,891.1425);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("rgba(255,255,255,0.996)").s().p("Eg9NApXQq1gupVjGQqMjYoEl8QvZrUAAvkQAAnEEMmpQB2jBC+jZQCRisECj9QEvkqEJjGQD1i1D2h3IAegOQD7h0Ehg/QEWg/FxgXQELgjKxEXQI6DJJwEfQDzBsFSAQQBJADBQAAQDpgCEzgfQCZgODXgcQBdgKCTgTICEgQQG1g3EpgBQEJgCFHBSQBKATBQAXQDVA+D7BgQDgBRFwCXQE9B+DJA3QCWApEsA3QBZAaJCBkQF1BKE+BKQIcB7F2B5QN4EVFlFLQBRBEA5BFQD5Eei5FLQj0G9uQFuQlqCYnQCJQrSDbu8C2Qt2CswiCBQlQAqlcAlQvFBvuoAlQoCASoPAEIkqACQvFAArCg6g");
	this.shape_355.setTransform(610.3098,888.201);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(255,255,255,0.996)").s().p("Eg/0AqUQrVgfpyjAQqpjQojmFQwXrmAAwHQAAnUEgm5QB+jEDLjhQCYitERkIQFCk4EPjIQEBi9D+h2IAfgPQEHh1Ewg7QEgg6GFgPQEFgXLdFEQJNDvKCFHQD5B8FiATQBLADBUAAQDxgCE/glQCegSDhggID5gkICJgUQHNhCEugGQERgHFXBXQBNAUBTAZQDbBBEHBmQDhBVGGCjQFOCHDMA3QCVAoFAA2QBKAUJxBnQGIBFFNBGQI3B0GJBxQOuEHGLE+QBbBCBABHQEaEkjGFYQj/HDvNFtQl9CTnqCEQr1DRvoCrQuZChxVB5QleAnlrAiQvYBjvkAqQoWAVomAJQmIAHlgAAQrjAAo4geg");
	this.shape_356.setTransform(645.3466,885.413);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("rgba(255,255,255,0.996)").s().p("EhCbArOQr2gQqNi4QrIjKpDmOQxUr4AAwpQAAnkE2nKQCFjIDYjoQCeitEhkVQFUlFEWjKQENjEEGh3IAhgOQERh2E/g4QEqg0GZgIQEAgMMJFyQJeEVKXFxQD9CLFzAVQBNAEBWgBQD7gCFLgrQCigUDrgnIECgpICQgYQHjhNEzgMQEagMFnBcQBPAVBXAaQDhBEETBuQDjBZGbCuQFdCQDQA3QCVAnFUA3QA6ANKiBoQGZBCFbBBQJTBuGdBpQPkD5GyEvQBjBDBIBGQE5EsjRFlQkJHJwLFrQmRCOoCCAQsYDHwVChQu9CUyIBxQlsAkl5AgQvsBXwgAuQopAXo+APQrvATphAAQmjAAlhgJg");
	this.shape_357.setTransform(680.384,882.8808);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(255,255,255,0.996)").s().p("EhxKAf3QyRsKAAxNQAAn0FKnZQCNjMDljwQCliuEwkgQFmlSEdjNQEqjYEfh4QEdh4FNgzQE1gwGtAAQD6AAM1GfQJwE8KqGZQEDCbGCAXQE3ATHMhCQCngYD1gsIGhhLQH7hYE4gSQEigRF2BhQEjBMGQCiQDkBcGwC7QFuCZDTA2QCVAmFoA3IL8BxQSJCqKqCYQQbDrHYEiQJIFnkQHHQl9J/+fG+UgYsAFpgnrADbUgdNACigiiABIQ0rArt7AAQ52AAySsLg");
	this.shape_358.setTransform(715.4331,880.925);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("rgba(255,255,255,0.996)").s().p("EhE6ArjQlRgClJgdQmpglk6hGQtdinq3m0QkTirjcjCQr7qjAAt2QAAmJDPl6QBBh3BWh3QAuhAA3hEQB4iVCrixIAxgzQC0i1EIjzIAngjQDUi+C+iNQCAhhB5hLQBOgxBOgsQDoiFDvhQIAogNQEFheFZgIQBvgGB+AAQDsABEbAVQC+AYGjC/QDPBhEPByIAWAKQD5BtETBvQCKA9CWA+QCFA/CZA+QCUBACRBGQCMA/CfAlQCsAnDOARQBBAFBIAEQDxAKE9gOIBogFQCrgKD+gVIAHgBQCggFEGgkIA3gFQBvgOBygKQCUgUCjgIQCTgLB5gDQESgFE8BHIBkAXQD1A6EvBTICuAuQC4AsEeBPIDNA1QEXBNDHAQQA1AIAvADQCZAIFdAIQAXgHCEAIQDNgWGBAZQBRgBBNACQFJgEEeASQELAJDqAkQERApDnBJQAxAPAvASQGjB7FOC9QGrC9EDDbQFQD3AqEfQAXClhSCwQiiGYpTFUQkBDgl0B6QkrB1mXBmQrCCsu3CIQyDCl3WBxQr5A7s6ArQzvBD2CAgQtBAUq7AEQjeABjSAAIligBg");
	this.shape_359.setTransform(737.2019,884.9442);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(255,255,255,0.996)").s().p("Eg38AreQmiABmUgHQlbgElcgcQnjgkkcg8QuLiQramuQkhiqjsjFQs1qyAAuVQAAmZDgmHQBFh5Bdh8QAyhCA6hFQB8iXC3i6IAzg0QDJjHEHjtIAqgkQDgjCDMiKQCHhdCFhHQBTgvBUgoQDwh4EFhFIArgLQD9hRF7AhQBxADCCALQD1AWEeArQDUAvGbDDQDWBpEgBmIAVAIQECBgErBWQCOAxCkAvQCGAyCrAuQCfAxCXA5QCZAxChAfQCyAfDYAWQBEAHBKAGQD4AUFJALIBrADQCxAEEGABIAHAAQC1AOD+gWIA5gCQBtgIB/gFQCHgPC/AAQCYgHB/ABQEpAFE7BHIBoAWQEFA4E4A1QBYAOBdANQDEAUEeAjIDPARQERAlDPgcQA0AAAwgGQCdgXFQgoQAdgQB7gFQDahIFmgKQBRgOBKgIQFMg6EbgLQETgZDyAdQEXAiDwBjQAyASAwAaQGHCTFGEMQGHDkD4EQQExEPA1E3QAdCtg/C1QhvHNntGCQjHE6lJB5QkaCOm2B3QrIC5v5CKQynCk4jBoQsXA2thAlQ0dA53FAUQrPAMqEAAIjtgBg");
	this.shape_360.setTransform(759.0189,886.9169);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("rgba(255,255,255,0.996)").s().p("Eg3RArkQmogCmygKQllgGlxgbQoaglkAgyQu5h3r8mpQkvioj8jKQtwrAAAuzQAAmoDymVQBKh8BjiAQA0hEA9hHQCAiXDEjFIA1g1QDejZEHjmIAsglQDsjFDaiHQCPhbCQhEQBZgrBagkQD4hsEbg6IAtgJQD1hEGdBKQB1ANCFAWQD9ArEhBAQDrBHGSDHQDeBxEwBYIAVAIQEJBSFEA9QCSAlCxAgQCHAlC9AeQCrAjCdArQCmAjCjAYIGbA0ICSARQEAAdFVAlIBuALIHEApIAIABQDLAhD1gJIA6ACQBrgDCLABQB8gLDbAIQCcgCCGAFQE+APE7BFIBsAXQEWA2FAAYQBcAFBgACIHugOQBkgHBugKQEKgGDYhHQAygIAxgPQCgg1FFhYQAigaBxgRQDph6FKguQBRgbBIgSQFNhvEagpQEbg6D5AXQEdAaD6B8QAyAXAyAhQFqCqE/FbQFjENDsFDQETEmBBFSQAhC0grC7Qg9IBmHGvQiMGTkfB6QkHCmnWCIQrPDFw7COQzLCi5xBgQszAwuJAfQ1MAw4GAIQltADlgAAQnoAAnPgFg");
	this.shape_361.setTransform(780.9537,887.8956);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(255,255,255,0.996)").s().p("EgbgAr6Qt6AAtOgPQmtgFnRgMQlugJmGgaQpTgkjjgoQvnhgsdmjQk+imkMjOQuqrPAAvSQAAm3EEmjQBNh+BqiFQA4hFBAhKQCEiXDQjOIA3g4QDyjrEIjfIAuglQD4jJDoiFQCXhXCchAQBdgoBhghQD/hfExgvIAwgIQDsg1HAByQB4AXCIAgQEFBBElBUQEBBfGKDLQDlB5FABMIAVAGQESBFFcAkQCWAYC/ARQCHAZDPAOQC2AUCkAdQCzAWClASQDBAQDqAhICYAWQEGAmFhA+IByATIHRBNIAJACQDgA1DsAEIA8AFQBpADCXAHQBxgID2AQQChAECMAJQFUAYE7BEQA4AMA4ALQEmA0FJgFQBfgEBkgJQDdgeEcg0QBmgXBvgdQEEgvDghzQAxgRAygYQCjhTE6iHQAngkBogeQD2isEvhRQBQgoBGgcQFPikEYhHQEjhbEAAPQEkATEECVQAyAbAzApQFPDCE2GpQFAE1DgF5QD0E8BNFrQAmC+gYC+QgKI3khHbQhSHuj0B5Qj1C/n1CYQrXDTx8CQQzvCi6+BWQtQAruxAZQz3Aj2fAAIktgBg");
	this.shape_362.setTransform(803.0514,888.6644);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(255,255,255,0.996)").s().p("EgZ6AtOQuNgHt/gVQmygInwgQQl4gKmZgZQqLgkjHgeQwVhItAmeQlLikkdjSQvjreAAvxQAAnGEVmxQBSiABwiJQA6hIBEhLQCHiYDdjYIA6g5QEGj9EIjYIAwgnQEFjMD1iBQCfhVCng8QBjglBmgdQEIhTFHgkIAygGQDkgoHiCbQB7AgCMAsQENBVEpBqQEWB3GCDOQDsCCFRA+IAVAFQEaA4F0ALQCaAMDNACQCIANDhgCQDBAFCqAPQDAAJCnAKQDIAKDzAlICdAbQEOAvFsBXIB2AcIHfBxIAJADQD2BHDiATQAgAFAeADIELAUQBkgDESAYQCnAJCSAMQFqAiE6BEQA6AMA6AKQE3AzFRgjQBjgMBngVQDqg3EbhfQBngnBxgwQD9hZDpieQAwgZAyghQCnhxEui4QAtgtBegrQEEjdETh1QBQg1BEgmQFRjZEVhlQEsh9EHAKQEqALEOCuQAyAgA0AwQEzDZEvH4QEcFeDUGsQDWFTBYGEQArDGgEDGQApJqi8IIQgYJIjJB5QjjDYoVCoQrdDfy+CUQ0TCg8LBNQttAnvZASQurATwJAAQoyAApOgGg");
	this.shape_363.setTransform(825.817,883.1145);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(255,255,255,0.996)").s().p("EgYoAw8QuhgNuwgbQm3gMoOgSQmCgNmtgXQrEgliqgUQxCgwtjmYQlZijktjWQwertAAwPQAAnVEnm+QBWiDB3iOQA9hJBHhNQCLiZDpjiIA8g7QEbkOEIjSIAygnQERjQEEh/QCmhSCzg4QBogiBsgZQEQhGFdgZIA0gEQDdgbIDDDQB+ArCQA3QEWBqErB/QEtCPF5DRQD0CKFiAxIAUAEQEiAqGMgNQCfAADagOQCJABDzgSQDMgKCwABQDNgECpADQDPADD9ArQBOANBUARQEUA5F3BwIB6AkQDEA6EpBbIAKAEQELBbDZAgIBBALQBlAOCwASQBYABEuAfQCrAOCYARQGBArE5BDQA8ANA9AJQFGAxFahAQBngVBqgfQD2hREbiKQBpg3BxhDQD3iDDxjJQAvghAzgrQCriPEijnQAyg3BVg3QERkQD4iYQBQhCBBgwQFUkPETiCQEzieEPACQExAEEXDIQAzAjA0A4QEYDxEnJHQD4GFDIHhQC4FqBjGdQAxDPAODJQBcKhhWI1QAiKhieB6QjRDwo0C4QrkDsz/CXQ04Cf9YBEQuKAiwBAMQpjAIqMAAQuvAAwGgRg");
	this.shape_364.setTransform(850.6709,862.1112);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("rgba(255,255,255,0.996)").s().p("EgYOA0oQu0gUvhgiQm9gOotgWQmLgOnCgXQr8gkiNgKQxwgYuFmTQlnihk+jaQxXr7AAwuQAAnmE4nLQBaiFB+iSQBAhLBJhPQCQiaD1jrIA+g9QEwkgEIjMIA0gnQEejUERh7QCuhQC+g0QBugfBygWQEYg5FzgOIA2gCQDVgNImDrQCAA1CUBBQEeCAEvCUQFCCmFxDVQD8CTFyAkIAUACQEpAeGmgnQCigMDngdQCKgMEFgiQDYgZC2gMQDbgSCqgDQDWgFEGAwQBRAPBWAUQEcBCGDCJIB9AtQDIBHEzByIAKAEQEhBuDQAuQAjAJAfAGQBkATC7AYQBNAFFJAnQCxATCeAUQGWA2E5BCQA+ANA/AIQFXAwFiheQBrgdBtgrQEDhpEai2QBrhHByhWQDwisD6j1QAtgpA1g0IHEnEQA3hBBLhEQEglBDci8QBQhPA/g6QFVlEESigQE7jAEWgDQE3gEEhDhQAzAoA2A/QD7EIEgKWQDUGuC9IVQCZGABuG3QA2DWAiDQQCOLVAQJiQBdL7hzB5QjAEJpTDJQrrD51BCaQ1cCe+mA7QumAcwoAGQkiACkrAAQ0NAA27ggg");
	this.shape_365.setTransform(881.1291,841.3559);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(255,255,255,0.996)").s().p("EAdyA5GUglqgABgv0gB1Qr5gdyAgzQs0gkhxAAQ52AAySsMQyRsJAAxNQAAn1FKnZQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE8KqGYQEDCbGCAXQE3AUHMhCQCngZD1grIGhhLQH8hYE4gTQEigQF2BhQEjBLGPCjQDkBcGwC7QFuCZDTA2QBiAYDHAeQBBAJFlAvQKOBWGxBaQGnBZGriRQF6iAGOk/QFKkIGCmuQDkj+G4oeQGqoMDQjmQFXl5EQi+QFDjhEdgLQE+gLEqD7QEGDcFcObQEsMcEqRqQERQJCVNDQCYNVhJB6UgF9AJ+goXAEfUggTADmg1WAAAIgeAAg");
	this.shape_366.setTransform(914.6483,820.75);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("rgba(255,255,255,0.996)").s().p("EAFaA7dQ7GgY/phLIgVgBQnggSpigZItQglIgDAAQohgYkKgKQhogEgpAAIgDAAQmEgEktgeQzghyuspjIgDgCQiBhUh1hYQvArcAAvkQAAnBEKmrQAjg3Aog5IACgDQBiiJCIibQBBhJBMhPIAIgJQBphtCbiWQBhheBvhoIANgMQCzinCfiEQCjiHCThmIANgJQBPg2BNgvQDZiFDZhUIAQgGIA8gWQD/haEsgoIAWgDIA5gHQERghGOAfIASACQBvALDCBJQElBwHJDpIAiASQDTBsDaB4QD8CKETCGQCsBWC3BYIAgAPQBmAvB3AfQChArDJAJIAwACIAdABQCEADClgLQDVgQDzghIAggFQBygQCJgWICKgUIAbgEIGRg0IASgDIADAAQFUgsERgDQBtgFBiACIAEAAQC3ABDcAsQCAAZCHAlIAEABQCCAkCOAuID6BUQBOAcBjAiIAJAEICjA8QDWBOEjB0IAKAEQDrBZCuA3QBgAfBPATIAHABQBpAYC/AXIAIABQBbAHFJAgIAFABQGNAhFJAUIFjAfIAgADQDMASDNgeQDDgeDBhKIA4gXQB9g0B9hIQDmiFDhjGIAxguQC9ixDBjqQBnh/BoiRIA6hUQCDjEDJk2QBAhiBFh2QAwhMAvhPIAeg0QCIjsBtifIBmieQBAhhA7hQIArg7QBYh0BZhgQBUhaBZhGQCQhzCQhEQBfguBhgcQA6gTA5gLQCrgkCnAcQCeAYCdBTQCIBECMCNQAoAnAqA0QDIDnDbG3QBYCkBZC8IA5B5QBsDeBdDwQBCCWAvCYQBZEiBUFOQA1DNAxDUQA/ENA1EIQBqH3BJHSQAlDcAaC/QA0GPgLDKQgFAigHAhQgVCmAPB+IACAnIgMBcQgEBOgbAvQgXB5heBZQhxBujoBZQj/B8qZBkQjjAllcArQj1AdiGATQhaAUhiAUIiKAWQvcCe27BOQ1EBD6pAHIhJAAIjrAAQrhAAsfgKg");
	this.shape_367.setTransform(916.2953,804.389);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(255,255,255,0.996)").s().p("EAHfA+UUgbcgAUggPgBLQn1gTprgZItfglQoSgXkugMQhngEgvAAQmugIkSgaQz9hju+pgQiGhVh6hbQvcriAAvyQAAnIESmwQAlg7Aqg7QBkiKCLicQBFhNBShVQBrhuCdiYQBqhmB2huQC3ipCiiEQCviOCfhpQBRg2BQguQDliGDqhRIA9gUQEKhXFCgjIA7gHQEMgdGxBBQBxARC+BKQE8B+HXD1QDVBvDcB7QD9CMEjB2QDBBTDVBOQBqApB7AZQCiAjDQADQAlABApAAQCDAACqgOQDtgVEBgkIEBgjQBQgLBagKQCegPEPgWIADABQFQgcElAUQBuABBqAKQC2ALDhA1QCFAfCHAnQCIAoCJAsQBwAjCTAsQBMAaByAiICnA3QDqBKEmBtQDwBTC0A2QBlAeBWARQB0AXDBATQBqADFHAUQGPAQFZgOQDDABCqgEQDhABDhg4QDCgwC/hZQCXhICWhhQDmiYDSjTQDPjYDAkcQBciMBXifQB8j1DEmQQA0hqA0iDQA2hyAshxQBskQBZiiIBUiuQA0hoA2hZQBjiqBuh+QBThfBhhCQDzioEZgcQA+gIA9AAQFEgBFKDaQCeBiC1DqQDkD+DpGMQCMDXCGDxQCGDbBqDnQBTCZAtCTQBYEgBPFbQBwHfBPHrQBaH7A3HmQBtMLhBD5QgOAhgSAgQg6CAAyCtQAQA1AlBdQAoBlANApQA1CjgzBpQhDCLj/BnQiOB2siBgQjDAYmNAoQk1AfhHAMQhXAehkAcQu5Da5sBqQ1LBP7UAMQkeACknAAQppAAqWgIg");
	this.shape_368.setTransform(923.1065,786.1887);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("rgba(255,255,255,0.996)").s().p("EALYBA+IgCAAIg2gBUgbhgARggbgBKIgLAAQoCgSpngZIgMAAIgKgBItZgkIgRgBItDgjIgPgBIiLgEIgPgBQnGgKj2gWIgMgBIgJgBQ0NhUvLpYIgJgGQiFhSh6hZIgHgFIgGgFQvxrlgBv7IAAgDQAAnOEam2IACgDQAlg7Asg7IACgDQBliLCMiZIACgDIADgDQBEhMBUhWIADgDQBrhtCXiRIAKgKIABgBQBthpB2htIABgBQC0ikCfh/IAOgLQCziPClhoIACgBQBKgvBJgpIAPgIIAFgDQDmh+DyhMIAGgCIAlgLIATgFIAJgDQEJhOFHgeIALgBIAbgCIAWgCIALgBQEAgUG4BfIAPADQBsAYCiA/IAXAKIAMAFQFHCKHJDxIANAHQDABmDFBvIAnAWIAMAGQDoB/ETBeIApAOIARAGQC7BCDUA6IAaAHQBUAYBdAOIAdAFIAgAFQCLAUCugBIAcgBIAmAAIApgBIAlgCQBqgDCFgMIAegDIAngEQDkgZDpgeIArgGIC8gYIAdgEIAsgFQA9gHBDgFIAtgDQCUgIDfgGIAVAAIADAAIAngBIADAAQEsgHEcAlIAGAAIAzAGQBSAGBTANIA2AHQCgAWDCAyIADABIA2AOQBtAeBrAfIA1AQIDcBEIAFABIA2ARQBaAaB0AfIAEABIA3AQQA7ASBUAWIA2APIBtAgIAKACIAzAPQDjBAEFBWIA2ARQDOBBCjAuIAGACIA5AQQBGATBAANIA6ALQBqAQCWAMIA8ACQB2AAEDAGIA7AAQFogFFHgpIASgDIAxgEQCagNCMgSIBKgIQC4gVC2g4IA3gSIAZgIQCXg2CUhJIBQgrQBvg+BthKIA6goIAQgMQDAiQCqi3QAfgiAegkQCmjJCPj4IArhOIAGgMQA2hoAxhyIAqhpQBSjhBuk/QAYhFAXhNQANgpAMgtQAZhPAWhXIAQg6QAahcAWhaIAEgUQAjiDAghmQAdhfAahLIAOgpIALggQAWg/AUg4IAMgiQAphwAwhdIAVgqIAOgcQA4hoBEhUQAWgaAWgZIAbgcQBKhKBZg0QBog9B5ghQA8gRA/gKQBjgQBpACIAhABQAuACAuAFQCxAVC3BMQCPA6CYBsQAyAjA1AtQB8BjCFCPIADADQCMCLCMCuQB4CNB2CgIBQBqQB8CgBxCrIACADIAwBGQBhCJBHCHQAaAxAYAxIABABQBZCZArCUIAAABQAeBjAbBrQA3DTAvDpQA3EKAsEZQAjDYAeDdIABAOQAoEZAdEbQAdDrARDWQAiFygLD1IgKBGQgSCjAHCOIAABFIgEAtIgDAaIAAABQgDBSADBFQAIBMALBLIALB+IAAAYQAHBYgTA3QgLBZgvBLQgKAnABAvIgFBOQgQBKgRBuQgGAVgJAUQADBHg8A0QgpBEh9AnQgrALiIABQjOAEi3AIIgLAAQksgEkSAXQg/AEgkAIQjJA7hBAgIgcAPQgxAeg1AUIgtATIgOAFQtjEV7aCGIgGAAIhjAHQ0yBX7GASIgCAAQmmAEm+AAQnyAAoPgFg");
	this.shape_369.setTransform(921.9175,769.3838);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(255,255,255,0.996)").s().p("EAOLBDxIg3gBUgcBgAOghOgBJQoZgTpwgZIgLAAIt5glItmgmIiegFQn3gOjcgSIgJgBQ0whDvjpaQiMhViChcIgHgFQwTrugBwOIAAAAQAAnWEkm9IACgDQAng8Atg9QBoiNCPicIAGgGQBGhNBZhaQBuhvCaiUIAMgMQByhtB3hsQC5inCjh/IAOgLQC3iPCrhoQBOgvBNgoIAQgJQDuh8D+hHIAtgMIAUgFQERhIFYgYIAmgDIAXgBQD5gPHVCBQB0AgCqBGIAWAKQFcCaHLD2QDKBtDPB2IAnAWQDvCDEqBSIArALQDHA6DrArQBkAUBwAKIAdACQCZAPDKgKIAcgCQAlgBArgEQB5gGChgTIAegEQEEgfD6ghQB1gPB2gNIAdgDQBTgJBdgEQCpgED8AHIAVABIADAAQE8AIFBBAIAGABQBqAOByAZQC1AhDnBFIACABIEQBUQCSAwCDAnIAFABQBqAeChAnIAEABQBEAUCIAeICnArIAKACQEKBAEfBXQD1BFC9AyIAGACQBmAcBeAPQCFAVC8AIIG6gJQGHgWFshOIATgEQC1geClglQDcgrDahaIA1gXQCkhICdhcQCVhbCQhuIA3grQDHikCmjLQDBj4CNk2QATgpARgqQAvh1AniBQBKkaBXmaQAOhKANhTQAHgrAFgxQAXhyAKh8QAQhsAKhnQAViOAUhoQARhoAPhOQAHgqAKglQANhCAQg8QAnioA7iCIAOgeQAyhvBGhVQAjgqAmgkQCgiaD9gmQA/gKBBgDQB2gEB/AUQDaAkDrBwQC6BRDUC3QCKBlCQCDQCaCICXCiQC7C1CwDLQCRCbCACkIA1BFQByCIBJCBQAdAyAaAyQBfCbAqCWQAdBjAaBuQBwHPBEIrQAeDdAXDkQAgEkAUEsQBHLBg3F7QgKAkgNAjQgpCNAdCsQAHA1ASBJIAGAdQAZBhAHA3QAfChgnB6QgyCnixCOQgYA2BFB3QAoBGBoCcQBVCMAEBUQAFBvh/A1QgIAFi0gNImMggQpKgshNAiQjdByg6A3QguArgxAWIg4AhQsSFR9XCiIhsAJQ08Bk73AZQowAHpaAAQl4AAmJgDg");
	this.shape_370.setTransform(927.4845,751.6537);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("rgba(255,255,255,0.996)").s().p("EARxBGYIg1gBIgIAAUgcdgAKgh8gBKQoqgSpzgZIgDAAIgLgBIuLglItsgmIgPgBIiggGQobgRi+gOIgBAAIgJgBQ1Ogyv3pZQiOhViFhdIgBgBIgGgEQwwrzgCwcIAAgCQAAneEtnEIADgDQAog9Avg+QBqiNCRieIADgDIAFgGQBIhNBchdQBwhwCbiUIADgDIAMgLQB2hwB3hsQC9ipClh+IABgBIAPgLQC7iPCxhnQBQguBPgnIAEgCIAMgGQDyh4EIhCIAugLIAKgCIAKgCQEUhBFjgTIAngCIAMAAIALgBQDugJHoCgQB5AoCmBIIAOAHIAKAFQFsCnHFD3QDNBwDRB5IAOAIIAbAPQDxCFE4BDIAQADIAcAGQDKAuD0AZQBmANByADIAdABIADAAQCYAFDNgRIAcgCIALgBIBHgHQB4gKClgWIAfgFIAJgBQELgkDxgfQB6gPB1gMIAdgDIAPgBQBOgHBVgCQCygBD5AVIAWACIADAAIATACQEqAYFGBTIAGACIAtAJQBTASBdAZQC0ArDqBOIACABIA1ARIDeBLQCYAzCBAnIAGABIAyAOQBZAYCEAdIAFABIA1AMQA2AOBoAUICsAmIAKACIAsAKQEEA3EFBGIG9BuIAFACIA1ANQBLASBIALQCOAUC4AFQCmgFEagSQGCgmF1hsIATgGIBCgRQCQglCHgrQDZhADWhpIA1gaIBNgpQB6hDB1hNQCVhiCNhzIA3gvQAjgeAhgfQCgiVCDitQC/kGB5k/IAehWIAfhoQAUhJAQhOQA2knAmmaQAGhMADhSIAChdIAEhNQADhOgDhWQAChpgDhrIAEjNIACgrIAGi3QACgqADgkQAEhEAHg7QAEhAAJg2QANhjAWhUIAIggQAdhzAwhbIAOgYQARghAVgeQBTiDCIhMQA1ggA/gVQA5gVBBgMQBwgTCFAJQCeALCzA0QBCAUBDAYQDHBDDkCYQCUBXCdBwQCUBnCVB6IAqAiQDQCgDECzQCiCLCSCSIA8A/QB9B5BdB2IANARIA2BJQByCOBACHQAaA0AXA2QAUArASAsQA1B2AbB0QBWFfA1G2QAdDeAWDsQAWDoAPDyIAICGQA4KagvG+QgIAkgKAkQghCUAUCsQAEA5AMBIIAFAdQARBeAEA/QAVCdgfCBIgBAEQgpCxiJCeQgUBBAyBxQAbBYBLCYQA8CJAABgQAABxhiBEQgCAImVEgQmbElgWAeQhDA3iShaQhGgvgbgPQgsgagLAOQghArgiAVIgOAKQgYATgcAUQrDGK/DC+IhuAJIgJABQ1EBx8nAgQqjALrkAAIongCg");
	this.shape_371.setTransform(928.065,735.1674);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(255,255,255,0.996)").s().p("EAVrBJGIg2gBIgIAAIh3AAUgcQgAIghwgBHQo9gTp3gZIgDAAIgLAAIg9gDItngkIuCgmIgPgBIgmgBIh/gGQo0gUiygKIgBAAIgJgBIgcgBQ1bglwDpRQiShUiJheIgBAAIgFgEIgLgHQxJr6gCwoIAAgCIAAAAQAAnjE0nJIAFgHIACgEQAqg9AxhAQBqiLCQibIAIgJIADgDIAGgGQBJhOBghgQBvhvCTiMIAQgOIAEgEIALgKQB7h0B4hrQC3iiCgh5IATgOIABgBIAPgLQDAiPC3hlQBHgnBFghIAZgMIAFgCIAMgFQD3hyETg8IARgEIAegGIAKgCIAKgCQEZg4FvgNIAFAAIAkgBIALABIAMgBQDqAFHyC+QBxArCPBBIAjAQIAOAHIAKAEQF8C2HAD4QC9BpDBBxIApAYIAOAHIAcAPQDjB3EpAyIAwAIIAQADIAdAEQDNAgD+AGQBXAEBegCIAngBIAegBIACAAQCOgEC7gVIAhgEIAdgDIALgCIBJgJQBsgNCTgUIAkgFIAfgFIAJgBQEXgqDugcQBogNBhgJIAqgDIAegCIAPgBQBQgEBXACQCpAFDYAdIAxAIIAWADIADABIATADQEQAoE6BeIArANIAGABIAuANQBSAXBfAfQCkAxDTBNIArAQIADABIA0ATQB3AqBqAkQCFAuBtAgIAsAMIAFABIA0AOQBLARBpAVIAyAJIAEABIA4ALQA7AMBoASIB4AXIA5ALIAKACIAsAIQETAzECA9QDdAwCzAqIA2ANIAGABIA2AMQBLAQBKAJQCXARC2gCQC6gKELgiQFvg6FxiGIAbgKIATgHIBBgXQCMgxCGg5QDUhWDSh5IAfgSIAVgMIBLgvQB5hMByhUQCUhtCKh6IAkghIARgQQAjgfAgghQCeifB5i1QC2kXBdlLIAUhRIACgKQAMg1AKg3QANhMAJhQQAbk1gOmZQgEhNgHhSIgEgxIgFgtIgHhOQgGhNgOhXQgKhmgRhuIgLhcIgNhxIgFgsIgSi1QgEgqgCglQgHhFgBg6IgBgPQgDg1AAgxQgBhjAHhVIADggQAHhYAShLIAOgzIAIgbQALgjANghQAuh2BQhVQATgUAVgSQAugqA7geQA1gdBBgTQBtgeCKgCQCLAACkAeIAuAJQBEAOBHAUQDTA0DyB7QCfBICqBfQCOBNCUBbIAkAXIAuAdQDlCLDWCbQCxB6CjCCIBEA3QCFBqBuBqIACABIAQAQIA/BAQCEB/BUB5QAhAsAdAuIADAFQAbAoAXAoQBNB0AdBqIAAACQBhFUA4HSQAdDfAUD2QATDiAMDzIABATIAHCJQAoJ2goIDQgGAlgHAkQgYCaAKCtQACA9AGBHIADAdQAKBbAABGQAKCKgSB9IgFAfIAAAEQghC6hhCsQgQBLAfBrQAOBoAuCSQAjCHgEBsQgDBxhGBTQgKBYkYERQgeAkgLEaQgMEZgEAFQnxCTqWCiQ0oFEtEBaIhwALIgJAAIixARQ0YB17sAlQssARuMAAIkhgBg");
	this.shape_372.setTransform(930.975,717.97);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("rgba(255,255,255,0.996)").s().p("EAZABL1IgIAAIh6AAIgmAAUgcogAFgiYgBGQpQgTp8gYIgDAAIgLgBIg+gCIgPgBItzgkIuXgnIgPgBIgngCIgIAAIh8gGIr0geIgBAAIgJAAIgcgBIgDAAQ16gTwYpOQiVhUiNhfIgBAAIgGgEIgKgHIgDgCQxrsBgBw5IAAgBIAAgBQAAnrE+nQIACgDIAFgHIADgFQArg+AyhAQBtiMCSicIAEgEIAIgJIADgDIAFgGQBLhPBkhjQBxhwCViMIAEgEIAQgQIAEgEIALgJQB/h3B5hqQC5iiChh3IAEgDIAUgOIACgBIAPgLQDFiPC/hkQBFgjBEgfIAJgEIAZgLIAFgCIAMgGQD9hrEeg1IAKgCIAIgCIAfgFIAKgBIAKgCQEdgwF4gHIADAAIAFAAIAlACIAMABIAMAAQDnAVH7DaQByAxCIBBIANAGIAiARIANAHIAKAFQGNDEG7D6QC6BpC+BwIAPAIIArAYIANAHIAdAPQDhBuErAjIATACIAyAGIARABIAdACQDQAREGgMQBSgDBYgHIAOgBIAngEIAggDIACAAQCKgNC2gaIAKgCIAigFIAdgEIALgCIBLgLQBqgQCQgYIAKgBIAlgGIAggFIAJgBQElgvDqgaQBlgLBagHIANgBIArgDIAfgBIAQAAQBTgCBZAGQCqANDNAoIAQADIAxAKIAVAFIADABIAUAEQEEA5E8BwIAQAFIAqAPIAGADIAtAPQBSAcBgAlQChA6DPBSIANAFIAqARIACABIA1AUQB6AuBpAlQCDAuBnAcIAMADIAsALIAGABIA1ANQBKAPBkARIANACIA0AJIAEABIA7AJICnAaIBwATIANACIA5AJIAKACIAtAHQEhAtEAA0QDaArC0AnIAIACIA3AMIAGABIA3AKQBNAOBNAHQCgAOC0gKQDNgQD7gyQFnhOF1ilIAIgEIAagMIATgIIBBgeQCIg9CFhHQDPhrDMiIIAZgSIAGgDIAUgOIBKg1QB3hVBvhaQCTh3CGiCIAfgeIAEgFIASgSQAighAfgiQCbiqBwi+QCrkmBAlXIANhQIABgEIABgKQAHg1AFg4QAHhOABhTQAClBhCmWQgNhNgQhRIgKgxIgEgSIgGgaIgRhNQgQhLgYhYQgXhjgehvIgXhcIgHgdIgVhUIgLgrIgqizIgShOQgQhGgKg3IgDgPIgHgnIgLg9QgQhigIhWIgCghQgIhZADhMIADgxIAAgDIACgcQAEgkAGgjQATh/A0hjQANgYAOgWIAIgMQAegtAqglQAtgqA9geQBlgyCOgRQCKgQCtAPIAuAFIAkAEQA3AIA5AKQDeAkEBBbQCpA3C4BMQCXA9CgBLIAoASIAqAUIALAFQD4B0DoCBQDBBoCzBvIBLAwQCQBaCABdIACABIASAOIA8AuIALAIQCSBtBrBnQApAnAlAnIAFAFQAiAjAdAiIAIAJQBcBkAsBYIABACQAeA4ARA1QBZElA2GdQAeDgAUEAQASDjALD8IABAUIAEBlIABAtQAbJSgfJIIgIBMQgPChAACtQAABBABBGIAAAeQADBXgCBOQABCJgOCEIgDAgIgBAGIgJBEQgYCeguCZQgMBVALBkQACB2ARCLQAMCEgJB1QgHBwgoBhQgSChiZD7QgZBjgQDdIgHBZQgMCagJA0QjmGbj6BmQh/Bdi9BVQvFFlztCbIhyANIgIABIi0ATIhBAHQ0WCB8JAtQu7AYxIAAIg3gBg");
	this.shape_373.setTransform(933.9357,700.6437);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBOsUglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlSEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGYQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QBiAZDHAdQBBAKFlAvQKOBWGxBaQMyCsPxoOQGZjVGNk1QFekPEYkoQH2oTApqzQAeoLj0rWQhGjQiXmDQiVl+g5irQhikigajOQggj0A6izQB1llKfAcQJAAXNQElQMFELJ2FjQEuCrC7CVQDECdApBwQDWJIAhTgQAbQGhgVcQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_374.setTransform(936.9201,682.5985);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("rgba(255,255,255,0.996)").s().p("EgEBBQGQ4Gga7ihBQpVgWsZghIo5gZQsPgji1gDIg2gBQnXgHligvQx4iHtto1QinhsiSh0QuJrNAAvHQAAmyD4mdQAthKA0hKQBVh3BxiDQBThgBmhqQBVhZB4h0QB8h6CZiOQCHh+B9hqQDZi4C+iBIAxghQDwidDvhiQApgRApgPQDxhbEYguQA4gJA9gFQEwgiG9AjQAoADA0AMQE8BQKmFcQBhAyBiA1QD2CDENB9QEVCHExCLIBBAgQB3A5CSAhQCaAnDHAHIAvACQEqAEF5gtIBwgNIGmgyIAggDQCQgPD5gcQBwgMBpgHQFHgkEEAKIAfAAQDsAHEGA1QBTARBeAXIBKATQCMAmDHA9QCPAvCcA6QDsBRFzCYIBJAdQFtCNDpAmQBrASDFASQBVAAFVAcICoAHQG8AcFXASICJAKQEQAXEdgvQJLhwJNmYQApgdApgfQE5joEakxQCXicCAimQByiNBeiPQA9haAvhcQCPkDAikcQAkjSgcjkQgJhZgThgQhNknh5lYQhCiZhLijQhXidh3j/IhIiPQiMkfhGi0QgRgtgKgmQgliAgIh3QgTiFAFhxQgFjeBMiqIAGgOQCblYKQgHQCmgEC8AOQHlAgJhCeQDYA2DPA9QImChHeDVQD3BxC3BnIBUAzQDICGA+BhQDDE3B5IkQBRFSAkH9QAdIFgIJ6QgKI4gnKtIgDA+QgMDZgNC6IgODtQghLzhPMXIAAABQhoNsg4CyQgdA9gVBpQgaCIgLAkQgeBhg5BEQhGBVh/A9QjsCKpnCQQh/AembBaQlUBKi/AwQinAyixApQj4BekHAgQwICn5EBJQxJAs0jAHImSABQuHAAvlgQg");
	this.shape_375.setTransform(934.5463,671.538);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(255,255,255,0.996)").s().p("EABTBR0IjOgDQ3SgX6kg8QpxgWshgiIhsgEInegVQrrghj6gHIg4gBIhNgBQnLgMk0gnIg/gHQx3h6tvojQishriZh1IgXgSQucrRAAvQQAAm2D+mhIAIgMQAuhLA3hMQBShwBrh7IARgUQBUhgBshuQBOhQBohmIAdgcQCEiACZiNQB3htBuhcIAogiQDhi4DIh+IAEgCIAwgeQDbiGDhhWIA4gVQAqgQArgOQDZhID7gmQAjgFAlgEQA4gGBAgBQEtgQHKBEIAQADQAjAGAqALQFbBsKXFbIBqA3IBfAzQDKBpDjBaIBsAqQDsBhEKBbIBrAlIBEAZQBKAcBWAUQA1ANA9AJQBsAUCFAGQA7ACA9ABIAxAAQEIgGElgbICFgNIBzgJQCPgLC6gLIBngHIAhgBQCYgED4gLIBYgBQBCgCBDABQDxgLDgASQBEAFBAAGIAfACQC5ASC4AgQBBALBJAOIBzAYIBFAPIBNASQBWAWBxAeQBHATBPAWQCXAsCfA2QDIA9EHBiICiA7IBMAaQFsB8EAASQBzAJDBAGQBogMFEAHIACAAQBWgDBUgFQFWgHEigWICZgJICHgGQDOgJDRguQBAgOBAgSQJAi4H1nQIAGgGIA+g+QEHkGDVlKQB1inBdivIACgGQBSiRA7iOQAphaAahbQALgiAJgiQBBjagRjmQgBhHgJhJQgNh+goiEQgWhRgghXQgphdgvhjQhei4hhjIQhEhqhBhtIgthGQh0iRiFjmQgrg/grhFQgjg2gegzQh3jFhHiOQgUgsgNglQgmhkgRhgQgFgZgCgZQgTiDAXh3IAGgzQAWi1BWiWIAHgNQBLiICahYQDfh/F7gcQCpgRC9AAQCegCCrAJQFuARGhBGQDcAiDVApQCkAgCfAlQGCBZFgB0QD9BYDEBSIBZApQB8BDBRA3QAyAkAeAgQD5ECCuHYQBOClA+DYQA0CmAkDjQA8H1AHKlQABDPgDDiQgIGKgUHTIgDA/QgHCygJCkIgEBHIgMDzIgFCaIgIDyQgDIrgrJ8IAAABIgjFxQg8IbgnC6QgaBCgSBpQgXCEgKAvQgaBigxBLQg+BehtBJQgdAZAZCLQAMBEA3DfQAwDFALBZQAQCEgrASQgZAPkLgUQiIgLm7grQtIhRg7AfQiFBCiNA7IgcAMQjbCFjnA9QiZBGikAeQtZDA27BeIlHARQvWAtyUANQm5AEnTAAQq8AAr2gJg");
	this.shape_376.setTransform(932.1611,660.8428);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("rgba(255,255,255,0.996)").s().p("EAG4BTgIjUgCIhFgBQ3YgT61g7QqOgWspghIhvgFIgjgBInKgUQrIgflBgLIg5gBIhPgCIgUAAQnfgQkeggIhAgGIgTgCQyRhouBobQiyhqigh3IgYgSIgIgGQu+rZAAvhQAAm/EImpIADgEIAIgMQAwhMA6hOQBUhxBth8IADgDIASgUQBWhhBwhyQBPhQBnhkIAGgGIAegdQCMiGCaiMQB2hqBthZIAKgIIApgiQDli2DPh6IAIgEIAEgCIAygdQDah7DkhOIASgGIA6gTQAsgOAtgNQDVg9D6ggIAVgCQAjgEAngCQA6gDBCAEQEqACHRBlIAHABIAQAEQAkAIAqANQF6CIKIFZIBUAtIAZAOQAwAaAxAZQDDBhDhBLIAcAJQA3ASA6ARQDnBNEMBBIAXAGIBwAbIBHATQBDASBLAMIAXAEQA2AJA/AFQBmAMB+ABIAUAAIB7gBIAygCQEQgOESgXIAXgCICJgKIB3gGQCJgFCsAAIAbgBIBqAAIAiACQCfAGD2AHIBAAEIAaACQBDADBEAGQDgAFDiAiIAXADICFATIAgADQC2AdCpAfIAYAEICNAbIBfASIAYAFIBIAOIBPARIC0ArIAcAGQBLASBQAVQCfAoChAyQDKA3DvBSIAjAMQBSAbBXAbIBOAXQFrBpEWgDQB8AAC9gGQB0gWEagOIAhgDIACAAQBWgKBUgMQFJgjEeg4IAOgDQBNgMBKgOICEgWQDLgjDJhDIAJgDQA6gUA5gXQIzj6GgoCIAFgGIApg4IAKgOQDXkdCWlgQBViuA8i3IABgGQAchMAVhMQAWhIAQhHQAXhaAKhZQAEgiADghQAMhrgJhtQgHhpgahrQgNhCgUhCQggh1g6h4IgQghQgcg6ghg9Qg1hUg7hZIjJkfIgng3QhShfhMhgIg0g+QhthkhniIQgmgvgogzQgyg4gyg+QgogwgkguQiNixhYiEIgZgpIgRghQgyhdgehbQgIgXgFgYQglh8AFh1IgCgxQAAgzAFgwQANh5BHh1IAIgOQAYgpAfglQBHhVBuhDQCxhsEQg7QBKgRBRgMQCpgeC/gRQCfgQCsgGQDigKD2AIQCdAECkALQDgANDaAUQCnARCiAUQD4AgDtArQCLAaCGAdQEBA9DRA7IBcAeQB+AzBaAqQA0AdAjAZQCdBwCICpQB1CHBmCsQBqCHBZCzQBUCKBDDAQAnBwAkB8QBdFYAmIiQAKDSAEDqQAEFHgGF9IgFC2IgCBBQgFCzgGCtIgDBLIgJD6IgDCeIgGDOIgBArQgBDpgEDMIgED2QAGD8gGEaIAAABIgUF8QgjGwgcDzIgLBOQgVBIgPBpIgcC6QgVBkgqBRQgzBlhcBVQgZAlAVCDQAJBVAsDWQAnDBAIBnQAMB+gkAfQgWAmjVALQgCABBBC7QBCC8gDAAQiUA6gmAMQibAwifAHQkVALjaiYQhahFgbgUQgqgfgNAXQgnAdjAAaQjEAagnAaIgQAJIgIAFQi+CmjHBYQiGBkiNAtQgqATgqAMQr2Dz3oB6IlOAWIhiAGQvAA2yJAUQqNALrKAAQoEAAokgGg");
	this.shape_377.setTransform(929.5012,650.2821);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(255,255,255,0.996)").s().p("EAM7BVlIjagCIhHgBIiMgBQ3FgQ6hg3QqtgXszghIhygEIglgBIhLgDImPgSQqlgdmJgOIg7gCIhRgCIgVgBIg1gCQnWgRkHgaIhBgFIgTgCIgsgDQyehZuMoNQi4hqinh4IgYgSIgIgGIgSgNQvarfgBvvIAAgBQAAnGERmwIAGgIIACgFIAJgMQAyhNA9hQQBThtBqh3IAMgOIADgDIATgVQBZhiB2h2QBKhKBchaIAWgVIAGgGIAggeQCTiNCciKQBqhdBihQIAfgYIAKgIIArgiQDYimDJhyIAngWIAIgEIAEgCQAagNAbgNQDLhqDYhDIAwgPIASgFIA9gRQAugNAugKQDFgwDngZQAZgDAbgBIAWgCQAkgBAoABQA7ABBEAIQEZAWG1B3IA4AQIAHACIAQAEQAlALAqAPQGaCjJ6FaIAVAMIBCAkIAaAOQAyAaA0AYQCmBMDBA3IBQAWIAdAIQA5AOA9ANQDLA0DsAlIBQAMIAXAEIB0ASIBKAMIBIALQAjAEAmADIAYACQA3AFBBACQBJAEBWgBIBLgCIAUAAIB+gGIAzgDIHfgkIBRgGIAYgBQBFgEBIgDIB6gBQBqACB7AGIBZAEIAcACIBrAHIAjAEQCfARDkAXIAZADIBAAJIAbAEQBDAIBHAMQCyARC+AlIBXARIAYAFICHAaIAgAFQCNAeB8AXIBcASIAZAEICSAbIACAAIBhARIAZAFIBKAOIBRAQIBeAUIBdAUIAdAGQBOAQBSATQCnAnCjAtQCuArC5A5IBfAdIAlALQBVAYBaAWIBRASQFpBUEtgbQCDgKC6gUQBpgbDCgbIBkgPIAhgFIACgBQBWgRBTgUQETg3D6hLIBUgaIAOgEQBLgUBIgWICAgmQCsg0CnhJIA0gXIAJgEQA4gbA2gdQIek9FJoxIAEgHIAQgeIAQgfIAIgOQCmkzBZlwQA2izAci8IAAgGQAOhNAJhNIAEgkQAGg3ADg3QAHhZgGhYQgBghgEggQgGhogahnQgJgkgMgkQgTg/gbg/QgXg9gdg9QgyhrhKhtIgUgdQgggvgmgxIgIgLQg/hMhIhPQhwh7h+iCIgugxIg2gwQhCg7g9g7Ig8g3Qh/hZhwh1QgugpgsgsIgbgYQgrgmgrgpIhXhSQigichrh3IgeglIgWgdQgsg8ghg6QgOgXgNgYQgLgWgJgVQg3hxgRhuQgGgYgEgXQgJgwgDgvQgJhjAehiQAGgUAIgUIAGgOQASgrAegqQA5hNBfhHIAZgSQCth2EShUQBKgWBRgUIApgLQCXgmCogeQCfgeCugXQDjgeD4gQQBngIBpgEQA7gDA7gCQDigJDegBQCpABCmAEQD8AHD0ASQBvAJBuALIA6AGQEFAjDbAiIBhATQB/AjBiAcQA1AVAoARQCsBRCaCBQBkBLBcBbQAiAhAgAjQCABnBwCNQBtBsBeCZQA8BZA4BkQBbCXBKDKQBGCtAvEFQAeDOATD3QAUFIAGGQIAAC6IAABEIgBDIIgCCqIgCBNIgEEDIgCCkIgEDUIAAAtQAADEgCC3IgBBJIgDD9IADCeIAED7QAFBCAEBGIAAABQADDEAADDQgRGdgREdIgIBQQgQBOgLBpIgOCFIgHA9QgQBmghBYQgpBrhKBfQgUAxAQB8QAHBlAjDPQAeC9AEB2QAKB4gfAsQgSA5isAkQgDAWAzCrQAzCugEAZIgWAQQhlA7gdAcQgxAdBdEDIBCCzQAdBTgKAKQgqAtsXgHQnAgFhnABQkBACgaASQhxB5h2BAQgjAagkATQhWA7heAfQqUEL2ZCPQioAOiwAOIhkAHIjNAOQuDA6w+AaQtSATvBAAQlTAAlhgCg");
	this.shape_378.setTransform(927.125,637.2924);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_379.setTransform(927.5298,619.6208);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(255,255,255,0.996)").s().p("EAWVBb0IhKgBIiWAAIicAAIh5gBQ2sgJ6OgyQrxgWtPggIh5gFIgmgBIhRgDIhZgEIhEgDIkUgLIyFgwIg/gCIhWgDIgWgBIg4gDIhEgCIgwgCQmsgTjqgQIhEgDIgUgCIgugCIg6gDIgpgCQy5g1ulntQjHhpi4h7IgcgSIgHgGIgUgOIgXgQIgRgMQwgrugCwRIAAgBIAAgDQABnZEonAIAFgHIAFgIIAGgJIADgEIAIgMQA3hQBEhVQBUhqBohyIAKgJIAJgKIANgOIAEgEIAVgXQBfhkCBiAICZiUIAMgMIAPgOIAYgXIAHgGIAighQCnibCfiHQBehQBZhDIANgLIAZgSQAQgNASgMIAJgHIAughQDQiUDHhjIAVgLIAfgPIAugUIAIgEIAFgCIA7gZQC8hODLgxIAfgHIAmgJIAzgLIATgDIBBgMQAxgJAygHQCygbDPgMIAkgCIApABQAbABAeADIAYACQAmAEAqAIQA9ALBHASQEEA9GKCZIAtARIAqAQIA6AXIAGADIAPAGIBRAiQG/DTIzFAIA3AfIAaANIAZANQAiARAlARIAcANQA3AXA6AUQB/AsCRAbIBAALIA7AKQAqAGAsAEIAfAEQA+AGBDAEQCiAOC7ABIBBAAIA4AAIBXgBIAYgBIB8gCIAhAAIAugBIATAAIA4gCQAlgBAqgDIAZgBQA7gDBGgGIAigDIBGgFIA/gGIBNgHIAWgCICFgNIA2gGQDFgVCmgMIBJgEIBGgCQAqgCAsABIAaAAQBJACBOAFQA+AFBCAIIBbAMIBMALIBLANIBdASIAdAGQA2AKA5ANIAkAIID2A9IBOAVIBKATIAaAHIBBATIAcAHQBDATBJAWQBuAcB5AlIBNAYIBHAVIBZAaIAZAHICKAnIAiAIQBDASA6AOQAoAKAqAIIBJAOIBkASIAXAEIADAAIBVAOIBKAMIACAAIBpAQIAaAEIBNAMIARADIBHAMIAWADIBPAOIBiARIAeAFICrAgQC4AiCpAnQBoAWBjAYIBfAWIBTATIBnAUIAnAGQBeAPBhAIIBWAHQFnAaFWhVQCTgjCxgyIBvgoIBggiIBgghIBhgjIAggMIACgBQBUgiBUglQCthJClhVIBQgpIBagxIBQgtIANgHQBGgmBDgnQA+gjA5gjQBTgzBQg1IBDguIBOg7IAuglIAHgGQAygpAvgsQG1mlCSpRIANg2IAHghIACgHIAGghIAHghIACgOQA/lUgimEQgIi3ghjAIgCgGQgLhNgQhNIgBgEIgEgQIgEgRQgMg2gPg1QgXhVgjhRQgLgegOgdQgphdg6haQgUgegVgfIgJgMIgIgJQgfgsgmgrQgqgzgwgyQhRhXhmhUIgbgXQguglgxglIgKgHIgUgPIgVgOQhBgthHguQiNhbikhfIg8giIhBgiIg7gfIgWgLIhQgqIhKgnQidhEiBhMQg8geg1geIgggQIhBgjIgmgUIhrg6QjBhtiPhaIgogbIgegVQg7gsg0grIgngjIgegcIgEgEQgWgVgTgVQg9g/grhBIgbglQgbgngWgnQgxhTgShXQgGgSgCgSIgCgMQgFgigBghIAAgQQABgpANgrQALguAjgzIATgZQAggmAtgpQAtgnA4gnQBmhICIhIQBIgmBRglIAogSQA+gcBDgcIB2gxIBHgaQCfg9Cug5QDlhKD7hCQBogcBrgaIB2gbIAQgFICFgeQCbgiCbggQCsghCsgeQEBgrD/ghQBzgOBzgNIA8gGIBcgIICNgLQCLgLCDgIIBlgEIDwABIBkAHQC/ARCzAuQB2AZBxAkIBTAaQA2ANA1ARQBeAcBZAlIAIADQCPAsCDBGQBZApBUAvQCWBHCHBmQCBBMBxBzQAWATAWAVQBaBWBQB3QAlAwAiA/QB6EIBGHaQAMBfAMBnIAGBHQAKBoAHBsQAGBZAGBdIADBTIAHCRIAGCPIAFCwIACBHIAECqIAAAxQAEDGACDSIAABPIACEQIAAAgIACCMIADDaIAAA0IAFBoIABAnIAAABQACCDAEBaIAGBYIAGBkQAEBgAGBAQAiEdATEsIACBXQgBBYgBBqIAACPIgBBCQgFBpgNBkIgLBJQgQBRgZBQQgIBIAJBvIAAAEQAFCHASDBQAPC1AACXQAEBsgRBHQgKBVhYBKQgEBAAYCMQAXCTgFBKIgMAZQg1BIgRA6QgWBAAVCIQAFAzAIA5QAJBUARBvQAHArAAAgQABASgDAMQgQB0gpFUIgzGZQgFAVgwG0Qg6Gtg7AMQglAanBiXQjwhRhDgUQiNgrgMAOQhBBhhHA4Qg+BHhHAlQniE3zvC6QiwAYi8AWIhrAMIjZAXIjjAVIivAQQsTBCu4AlQy4At26ACIjoAAg");
	this.shape_380.setTransform(929.05,597.825);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("rgba(255,255,255,0.996)").s().p("EAXWBfvIh9AAIhcgBQ28gF6ngvQsXgWtjggIh8gFIgngBIhTgDIhdgEIhGgDIgngBIj9gLQpBgXp3gbIhBgCIhYgEIgXgBIg6gCIhGgDIgxgCIgXgBQmugTjpgMIhEgDIgWgCIgvgCIg7gCIgpgCIgRAAQzcgcvAniQjQhojBh8IgdgTIgHgFIgVgPIgagQIgSgMIgKgHQxSr7gCwrIAAgBIAAgCIAAgBQAAnlE3nLIAEgGIAFgHIAFgJIAGgIIAEgFIAHgKQA6hSBIhYQBWhpBrhzIAFgGIAJgJIAJgJIAOgPIADgEIAXgYQBjhmCJiFICWiRIAKgKIANgMIAPgOIAYgXIAHgGIAkgiQCwijCjiGQBchLBVhAIALgIIAOgKIAagTIAlgbIAIgGIAwggQDSiPDLheIARgHIAYgLIAfgNIAxgUIAJgEIAFgCIBAgXQC5hEDLgoIAXgFIAggGIAngHIA0gIIAUgDIBDgJIBogMQCugTDIgGIAbAAIAlACIAtAEIA7AKIAZAFQAmAIArALQA/ARBIAYQD+BQF8CqIAjAPIAsAUIAqATIA7AbIAHADIAPAGIBTAoQHNDoIUE2IArAZIA7AeIAcANIAaAMQAmARAnAPIAeALQA5AUA+AQQBtAdB5AQIA3AHIBEAGIA+AFIBbAEIAfABQBBABBEgBQCOgBCggKIA7gEIBEgGIA5gFIBagIIAagDIBmgJIAXgDIAigDIAwgFIAUgCIA6gGIBRgKIAbgDIBvgOIAWgDIAkgEIBGgJIBAgIIBQgKIAVgCICIgRIA4gGQCtgVCPgKIA6gDQAlgBAmAAQAkgBAlACQAtABAuADIAbACQBLAGBQALQBAAJBEAMIAfAGIBAANIBNASIBMASIBfAZIAdAIQA3APA5ARIAkALIC9A8IA/AVIBOAbIBLAZIAaAJIBCAXIAbAKICPA0QBSAcBZAhIA/AWIBPAcIBHAYIBbAfIAZAIQBLAYBCATIAiAKIBEASIA7AOQAoAJAuAJIBMANIBCALIAnAGIAXAEIAEAAIBZANIBOAMIACAAIBuAPIAaAEIAeAFIA0AHIARACIBJALIAXADIBQANIBkAQIAgAFICvAeQDEAiCrAkICLAdIBDAOQAxAKAyAJIBVAOQA2AHA2AFIAnAEQBjAHBlgBQAsAAAtgBQFjgKFph3QCagyCqhCIA3gZIA9gbIBhgsIBfgsIBhgwIAfgPIACgBQBTgrBTgvQCGhLCEhTIBAgpIBNgzIBYg8IBOg3IALgIQBDgwBAgxQA5gqA2grIBlhRIA0guIA9g3IBIhGIAqgsIAGgGQAtgyApgzQF1nSA7pfIAEgqIAEg3IACgiIABgIIABgiIABgiIAAgOQAGlfhdmHQgoi2g/i+IgCgGQgWhHgbhIIgEgLIgBgEIgGgPIgHgRQgUg1gZgzQgmhRgwhNQgRgcgTgbQg6hXhIhRQgYgcgbgbIgKgKIgGgGIgEgEQgogogsgnQgzgtg3grQhghMhyhIIgfgTQgzggg3gfIgJgGIgXgMIgagNIgEgCQhGgmhNglQiahLi2hNIhCgbIhFgbIg/gYIgagKIgOgGIhKgbIhQgeQirg5iJg4QhAgYg5gWIghgNIhGgbIgogPIgagKIhagkQjOhTiihKIgsgWIgigSQhEgig7gjIgtgcIgkgXIgEgCIgxgiIgegWQg1gogugpIgigfQgkgggfgiQhDhGgshLIgSgfIgFgLQgQgegMgeIgFgOQgOglgHgnQgIgmACgpIAAgQQABgPAEgOQALguAkg1QAhgvA0gzQAigiAqgjQBDg3BUg5QBEguBQgvIAmgWQA8gjBCgkIB1g9IBEghIAbgOQCUhICihGQDjhiD9hdQBogmBsgmIB3goIAPgFICFgsIBhgfIDYhCQCug0CugvQEDhGEEg8QB1gaB0gZIA9gMIBegTICQgbIBjgSICugeIBngPID1gfIBmgJQDDgPC6AEQB6gBB3AHIBXAFQA5ACA4AEQBiAGBgALIAIABQBJAGBHAJQBLAKBIANQBhAPBdATQCmAcCaAwQCVAiCKA7QAbAJAaALQB2AsBsBBQA3AaAzAjQA9ApA6AyQCuCHBzFuQAbBdAYBrIAPBIQAVBoARByQAOBaAMBhIAKBWIAQCWIANCUIANC2IAFBJIAKCxIACAzIAGB6QAGCYAFCsIACBTIAFEdIABAiIACCRIAEDjIAAA3IADBtIABAoIAAABIACBvIACB9IAEBaIADBnQADBlADA/IADAiQALCvAPBcQAfCKAZCfIALBbQAJBdAJBqIALCUIAEBFQAEBqgBBrIgDBMQgEBVgJBWQgBBTAHBqIAAAEQAGCJAKClIACAtQAKCyAACoQACBngIBVQgGBdgsBZQgDBVAKB8QAKCGgEBjIgHAdQgcBLgKBFQgNBVAIB6IADBvQACBeAFBsQADAqgBAkIgCAfIgcEfIgSC1IgrGwIgxHLQgpFZgsCGQgiCPjxAzIgDAAQgyAUBYD2IA/CsQAcBSgJALQgPAYktAYQk0AZgKAHQmEFlzcDcQizAfjEAbIhtAPQhuAPhzAOQhyAOh3ANIi0ATIiTAPQr1BJubArQzYA73+AIIjvABIhNAAIibAAIihAAg");
	this.shape_381.setTransform(932.144,573.041);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBlxUglqgABgv0gB1Qr5gdyAgzQs0gkhxAAQ52AAySsLQyRsKAAxNQAAn1FKnZQCNjMDljwQCliuEwkgQFmlSEdjNQEqjYEfh4QEdh4FNgzQE1gwGtAAQD6AAM1GfQJwE8KqGZQEDCbGCAXQE3ATHMhCQCngYD1gsIGhhLQH8hYE4gSQEigRF2BhQEjBMGQCiQDjBcGwC7QFuCZDTA2QBiAZDHAdQBBAJFlAvQKOBWGxBaQMyCtPxoOQGZjWGNk0QFekQEYkoQJuqTgrt2QghqumvswQitlFk+jxQkUjRmYihQk7h9nYh8QoeiFkEhDQpUiZk+iZQmsjOiuktQhQiLDajmQDSjcHBkNQI4lVMglMQNMleN8j6QPTkTNphsQPKh4LnBkUAJ+ABVACFAgbQAjIeAHOqQACGQAECBQAHDdASAyQDWJIAhTfQAbQGhgVdQhPReiFP2Qh5OVg9BmUgF9AJ+goXAEgUggSADlg1XAAAIgeAAg");
	this.shape_382.setTransform(936.9201,534.8099);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("rgba(255,255,255,0.996)").s().p("EAPWBliUgg/gAOgoQgBiIn3gUQplgYsugkIlzgQQnVgVhqgBQitgBiOgHQ29g6wrq/IhxhNQwyr2AAwfQAAndErnEIAkg1QB6iuC5jJIBEhIQCLiSDrjfIBkhgQEQj/DlizQBNg8BJgzQDCiKC+hhQBpg3BqgqQCrhFC8gsQCAgfCLgUQC/gbDqgKQCQgGCwAMQDNAPIFDyQCjBMC+BhQG2DgHSEMQDJB1DZBwQBFAkBOAbQDaBPEjAKQBjAEBxgFQCwgHDbgbQBQgKBagNQBigPB9gVIDAghIGkhJICwgbQFhg0EKgBIAiAAQEZgDFrBjIAWAHQEBBHFnCQIBOAfIHcDEQBXAjBoAnIBKAcQC3BIC0AxQBUAZBGARQBrAYDAAdIGnA6ICzAaQINBOGLAwQGLA5G2hkQGZhdG4jlQBDgjBEgmQEaifEOjHQB7hcB3hkQFSkfD7k+QCLitBfi8QEiohhLqeQgLhqgVhtQg/lJidlVQh/kUi/kdQgVgggXgeQi4kDkujJQgngagogZQkZimlTiAIhqgnQjqhSk2gdQg/gJhEgHQl2g2j6ABIiMgNQiMgJh4gUQi/gUiXghQibgah1gpQhHgVg/giQiLhOhohsQiAh9hKiYQgVgpABgvQAAh9CGinQC1j2GOkoIA3gqQHVlyKOlNIBSgrQH6kMIei0QFNhuFShhQPWkZNyh8QDughDhgVQK0g/I6A2QKvAuEJYcQAeB2AYCKQBPIBAYPKQAGEsAFCnIACBKQAHDRARBCQB3GAA2J/QAVEGAMD/IAMEIIADApQAtLYgiPQQgOFbgXF3QgxMMhPL0QghE6gmExQhvNng+CnQhCCAiIB2QkgFEo9CgQp5DcxiCOQoaBCp/AwUgcHACJgoaAAEIh1AAQlgAAlugDg");
	this.shape_383.setTransform(936.2439,536.0146);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(255,255,255,0.996)").s().p("EAROBlaUghOgANgorgBhIn7gUQpngYs5glIl6gQQnHgUh+gCQi8gDiAgGQ3Ngww2q/Qg7gmg4gnQxCr5AAwnQAAnhExnHQARgbAUgbQB7ivC7jKIBFhJQCOiUDrjgIBmhgQEUkCDniyQBOg8BKgzQDGiKDAhgQBrg1BsgpQCshCC/grQCBgdCOgSQDBgaDsgIQCLgFC4AYQDZAdH7DwQClBPC9BhQG5DjHWERQDJB0DiBlQBHAgBQAYQDdBEEnACQBkABBxgGQCvgKDfgeQBPgKBdgPQBigPB/gWIDCghIGmhGQBdgOBVgLQFWguEcAPIAjACQEYAKFtBsIAWAHQD8BLFvCVIBPAgQDWBXEKBpQBUAgBuAlIBMAZQCjA9DSAxQBUAXBIAQQB1AYC5AbIGmA9IC0AcQIEBRGgATQGMAfG1h5QGZhxGxjyICGhNQEYiqEIjQQB5hgByhpQFIkuDelUQB5i1BOjFQDtorh2qiQgShpgahtQhRlIi5lEQiTkGjakHIgxg5QjJjqlAi6IhSguQkziclEh2IhrglQjphOk1AbQg9ABhBAFQlXgKj8BCIiDALQiHAUhtgCQi4ASiNgIQiXAFhygYQhKgJg+giQiJhLhkh5Qh1iBhDijQgTgqAAgvQgCiEBwipQCXkQFdlDIAwgwQGkmzJclzIBNgxQHok/Iai0QFRhwFUhjQPakgN8iLQDuglDjgZQK1hNJCAhQMKANF4UsQAwBlAnCHQB6HiArPsQAJEjAHC5IACBMQAHDGAPBSQBmGLAvJ/QAREdALDqQAGCbAIBvIAFAnQBILCgYP2QgKFdgUF7QgrMHhMMLQggE9gkE0QhlM4g/DoQg6CHh1B9QkEGnnoCWQo9EFyXCkQobBJqKA2UgcIACTgpBAAHIjuAAQkqAAk0gBg");
	this.shape_384.setTransform(935.975,536.9443);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("rgba(255,255,255,0.996)").s().p("EATFBlUUghdgAKgpHgBiIn/gUQppgYtFglIl/gQQm6gUiTgDQjJgFhygEQ3egnxBq+Qg7gmg5gnQxSr9AAwuQAAnlE1nLIAmg2QB9iwC9jMIBGhJQCQiWDtjhIBnhhQEXkEDpixQBPg8BMg0QDJiJDDheQBsg0BugpQCvhADBgoQCCgcCRgQQDDgYDugGQCFgEDBAkQDmArHwDuQCnBRC8BhQG9DnHZEUQDIB2DtBYQBJAcBRAUQDgA6ErgFQBlgBBygJQCtgMDkghQBNgLBggPQBjgQCBgXIDDghQC3geDxglQBfgOBUgKQFMgoEuAgIAkADQEYAXFvB1IAWAIQD3BOF3CbIBQAgQDpBfD5BdQBTAeB0AiIBNAWQCQAzDvAxQBVAVBKAOQB+AYCxAbIGnA/IC0AdQH6BUG2gKQGNAGG1iOQGZiGGqj/QBBgoBCgpQEYi2EBjWQB4hlBthuQE8k+DBlpQBpi+A8jPQC3oyigqnQgYhpgghsQhjlHjUk0Qinj3j3jwQgagbgcgZQjZjSlSirIhVgqQlMiTk3hrIhsgjQjnhKk1BUQg6AKg/ARQk3Ajj9CCIh7AkQiCAwhjAQQivA4iEARQiTAkhvgHQhMADg+ghQiHhIhhiHQhqiFg7itQgQgrgBgwQgGiLBairQB6kqErleIAqg1QFzn1IrmYQAjgcAlgbQHVlyIXi0QFVhyFVhlQPekmOFibQDvgpDlgeQK2haJJALQNngTHlQ8QBCBUA2CCQCnHGA8QMIAWHmIADBOQAHC6ANBiQBVGXAmJ/IAYIJQAHCoAKBjIAGAmQBiKpgNQeQgGFggRGAQgkMBhKMiQgeFAgjE3QhbMJg/EpQgzCNhiCFQjoIJmSCNQoDEtzMC8QobBPqVA6UgcIACegppAALIloABInsgBg");
	this.shape_385.setTransform(935.9457,537.567);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(255,255,255,0.996)").s().p("EAU6BlUUghsgAIgpjgBiIoEgTQpqgYtQglImFgSQmtgTingFIk7gIQ3vgexMq9Qg8gmg6goQxisAAAw2QAAnpE7nPIAmg1QB/iyDAjMIBHhLQCSiXDujiIBnhhQEbkHDsiwQBQg8BOg1QDLiJDHhcQBsgyBxgoQCxg+DDgmQCDgaCUgQQDFgVDwgFQCAgDDKAwQDxA7HlDrQCrBTC6BhQHADqHcEZQDJB2D2BNQBMAXBSARQDiAvEwgMQBngEBygLQCrgPDogjICvgcIDmgnIDEghQDHghDkghQBggNBVgIQFBgjFBAxIAjAEQEYAlFxB9IAWAIQDyBSGAChIBQAgQD8BnDqBSQBRAbB5AeIBPAVQB8ApEMAwQBWASBNAOQCHAYCqAZIGnBBIC1AfQHvBYHMgoQGOgUG0ijQGZiaGjkMQBBgqBAgrQEXjBD7jeQB2hqBphyQExlOCjl+QBZjIAqjXQCCo7jLqrQgehpgmhrQh2lHjukjQi8jokSjaIg8gvQjpi6ljibIhZgnQlmiIkohhIhtghQjmhGk0CNQg4AUg8AcQkYBQj+DCQhAAhgzAcQh8BMhaAiQinBeh6AqQiPBEhrAJQhQAQg+ggQiEhGhdiVQhgiJgzi3QgOgsgCgxQgIiSBEitQBdlED4l4IAjg7QFCo3H6m9IBEg+QHCmjIUi1QFYh0FWhoQPiktOPipQDwgtDogjQK2hnJRgLQPDg0JSNMQBUBEBGB+QDSGoBOQuQAQEPALDgIAEBPQAICuALB0QBEGjAeJ+QAMFLAIDAQAGC1AMBWIAHAmQB9KRgCRFQgBFigPGFQgeL8hHM4QgcFDghE7QhSLZhAFrQgrCThOCNQjNJsk9CDQnHFW0BDSQobBVqhBAUgcIACpgqRAAOQkGABkOAAIlIAAg");
	this.shape_386.setTransform(936.0509,537.6495);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("rgba(255,255,255,0.996)").s().p("EAWuBlWUgh7gAGgp/gBhIoHgUQpsgYtcglImLgSQmfgSi8gHIk7gJQ3/gTxXq9Qg9gng7goQxysDAAw9QAAntFAnTIAmg2QCBiyDCjOIBIhLQCViZDvjjIBohiQEfkJDuiwQBRg8BPg0QDPiJDJhaQBugyBzgmQC0g9DFgjQCEgYCWgPQDIgTDxgDQB7gCDSA7QD+BKHaDpQCtBVC6BiQHDDtHgEdQDIB2EABBQBOAUBUANQDkAkE1gUQBngGBzgMQCpgTDtgmICwgdIDpgoQBkgSBigPQDVgjDYgcQBhgMBVgIQE3gcFSBAIAlAHQEXAyFzCGIAWAIQDtBVGJCnIBQAgQEPBvDaBGQBQAZB+AbIBRASQBoAfEqAvIClAeIEzAwQC3AcDwAnIC1AgQHlBcHjhGQGOgtG0i5QGZitGckaQBAgsA+gtQEXjMD0jlQB1hvBlh3QElldCGmUQBIjRAYjhQBNpDj1qwQglhogshqQiIlGkIkTQjRjakujDIhCgpQj5ihl0iNIhcgjQmAh+kahWIhuggQjlhCkzDGQg1Adg6AoQj4B9kAECQg7AugwAoQh3BohPA0QifCEhxBDQiLBjhoAaQhSAcg+gfQiChDhZijQhViNgsjBQgLgtgDgxQgLiaAuiuQBAleDGmUIAdhAQERp5HIniIA/hEQGwnWIRi1QFbh2FYhqQPmkzOXi6QDxgwDqgoQK3h0JZggQQfhWLAJdQBmAzBVB6QD+GKBfRPQAUEGAODzIAEBQQAICjAJCEQA0GvAVJ+QAJFiAGCrQAHDCAOBKIAJAkQCWJ5AKRtQACFlgMGJQgXL3hENOQgbFHgfE9QhIKrhBGsQgjCZg8CUQixLQjnB5QmMF+02DpQocBcqsBFUgcIACzgq4AASQk+AClKAAIjdAAg");
	this.shape_387.setTransform(936.2643,537.4828);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(255,255,255,0.996)").s().p("EAYhBldUgiJgADgqbgBiIoMgTQptgYtogmImQgSIpigZQjzgJhJgBQ4PgKxiq8Qg+gmg8gpQyBsGAAxFQAAnxFFnWQASgbAVgbQCCi0DEjPIBJhMQCXibDxjkIBphiQEjkMDwivQBSg8BQg0QDSiJDNhZQBugwB1glQC2g6DIgiQCFgWCZgNQDKgSDzgBQB1gBDbBHQELBYHPDnQCwBYC4BhQHGDxHjEhQDJB3EKA1QBPAQBWAJQDnAZE5gaQBpgJBygPQCogVDxgoICygfIDrgqIDHghQDlgkDLgYQBigMBWgGQEsgWFlBRIAkAIQEXA/F1COIAWAJQDnBZGTCsIBQAhQEiB2DLA7QBNAWCEAZIBTAPQBUAUFIAwICnAaIE2AuQDOAgDZAmQBfARBWARQHcBfH4hjQGPhHG0jOQGZjBGUknIB9heQEWjXDtjtQBzhzBgh8QEbltBpmpQA3jZAGjpQAYpNkgq1QgrhngyhqQialFkkkCQjljMlJisIhHglQkKiImGh+IhfgeIqmjAIhvgeQjjg+kyD/QgzAmg3AzQjZCrkCFCIhiBuQhxCFhGBFQiWCqhoBdQiHCChlAqQhVApg9gfQiAhAhViwQhKiRgljMQgJgugEgyQgNigAYixQAil3CUmvIAXhGQDfq6GXoIIA7hKQGdoJINi1QFfh4FahsQPpk5OijJQDxg1DtgsQK3iCJhg2QR7h2MtFtQB5AjBkB1QEqFtBxRwQAXD9AQEFIAEBSIAQEsQAiG6AOJ+QAFF5AGCWQAGDQAQA+IALAiQCxJiAUSUQAGFngJGOQgRLxhBNlQgZFKgeFAQg+J8hCHuQgbCfgpCcQiVMyiSBvQlQGn1rEAQodBiq3BKUgcIAC+grgAAVQl2ADmIAAIhwAAg");
	this.shape_388.setTransform(936.545,536.7602);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBl3UglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGZQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QBiAZDHAdQBBAKFlAvQKOBWGxBaQMyCsPxoOQGZjVGNk1QFekPEYkpQJuqSgrt2QghqumvsxQitlEk+jyQkUjRmYihQk7h9nYh8QoeiFkEhDQjig6kxE4QjSDWlQHyQivEHhSB5QiODQhfB1Qj3EyiCg+Qh+g+hRi+QhNi2gbkWQg4o/ChrBQCvr9FlosQGcqAIvjBQZxo5XFkxUAgtgGwAVmAC7UAJ+ABVACFAgbQAjIdAHOqQACGQAECCQAHDcASAyQDWJIAhTgQAbQFhgVdQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_389.setTransform(936.9201,534.2861);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(255,255,255,0.996)").s().p("EASOBlrUgiMgAMgqIgBmIl9gPQqOgat9gnIkagMQoigYh0gCQiEgBhsgDQ3qgsxGrSIhXg7QxKr7AAwqQAAnkE0nJQANgVAOgUQB/i1DEjSIAzg3QCTiZD7jvIBMhJQElkTDzi6QA6gsA4goQDbicDWhpQBQgnBQggQDIhRDfgwQBigVBogPQDeggEagIQBugDCDAJQDdAQJLEZQB+A9CMBHQHlD3IHEvQCYBZCiBVQB6BBCTAlQCuAtDVAHQCeAGDCgPQC0gNDdghIAXgDQCVgWDggoIAqgHIGjhJQC2geCagVQEUgkDYAAQBEgBBIAFQDtAREhBRQBMAVBTAbQDmBKEwB9IBrAsIItDnIAEABQCHA2CEAqQCkA7CdAhQAYAGAdAGQBkATCSAVQBcAOFJAsQDaAeC+AfQGAA9EyApQH9BNJFi5QFjhxF4jRQA4gfA4giQFYjLFFkJIAQgNQFZkcEBk6QD2ksB2lYQCYmxg1n2QgbkIhUkbQhplcjJlvQg7hrhChrQiUjtjfi+QhHg7hOg3Qjuilk4h7QhIgdhNgaQkFhXlShEQhggRhjgPQl5gzjRAMQhTgGg9ACQi5gEjqFAQgoA8gvBNQhnCxiCENQgkBHgkBRQhICSgtByQglBPgYA4QgvBmgrBPQgtBegtA+IgMARQh2CSiCAcQhNAgg6gbQiCg9hgirQgvhRgmhkQgrhtgfiEQhAjwgVkJQgqk+AqlWIAEgrQA7oQCrnUQBGi1BWimQDJl7EEj+QC6ixDUhrQEtiXEyiEQIijuIrieQK3jFKViSQOIjHMPhYQP2hxMbBOQI4AtEURGQBiEuA4HRQA8IcAQO0IAAAEQAFF3AFCkQAGDPAQBDQBHDsAvFGQAhEHAXEFQAKCRALB9QAYDgAPEFQAdI9gRLJQgNIVgmJcQgmJJg2I+QgxH9g9HlQhmMbg9DaIgKAYQitGVpRDOQqhEf14CrQmfAynZAoUgdWACegrlAACIicABInbgCg");
	this.shape_390.setTransform(936.5608,535.2548);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("rgba(255,255,255,0.996)").s().p("EAT3BllUgiZgAKgqhgBmImAgPQqOgZuJgoIkegNQoRgXiNgDIjugFQ36gjxPrRIhYg8QxYr+AAwxQAAnnE4nNIAbgoQCBi2DGjUIA0g3QCVibD8jwIBNhIQEokXD1i4QA7gtA5goQDeicDZhnQBRgmBRggQDKhODiguQBigUBqgOQDhgdEbgHQBqgDCKASQDrAgI/EXQB/A9CLBHQHoD7ILEzQCYBZCpBNQB9A6CWAgQCuAmDYADQCgACDDgSQCxgPDigjIAXgDQCTgXDmgpIAqgHIGkhIQC6gdCagSQELggDnANQBEACBIAIQDsAZEjBYQBMAWBTAcQDgBME5CCIBsAtQEHBtEpB0IAEACQB/AwCSAnQCPAxC7AjIA2ALQBpATCOAUIGlA7QDbAgC+AgQF5BAFCAWQH+AvJEjQQFjiAFyjaIBvhEQFZjZE8kPIAQgOQFUknDplNQDek5BalmQB2m1hSn6QgqkGhgkZQh4lcjflgQhBhohJhmQikjkjoizQhKg5hPgzQj8igk3htQhLgZhNgXQkUhLlKgmQhjgJhggDQlwgIivBWQhEAOgvAWQiRAyihFHQgbBCgeBPQhBC5hLETQgWBHgUBUQguCNgSB9QgWBRgOA6QgaBsgdBOQgbBmgoA9IgLARQhoCEijAFQhKAVg+gbQiGg7huiaQg5hJgyhaQg8hlgwh2Qhmjeg8j0Qhqk1ADlAIgBgqQgHn+B9nwQA0i5BGiuQCjmCDnkfQCjjCC/iEQEPi9EiihQIHkkIuimQK6jPKZicQOGjTMbhpQP3iFMmAyQJ6AWFqN/QCQD6BUHlQBVIcAaPBIAAAEQAHFeAGDFQAGDCANBVQA6DzAmFGQAbEiATDrQAKCgAMBuQAiDcAWEKQArI1gJLcQgHIYgjJjQgiJGg1JNQguIAg7HqQhcLsg/EaIgJAZQiiH1nmC5QpYFM26DDQmgA2ngArUgdUACogsMAAGIidAAInggBg");
	this.shape_391.setTransform(936.4029,535.9331);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(255,255,255,0.996)").s().p("EAVgBliUgimgAHgq7gBmImCgPQqQgauUgoIkjgNQoAgWikgFIjugFQ4IgbxZrQIhag8QxmsBAAw4QAAnqE8nQIAcgpQCDi3DHjVIA1g4QCXicD+jxIBNhIQEskZD3i4QA7gtA6goQDiicDbhlQBSglBTgfQDMhNDkgrQBjgTBsgNQDjgcEdgFQBmgCCRAbQD5AwIyETQCBA/CKBIQHrD+IOE2QCYBaCwBFQCAA0CYAaQCwAfDbgCQCigCDDgUQCugRDnglIAYgEQCRgXDsgqIAqgIQC7ggDrgmQC9gcCZgQQEDgbD1AZQBFAFBIAKQDqAiEmBfQBMAYBTAeQDZBMFDCIIBsAtQEgB4EUBlIAEABQB4AqCfAlQB6AnDYAkIA3AKQBwATCIATIGkA9QDeAhC+AiQFyBCFSADQH/ARJDjnQFjiOFsjjIBuhIQFajmEzkWIAPgOQFPkzDSlgQDGlGA/l0QBTm6hwn8Qg4kFhskXQiIlaj0lUQhJhkhPhhQi0jZjwiqQhNg2hRgwQkJiak3hfQhMgWhOgTQkjhAlEgIQhkABheAIQlmAkiNCgQg1AggiAqQhnBphaFPIgaCYQgbDBgVEYQgIBHgDBXQgTCKAGCIQgGBRgCA9QgGBwgPBPQgKBtgiA9IgLASQhZB1jDgTQhKALhAgbQiKg6h9iHQhChCg/hRQhMhchBhpQiNjMhjjfQipkqgkkrIgGgpQhJnsBPoMQAii+A2i1QB8mKDKk/QCMjUCqieQDyjiERi+QHtlbIxiuQK9jYKcimQOFjfMnh6QP3iYMyAVQK7AAHBK3QC+DHBvH5QBuIbAkPOIAAAEIAQIsQAGC1ALBmQAsD8AdFEIAlIOQAJCvANBfQAtDZAdEOQA5ItgBLvQgCIagfJrQgeJDgzJcQgsIEg5HuQhTK+hBFZIgHAaQiXJWl8CkQoOF538DaQmiA6nmAuUgdTACygsyAAJIk+ABIlEgBg");
	this.shape_392.setTransform(936.4019,536.2418);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("rgba(255,255,255,0.996)").s().p("EAXHBlkUgizgAFgrUgBnImFgOQqQgauggoIkngNQnvgWi9gGIjsgGQ4YgSxirPQgugegtgfQx1sEAAw+QAAnuFBnTIAdgpQCEi5DJjWIA2g4QCZieD/jxIBNhJQEwkbD5i4QA8gsA7goQDkicDfhjQBSglBUgeQDPhLDngpQBkgSBtgMQDlgaEfgDQBigBCYAkQEHBAImEPQCCBBCJBHQHuEBISE7QCYBaC2A9QCDAtCbAVQCxAYDfgHQCkgFDCgXQCsgUDsgnIAYgEQCOgXDzgsIArgHQDKgjDcghQDAgcCZgNQD7gXEEAlQBEAIBJANQDpArEoBlQBNAbBSAeQDTBOFNCNIBsAuQE5CCD9BWIAEABQBxAkCtAiQBlAdD2AmIA4AJID5AlQCrAYD4AmQDhAjC8AjQFsBFFigQQIAgNJCj+QFjidFmjsQA2glA3gmQFbj0EqkcIAPgOQFKlAC6lyQCulTAjmDQAwm+iNn+QhGkFh4kUQiXlZkKlHQhQhghVhcQjFjPj4igQhQg0hTgtQkWiUk2hRQhOgThPgPQkyg1k9AWQhmAKhcAUQlcBQhrDpQgmA0gUA+Qg/CfgRFXIAECfQALDJAhEeQAHBHANBaQAICFAfCTQAJBSAJBAQAQB1gCBPQAHB0gcA9QgEAKgGAIQhLBnjkgqQhIAAhDgbQiNg5iNh0QhLg7hMhIQhchShShdQizi5iLjLQjokghKkVIgNgoQiKnaAhooQAQjCAli9QBXmRCslgQB2jlCVi4QDUkHEBjbQHRmSI2i2QLAjiKfiwQODjrMziLQP4irM8gHQL9gXIZHwQDrCSCLINQCHIcAuPbIAAAEQALErAIEJQAFCoAIB4QAgEDAUFEQAPFZAMC2QAIC+APBQQA2DUAmETQBHIlAGMDQADIcgbJyQgaJBgxJqQgqIJg2HxQhKKQhDGYIgGAbQiMK4kRCOQnFGn4+DwQmjA+ntAyUgdSAC8gtXAAMInkABIilAAg");
	this.shape_393.setTransform(936.4948,536.0824);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(255,255,255,0.996)").s().p("EAYtBlpUgjAgADgrtgBnImIgOQqRgZurgqIksgNQnegVjVgHQiugGg9gBQ4ngJxrrPQgvgdgugfQyDsHAAxGQAAnxFGnXIAcgoQCGi6DMjXIA2g5QCbigEAjyIBPhJQEzkeD7i2QA8gtA8goQDoicDhhhQBTgkBWgeQDRhIDpgnQBkgQBwgMQDogXEggCQBegBCeAtQEWBQIZENQCDBBCIBIQHyEEIVE/QCYBaC9A1QCHAnCdAPQCyASDigNQCmgIDDgaQCpgWDwgpIAZgEIGEhFIArgHQDagmDOgdQDEgbCYgKQDzgTESAxQBFAMBIAQQDoAzEqBsQBNAcBTAgQDLBPFXCSIBtAuQFSCNDoBGIAEACQBpAeC6AgQBQASEVAoIA4AIID6AkQDFAcDeAjQDjAkC8AlQFlBIFygkQIBgqJBkVQFiirFgj2IBshOQFckCEikiIAOgPQFFlMCjmEQCWlgAHmQQAOnEiqoBQhVkDiEkSQinlZkgk4QhWhehchWQjVjGkAiVQhTgxhVgqQkjiPk2hCQhQgRhPgLQlBgqk2A0QhoAUhZAgQlTB6hJE0QgYBGgGBTQgWDVA3FeQAPBQAUBXQAwDSBZEjQAUBHAdBcQAjCCA5CeIAsCVQAkB7ANBOQAZB8gXA8QgEAKgGAJQg8BYkFhBQhGgLhHgbQiQg4ibhiQhWgzhYg+QhthKhjhQQjZimiyi3QknkVhxkAIgSgnQjMnIgNpEQgCjGAVjEQAwmZCQmBQBfj3B/jQQC3ktDwj4QG3nII4i+QLDjsKji6QOCj3M+idQP5i+NIgjQM/guJuEoQEaBfCmIhQCgIcA4PnIAAAEQANESAJErQAFCbAGCKQASELAMFDQAJF0AHCcQAIDNAQBBQBBDQAtEYQBUIcAOMXQAJIfgYJ5QgWI+gvJ4QgoINg0H2QhAJihEHWIgFAdQiBMYinB5Ql8HU6AEIQmkBBnzA2UgdRADGgt9AAQInpABIimAAg");
	this.shape_394.setTransform(936.6727,535.6031);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBl3UglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGZQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QBiAZDHAdQBBAKFlAvQKOBWGxBaQMyCsPxoOQGZjVGNk1QFekPEYkpQJuqSgrt2QghqumvsxQi2lXk2krQk0kql4jJQmGjPmNhDQmphHl4BlQoACLgxHhQglF2D3JqQBXDaCOEoQBPCmCREnQBxDuApB6QAyCbgiA1QguBKklhZQkchVl1jBQmOjOk7jrQlnkMiYjqQkinCg+p6Qg9pqCqpuQCxqEF6nVQGcn/I9jGQZxo5XFkxUAgtgGwAVmAC7UAJ+ABVACFAgbQAjIdAHOqQACGQAECCQAHDcASAyQDWJIAhTgQAbQFhgVdQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_395.setTransform(936.9201,534.2861);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBl3UglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGZQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QBiAZDHAdQBBAKFlAvQKOBWGxBaQMyCsPxoOQGZjVGNk1QFekPEYkpQJuqSgrt2QghqumvsxQi2lXk2krQk0kql4jJQmGjPmNhDQmphHl4BlQmKBrh3E0QhmEGBgGhQBKFCDNHJQB0ECDiHIQBxDtApB7QAyCbgiA1QguBKklhZQkchVl1jBQmOjOk7jrQlnkMiYjqQkinCg+p6Qg9pqCqpuQCxqEF6nVQGcn/I9jGQZxo5XFkxUAgtgGwAVmAC7UAJ+ABVACFAgbQAjIdAHOqQACGQAECCQAHDcASAyQDWJIAhTgQAbQFhgVdQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_396.setTransform(936.9201,534.2861);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("rgba(255,255,255,0.996)").s().p("EAXuBl1UgkjgAFgt8gBwIh9gFQrZgcwpgvIhcgEQrRggh9gBIhNgBQ5KgOx5r4IgdgTQx6sGgBxCQAAnvFDnVIAJgNQCJjEDajnIARgSQCfinEfkQIAZgYQFQk9EPjHIAmgcQEQjDEHh1IA2gXQEAhqEpgzIBDgLQEZgqF8gDQAmgBAqACQD3AKLiFwIBXAsQJDEmJ0F1IBnA8QDZB7EwAiQA/AHBCAEQEIANFxguQBEgJBIgLQB0gRCYgaICRgZIEJgvICZgcQGEhDEPgYQBWgIBOgCQDegIEOA5QBUARBZAYQDiA9EiBwQBTAgBdAmQC0BJEoB/IC4BPQDfBbCiA2QBnAhBeAWQAlAIAyAJQBNAPCJAUIDHAbIDdAdQHwBDFtBEIDmAqQLQCGNjmRQB3g3B4hAQElieEgjOQBwhRBuhXQDiizDEi9QBrhnBfhqQHsoiAtq8QAKiagMikQgpoqkop9QhHiYhZiZQhoiyiOijQh8iQiYiDQiPh7iehnQjFiCjVhfQh8g3h7gpQkZhbkOgSQgmgDglAAQjXgFiwA7QiCAkh0BGQhMAng+A0QhyBQhDB+QgvBLgZBlQgQA6gIBDQgZD3A+EzQANBEARBGQBBEVBGFoIAHAhQAtD/BkGCQAVBaAKBKQAVBiABBBQAUCHgvA0QhGBKkLg/QhAgMhEgRQkIg3kHiWIgjgWQjliOimi/QhThOhIhYQifilhgiqQhFhwgthjIgshsQg3ihgsijIhlntQgShPgOhTQhLm6A6nOQAVinAnioQBbmGCslRQBvjYCPi+QDPkUECjEQDjisEHhqQEih1EmhgQUxmyS+kCQEdg8ERgyQa7k2SzCNQDwAbC2D0QFWGrBmVaQAQDcALEUQARGgAFI+QACEeADCpIACBQQAFDSAPA+QAXBVAVBUIA5ERQB3IQAdNeQAHDOACDcQAFNwhLRRQgNDBgPC/QhHOShtNLQgYC4gWCdQhSI7gvB0QhHCbiNBmUgJYAHhgg8ADyQiPAQiXAQUgfhADMgyRAAAIjQAAg");
	this.shape_397.setTransform(936.8938,534.4233);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(255,255,255,0.996)").s().p("EAYYBl0UgkpgADguHgBwIh9gFQrZgcwvgwIhdgEQrBgfiRgCIhMgBQ5PgLx+r4IgcgTQyAsHgBxEQAAnxFFnWIAJgNQCJjFDbjnIARgSQCgioEgkQIAZgYQFSk/EQjGIAmgcQERjDEJh0IA2gXQEBhpEqgyIBEgLQEagpF9gCQAmAAArADQEAAVLZFsIBYAtQJEEnJ1F3QAzAeA1AdQDcB2EyAeQA+AGBEADQEKAKFwgwQBDgIBKgMQB1gRCXgaICSgaIEKgvICYgbQGJhDENgWQBVgHBQgBQDfgDEOA8QBTATBaAZQDjA/EhBxQBSAgBfAnQC4BMElB+IC4BNQDjBcCgAyQBgAeBoAVIBXARQBFANCVAVIDGAaIDcAeQHzBDFsBGQB3AXBwASQLSB0NimeQB3g4B3hCQEkihEejRQBxhTBthYQDhi1DCjBQBqhoBdhtQHboqAZrFQAGicgRikQg2opkxp7QhJiYhfiVQhwitiXidQiEiKieh5QiWhzilhdQjPh1jZhPQh/guh+gfQkjhFkIAJQglACglAEQjVATiSBmQhpA6hVBkQg5A0gqBCQhSBZgqCOQghBKgNBsQgJA6gDBEQgGEIAzEiQAKBEANBFQAyEVgXFjIgBAhQgbEAgKFZQgGBRgPBEQgHBXgUA9QgLByg8AxQhfBKjuglQhCgEhDgKQkmgXjriaQgSgLgQgNQjNiXhyjrQg6hWguhnQhtiugzjDQgqh5gZhkQgMg6gNg0Ig1lIQgVkWg5jXQgZhOgThQQhqmxAknVQAOipAgioQBLmGCjlcQBojdCJjCQDFkZD8jQQDdi3EAh2QEbiEEohiQUzm5TAkJQEeg+ETg0Qa5lCS8B6QD4AYDGC/QGMFTB4WPQASDgANESQASGbAHJGIAFHMIACBRQAEDHAMBLIAhCoQAYCkAZBtQCFIDAkNtQAIDOACDeQAKNwhJRXQgMDBgPDBQhGOVhrNOQgXC2gXCiQhMIegvCXQhBC0hxBZUgIbAIAghuAD9QiQARiXAQUgfgADRgyiAACIjRgBg");
	this.shape_398.setTransform(936.8602,534.4838);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("rgba(255,255,255,0.996)").s().p("EAZBBl0UgktgADguTgBwIh+gFQrYgcw0gvIhfgEQqygfijgDIhLgBQ5WgIyBr4IgcgTQyHsIAAxHQAAnyFHnXIAJgNQCKjGDbjnIASgSQChipEgkQIAZgYQFTlAERjGIAngcQETjEEKhyIA1gWQEEhpErgxIBEgKQEcgoF9gCQAlAAAtAFQEJAfLRFqIBXAsQJFEoJ3F6QAzAeA2AbQDfByEzAaQA/AGBEABQEMAHFwgxICNgUQB2gSCXgbICTgaIEKgwICZgaQGMhCELgUQBUgGBTABQDgABEOA/QBTAUBaAaQDkBDEgBxICxBIQC8BOEjB9QBdAnBbAlQDnBdCeAuQBYAbBzAVIBXAQQA9AKCgAWIDFAaIDbAeQH4BFFpBIQB2AXBzAPQLTBiNimqQB2g6B3hDQEjikEdjVQBxhUBshZQDgi4DBjDQBohqBbhvQHLozAErPQABidgUikQhEook6p5QhMiZhliQQh3ioigiXQiMiEilhvQichqithUQjXhojeg/QiBgliCgVQktgwkBAmQgmAGglAHQjRAth1CPQhRBQg2CDQgkBBgYBPQgyBjgRCdQgSBLgBByQgCA6ACBEQANEbAnEPIARCKQAjEVh1FeIgJAfQhiECh5EwQgfBIgpA/QgiBMgqA3QgqBehIAvQh4BJjTgLQhDADhCgCQlDAJjRicIgggbQi0ihg+kZQgjhcgUh2Qg5i2gIjdQgNiCgHhkQgBg+gEgzQABi2gIiVQAKkwhCi/QgehLgZhOQiJmoAPncQAFiqAaiqQA6mFCblnQBijhCCjHQC7keD1jdQDXjBD5iDQEViSErhkQU1nATCkRQEehAEUg1Qa5lNTFBmQD/AVDXCKQHBD6CJXFQAVDjAOERQAVGWAIJOIAFHSIABBSQAEC8AIBXQAMBiALBGQASC3AXBZQCUH3ApN7QAJDNAEDhQAPNvhHRfQgNDAgODEQhFOXhpNQQgXC2gWCmQhHICgvC6Qg6DMhWBNUgHfAIdgifAEJQiRASiYAQUgfdADWgy0AADIjTAAg");
	this.shape_399.setTransform(936.873,534.5028);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(255,255,255,0.996)").s().p("EAZqBl1UgkygACguegBwIh+gFQrZgcw5gwIhggEQqigei3gEIhJgBQ5cgEyFr4IgdgTQyMsJAAxKQAAnzFInZIAJgNQCMjGDcjoIARgSQCjipEgkRIAZgYQFVlBESjGIAmgbQEVjEELhyIA2gWQEFhnEsgwIBFgKQEdgnF9gBQAlAAAuAHQEUApLHFmIBXAtQJHEqJ5F7QAzAeA3AbQDhBsE1AWQA/AFBFABQENAEFwgzICNgVQB3gSCWgbICVgaIELgwICYgaQGQhCEKgSQBSgFBWADQDhAGENBCQBTAVBbAbQDlBFEfBzICyBJQDABQEgB8QBfAoBZAjQDqBdCcArQBSAXB9AVIBXAPQA1AICrAYIDEAZIDbAeQH7BGFoBJQB1AYB2ANQLUBRNhm3QB2g8B2hEQEiioEcjYQBxhWBrhaQDei6DAjGQBnhsBYhxQG7o8gQrZQgDidgYikQhSoolDp3QhPiYhriMQh+ikipiQQiUh+irhmQiihhi1hKQjghcjjgvQiEgciEgLQk4gZj7BBQgmAKgkAMQjOBEhYC6Qg5BmgWChQgQBOgGBdQgSBtAICtQgCBJAKB5QAEA7AHBFIA8IpIAMCKQATEUjSFaIgRAeQiqEDjnEIQg6BAhBA5Qg+BAhBAyQhHBJhWAtQiQBJi4APQhDALhDAFQlfAoi3ieQgPgOgOgQQidipgJlHQgLhkAGiFQgHi+Akj2IAbjxQAKhBAFgxQAdjCAKiOQAqlIhMimQgkhKgfhMQinmegHnjQgCisATiqQAqmFCSlzQBbjlB8jLQCxkkDvjpQDRjLDyiQQENigEuhnQU3nGTFkZQEehBEWg4Qa3lYTOBTQEHARDnBWQH2CiCcX5QAXDoAPEOQAXGRAJJXQAEDwACDnIABBSQACCyAFBjQAHBoAHBAQAMDKAUBFQCiHqAvOKQALDOAFDiQATNwhFRkQgMDBgODFQhEObhnNTQgWCzgXCrQhCHmgtDcQg0Dmg6BAUgGjAI7gjSAEVQiRASiYARUgfcADbgzFAAEIjVAAg");
	this.shape_400.setTransform(936.8801,534.4261);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBl3UglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGZQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QBiAZDHAdQBBAKFlAvQKOBWGxBaQMyCsPxoOQGZjVGNk1QFekPEYkpQJuqSgrt2QghqumvsxQiwlLlJj9QkxjpmCiEQlzh+lsgEQlxgEkOB8QjMBdg6DjQgwC4ApFJQAOB3AhC8IA5FKQBGGfADEUQAFEflJFlQksFGnJELQnJEJl8BHQmgBOiUjHQiEiyArl0QAej9CLnYQBKj5Aih3QA6jMAciIQBIlhhUiOQkPnMgipEQggo0DGonQDLo0GPmkQGrnCJBjHQZxo5XFkxUAgtgGwAVmAC7UAJ+ABVACFAgbQAjIdAHOqQACGQAECCQAHDcASAyQDWJIAhTgQAbQFhgVdQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_401.setTransform(936.9201,534.2861);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(255,255,255,0.996)").s().p("EgIcBkSQ2Gga48g7QqWgYuMgnImGgRQsUgjivgDQhggBhfgCQnGgOlcg2Qw1iTtCoZQi+h6iiiEQtkrDAAuzQAAmoDumUQAxhUA7hTQBMhrBkh1QBchsBzh5QBJhLBhhfQCJiHCwikQBshlBlhXQDujODNiMIAQgLQDdiWDdhjQBUgnBVgfQDBhJDagsQBqgWB5gJQEjgdGbAaIAvADQEfAhMfGaIAuAYQDxB9EGB7QEQCEEpCJIDxB0QAhAQAjAOQCQA+C9AaQB+ATCKAFQDIAFDvgSQCigNC8gTIDNgWIDYgYQCIgMD2geIArgEQEcgjD1gGQCrgJCHgBQBlAABpAJQByAKCHAYQBjASB+AdQA2ANA7AQQEPBIFGB8QB8AuCoBCQCsBDDZBQQFtCEDlAbQBpANDDAOQAfgBBQAGQBwACDFAJQDbAIDGAEQFMAmEpgGIAeABQIMAbIOjUQEkiBESjMIAegVQEKjND4jkIBZhVQECjwDCjfIApgvQDMj4BRk9QA/khg9lTQgLg5gQg7QiSoAm3p3QjBkIk5jSIgvgeQknjEmEh+IgngMQl4h4l7gQQjggIjCAgQh+AVhwAoQjRBLhRDCQhLCbADEaQgHBcAHCSIABAWQgFBZAOC+QAPFigpDlQgeC2jHDZQhDBEhUBHQlJEHnODTQnSDQmEAjQmZAvijjHQgwg7gehOQhBihAHjqQgSkHBnnIIBQl5QAfh+AahnIAfh1QBSlOgZiAQhgjdgVj0QgbjSAZjmQAknnEInRQCXkdDZjtQCNimC2iMQE5kKGNiWQCmhBCvguQHXhwGphrIQAjcQFmhCE+hGQE3hBEnhBQFnhOFDhRQDyg7Dgg+QDrg4Ddg6QDzhEDgggQDlgxDYgWQDXgeDPgHQDIgJDEAMIArAFQB4ASCbBKQCsBRCdB6QGIEzB8GXQAcBPBABNQANAQBsB0QBMBSApBEQA5BfAXByQAXBdAUETQAXE6ARBuQANBBhDBaQglAwh4B4QhxBxgsBAQhFBkALBSQAoFfAoBxQAZDCAjAsQAoBKAkBWQEAHhBxNzQAKA2AJA7QBMLjgiRIQgMEngSFEQgSErgVEsQgRDygSDRIgRDoQgaG8gsHOQgkFRgfD3Qg3F6giBdQgpBVgMCiQgPDbgLA2QgfCbhbBoQhxCCjiBPQiGA6kbAiQjFAZl5AXQnfAdiDALQlMAcjAAsIiBAgQmECNmtArQwHCQ4CA9QueAfwxAGInUABQvwAAxlgVg");
	this.shape_402.setTransform(933.9505,541.7265);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("rgba(255,255,255,0.996)").s().p("EgCaBinInhgHQzbgY1ngwQq4gYuZgoIkSgLIiBgFQr2gij0gHIjEgDQhmgEhigFQlmgSkMgmQhagKhLgMQv5iPsensQjFh6iqiGIg7gvQtZq+AAurQABmkDpmQIASgfQA0hVA/hWQBAhYBQheIAoguQBfhtB5h+QAzg0A+g9IA/g+QCTiPCxiiQBCg8BAg3IBYhLQC2iZCohxQA7goA5gkIARgKQCghkCjhKQBGghBHgcQBXgjBZgcQB6gnCEgeQBSgTBcgJQBsgPB9AAQDbgGEhAdQBkAKBrANIAvAGQEcA6J9FDQBYAtBiAvIAwAXQCCA/CLA6QB9A1CGAyQCdA/CnA9QCCAyCNAwIAtARQBiAnBuAmQAjANAlALIAhALQCOApCqARQCEAOCLADIBkgBQCjgBC9gIIDGgIIChgGIDRgJIDdgJIAFABQCLgDD2gLIAsgBQBMgEBMgCQDPgEC0AEIB4ABQBjgBBgACIAyACQBJACBaAJQBRAHBfAOIBRANQBqASB/AcIB0AcQDdA4DyBRICaA0IEwBgQC1A2DeA4QEjBODYAHQAzADAuAAIEqgGQAigGBLAAQBYgLCDgIQAngBAwgGQDPgIDMgeQBCgBBCgDQD/gKDigiIAcgCQEjghEGhhQDEhMCxhxQBbg9BVhHQCAhtB4h7IAWgVQBqh3BjhyICPimIA7hGQC2jHB9ifIADgFIAYgdQCFi2Amj8QAEgygBg0QgIi1hJjUQgTgtgUgvQg0hohGhwQjUk8lnmDQjdjXlHivIgygaQihhTi2hFQirhCjKg5IgogMQizgzi6gjQjOgmjRgNQjkgNjLAUQiBAPh0AeQg6APgxAWQiHBAhLB2QhjB/gfDuQgXBLgLB6IgCATQgZBHgJChQgJBLgNBEQgfDIg6CKQg7CTjRCyQhJA2hZA5Qi6BujaBeQjGBVjeBKQncCamMACQmUASi4jEQg1g6gkhKQhWidgSjeQgZh0gBiWQgLi9AajuQAVjuAIiGQAOh+AOhoIASh4QA2lJgOiTIgPgyQg8jLAcjGQADi9BBjGQAjiNA+iHQBukRDYkBQCxjvDzjBQCbiIDBhxQDdiOEAhgQCBgzCPglQCpgxC4gfQFKg2FEgxIEMgtQIZhBHHhIIA6gIQF0goFCgyQCOgTCHgVQCzgZCngcQCsgbCaggQDDgoC2grQD7g8DkhFQDWg7DDhEIAwgSQDVhNDCg+IAogMQDRhGDEg6IAFgCQDFhCC7geIBFgNQCSgfCRgMIAngCQAxgCA3AJQBHAIBTAZQBwAdBtAzQA0AXAzAcQCIBLBzBdQBRBHMKCIIINBbQDqAqADANQhGLog5MEQhzYJA+CjQBqDxBSElQARAwARA0QBgExA+F8QBEGsAJJ/QgCErgMFTIgIDWIgVGXQgND1gPDeIgPDvIgEBYQgMDvgODQIgODnIgFClQgVFOgWEPQgsFugcB8QgkBehABcQg2BRAqC3QAZBsBPDzQBADcgNB+QgTCsibBOQg6AljLAhQiBAWkkAjQk2Alh4ATQjVAhhHAiQhKAlhugTQhCgMiRgzQiSg0hJgNQh4gXhZAiIhzAxQk5CrlZBiIhIAUQlOCUl+AwQrTCCxCBGQlbASl1AOQp7AWrGAKQoNAGo0AAQr7AAtAgMg");
	this.shape_403.setTransform(931.05,552.7359);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_404.setTransform(928.0375,569.52);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_405.setTransform(925.4,583.5429);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_406.setTransform(923.6771,582.675);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_407.setTransform(922.8,577.3862);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_408.setTransform(922.425,569.6374);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("rgba(255,255,255,0.996)").s().p("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");
	this.shape_409.setTransform(922.35,558.1271);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBl9UglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGZQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QBiAZDHAdQBBAKFlAvQKOBWGxBaQMSClNgpzQE9jlFwlvQBghgHfn6QJpqNgFotQgDmblimRQl9mxnmhHQpahXp5IAQnqGLk5DhQnoFdnOD0QyfJ00wBqQlWAbqJhlQp8hjs4jNQtIjRt9kcQuukrtmlWQ/FsQxDsRQz/uYDcrzQCEnKUCDAQPGCQdWI8QH4CZQwFUQPoE9HZCOQLxDiHQBqQIlB+EEgOQPKg0HdntQDIjPCEksQBpjuBSlcICApcQBLlgBPjTQBrkcChi0QC6jQEahiQJmjUPAjPQPVjUQmiRQR6idPZgrQRDgwLoBlUAJ+ABVACFAgbQAjIdAHOqQACGQAECCQAHDcASAyQDWJIAhTgQAbQFhgVdQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_410.setTransform(936.9201,533.6995);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("rgba(255,255,255,0.996)").s().p("EAY8BlhUghcgADgpZgBdIqGgYQpLgXsugiInxgXIoYgWQk5gMhOgBQ39gIxaqoQhOgwhNgzQyDsGgCxFIAAgDQAAnyFGnXIAwhCQCBiuC+jJIBZhcQCUiXDljYQBBg+A/g5QEWj/DnioQBkhJBjg+QDAh6C8hQQCGg6CQgqQCggvCugdQCegaC8gNQCygNDQgBQCFgBEQBkQEBBeGVDLQDVBqDfB4QGkDiG8EJQDuCNFPAqIA/AHQEQAbGDgrIBpgNQCngVDygqQBvgSDBgjIBvgTQCsgeCagXQDzgkDEgQIAygEQEogUFrBVQBWATBdAbQDkBAEZBtQBMAdBeAnQDHBQEgB6QB9A0BsAqQDGBLCPAoQBkAbDCAgQAbAGBGAKQBxATDNAdIFbA1QDlAjDUAaQCcAXCIAVQDLAiDQgRQFZggFXinQEBiDDwjJIAFgFQEUj3ErlfQAhguBtiBQBxiTDMj4QD8kvBkkUQBzkRgfj5QgllylslnQhLhJhOg+Qk+kJmWgrQg1gHg1gCQnLgOnDEYQhrBBhuBPQngFnlUDCQnkE0nZDSQnkDfoCCNQrWDMsJAkQjuAJl0guQisgXjFghQoQhcpuiYQiPgkiUgpQlAhYlChuQi6g/i7hDQh5guh3grImMicIoIjZQpCjqodkeIgVgJQ8RuavhsXQiSh8h9hxQl1lGhokKQjUl0CPlHQCclzQvCQQBWAMBdAQQG7BJKGCmQIuCQKbDFQDzBIECBPIVPGiIDKA8QPMEmH1CFQJ0CxG6BhICRAgQIXB0EOgNQO5gtHxnCQBzhpBgiEQBMhnBCh6QB2jZBolBQBml1BDi4QAcheAdhTQBAjNBHiMQB1kFCsipQC/jCEahdQEkhgFvhgQGdhtHthoQKniPK3htQFGgyFJgrQKyhaJqgqQGagcF3AfQOLAKKBCmQBKAPBHARQGvBnCzRbQApEWAcEyQAOCYALCUIAEA5QAvIYALOlQADErADCcIACBJQAGDVARA5QDDJYAZTDQADDAAADOQgEN+hRREQgMClgNCiQg2Jyg/INQgsE6hHEuQiPNRhvBpQkcGIyLD9Qp2CGtyBfUgbHAC5gplAAcQndAFn8AAIhcAAg");
	this.shape_411.setTransform(936.5781,536.4002);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("rgba(255,255,255,0.996)").s().p("EAXkBlcUghRgAEgpEgBeQk5gKlJgNQpKgXsmgjInrgVIoUgXQktgKhZgCQ3wgPxSqpQhOgwhLgzQx4sEgBw+IAAgDQAAnvFDnUIAvhCQB/iuC9jIIBXhbQCTiVDkjYIB/h3QEUj9DlioQBjhJBig+QC+h6C6hRQCFg7COgrQCegxCsgeQCegcC5gOQCxgODPgCQCJgCEJBaQD5BVGcDLQDSBpDgB3QGiDfG5EHQDuCNFHA0IA+AKQENAlGAglIBogLQCogTDvgnIEtgzIBvgUQCogcCcgYQDogjDNgUIAygEQEtgZFgBLQBXAQBcAYQDjA4EZBoQBLAcBfAlQDGBNEeB4QB7AzBtAqQC/BJCUAsQBlAdC9AjQAcAGBEAMQB0AXDFAfQC3AgCgAaQDaAjDdAQIEiAfQDKAYDMgYQFbguFGirQD9iODSjRIAEgFQDukJDplTQAVgwBXh4QBRiOCajjQDCkWAwj3QBOj2g8jdQhGlJl3k9QhNhBhRg1Qk2jsmhgfQg1gEg1gBQnWgEm0EBQhrA8hyBHQnVFCluCkQniENnjCuQnjC+oGBuQrRCksBALQjygBlpgzQisgZjBgkQoYhopYiYQiNgliSgtQk4hfk3h/QiyhHiwhNQh0g4htgwIlui0Qj1iCjoh2QoNj/nolQIgSgMQ5cwjt/scIj1j3QlRk6gKjYQihlHCykWQC9k9QICaQBVAOBdARQGyBPKDCrQI3CaKFDAIHvCWQINCiM1D1IDJA4QOvEOIRB8QJoCjHFBZICRAeQIJBpEZgKQOogoIEmVQB2hfBlh3QBRheBKhvQCDjGB+klQB2lSBcisQAjhWAkhMQBKi7BUiCQCAjwC3idQDEiyEZhaQElhcFtheQGghpHkhkQKriNKohoQFFgwFFgoQK0hVJfgfQGQgVFkBPQNFA/JIEAQBDAVBAAXQGGCRCiQ8QAlEiAaEgIAZEqIAFA3QA6IRAQOgQADEiAECkIACBJQAFDLAQBCQCwJoARSmQACDAgCDMQgKOEhTQuIgbFFQg9KPg+HiQg1EwhkEhQimMOihBsQk9FuxuDtQp4CAtlBbUgbHACxgpJAAZQmvAEnHAAIi3AAg");
	this.shape_412.setTransform(936.2821,536.8295);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("rgba(255,255,255,0.996)").s().p("EAWMBlaUghGgAGgowgBdIp9gYQpJgXsegiInmgWIoPgVImGgNQ3jgWxKqpQhNgwhLgzQxqsBgBw5IAAgCQAAnsE+nSQAWggAZghQB+iuC7jGIBXhbQCRiUDjjXIB+h2QERj7DkipQBihJBgg+QC8h6C4hTQCEg8CMgsQCdgyCqgfQCdgeC3gPQCvgPDOgDQCNgDECBPQDyBMGiDNQDQBlDhB4QGfDcG3EEQDvCNE+A/IA8AMQELAvF8gfIBngJQCpgQDtgmQBzgRC4ggIBtgTQClgcCegYQDegiDVgXIAygFQEygcFVA/QBXAOBaAVQDjAwEYBiQBNAbBdAjQDHBLEbB1QB5AyBuArQC4BGCZAwQBnAgC4AmQAdAHBBAMQB3AbC9AhQC3AkCcAbQDPAiDnAGQCZAMCHAIQDIAODJgfQFcg8E2iwQD5iaCzjXIAEgFQDIkbCnlIQAJgxBChvQAviJBpjPQCIj9gFjbQApjZhZjCQhnkhmAkSQhQg4hUguQkujNmugSQg0gDg1AAQngAHmlDpQhsA3h1A/QnLEfmJCFQneDlnuCLQnhCboKBQQrLB+r7gQQj0gKlgg3Qirgei9glQoghzpCiZQiMgmiOgxQkxhnkriPQirhRimhXQhuhBhkg1QiphoimhkQjhiVjRiCQnZkTmxmEIgRgNQ2nyssdsiQh1iNhlhzQkskuBUimQhvkaDUjlQDfkIPhClQBTAPBcATQGqBUKACyQJCCjJuC7IHpCWQIwCtMEDdIDJA0QOSD4ItBzQJcCTHPBSICRAbQH7BeEjgIQOYghIXlqQB6hVBqhqQBVhUBShjQCQiyCUkJQCGkxB2ifQAphOArhGQBTipBjh4QCLjaDBiRQDJikEZhVQEmhYFqhbQGkhnHZhgQKxiKKYhiQFFgvFAgmQK2hPJUgUQGGgPFSCAQL+B0IPFaQA8AaA5AeQFeC6CRQeQAhEuAYEOQAMCnAMCAIAGA0QBGILAUOcIAIHEIACBJQAFDDAOBJQCdJ5AJSJQABC/gDDKQgROKhWQZIgcFCQhDKsg+G4Qg9EmiBEUQi9LKjUBvQlfFVxQDdQp4B6tbBWUgbFACqgotAAWQmBAEmVAAIkPgBg");
	this.shape_413.setTransform(936.0125,536.97);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("rgba(255,255,255,0.996)").s().p("EAUzBlZUgg6gAHgobgBeIp6gXQpIgXsVgjInigVQlkgPilgGImFgMQ3YgexAqqQhNgwhKgyQxer/gBwzIAAgCQAAnpE7nOIAuhCQB9isC5jGQAogqAugwQCPiTDijWIB+h2QEOj5DiiqQBihJBeg9QC6h6C1hVQCEg8CJguQCcgzCpghQCcgfC0gQQCugRDMgEQCSgED8BGQDpBCGpDOQDNBjDjB4QGcDaG1EBQDvCME1BKIA8AOQEHA5F5gYIBmgIQCqgODqgjQB2gRCzgeIBsgTQCigbCggZQDTggDdgbIAygGQE3ggFLA1QBWALBZARQDjApEYBdQBNAZBbAiQDKBIEXBzIDmBbQCyBFCdA0QBpAiCyAoQAfAJA9ANQB7AfC1AjQC3AoCYAbQDEAiDxgEQCXAGCHABQDFAFDGglQFdhLEni0QD0imCWjeIADgFQChktBmk8QgEgyAthoQAOiDA3i7QBPjjg5i/QADi+h2imQiJj4mKjoQhSgvhXgmQkmivm5gFQg1gCg0ABQnrASmWDRIjkBpQnBD7mjBmQnbC/n4BnQngB5oOAyQrHBWrzgqQj3gUlWg7Qirghi4gnQooh/osiZQiLgoiLgzQkqhukfiiQikhaiahhQhqhJhag6Qiah2iXhuQjMipi7iOQmkknl7m3IgPgOQzy03q6soQhoiUhYh0QkIkiCyh1Qg9jsD3i0QEAjTO6CwQBTAQBaAUQGiBbJ9C3QJMCtJXC2IHjCVQJTC4LVDHIDHAvQN1DhJKBqQJQCEHaBLICQAXQHtBVEtgGQOHgbIrk+QB+hLBuhdQBahKBZhYQCeieCqjuQCWkPCPiSQAvhGAyg/QBeiYBwhuQCWjDDMiGQDOiVEZhRQEmhVFohXQGnhkHQhcQK2iIKJhdQFDguE9giQK3hLJJgJQF8gHFACwQK4CpHUGzQA2AhAzAkQE1DjB/P/QAdE7AWD8QALCuAOB2IAHAyQBRIFAXOWIAKHDIACBJQAFC7AMBQQCLKKAARsQgBC+gEDJQgXOQhYQDIgdFAQhLLJg9GOQhFEbifEHQjUKHkGByQmAE7w0DOQp4BztPBRUgbFACjgoRAATQlUADliAAIlngBg");
	this.shape_414.setTransform(935.8,537.018);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("rgba(255,255,255,0.996)").s().p("EATaBlZUggvgAJgoHgBeIp1gYQpHgXsNgiIncgVQltgPiYgFQkKgHh7gFQ3Kglw5qrQhMgwhJgyQxRr8gBwtIAAgCQAAnmE2nMIAuhBQB8irC3jFQAogqAugvQCNiSDhjWQA9g7A/g6QEMj4DhipQBghJBdg+QC4h6C0hWQCCg+CIguQCag1CngiQCbggCzgSQCsgSDLgFQCWgFD0A8QDiA5GwDOQDKBiDkB3QGaDXGyD/QDvCLEtBVIA6AQQEGBEF0gSQAxgCA1gEQCqgMDoghQB4gQCugdIBsgSIE/g0QDJggDmgeIAygGQE8gkE/AqQBYAIBYAOQDiAhEXBYQBNAXBbAhQDKBFEUBwIDmBbQCqBCCjA5QBqAkCtArQAgAKA7AOQB+AjCsAkQC3AsCUAcQC6AiD6gOQCVABCHgGQDEgEDCgtQFfhYEWi5QDwiyB3jlIADgFQB7k/AkkwQgQgzAXhgQgSh9AFinQAUjLhtiiQghiiiTiKQiqjQmUi9QhVgmhZgfQkfiRnFAIQg0AAg1ACQn0AcmIC6QhsAth9AvQm1DWm+BIQnXCYoEBDQnfBXoSAVQrAAurthFQj6gdlLhAQiqgki1gpQowiKoWiYQiJgqiJg3Qkih2kUizQichjiQhrQhkhThQg+QiMiDiHh5Qi5i9ijiZQlwk7lFnrIgMgPQw93BpZstQhZidhNh1QjikWEPhDQgKi/EaiDQEhidOUC6QBQASBbAWQGZBgJ6C9QJVC2JBCxIHdCUQJ2DEKkCwIDHArQNYDKJmBhQJEB1HkBDICQAVQHfBKE4gEQN3gVI+kSQCBhAB0hRQBdg/BihNQCqiLDAjSQCnjuCoiEQA2g/A5g4QBmiGB/hkQChiuDXh6QDTiGEYhNQEnhQFmhVQGqhhHFhYQK8iGJ5hYQFDgrE4ggQK6hGI+ACQFyAAEtDgQJxDfGcIMQAuAnAsAqQENEMBuPhIAtIyQAKC0AOBtIAIAvQBdH/AcORIALHCIACBIQAECzALBYQB3KagHRPQgCC+gGDHQgdOVhbPuIgfE+QhRLmg9FjQhNERi8D6QjqJEk5B1QmiEiwWC+Qp6BttDBMUgbEACcgn0AAQQkoACkzAAIm7gBg");
	this.shape_415.setTransform(935.6222,537.0243);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("rgba(255,255,255,0.996)").s().p("EASBBlaUgglgAMgnygBdIpxgYQpFgXsFgiInYgUQl0gQiLgEQj+gGiHgGQ2+gtwwqrQhLgwhIgyQxFr5gBwnIAAgCQAAniEznKQAWggAXghQB7iqC2jEIBUhZQCMiQDfjWIB8h0QEJj2DfiqQBghJBcg+QC1h6CyhXQCBg/CFgvQCZg2CmgkQCbghCvgUQCrgSDKgHQCagGDuAyQDaAvG2DQQDIBfDkB3QGYDVGxD8QDvCLEkBfIA5ASQECBOFwgLIBngEQCqgKDlgeQB6gQCrgcIBrgRIE9g1QC/geDugiIAxgGQFCgoE0AfQBYAFBWALQDiAZEXBSQBNAXBaAeQDLBDESBuIDkBaQCjBACpA9QBsAmCmAuQAiALA4APQCBAoCkAlQC3AwCRAdQCuAhEDgXQCUgGCHgLQDCgPC/gzQFfhnEHi9QDsi+BZjrIABgGQBWlRgekkQgcg1ABhWQgzh5gsiTQgmixiiiGQhFiGiwhuQjNiomdiTQhYgdhcgXQkWhynSAUQgzABg1AEQn/Aml4CjQhtAoiAAnQmqCynYApQnVBxoQAgQndA1oWgKQq6AHrmhgQj8gmlChEQiqgnivgrQo5iWoAiZQiIgqiFg8Qkch9kIjEQiUhsiGh2IilieQh9iRh3iCQiljRiNimQk6lPkPoeIgLgRQuI5Kn3szQhKilhBh1Qi+kLFugRQAoiSE8hRQFChoNtDEQBPATBaAYQGSBmJ2DDQJfC/IrCsIHXCUQKZDPJzCZIDGAnQM8CzKCBYQI3BmHvA7ICPASQHTBBFCgDQNmgPJRjmQCFg2B4hDQBig2BqhCQC3h3DWi2QC4jNDAh3QA9g2A/gyQBxh1CNhZQCriYDjhuQDXh3EZhKQEmhMFkhRQGuhfG7hVQLBiDJphSQFDgqE0geQK8hAIyANQFoAHEbERQIqETFjJnQAnArAmAxQDlE1BcPEQAWFSAQDaQAKC6APBkIAIAtQBpH4AgONIAMHAIACBIQAFCqAIBgQBkKqgPQzQgEC8gGDGQgkObhePZQgPCegRCcQhXMEg+E5QhUEGjZDtQkBIAlsB5QnDEIv5CuQp6Bns4BIUgbDACUgnYAAOIoAABIoOgBg");
	this.shape_416.setTransform(935.4978,536.9278);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("rgba(255,255,255,0.996)").s().p("EAQmBlcUggZgANgnegBeQklgKlIgOQpEgXr9ghInSgVQl8gQh/gDQjygFiSgHQ2xg0woqsQhLgvhGgyQw5r3gBwhIAAgBQAAngEvnHIAthAQB5iqC0jDIBUhYQCKiPDejVIB7h0QEHj0DdiqQBfhJBag+QC0h7CwhXQCAhBCDgvQCXg4CkglQCagjCugVQCpgUDJgIQCegGDnAoQDSAlG9DRQDFBdDmB3QGVDSGuD6QDvCKEcBqIA4AUQEABYFsgFIBmgCQCrgHDigdQB9gPClgaIBrgRIE7g1QC0gdD3glIAxgGQFHgsEpATQBZACBVAIQDhASEWBNQBOAVBZAdQDLBAEPBrIDkBaQCcA9CuBCQBtAoChAxQAjAMA2APQCEAsCbAnQC3A0CNAeQCkAhENgiQCSgKCHgTQDAgYC7g6QFhh1D2jCQDojJA7jyIABgGQAvljhgkYQgog2gVhPQhThzheh/QhgiYjWhpQhqhqjNhTQjuiAmnhnQhbgVhegPQkPhVneAiIhnAHQoJAxlqCKQhsAjiEAgQmgCOnzALQnSBJoagEQncAToagnQq0ghrgh6Qj/gvk3hJQipgrisgsQpBihnpiaQiHgsiDg/QkUiEj8jWQiNh1h7h/QhZhlg9hIQhviehniNQiRjkh2ixQkGlkjZpRIgIgSQrT7UmVs5Qg8iug1h1QiZj/HLAgQBbhkFfggQFjgyNHDOICnAuQGJBsJzDIQJpDIIUCoQDuBMDjBHQK8DbJDCCIDFAjQMfCbKfBPQIrBYH5AyICPAQQHEA2FNAAQNWgJJki6QCIgsB+g3QBmgrByg3QDEhjDsibQDIirDZhqQBEguBGgsQB6hjCbhPQC2iCDuhiQDchpEYhFQEnhIFihPQGxhcGxhQQLGiBJahNQFCgoEwgbQK+g7InAYQFeANEJFBQHjFJEqLAQAgAyAfA3QC8FeBLOlQASFfAODIQAJDBAQBaIAJAqQB1HzAkOHQAID1AFDKIACBIQAECiAHBoQBRK5gXQXQgFC7gIDEQgqOhhgPDQgQCegSCbQheMhg9EOQhdD8j2DgQkYG9meB7QnlDvvbCfQp8BgssBEUgbCACMgm8AALImVAAQkzAAk+gBg");
	this.shape_417.setTransform(935.4543,536.693);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("rgba(255,255,255,0.996)").s().p("EAPKBleUggNgAOgnJgBeIpqgYQpCgXr1ghInNgUQmDgRhzgCQjngEicgIQ2lg7wgqtQhKgvhFgyQwtr0AAwbIAAgBQAAndErnEIAshAQB4ipCzjCIBShYQCIiNDejUIB6h0QEEjzDbiqQBehJBag+QCxh7CuhYQB/hCCBgwQCVg5CjgnQCaglCqgWQCogVDIgJQCjgHDfAeQDKAcHEDRQDDBcDmB2QGUDQGrD3QDwCKESB0QAbAMAdALQD9BiFoABQAxABA0gCQCsgEDfgaQB/gPCigZIBqgRQCRgXCogdIGohEIAygHQFMgwEeAIQBZgBBTAFQDiAKEVBIQBOAUBYAbQDMA9ENBpIDiBZIFICBQBvAqCcA0QAkANAzAQQCIAxCSAoQC3A4CKAfQCZAgEVgrQCRgRCHgZQC+ghC4hBQFiiDDmjHQDjjVAdj4IAAgHQAJl1ihkMQg1g3gqhHQh0huiPhqQiah/kKhNQiPhOjrg3QkPhYmxg+QhdgMhhgHQkIg2npAuIhnAKQoTA7laB0QhuAeiHAYQmWBqoNgUQnPAiolgnQnagPoehFQqvhJrZiUQkBg5kuhNQipgtingvQpJiunTiaQiGgth/hDQkNiLjxjnQiFh/hxiJQhThtg0hNQhgirhXiXIjcm2QjSl4iiqEIgHgTQoe9ekzs/Qgui2goh2Qh1jyIqBRQCNg3GBARQGFAEMfDYIClAxQGCByJwDOQJyDRH+CjQDtBNDdBFQLgDnISBrIDFAfQMCCEK7BGQIeBIIEArICPANQG2AtFYABQNFgDJ3iOQCMghCDgqQBqghB6gtQDRhPECh/QDZiJDyhdQBKgnBNglQCEhRCphFQDAhsD5hXQDhhZEYhCQEohEFfhLQG1haGnhMQLLh/JKhIQFCgmEsgYQLAg2IbAjQFVAUD2FyQGdF9DwMaQAZA4AYA9QCUGIA6OGQAOFrALC3QAJDIAQBPIAKApQCBHsAoOCQAJDsAGDSIACBIQADCZAGBwQA+LJgfP7QgHC6gKDCQgwOnhjOuQgQCcgSCaQhlM+g9DkQhlDykUDTQkuF5nQB+QoHDVu+CQQp8BashA/UgbCACEgmfAAIIksABQliAAlxgDg");
	this.shape_418.setTransform(935.5167,536.3593);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("rgba(255,255,255,0.996)").s().p("EANtBoWUggCgAQgm0gBeIpmgYQpBgXrtghInIgUQmKgRhmgBQjcgDingJQ2ZhCwXquQhJgvhFgxQwgryAAwWIAAAAQAAnaEnnBIArhAQB3ioCxjBIBShXQCGiNDdjTIB6hzQEAjxDairQBehJBXg9QCwh7CrhbQB/hCB+gyQCUg6ChgoQCZgmCpgXQCmgXDGgKQCngIDZAUQDCATHKDSQDBBZDoB2QGRDOGpD0QDwCJEJCAQAbANAcALQD6BtFkAHQAxACA0gBQCtgCDcgYQCBgOCegYIBpgQIE3g0IGmhHIAygIQFSgzESgDQBagDBRABQDiADEUBCQBPASBXAaQDNA7EKBmQBuAqByAuIFHCDQBxAtCWA2QAmAPAvAQQCLA1CLAqQC3A8CFAfQCOAgEgg1QCOgWCHggQC8grC1hHQFjiSDXjLQDfjhgCj/IAAgGQgemIjikAQhCg4g/g/QiVhojBhWQjThmk/gxQi0gykIgbQkxgwm6gTQhggDhkAAQkAgYn0A8IhmALQoeBHlMBbQhuAaiKAPQmMBHoogzQnLgFoxhLQnYgxoihjQqphwrSivQkEhCkkhRIlLhiQpSi5m9iaQiEgvh8hGQkGiTjlj5Qh+iHhmiTQhNh2grhSIiYlaQhqkMhIjJQidmMhsq4IgFgUQlp/ojRtEQggi+gch4QhQjmKICDQDAgJGiBBQGnA5L5DkICiAzQF6B4JsDUQJ9DbHnCeQDsBNDYBEQMEDyHhBUIDEAaQLlBuLXA9QITA5IOAkICOAKQGpAiFiADQM0ADKLhiQCQgXCHgdQBvgXCBghQDfg7EYhkQDphoELhPQBQggBUgeQCOg/C4g8QDKhVEEhMQDlhKEZg9QEohBFdhIQG5hXGchIQLRh8I6hDQFBglEogVQLCgxIPAuQFLAbDkGiQFXGzC2NzQATA+ARBEQBsGwAoNoQAKF4AJCkQAIDPARBGIALAmQCMHmAsN9QALDkAFDYIACBIIAIEIQArLagoPeQgIC6gLDAQg2OthmOYQgRCbgSCZQhsNbg9C6QhtDnkxDGQlFE2oDCBQooC8uhCAQp8BTsWA6UgbBAB+gmDAAFIjGAAQmPAAmigDg");
	this.shape_419.setTransform(935.7206,517.9581);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("rgba(255,255,255,0.996)").s().p("EAMOBr4Ugf3gASgmggBdIphgYQpAgXrlghInDgUQmSgRhagBQjPgBizgKQ2MhKwPquQhIgvhEgxQwUrwAAwPIAAAAQAAnXEkm+QAUggAXggQB1inCwjAIBQhXQCFiLDcjTIB4hyQD+jvDZisQBchJBXg9QCth7CphcQB+hDB8gzQCTg7CfgqQCZgoClgYQClgYDGgLQCrgJDRAKQC7AJHRDUQC+BWDoB3QGPDLGnDxQDwCJEBCKIA1AbQD4B2FgAOQAxACA0ABQCtAADagWQCDgNCZgXIBogQQCKgWCsgeIGkhJIAxgIQFXg3EIgOQBagGBQgCQDhgFEUA9QBPARBWAYQDNA4EIBkQBtApBzAuQCHA3C9BOQBzAvCRA5IBTAhQCPA5CCAsQC2BACDAgQCDAfEog/QCOgbCGgnQC6g0CyhOQFkigDHjQQDajtgfkFIgCgHQhDmZkkj1QhOg6hVg2Qi2hjjyhCQkOhMlzgUQjZgXkkABQlTgHnEAXQhjAFhlAJQj4AFoBBJIhmAOQopBRk8BEQhvAViOAHQmBAjpChSQnJgso7hvQnXhTomiBQqjiYrLjIQkHhMkZhWQipg1iegyQpajEmnibQiCgwh6hKQj/iajZkKQh2iQhcidQhIh/gghXQhEjGg3isQhVkfgyjVQhomhg2rrIgCgWUgC1ghxgBvgNKQgRjGgQh4QgsjbLmC1QDyAkHGBzQHHBuLSDuIChA2QFxB+JqDaQKGDkHRCZQDrBODTBDQMmD9GxA9IDDAWQLJBWLzA0QIGArIZAcICOAHQGbAYFsAGQMkAJKeg3QCTgNCNgQQBzgNCJgWQDsgnEuhIQD5hGEkhDICygvQCYguDFgxQDWg/EOhAQDrg8EYg5IKDiCQG8hUGThEQLVh6Irg9QFBgkEjgSQLEgsIFA5QFBAiDRHSQEQHoB9POQAMBDAKBKQBEHaAXNJQAGGEAHCTQAHDWASA8IALAjQCYHgAxN5QALDaAGDfIACBIIAFEHQAYLsgvPBQgKC4gMC/Qg9OzhoOCIglEyQhyN4g9CQQh1DclOC5QlcDyo1CFQpKCiuDBwQp+BOsKA1UgbAAB2glnAACIhiABQm7AAnSgFg");
	this.shape_420.setTransform(936.1528,495.2522);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTBvjUglqgABgv0gB1Qr5gdyAgzQs0glhxAAQ52AAySsLQyRsKAAxMQAAn1FKnaQCNjLDljxQClitEwkgQFmlTEdjNQEqjXEfh5QEdh3FNg0QE1gvGtAAQD6AAM1GfQJwE7KqGZQEDCbGCAXQE3ATHMhCQCngYD1grIGhhLQH8hZE4gSQEigQF2BhQEjBLGQCiQDjBdGwC6QFuCZDTA2QB4AfEyhJQFLhOEuiTQFliuC3jUQDZj8hDkQQiEoXoQjmQnJjGshAQQpjAMvrCXQkHAnpcBjQozBbkuAtUgMQABygnPgLOQuYkIvilLQs/kUn2jCQmNiZkvmjQhviahSinQhCiIgXhbQiOo3gqlnQg0m0AAsfUAAAgtAgATgJpQgHjONDDmQJLCiVWHvIRuGdQKRDtG5CUQSkGQHeAvQSvB1XtA3QXZA2SlgeQIegMQti8QJ1huWDkPQUBjsM8hWQRah0LFBgUAJ+ABVACFAgbQAjIdAHOqQACGQAECCQAHDcASAyQDWJIAhTfQAbQGhgVdQhPRfiFP2Qh5OVg9BmUgF9AJ+goXAEfUggSADmg1XAAAIgeAAg");
	this.shape_421.setTransform(936.9201,472.2962);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("rgba(255,255,255,0.996)").s().p("EAaJBzQUglVgABgvTgBzIgygCQrtgcxjgyIgogCQrqghidgDIgdAAQ5rgByMsCIgOgJQyOsJgCxJIAAgEQAAn0FJnaIADgFQCOjJDhjtIAGgHQCkisErkbIAJgJQFklPETjJIAmgcQEWjHEIhzQAsgTAtgRQD3hgEXgsIBugPQESggFhAIQAvACBCAOQEhBAKgFAIAeAPQKeE2JmFmQENCUF2AdQFDAeG7gyQCtgPDsgiQCZgREHgsIBbgOQGPhAE/gMIALgBQEtgMFqBUQCJAfCYAtQC+A2DVBJQCnA0DyBWQB3AlCBApQCdAtB0AWQCRAkBUAMQBFALCfgqQAtgNA1gRQEBhQDXiMQB0hFBVhMQB4hiBDhuQCejhhhjzQhvktj+jCQiHhwjVhPQnGi0slADIh6ABQppAItoBuQiwATkjAmQiyAWjZAcQooBHk6AeQjQAUkxgdQu3hs3BnXQiNg0iRg5QtNlFtXm6IgXgNQn1jmlfjMQiPhBh0hPQiFhHh3hyQiUiRiKjCQgdgrgdguQgrhDgphFQgXgngXgsQgUgkgRgkIgOgiQgcg/gOg3QgRg8gJgyIgThdIgri+Qgeh+gVhsQgfikgOiMIgKhrQgJh2gIiGIgLjJQgGhigChmQgEiiAEi/IAEjgIABiTQABiHgCiSQgCjJABi6QAAlKAEkyQAJpjgHmiQgBhggEhmQgEiCgCh0QgEltBJiMQAIhJCNgEQDPgCHZCIQG8CBNTEwQE0BvFTB8QDsBZE4BxII/DUQEdBoDzBWQE9BxD7BVQKSDdGrBoQFgBVDpAZQE0AfFNAeQJOAzLGAwQF7AZGHASQEdAOENAKQKQAZJHgCQHDgBG5AGQE4AEHVgoQFngdHQgzQHugyObh4QEhggE7gsQFmgeEUgqQKFhCHzgkQCkgLCWgHQPHgxKOA9QBkAKBcASQJQBwCQdRQAIBcAGBiQAeHrAIMoIACCyIADFqQACBtACA6QACA9AEAtQAKB6APArQDDIlApRdIAFCkQAYPOhVT/IgLCUQhKQUh5O5IgRCGQhcKyg4DYQgWBPgUAeUgGHAJogmeAEdIhzANUggDADjg0tAABIhTAAg");
	this.shape_422.setTransform(936.9228,448.5242);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("rgba(255,255,255,0.996)").s().p("EAZ/B2/UglTgACgvRgBzIgzgCQrsgcxigyIgngCQrwghiWgCIgegBQ5qgCyLsCIgOgJQyNsIgBxJIAAgDQAAn1FJnYIADgFQCNjKDhjtIAGgHQCkisErkaIAJgJQFnlSENjIIAmgcQEVjLEEh0QAsgUAsgSQD4hkEVgsIBtgPQEUgfFdAQQAxADA/AOQEhBAKmEwIAdANQLaE3IyE9QEXCMFrAkQFPAoGoggQC0gHDkgZQCmgID4gmIBXgNQFrg3FogHIALgBQE4gJFdBJQCNAaCVAmQDDAtDRA7QCyAoDnBBID0AwQCZAWBkgEQB9ALAzgHQAtgBBxguIBDghQC3hSCAiDQBOhBAwhFQBQhZAfhhQBijIiAjWQiKkHkMisQiBhijlhJQnDihsqgLIh8gBQqKgGtCBTQi5ALkXAeQi1AOjVAUQocAzlFAPQjXAKklggQwqiU0inpQiDg+iFhEQsCmErLooIgUgQQmmkMkbkAQh4hEhahoQhuhRheh+Qh2ihh3jCIg0hbIhNiLQgWgmgXgtQgUgngPgjIgNgiQgYg/gGg5QgLg7gGgyQgGgvgIgvQgShagZhkQgfiCgUhoQgdihgHiQIgGhrQgEh5gHiCIgLjIQgGhkgChkQgCieAKjCQAGhuADhwIACiTQABiBgDiaQgEjLABi4QABlDAJk8QAUp0gKmPQgChYgJhvQgGiBgCh1QgElTCYheQATg7CGABQDUAKHQCKQHECKNFExIKBDsQEEBjEZBnII8DWQEdBpDyBWQE7BxD8BVQKcDhGgBdQFVBOD5AbQEyAhFOAiQI3A1LcA/QGAAfGAAWQEeASEKAMQKVAgJAgEQG2gCHJAXQE7AOHNgQQFjgLHQgUQH5gNOGg9QEmgLEugZQF8ACD2ghQKDgWHtgIQCjgCCVAAQPIADKFBBQBjAKBbAYQJACPCMdAQAHBcAGBiQAdHtAJMlIABCxQACDoACCCQACBsACA7QADA/AFAqQAMBzARAyQC/IrAnRXIAECjQAXPPhVT9IgLCUQhLQTh5O5IgSCEQhdLCg5DGQgXBMgYAhUgGZAJfgmQAEbIhzAMUggDADig0pAABIhTAAg");
	this.shape_423.setTransform(936.9188,424.6992);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("rgba(255,255,255,0.996)").s().p("EAZ1B6tUglSgABgvOgBzIgzgCQrsgdxhgxIgngCQr1giiQgCIgeAAQ5pgDyKsDIgOgJQyLsIgBxIIAAgDQAAn0FJnYIADgFQCMjJDijuIAGgHQCjirErkaIAJgJQFqlWEHjGIAmgdQEUjNEAh3QAsgVAsgSQD4hoESgsQA1gIA3gHQEWgfFbAZQAxAEA+ANQEgBBKrEfIAeANQMUE3H/EUQEhCEFfArQFbAzGWgQQC7ACDbgQQC0AADpgfIBSgLQFJgwGPgCIAMAAQFCgFFRA9QCQAVCSAfQDJAkDMAtQC9AbDcAsQB9ALB1AIQCVAABTgfQBpgOARgaQAWgNBDgyIAjgjQBuhUAoh8QApg7AMg/QAnhPgGhWQAnitiei6QimjikaiWQh7hUj2hCQm/iPswgYIh/gEQqogUsdA5QjCAEkLAUQi4AHjQAMQoRAflRgBQjdABkZgjQyei8yCn7Qh6hIh4hQQq3nBpAqXIgQgUQlXkyjYkzQhghIhBh/QhVhchHiKQhYixhkjCIgthdQgjhHgkhHQgUglgXgvQgUgogNgiQgHgRgFgSQgUg/ABg6IgGhtQgDgvgHgvQgQhWgahpQghiFgShlQgcifgBiTIgBhrQAAh8gFh9QgEhagHhvQgHhmAAhhQgBibAQjFQAJhuAEhtQAEhMAAhHQABh6gFijQgFjMABi4QACk8APlEQAeqFgOl9QgDhRgMh3QgJh/gDh4QgEk4DngwQAfgtCAAGQDZAVHFCNQHNCTM3ExIJ7DuQEbBuD7BdQEPBnEqBvQEeBrDwBWQE5BxD9BVQKlDlGXBTQFJBFEJAfIJ/BHIUTCGQGEAkF4AbQEhAWEFAOQKaAmI7gFQGogDHYAoQE/AZHFAHIMvATQIEAWNxgCQEqAMEjgHQGQAhDYgWQKCAVHmATQCiAHCWAJQPIA3J8BDQBjAKBaAeQIvCuCIcwQAHBcAFBiQAdHvAIMiIABCwIAEFpQACBrADA8QAEBCAFAnQAQBtASA5QC6IvAlRSIAFCjQAWPPhXT7IgKCUQhLQSh7O4IgRCEQhgLQg4C2QgZBIgcAkUgGrAJWgmDAEYIhyAMUggEADgg0lAABIhSAAg");
	this.shape_424.setTransform(936.923,400.8397);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("rgba(255,255,255,0.996)").s().p("EAZrB+cUglRgACgvMgBzIgygCQrsgcxggyIgngCQr6ghiJgCIgfAAQ5ngEyKsDIgOgJQyJsIgBxIIAAgCQAAnzFInZIADgFQCNjJDhjtIAGgHQCjirErkaIAJgJQFulZEAjFIAlgdQEUjQD8h6QArgVAsgSQD5htEPgrQA1gJA3gGQEYgfFYAhQAyAFA8AOQEfBBKwEOIAeAMQNQE4HMDrQEqB8FTAxQFoA+GDABQDDALDSgHQDCAHDZgYIBOgJQElgoG4AEIAMAAQFNgBFEAwQCUARCOAYQDPAbDIAfQDIAPDRAXQCAgDBvgIQCQgXBEg6QBUgmgRgtQgCgaAWg2IAEglQAkhWgvh0QACg2gYg4QAAhFgrhMQgViSi9idQjAi9kpiAQhzhFkIg9Qm9h7s1gmIiCgGQrHgjr3AeQjLgDj/AKQi7ABjMAEQoFAKldgPQjjgJkOgmQ0RjkvioOQhwhShshbQpsn/m1sGIgMgYQkIlXiUlmQhJhMgoiYQg9hmgviVQg5jChSjBQgSgwgUgwQgehIgjhIIgphWQgTgpgNghQgGgSgEgRQgPg/AIg8QADg5AAgzQAAgvgGgwQgMhSgdhuQgiiIgRhhQgaieAGiVIAChrQAFiAgDh5QgChXgJhxQgHhnAAhgQACiWAVjJQAMhuAGhrQAEhMABhHQAChzgHirQgHjOABi3QADk1AUlNQApqVgSlsQgDhKgQh/QgMh9gDh6QgFkeE3gCQApgfB6ALQDfAhG7CPQHVCcMpEyIJ1DwQEzB5DdBSQEUBqEhBtQEeBsDvBWQE3ByD+BVQKvDoGMBKQE/A8EYAiIJ+BNQIIA7MLBbQGIAqFwAfQEjAaECARQKfAtI0gHQGbgEHoA5QFDAjG8AfQFbAaHRAqQIOA5NcA6QEvAiEWAMQGlBBC7gNQKABAHgAuIE2AiIY8CxQBjALBZAjQIeDNCEcgQAGBbAGBiQAcHyAHMeIABCwQACDxADB3QACBqAEA+QAEBDAGAlQASBnATA/QC2IyAkROIAECjQAVPPhXT6IgKCTQhMQSh7O3IgRCEQhiLfg5CjQgaBFggAnUgG+AJOgl0AEUIhyANUggEADfg0hAAAIhSAAg");
	this.shape_425.setTransform(936.9214,376.906);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("rgba(255,255,255,0.996)").s().p("EAZhCCNUglQgACgvJgBzIgygCQrtgcxegyIgngCQsAgiiCgBIgfAAQ5mgFyIsDIgOgJQyIsIgBxHIAAgCQAAnzFInYIADgFQCMjJDhjtIAGgHQCjirErkaIAJgJQFxlcD6jEIAlgdQESjUD5h7QArgWArgTQD6hxEMgrQA1gIA3gGQEagfFVApQAyAGA7AOQEeBBK1D+IAfAMQOLE3GYDCQE0B1FHA3QF0BJFyARQDJAVDJABQDQAQDKgSQAmgDAjgEQEDggHfAJIAMAAQFYADE3AkQCZANCKARIGYAjIGZAEQCEgPBogaQCMguA0hUQBAg/gyg/QgagngYg5IgcgpQglhYiGhsQgkgwg9gyQgog7hQhAQhQh4jaiAQjciYk3hrQhug2kZg3Qm6hos5g0IiFgIQrngxrRADQjVgJjyAAQi+gHjHgEQn6gKlpgeQjpgSkCgpQ2FkMtDohQhlhchghmQoho9kqt1IgIgbQi6l9hPmZQgyhQgPiwQglhwgXihQgbjTg/jBQgOgxgRgxQgahKghhJIgnhWQgTgqgLghQgFgSgDgSQgMg/APg8QAKg4AEg0QADgwgFgvQgKhPgehzQgliKgPheQgYicAMiYIAHhsQAJiDgCh0QAAhWgJhyQgJhpAChdQADiTAbjMQAPhuAHhpQAGhMABhHQAChsgJizQgIjRACi1QACkuAalWQA0qmgWlaQgEhCgTiHQgQh9gCh7QgFkEGGAsQA0gRB0AQQDkAtGwCSQHeCkMaEyIJxDzQFJCDC/BHQEZBuEZBrQEeBtDuBXQE1BxD/BWQK4DrGDBAQEzA0EoAmQEqAkFTAtQHxA9MiBqQGLAwFqAjQEkAeD/ATQKjA0IugIQGNgFH4BJQFHAtG1A4QFWAtHRBHQIaBeNGB1QEzA3EKAfQG7BhCcgEQJ/BsHaBKIE0AyQPJCgJrBIQBjAMBYApQIODsB+cQIAMC8QAbH1AHMaIABCvIAFFoQACBpAFA/QAEBFAHAiQAVBhAVBFQCyI4AhRJIAECjQAUPOhXT4IgLCTQhMQRh7O2IgRCEQhlLug4CSQgcBBgkAqUgHQAJGglnAERIhxAMUggFADeg0dAAAIhRAAg");
	this.shape_426.setTransform(936.911,352.8121);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("rgba(255,255,255,0.996)").s().p("EAaoCGNIhRAAUglPgACgvGgBzIgygCQrtgdxdgxIgngCQsFgih8gBIgfAAQ5lgGyHsDIgOgJQyHsIAAxHIAAgBQAAnzFInXIADgFQCMjJDgjtIAGgHQCjirErkaIAJgJQF0lfD0jDIAlgdQERjXD1h9QArgXAqgTQD7h1EJgrQA1gJA3gGQEbgeFSAxQAzAIA5ANQEeBCK6DtIAfALQPGE4FlCYQE/BuE6A+QGABTFgAiQDQAdDAALQDfAYC6gMIBEgFQDggXIHANIANAAQFiAHErAYIEjASQDaAJDAADQDegJC7gUQCHgcBigrQCIhEAkhuQArhYhUhSQgxgzhGg+QgbgVgggWQhvhajdhkQhKgrhhgsQhQgxh1g0QiLhej6hjQj3hzlFhVQhogokqgxQm3hVs+hBIiIgLQsFg/qrgYQjfgQjmgJQjAgOjEgMQnugel1gtQjvgdj2grQ35k0qjozQhchmhThyQnWp7ifvkIgEgfQhrmigMnMQgahTAKjJQgNh7ABitQAEjigtjBQgJgygPgzQgVhMgghKIglhWQgTgsgJggQgFgSgCgTQgIg+AWg+QARg3AHg1QAGgvgDgwQgHhLghh3QgmiOgNhaQgWiaARibIAMhtQANiGAAhvQABhUgKhzQgKhsADhbQAFiPAhjPQAShuAJhnQAHhMABhHQAChlgKi8QgKjSACizQADknAglgQA+q3galHQgEg7gYiQQgSh7gDh9QgFjpHVBaQBAgDBtAVQDpA4GnCUQHnCuMLEyIJrD0QFhCOCgA9QEfByEQBoQEfBuDsBXQEzBxEABXQLCDuF4A2QEoAsE4ApQEoAmFUAwQHaBAM4B4QGQA3FiAmQEmAiD8AVQKoA8IogLQF/gGIIBbQFLA3GsBPQFSBAHSBmQIkCCMxCwQE3BND+AyQHQCBB/AFQJ9CYHTBlIE0BDQPJDUJjBLQBhAMBYAvQH9ELB6cAIALC8QAbH3AGMXIACCuQACD5ACBuQADBoAFBAQAFBHAIAfQAXBaAXBMQCtI+AgRDIAECjQASPPhYT2IgKCTQhMQQh8O1IgRCDQhoL9g4CBQgdA9goAtUgHiAI+glZAEOIhxAMUggBADcg0NAAAIgQAAg");
	this.shape_427.setTransform(936.9107,327.2231);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("rgba(255,255,255,0.996)").s().p("EAaeCKUIhRAAUglOgADgvEgBzIgygCQrsgcxcgyIgmgCQsLgih1gBIghAAQ5jgHyGsDIgOgJQyFsHAAxHIAAAAQAAnzFHnXIADgFQCMjJDhjtIAGgHQCiirEqkZIAJgJQF4ljDujBIAkgdQERjbDxh/QArgXAqgUQD7h5EGgrQA2gJA2gGQEdgdFPA5QA0AJA3ANQEdBCK/DdIAgAKQQBE4ExBvQFJBmEuBEQGNBfFNAyQDXAmC4AUQDsAgCqgFQAigBAfgCQC9gQIvATIANAAQFtALEeAMIEjAHQDgAAC7gMQDqgWCwgpQCJgoBcg8QCEhbAUiJQAXhwh2hlQhJhAhzhBQgqgXgwgWQi5hckzhdQhwgliGgmQh5gniZgpQjHhDkYhHQkThOlTg/QhigZk7grQmzhDtEhOIiLgNQskhOqFgyQjogXjagTImCgpQnjgzmBg8Qj2gljqgvQ5slcoDpFQhShwhHh9QmLq6gUxTIAAgiQgcnIA4n/QgEhXAljhQALiFAZi4QAij0gajAQgGg0gMgzQgRhOgdhLIglhXQgSgtgIgfQgEgTgBgTQgEg+Aeg/QAXg2ALg2QAJgvgCgwQgFhHgih9QgoiQgMhXQgUiYAYieIAPhtQASiJAChrQAChSgLh1QgKhuAEhYQAGiMAnjRQAVhvALhkQAIhNABhGQAChfgLjEQgNjUADiyQAEkgAlloQBJrIgek2QgFgzgbiYQgVh6gDh+QgGjQIlCIQBKALBoAbQDuBDGdCXQHvC2L9EzIJlD2QF4CZCCAyQElB1EHBnQEfBvDrBXQExBxEABXQLNDyFuAsQEcAjFHAtQEnAnFVA0QHDBCNPCHQGUA8FaArQEoAmD5AXQKtBCIhgLQFygHIXBrQFPBCGkBmQFNBTHTCFIVLGQQE8BjDyBFQHkCgBhAQQJ8DCHNCBIEyBVQPKEIJaBNQBhANBWA1QHtEpB2bwIAKC8QAaH5AHMUIABCtQACD9ADBoQADBnAFBBQAGBKAJAdQAaBUAYBTQCoJCAfQ+IADCjQASPOhZT1IgKCSQhNQQh8O0IgSCDQhpMLg4BwQgfA6gsAwUgH1AI1glLAELIhwAMUggCADbg0JAAAIgPAAg");
	this.shape_428.setTransform(936.9195,300.9828);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTCOeUglqgABgv0gB1Qr5gdyAgzQs0gkhxAAQ52AAySsLQyRsKAAxNQAAn1FKnZQCNjMDljwQCliuEwkgQGZmCDujBQFBkFEQiGQEwiXE7ggQFMghGJBcQEiBFLeDTQQ9E5D9BGQbAHhHngYQCagHJXAXQJjAYFXgNQIYgWEehtQFfiGAHkRQAFjhmbixQlsidrbiFQpRhsvWh0Qjdga5RixQyOh/rUhkQv3iNrIidQ7gmFlkpXQnespCX25QAznuB7oxQAgiPCGoZQBAkEgHjAQgGiHgth+IgjhYQgSgvgGgeQgQhPAxhWQA5hjgChoQgBhDgliBQgpiUgLhTQgSiWAeigQApjVAFiMQADhQgMh2QgLhwAFhWQAIiIAtjVQArjFAEifQADhXgOjNQgOjVADixQAFkZAqlyQBUrYgikkQgFgsgfigQgYh4gEiBQgGjOMrEIQIlCyVIIoIRSHEQJ5D/G5ClQSIGxHiAvQH6AxLpB5QGrBGNnCUQL9B9INA4QKxBJIcgNQI/gNQ6FLQLbDgWCIYIRjGqQJ6DuHGCcQShGWKsBcUAJ+ABVACFAgbQAjIeAHOqQACGPAECBQAHDdASAyQDWJIAhTfQAbQHhgVdQhPReiFP2Qh5OVg9BmUgF9AJ+goXAEgUggSADlg1XAAAIgeAAg");
	this.shape_429.setTransform(936.9201,274.3309);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("rgba(255,255,255,0.996)").s().p("EAVxCLLUggGgAHgnUgBYIsNgdQoegVrVgfIpVgaImygSInhgRQ3IgYw7qUQhfg6hbg+QxnsBgBw3IAAgCQAAnrE9nQQAbgoAegpQB8imCyi+QAwgzA7g8QCMiODSjIQBOhLBNhGQEWkDDRidQCih8CbhfQCOhYCGg+QEniME2gpQA0gGA1gEQEdgYE+A1QCoAXEJA8QD9AyE8BRQDAAwCoAvQIECRFUBbIByAeQG8B1FbBLQGxBbEoAWQFZAZCihHQAmgNAZgPQA1gdCIgPQBggNCGgIQBngDBNgFQDegEBbgUQCMgOBZgeQB5gfBLgxQC5hvgtjTQgzh+iuhoQhZguh2grQmdiLqSh8IgTgEQolhorQh4IjngpQmFhy0SkVQhUgbhPgbQnPiTlfioQkphxjjh0QhmguhigwQlBiSkEiNQi4hxihhIQgngYgogVQghgYgngSQghgQgogSQg4gXgvgZQhyg0hahKQiwh3ijhrIjUiRQgngYgngeIhBgwQhEg0grg3QhChHhAhMQhEhFg7hXQg2hOgjhIIgXgzQhBiSgnilQgni8ggi8QgQhigPhxQgOhrgHhoQgKisAKjMIAUmCIAQk0IAAgNQANjSAcjSQAkkcA8k+IAShXQAojRBQlsQA1kCgIi4QgBgzgIgwQgKhFgbhXIgSg2IgMghQgQgsgFggQgNhJAehNIAGgNQAshfAnhNQARgxAAhcQgIhqAXg2QAQhVAthWIAVgnQBAiUAyhYQAXg1AOhQQAMhNAag3QAphZBKiQQBFiFAshnQAfg2AViNQAeiDAthrIAFgTQBQizBYj+QCSkEAjjAIBFjjQARgZgChwQAJhPAXhWQAxhfF+BhQCcArDAA/QJEDEN3FFIGECCQILC7FQBrQCqA+BWAaQIoDHHeCTIAqAOQMgEDHpBjQC/AnCSAOQG2AoIdBCQB0ANB+ASQG0A9M9ChIESA0IPcC0QJ7BgIrAvQBOAGBWALQKJB2KaDIIBqAiQHcCbJyDgQHMCkIGC7QK4D7EjBWQBdAfAlAQQItDdF+E6QIGEfGGEMQEzCVDmCDQEAB6CVI0QA9EfArEiQAUCkAUCGQAsEHAeFEQAxIRAKNyIABAhIAGILQAFDFANBGQCaJkAMReIAAA9QAAP8hjTTIgHBXQg7J3g2GpQhUHZjWGzQi/LRi9BnQkdEhs7DKQrVCqxMBtUgZyAChgmDAAcQn9AFoeAAIj8AAg");
	this.shape_430.setTransform(935.7,295.3324);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("rgba(255,255,255,0.996)").s().p("EARLCH6UgfigALgmRgBZIr9gdQoZgVq9gfIpCgZQklgMiAgEQlDgJiZgIQ2egwwhqWQhcg6hXg9Qw+r4AAwjIAAgBQAAnhEwnHQAbgoAdgoQB2ijCti7QAwg0A4g5QCGiKDPjGICYiPQEBjwDlifQCehyCghbQCKhPCIg8QEfh/EygzQAygIAzgGQEbgjExAbQCzAKD1AoQEFAhEpBCQC6AoCoAsQGsB0GnBtIBzAdQG+BwFMA7QG3BLEWgRQFFgUBwiUQAbgdAHgbQARg1AkglQASgfANgYQAVgOgHgPQBMgRg6geQAegSgQgeQARgdgEgoQAThXhhiWQhqhdiQhKQhfgkhwgiQnOh5pHhxIgUgEQpGh1qCiMIjcg2QosjLvVl3QhHgrhBgtQlxjnj7kZQjRi0iRi+QhDhJg9hKQjIjliOjUQhgiwhSheQgPgkgUgcQgOgkgZgXQgUgXgngaQgzgegigkQhRhCgthuQhgimhviIQhJhehVhaQgegagignIgzg5Qgyg9gNhBQgZhSgrhVQguhEgzhlQguhYgchIIgTgzQgxiUgQijQgNjEgTisIgYjPQgNhtgChiQgFigAWjOQAUjCAJi3QAFh4ACiyIAAgNQAEjTATjHQAakRA0k/QAFgkAJgwQAmjvA7k+QAokAgHiwQgDgxgGgtQgJg7gZhgIgPg1IgKghQgMgqgGghQgLhIAThMIAEgMQAhhbBPgyQAkggAjg2QAbhBA4gYQAvgvBJgrQAPgLAQgKQBahTBeglQAqgZAogqQAjgoAwgaQBKgpBnhLQBehGBUgvQA7gUA4hNQBJhDBXgvIAMgJQCchOCEiLQD3hwA6hyQBRhMBBgkQAogFAahAIBbhTQBpgjE7BXQCcAwCxA8QK2DwLaDmQC1AuDMA3QHdCNGCBhQCZAwBsAaQH1CbIRCGIAoALQMMDVHxBUQC3AgCWANQHJAoHxApQBxAIB9APQG9A0MUCuQCGAeCGAfQHeBmHnB4QJEB4I7BrQBNANBSARQMGDRHdCRIBmAiQH9CwItDFQHYCmHhCjQKNDcFIBMQBVAYAuAVQHgDME3HaQF6FbESGYQDTDDCdDcQCuDHBkILIBIIxQAPC3ATBqQA5D3AlE8QBAIQAONTIABAhIAFIDQADCuAJBbQBiKNgMQNIgBA7QgbQThtSBIgIBUQhNK+g3E8QhzGelpFrQkFIPlABoQlnDgr+CeQrgCNwYBbUgZrACKgkuAASQlYADloAAQkXAAkggCg");
	this.shape_431.setTransform(934.9204,315.9745);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("rgba(255,255,255,0.996)").s().p("EAMdCFBUge9gARglPgBYIrtgdIy5g0IougYQk2gNhigCQkYgEi/gMQ11hIwFqZQhZg6hUg8QwUrvgBwPIAAgBQAAnWEkm+QAZgnAdgoQByihCoi3QAvg0A1g3QCAiGDMjDICWiNQDsjeD3iiQCchoCjhVQCHhHCJg5QEYh0Etg8QAxgKAygIQEYguEkABQC+gEDgAUQENASEVAxQC3AgCnApQFUBYH5B/IB0AcQHBBqE+AsQG8A7EDg3QEwhBBAjiQAOgsgKgoQgThNhBg7Qg7gwhsgpQg8gahcgYQhGgdjOgoQhPgXh7geQhXgbhSgeQiThAiVhYIkVhpQhkgZhpgZIv8jOIgSgEQpqiCozihQhrgghngjQrTkiqXnbQg6g7gyg+QkUk7iXmLQh5j1hBkHQgehkgYhmQhQk3gYkdQgIjwgDh0QAJgvAAgkQAHgwgMgcQgJgegkggQgugngWguQgvhRAAiSQgQjVg7ikQgohyhBhsQgVgegcgvQgYgngOgcQgghGAShLQAQhbgXheQgXhEgthzQglhhgVhIIgOg0QgiiVAIihQAOjNgIicQgDhWgNh0QgMhvABhcQACiUAijRQAfjEAGirQAFhmgGi6IAAgNQgFjUALi8QAPkGArlAIALhSIBJobQAcj+gIipQgBgvgGgqQgHgwgXhqIgNg0IgIghQgKgngEgkQgKhGAJhKIABgNQAVhXB3gWQA4gQBHgQQA9gXBZAFQBOgIBlgBIAqgCQBxgSCLAPQA/ADBBgFQA6gEBFAEQBsAGCDgGQB5gGB7AJQBYAOBagOQB0gBCBALIASABQDnAYCygZQFaAkBTgkQB2gHBoALQA/APA2gQQBMADBLgDQCfAYD5BNIE/BuQMoEcI8CHQCzAgDMAoQGvBfG0BYQCIAiCCAZQHBBuJDB5IApAJQL3CnH5BFQCuAZCaAMQHbAoHFAPQBuADB9AMQHGAsLrC8QCDAgCEAkQGpBsIECcQIOCRJKCnICbArQOEEsEfBbIBiAiQIeDDHoCrQHkCnG8CLQJiC+FrBBQBOARA3AcQGTC7DvJ4QDwGYCeIjQBzDyBUE1QBbEUA0HiQAWFqARC3QALDJATBOQBDDnAuE2QBPINARM1IABAgQAFEZAADkQACCWADBvQArK2glO9IgCA5Qg1Qqh3QvIgKBRQheMFg5DOQiSFkn9EkQlKFLnCBqQmxCerBBzQrsBxviBIUgZmABzgjYAAJIlZABQm1AAnKgEg");
	this.shape_432.setTransform(934.8503,334.3253);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTCOeUglqgABgv0gB1Qr5gdyAgzQs0gkhxAAQ52AAySsLQyRsKAAxNQAAn1FKnZQCNjMDljwQCliuEwkgQFSk/HQjeQGvjOH4hqQHchkHlABQHYABGYBgQD7A7JMCRQISB7FWAhQHBArDyheQEbhuAOkwQAIiqj9h7QjdhrnOhXQlNhAqQhVQvAh9jQgeQq8hloFhwQqMiOnli2QyYm6lTroQi1mQg1n7QgtmtAwndQAomIBellQBQkxBNiJQBNiJAEg7QADgkgjgoQgogvgJg4QgPhgAui1QBAkEgHjAQgGiHgth+IgjhYQgSgvgGgeQgQhPAxhWQA5hjgChoQgBhDgliBQgpiUgLhTQgSiWAeigQApjVAFiMQADhQgMh2QgLhwAFhWQAIiIAtjVQArjFAEifQADhXgOjNQgOjVADixQAFkZAqlyQBUrYgikkQgFgsgfigQgYh4gEiBQgGjOMrEIQIlCyVIIoIRSHEQJ5D/G5ClQSIGxHiAvQH6AxLpB5QGrBGNnCUQL9B9INA4QKxBJIcgNQI/gNQ6FLQLbDgWCIYIRjGqQJ6DuHGCcQShGWKsBcUAJ+ABVACFAgbQAjIeAHOqQACGPAECBQAHDdASAyQDWJIAhTfQAbQHhgVdQhPReiFP2Qh5OVg9BmUgF9AJ+goXAEgUggSADlg1XAAAIgeAAg");
	this.shape_433.setTransform(936.9201,274.3309);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("rgba(255,255,255,0.996)").s().p("Eg4RCMPIjXgIQrCgbwKguIilgHQpTgajRgHIh+gCQ5LgFx+rqIgzghQyKsJAAxJQAAkzB9k0QBKi2B1izQBViDB1iQQBFhXBRhbQCSinD1jyIA9g9QDrjqEki3QB3hKCNg/QFnikG4haQBGgPBIgNQFNg9FggOQCEgGCQACQEzACEtApQCMATCEAcQDhAsGFBZIDdAwQElA7DoAgQDAAbCXAIQFQARC9hAQBGgWAtggQDhhvgmkYQgGg4gkgyQhAhZighKQjlhonDhZQkEg0mthBIklgrQuciCjwgoQi6gdingdQnkhTlxhVQjBgtilguQmgh4lHikQhlgwhdg1Qn9kLkullQjrkFhxkuQgwiAgkiKQgqingZisQgMhpgGhgIgDheQAAgzgDgxQgDg3gHg6QgHhAgBg8QgCheAKhkQAOhzAIhqQADgpgCgqIAAg5IADg8QAMiGAaiOQAnjWAtjGIALgwQAjiUAbhsIAbhYQAJgcAKgXIAJgVQAthhASg7IAEgUQAFglgcgnQghgwgIg5IAAAAQgKhKARiBQAFgiAHgmQAPhaAKhPQAViYgBiBIgBggQgFh3gghtQgKgjgTg2IgLgmQgGgVgDgRQgNhNAmhUIACgFQAsheADhdIAAgQQgBhFgch+QgShOgJg/QgIgzgEgoQgKiIAUiMIAFghQAXiGAIh2QAFg2ABgvQABhTgKhyQgEg2gBgxQgCgyADgsQAHiMApjQQAXhwAMhmQAIhKADhDQAEhggKjBQgJjWACivQACh9AHiFQAFhbAEhyQAFhZAIheIAGhIQAzn0BrjPIAKhcQAHgigLiDQgFhiAOhnQApifL3D7QDwBRF0COQInDVKCEFIBMAfQLTEnEZBxIBpAqQJ5D8G2CdQEEBdDaBEQLpDvGqAwIAlAFQHiA0LYB3IBxASISXDCICtAbQKFBiHWAqICCALQJGAxICAOQD/AEFaBCQG4BUJdC+QHQCRLGEEQHJCnHtC7IEDBiQLgEYB/AuIDSBOQHxC2F7B/QI4C+G9BwQHaB6FPCCQG9CFCtSvQA1FxAcHiQAQEdAKGBQAGEXAEEXIAEDxIABA0QANFNALCPQAJDPASBAQCFGUA4KxQAbFOAIGPQAQMEg0O/QgRFDgYFTQg6MWhVLiQgkE1gmEdQgpEqggC6QhOGmhUBUUgGNAIfggSAEVQjyAgkIAdUgevADVgxcAAJIloAAUgkOgACgtlgBtg");
	this.shape_434.setTransform(936.8396,277.542);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("rgba(255,255,255,0.996)").s().p("Eg4wCLvIjXgIQrBgbwEguIijgHQphgbi+gFIiAgDQ5EgIx5rqIgzgiQyDsHAAxGQAAktB5k6QBHi2Bui1QBSiGBtiRQBDhaBNhcQCQizDmjvIA7g+QDnjyEZi6QByhMCSg9QFdiYHIhNQBGgMBIgLQFHgzFmgJQCAgECVADQEnAFE5AmQCNASCDAYQD4AoFqBMIDcApQEnAxDmAaQC/AUCWACQFYABCghWQA8gdAZgnQCmhwhbj+QgPgzgogtQhJhRiehFQjthkm4hbQkLg5mihEIkiguQt3iHkRgzIleg9QnohbllhWQjGgyiagwQmTiCk1jGQheg4hWg+QnJknkGmMQjJkThckyQgniCgbiKQggirgOinQgEhuABhYQAEgtACgtQAFgygCgwQgCg2gKg7QgMhAgBg6QgChbAShlQAYh3AIhiQACgogHgqQgDgbgBgcQgCgdABgeQAHh/AeiVIBPmbIAJgwQAciSAQhvQAJgsAHgsQAGgcAHgXIAHgWIA5idIAFgUQAHgkgVgoQgZgxgGg4IAAgBQgJhIAIiBQACgjAFgkIAQipQAOiVADiDIAAggQAAh4gZhrQgHglgPg0IgKgnQgFgVgCgRQgLhLAehWIACgEQAjhhADhcIAAgQQABhHgVh7QgNhMgFhBQgFgzgBgnQgFiKASiJIAEghQATh/AFh/QADg1AAgvQABhWgIhuQgEg2gBgxQgBgxACgtQAHiOAmjNQAUhuAMhoQAIhJAEhDQAGhogHi2QgFjXADisQACiAADh+QADhTgBh7QABhYAFhdIAFhIQApnDDhiBQAOgoANgeQAVgXAHhoQAOhKAhhPQBZhwLCDvQD2BVFrCNQJoDxIyDlIBKAfQK+EdEvB4IBqAqQJ5D5GzCVQEJBaDVA8QLADQHaA7IAlAEQHUA3LiB5IBxATQHnBQKoBtICrAZQKABcHZAjICBAJIRIBOQEBAPFSBGQGyBbJeDDQHUCWK6EBQHhCxHKCuID/BhQK5EICqA9IDRBNQHtCzF9B8QI8C7G4BnQHEBtE4DTQGPDICbSIQAvFrAaHjQAOEfAIF9QAGEqAED/IAGDuIADAyQAXE3ARClQAMDDASBNQB6GdAxKmQAXFPAHGLQALMDg1O5QgTFDgZFQQg7MThWLeQglE6gmEUQgtE5ghClQhVGCh+BiQnGIA/gEIQjyAfkHAcUgevADPgxJAAIIlmAAUgkHgADgtZgBtg");
	this.shape_435.setTransform(936.8017,280.6131);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("rgba(255,255,255,0.996)").s().p("Eg5OCLRIjWgIQrBgbv+gtIiigHQpugcitgEIiBgCQ49gNx0rrIgyghQx9sGAAxCQAAknB1lAQBEi2Boi4QBOiIBniTQA/hcBJhdQCOjADYjrQAcggAdgfQDjj5EOjAQBthMCXg8QFSiMHZg+QBGgLBJgJQFAgoFsgDQB7gDCaAFQEcAGFFAjQCOAQCCAWQEQAkFOA+IDbAiQEpApDjARQC/AOCUgEQFggOCFhsQAwglAFgtQBshwiQjmQgXgtgugpQhShJibg/Qj2hhmthdQkRg9mYhIIkfgxQtSiMkyg+IlahAQnshilZhYQjLg2iQgyQmGiNkkjpQhWg/hOhHQmWlDjdmzQiokghGk3QgeiDgTiKQgUivgFiiQAEhyAIhQQAKgtAFgrQAKgxgBgvQAAg0gOg8QgQhCgBg2QgDhYAbhmQAih7AHhaQADgngNgqQgGgagEgbQgEgdAAgeQADh5AhibQAsjbAfi+IAHgxQAViPADhyQAGgqAAguQADgdAEgXIAEgWQAZhbAchEIAGgTQAKglgPgnQgRgygFg4IAAAAQgHhIgBiBQgBgiACgkQACheAEhKIAPkYIACggQAEh4gShqQgEgngMgyIgHgnQgEgUgCgSQgIhKAWhXIACgFQAZhjAEhaIAAgQQAChJgNh4QgIhKgBhEQgCgxAAgpQACiLAPiGIADghQAPh3ACiIIAChkQgBhYgHhrQgDg1AAgxQgBgwACguQAHiRAhjJQAShtAMhpQAJhJAEhCQAIhwgDirQgBjXACiqIADj7QABhLgHiCQgDhYADhcIADhJQAgmSFWgyQAWgdAXgTQAigNAbhLQAgg0A0g1QCIhCKODjQD7BaFiCKQKqEPHiDEIBIAdQKnEUFHB/IBrAqQJ6D3GwCNQENBXDQAzQKVCwIMBHIAlAFQHHA5LsB7IBwATQIHBVJ/BiICrAYQJ5BXHdAbICBAHQIOAdI4BCQECAZFMBKQGrBhJeDIQHbCcKtD9QH5C8GnChID8BfQKQD5DWBMIDQBLQHpCwF/B6QJAC3GzBdQGtBhEiElQFhEKCIRgQAqFnAXHkQANEhAHF3IAJIlQACCEAFBmIAFAyQAhEhAYC7QAOC2ATBbQBtGmArKbQAVFQAEGHQAHMCg4OzQgTFDgZFMQg9MQhYLbQgnE/glELQgxFIgiCRQhbFcioBvQn+Hj+xD6QjwAfkFAbUgeyADKgw0AAFIlkABUgkBgAFgtMgBtg");
	this.shape_436.setTransform(936.7693,283.4503);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("rgba(255,255,255,0.996)").s().p("EAXNCMqUgj7gAGgs/gBsIjVgJQrBgbv4gtIiggHQp8gcibgDIiCgCQ42gSxvrqIgyghQx2sFAAw/QAAkgBxlGQBAi3Bii5QBKiMBhiVQA8heBEheQCMjMDKjnIA4hAQDfkBECjEQBohOCdg6QFHiAHqgxICOgOQE5gfF0ACQB1AACgAGQERAIFRAhQCNAOCBASQEpAhEyAwIDaAbQErAgDhAKQC+AHCTgJQFogeBoiDQAngsgQgyQAxhyjEjOQghgmgyglQhahAiZg7Qj/hemiheQkYhBmNhMIkcg0QstiRlThIIlWhFQnxhnlNhbQjQg7iFgzQl5iYkSkLQhPhHhHhPQljlfi0nbQiGktgxk7QgViGgKiJQgKi0AGicQALh4APhHQAQgrAJgpQAOgyABgtQABgygSg9QgUhDgBgzQgDhXAihmQAuh+AGhSQADgmgSgpQgKgagGgaQgGgdgBgeQgChyAkiiQAvjdAYi7IAFgwQAOiNgIh1QABgogFgwQgCgeACgXIACgWQAOhYAhhIIAHgUQAMgkgIgnQgIgzgFg4IgPjIQgDgjAAgiQgGhgABhHQACiQALiIIADggQAJh5gKhnQgCgqgIgwIgFgoIgEgmQgHhIAPhYIABgFQAQhmAEhYIAAgQQADhMgFh1QgDhIAEhFQAAgxADgpQAHiNAMiDIADggQALhwgBiQQAAg1gBgvQgBhbgFhnQgDg1AAgxQAAgvACguQAHiWAdjDQAPhtANhrQAIhHAFhDQAKh4gBifIAHl/QABiGgChyQAAhEgOiJQgGhXABhcIABhIQAWliHMAdQAegRAggKQAwgCAtgvQA0gdBGgcQC4gTJYDWQECBfFZCJQLsErGRCjIBGAdQKRELFeCGIBsApQJ6D0GtCFQETBVDKArQJrCQI+BSIAkAFQG5A6L3B/IBvATQInBaJWBYICqAXQJzBRHhATICBAFQHxATJUBcQEDAjFFBQQGlBnJeDMQHgCiKhD6QISDGGDCTID5BeQJpDpEABcIDPBKQHlCsGCB3QJEC0GsBUQGZBTEKF3QEzFNB2Q5QAlFgATHnQAMEjAGFyIAIIgQADCJAGBdQADAeADAUQArELAfDRQARCoATBpQBiGvAkKRQARFQACGDQAEMCg6OtQgVFEgaFIQg+MMhaLZQgoFEglEAQg0FXgjB9QhjE3jRB9Qo3HE9/DuQjwAdkEAaUgezADFgwfAAEIljAAg");
	this.shape_437.setTransform(936.76,285.9014);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("rgba(255,255,255,0.996)").s().p("EAWbCMZUgj1gAHgsygBsIjUgJQrBgbvygtIifgHQqIgciKgCIiDgCQ4vgWxrrrIgxghQxvsDAAw8QAAkaBtlLQA9i4Bci7QBFiPBbiWQA5hhBAhgQCKjXC8jkIA1hBQDbkID4jJQBihPCjg4QE7h0H7gkICPgKQEygUF6AIQBwABCmAIQEFAKFdAeQCOAMCAAOQFBAeEWAjIDZATQEtAYDeACQC/ABCQgQQFxgtBMiZQAcgzglg5QgJhyj5i1Qgpghg3ggQhjg4iXg2QkHhbmXhgQkfhFmChPIkZg3QsIiXl0hSIlThIQn1hvlBhcQjUhAh8g0QlsijkAkuQhHhPhAhYQkvl6iMoCQhlk6gblAQgLiIgCiJQABi4AQiXQATh9AWg+QAVgqANgnQATgyACgsQACgvgVg+QgYhFgCgwQgDhUAqhmQA4iCAGhKQADgmgYgpQgNgYgIgaQgIgcgDgeQgGhsAnioQAzjgAQi3IADgwQAIiLgVh4QgDglgLgzQgFgegCgXIAAgWQAEhWAnhMIAIgTQAOglgCgmQAAg1gDg4QgFhFgSiBQgFgjgDgiQgNhhgChEQgEiOAPiLIAEgfQAOh6gDhlQAAgsgEguIgDgoIgCgmQgFhIAHhZIABgFIALi/IABgPQADhOADhyQAChHAIhHIAIhaQAOiOAJiAIACghQAHhogFiZIgChjIgGjBQgCg1AAgxQAAguADgvQAGiYAZjAIAajXQAIhHAFhCQAMiBADiUQAJjYACikQABiJgFhsQgCg8gTiRQgKhXgChbIAAhIQANkxJABrQAmgFArAAQA8AJBBgTQBHgHBYgDQDnAdIkDJQEHBkFQCHIRvHKIBEAcQJ7EBF1COIBuApQJ6DxGqB9QEXBSDFAjQJBBwJvBdIAlAGQGrA8MBCCIBuASQJHBfItBOICpAWQJuBLHlAMICAACQHVAKJuB2QEFAtE+BUQGfBuJeDQQHmCoKUD3IOLFWID1BdQJBDZEsBrIDOBJQHgCpGEB0QJJCwGmBLQGDBHDzHIQEGGQBiQRQAgFbARHoQAKElAFFtQADFoAECzQAECNAHBXQADAfAFASQA1D0AmDoQATCbATB2QBWG4AdKGQAPFRAAF/QgBMBg8OnQgVFEgbFEQhAMKhbLVQgqFJglD3Qg3FmgkBpQhqESj7CKQpvGn9PDgQjvAckCAZUge1ADAgwLAACIlhAAg");
	this.shape_438.setTransform(936.7758,287.6089);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("rgba(255,255,255,0.996)").s().p("EAVpCNWUgjvgAIgslgBsIjUgJQrBgbvrgsIidgHQqXgdh3gBIiFgCQ4ngaxmrrIgxghQxosCAAw4QAAkUBolRQA6i5BVi9QBCiSBUiXQA2hjA8hhQCIjkCujgIAzhCQDXkQDsjNQBehQCog3QExhnILgXICPgFQEsgKGAANQBrADCsAJQD5AMFpAbIEOAWQFYAZD7AWIDYANQEvAODbgFQC/gGCPgVQF5g9AviwQARg5g4hAQhFhzkticQgygcg8gbQhsgwiUgxQkPhXmNhiQkmhJl3hTIkVg6QrkicmVhdIlPhLQn5h2k1heQjahEhxg2QleiujvlQQhAhWg4hhQj8mXhjopQhElHgFlFQgCiJAHiJQALi9AaiRQAbiCAdg2QAbgoAQglQAYgyADgqQAEgvgZg+QgdhGgBguQgEhQAzhoQBCiFAFhDQADgkgdgpQgQgXgKgZQgLgcgEgeQgKhlAqivQA2jiAJizIABgwQABiKghh6QgIgjgRg2QgIgegEgXQgDgMAAgLQgGhSAshRIAJgTQAQgkAFgmQAIg2gCg4QgDhEgciBIgNhEQgThjgFhCQgKiKATiNIAEggQATh6AEhkQADguAAgsIgBgpIgBgmIgDigIAAgFQgChrAFhVIABgPQAEhRALhvQAHhEAMhKIANhZQATiQAHh9IABggQADhhgHiiIgFhjIgFjAQgCg0ABgxIADhdQAGibAVi8IAXjYIAPiIQANiIAHiJQANjZACiiQABiLgIhmQgEg0gZiZQgNhWgFhbIgChIQADj/K3C5QAuAGA0ALQBKATBTAJQBaAQBqAWQEXBMHwC9QEMBoFICFIRgHHIBCAbQJlD4GMCUIBuAqQJ7DtGnB2QEcBPDAAaQIXBRKgBoIAkAGQGeA/MLCEIBuASQJnBlIDBDICpAUQJoBGHoAEICAABQG5AAKKCPQEGA4E3BYQGYB1JfDVQHrCsKID1IN/FTIDyBbQIZDKFXB5IDOBIQHcCmGGByQJNCtGhBBQFsA6DdIZQDXHUBRPpQAaFVAOHpQAIEoAEFoQADF8AECZQAECTAJBPQAEAfAFARQA/DeAtD+IApESQBKHBAXJ7QALFRgCF7QgFMBg+OgQgXFFgbFBQhBMGhdLSQgrFOglDtQg7F1glBVQhwDtklCYQqoGI8eDTQjuAckBAYUge2AC6gv3AABIlfgBg");
	this.shape_439.setTransform(936.8398,281.4608);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("rgba(255,255,255,0.996)").s().p("EAaTCOeUglqgABgv0gB1Qr5gdyAgzQs0gkhxAAQ52AAySsLQyRsKAAxNQAAkOBklWQBhlJCwldQCvldDhk3QDqlCD8jqQDtjcNbgPQFPgGHsAYQDvAMKLApQIwAkEsALQG/AQEigSQLGgrAakOQASi8q1juQoDixw2j+QzIkWoKh/Qt7jajxiDQmnjojxoLQjJmzg6pPQgwnkA1nPQAWjBAkiLQAiiHAlgtQBNhgAIhFQAFgtgdg/QgghIgCgqQgEhOA7hoQBNiJAEg7QADgkgjgoQgogvgJg4QgPhgAui1QBAkEgHjAQgGiHgth+IgjhYQgSgvgGgeQgQhPAxhWQA5hjgChoQgBhDgliBQgpiUgLhTQgSiWAeigQApjVAFiMQADhQgMh2QgLhwAFhWQAIiIAtjVQArjFAEifQADhXgOjNQgOjVADixQAFkZAqlyQBUrYgikkQgFgsgfigQgYh4gEiBQgGjOMrEIQIlCyVIIoIRSHEQJ5D/G5ClQSIGxHiAvQH6AxLpB5QGrBGNnCUQL9B9INA4QKxBJIcgNQI/gNQ6FLQLbDgWCIYIRjGqQJ6DuHGCcQShGWKsBcUAJ+ABVACFAgbQAjIeAHOqQACGPAECBQAHDdASAyQDWJIAhTfQAbQHhgVdQhPReiFP2Qh5OVg9BmUgF9AJ+goXAEgUggSADlg1XAAAIgeAAg");
	this.shape_440.setTransform(936.9201,274.3309);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("rgba(255,255,255,0.996)").s().p("EAifCOeUglqgABgv1gB1Qr5gdx/gzQs1gkhwAAQ53AAyRsLQySsKAAxNQAAkOBllWQBhlJCvldQCwldDhk3QDplCD8jqQDnjXEdh0QBlgpCEgnQBKgWCHgmQDhhDBhhjQCCiEAbkWQASi9mgjOQlAifqZjNQsNjmlkhtQpri9jsiBQmkjnA7nKQAwlzFnn/QD+lqGim4QF/mEAwg7QBOhgAIhFQAFgtgdg/QghhIgCgqQgDhOA6hoQBNiJAFg7QACgkgigoQgpgvgJg4QgOhgAti1QBBkEgIjAQgFiHguh+IgihYQgTgvgGgeQgPhPAxhWQA5hjgChoQgChDgkiBQgqiUgKhTQgTiWAfigQAojVAFiMQADhQgLh2QgLhwAFhWQAHiIAujVQAqjFAFifQAChXgNjNQgOjVADixQAFkZAqlyQBTrYghkkQgGgsgfigQgXh4gEiBQgHjOMsEIQIlCyVIIoIRSHEQJ4D/G5ClQSJGxHiAvQH5AxLpB5QGsBGNmCUQL9B9IOA4QKxBJIbgNQI/gNQ7FLQLbDgWCIYIRiGqQJ7DuHGCcQSgGWKsBcUAJ/ABVACFAgbQAiIeAHOqQADGPAECBQAGDdATAyQDWJIAhTfQAbQHhhVdQhPReiFP2Qh5OVg8BmUgF9AJ+goYAEgUggSADlg1WAAAIgeAAg");
	this.shape_441.setTransform(884.5568,274.3309);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("rgba(255,255,255,0.996)").s().p("EAifCOeUglqgABgv1gB1Qr5gdx/gzQs1gkhwAAQ53AAyRsLQySsKAAxNQAAkOBllWQBhlJCvldQCwldDhk3QDplCD8jqQEWkCBuieQB2iqgKiRQgKiIiCi0QhWh2kOkqQiAiOjgiBQiuhlkph/QlkiTi8hRQlNiPjuiCQmkjnA7nKQAwlzFnn/QD+lqGim4QF/mEAwg7QBOhgAIhFQAFgtgdg/QghhIgCgqQgDhOA6hoQBNiJAFg7QACgkgigoQgpgvgJg4QgOhgAti1QBBkEgIjAQgFiHguh+IgihYQgTgvgGgeQgPhPAxhWQA5hjgChoQgChDgkiBQgqiUgKhTQgTiWAfigQAojVAFiMQADhQgLh2QgLhwAFhWQAHiIAujVQAqjFAFifQAChXgNjNQgOjVADixQAFkZAqlyQBTrYghkkQgGgsgfigQgXh4gEiBQgHjOMsEIQIlCyVIIoIRSHEQJ4D/G5ClQSJGxHiAvQH5AxLpB5QGsBGNmCUQL9B9IOA4QKxBJIbgNQI/gNQ7FLQLbDgWCIYIRiGqQJ7DuHGCcQSgGWKsBcUAJ/ABVACFAgbQAiIeAHOqQADGPAECBQAGDdATAyQDWJIAhTfQAbQHhhVdQhPReiFP2Qh5OVg8BmUgF9AJ+goYAEgUggSADlg1WAAAIgeAAg");
	this.shape_442.setTransform(884.5568,274.3309);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("rgba(255,255,255,0.996)").s().p("EAifCOeUglqgABgv1gB1Qr5gdx/gzQs1gkhwAAQ53AAyRsLQySsKAAxNQAAnoFJsgQDVoIG6tEQAvhZAojdQApjgAMjvQANkJgfixQgjjMhXgsQoukXiuhaQmxjenykPQmkjnA7nKQAwlzFnn/QD+lqGim4QF/mEAwg7QBOhgAIhFQAFgtgdg/QghhIgCgqQgDhOA6hoQBNiJAFg7QACgkgigoQgpgvgJg4QgOhgAti1QBBkEgIjAQgFiHguh+IgihYQgTgvgGgeQgPhPAxhWQA5hjgChoQgChDgkiBQgqiUgKhTQgTiWAfigQAojVAFiMQADhQgLh2QgLhwAFhWQAHiIAujVQAqjFAFifQAChXgNjNQgOjVADixQAFkZAqlyQBTrYghkkQgGgsgfigQgXh4gEiBQgHjOMsEIQIlCyVIIoIRSHEQJ4D/G5ClQSJGxHiAvQH5AxLpB5QGsBGNmCUQL9B9IOA4QKxBJIbgNQI/gNQ7FLQLbDgWCIYIRiGqQJ7DuHGCcQSgGWKsBcUAJ/ABVACFAgbQAiIeAHOqQADGPAECBQAGDdATAyQDWJIAhTfQAbQHhhVdQhPReiFP2Qh5OVg8BmUgF9AJ+goYAEgUggSADlg1WAAAIgeAAg");
	this.shape_443.setTransform(884.5568,274.3309);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#FFFFFF").ss(1,1,1).p("EiWihVGMEtFAAAMAAACqNMktFAAAg");
	this.shape_444.setTransform(963.475,540.625);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("rgba(255,255,255,0.996)").s().p("EiWiBVHMAAAiqNMEtFAAAMAAACqNg");
	this.shape_445.setTransform(963.475,540.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_333}]},708).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[]},94).to({state:[]},574).wait(33));

	// black
	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("rgba(0,0,0,0.996)").s().p("ApnKmQc6wRB2hdQBPg9Jmp8QEKkSCzjAQCVigAJgRQgDAQgLFmQgmBEnYGVQnJGHhEAlQxQJ1vcIpQ+cRCjQAuQC2hNc7wSg");
	this.shape_446.setTransform(653.25,604.025);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("rgba(0,0,0,0.996)").s().p("EgpZAd4IgDgKQARgGAmgSIAygcQCZhEFSkHQC1h8Dyi+QDsjNEGinQDTiiDrioQEPjYETjCQE+kFE+iyQDah7EoiGIF5i4QBngmF7kYIBYg+QDCiOB/hbIAtgqIAAgBQBtinBUh3QAKgTAXgyQASgqAJgLQAFgJAggcQAigdACAHQABADABBNIAFCEQAAALggBDQgjBHgCAIQgKAHg2A3Qg4A6hBAvIgTAYIgBAAQgZAeg0A0QhSBUgSAXQgaAphEAoQhJArgSAWQlKFcinCfQgmAkgTAQQjTC50PLiInxEeIlpDRQn7EokvCqQl7DZjhB4QjWByhSAaQgQAIgNAAIgJgBg");
	this.shape_447.setTransform(652.3004,593.5757);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("rgba(0,0,0,0.996)").s().p("EgpbAekIgCgBIgDgIIAAgBQAOgGAhgSIAGgDIABgBIAngZIAKgFIADgCQCOhEEzkYIAOgMIAKgIQCjiBDajGIAGgGIAQgQQDajiDligIACgCIAcgXQC5imDKilIApgkQDnjUDmi2IAOgLIAygsQEXkIETidIARgKIA8ghQC6hjEGhuIAbgLIA3gZIFRiXQAZgJAbgMQB2gvEqjKIAjgXIAxgfIArgbIAzggQClhtB4hLIAygkIAAAAIAtgsIAAgBQBPhjBEhQIAXgbQATgWAWgiIAJgNIAXgjIAWgZIAJgMQAOgTAUgJIACgBQAPgGANgIQAEgCAEAGQAMgCAFALQABAAAAABQABAAAAAAQAAABABAAQAAABAAABIACA+IABARIAGBjIABAkQACAegQAxIgLAuQgIAXgIASQgNATgpAzIgfAoQgjAsgmAoQgEAHgPATIgBABIgEAHIg8BHIgKALQgkArgNASQgUAZglADIgEABQgqALgdAVIggAZQghAagQASIgVAVIgLAMQknE6i2CwIgSARIgLAKIgeAcIgcAYQkTDwy8K2IgKAFIgRALInuEfIgLAGIlFC/IgiAUIgGAEQn3EqkaCgIghATIgGADQlmDQjbB1IgdAQIgOAHQixBdhSAZQgRAGgOABIgGAAIgBAAQgLADgIAAQgGAAgGgCg");
	this.shape_448.setTransform(652.0064,589.2853);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("rgba(0,0,0,0.996)").s().p("Ego/AfjIgBgBQgUADgNgGIgEgKIAvgbIAFgEIAngcIALgGQCJhEEsk9IAOgPQCciMDXjjIAGgHQDfkRDcimIACgCQC/jGDPjAQDzkDDvjRIANgMQEwlMEgiiIATgKQDFhqFHh8IAbgLQDDhSDQhVQCKgoFbjZIAkgVIBig2QDOh6CThPIAzgkIAAgBQB0h6BghcIAagaQASgQAagpQAWgiAPgKIApgfQAPgKAhgHQAdgGAFADQAEABADA7IADBDQAEASAGBmQAHB5gEAtQgDAghUCKIhTCEQgGALg0BDQgxBAgFANQgHARg/gJQhGgJgSAOQg5A0gOAcIgSAYQklE9jNDEIgRARIgqAmQlBElyyKzIgLAGQjnCHkfCqIlUDKIgjAVQoRE/kNCaIgmAWQltDWjdB1IgrAXQi3BfhTATQgLAEgMAAQgIAAgIgCg");
	this.shape_449.setTransform(651.8094,583.3891);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("rgba(0,0,0,0.996)").s().p("EgooAhXQgOABgNgHIgHgEIgBgBQgRgDgLgHIgEgLIAAAAIAsghIACgCIADgCIAmggIACgDIAIgFQB9hDERl+IAIgLIAFgGQCGidDAkMIAGgHIAIgNQDKlACwipIACgCIAYggQCejYCnjGQDckwDTjpIAMgNIAfgpQERlwD9ibIASgKQAXgOAXgMQCqhYFWhtIAdgKIAjgMQC9hEDPhGQCwgsFYiwIAogTIASgHIBXgmQDahmCmhEIA5gdIAAgBQCGhjBxhKIAfgVQASgKAVgWIAOgNQAagbATgIQAPgHAegSQATgJAfgFQAOgDAqgEQAqgFAEABQAFAAAIBiQAEAxACAyQAEAuAKC8QAKC9gBALQgCAahrBpQhrBpgBAEQgBAJhYBSQhaBTgBACQgNAWgOATQj8EZjoDgIgTASIgfAdIgNALQmxGVxgKLIgKAGIgKAGQjpCLkrC1IliDXIgJAFIgcASQpHFojwCMIgDABIgoAYQl5DijfB1IgLAGIguAXQi7BehOAGIgCABQgFAAgFgDg");
	this.shape_450.setTransform(651.0545,573.702);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("rgba(0,0,0,0.996)").s().p("EgosAiSIgCgBIgIgDQgJgBgKgHIgEgDIgCgBIgBgBIgCgCIgBAAQgOgGgKgIIgBgBIgDgJIAAgCQAIgJAigbIACgCIAAAAIABAAIACgCIABgBIAkgiIAAAAIADgDIAAAAIAHgEIABgBQB3hGECmaIACgCIAFgJIACgBIAAgCIAEgEIABgCQB7ilC0keIAAgBIAEgGIABgCIAGgKIACgDIADgFQC+lUCairIACgCIACgCIACgDIATgdIAEgGIABgCQCQjgCWjMIAIgMQDMk+C/jvIAMgOIAAgBIAKgNIAVgeIAJgMIAEgGQECl/DridIANgJIADgCIAQgJIAegSIAQgIIAIgFQCghPFchoIAKgDIAVgGIAKgEIAZgIIALgDIAIgDQC6g+DNg/IAKgDQDCgtFQiZIAIgEIAggNIAKgEIAJgDIAKgDIAEgCIBLgdIAMgFQDYhYCrg9IALgEIAygXIABAAIAIgEIAAAAQCIhTB0g/IAPgIIARgKIAQgJQANgGAOgLIAOgLIACgBIAEgDIALgJQAPgLANgHQALgGALgFIAYgLIAZgKQALgEANgCIAagFIAegEIAbgCIAxgEQAOgBAPAYQAEAKAEArIAIBnQAGBGAKCoIAKCpIABAyIAEA3QADAugBADIieCqQgNAQgpApIgjAiQhMBKgQARIgcAjQjkEDjtDmIgVAUIgHAHIgTASIgFAFIgOANIgLALIgIAHIgFAEQnqHKwoJwIgJAFIgCACIgHAEIgDACIgJAFIgIAFQjnCKkqC2IgFADIlmDdIgCABIgGADIgDACIgIAFIgTAMIgDABQpdF7jkCGIgDACIgEACIgBABIgDABIghAUIgJAFQl7DljfB1IgEADIgHADIgCABIgKAFIgkASIgLAGQi5BbhMAAIgCAAIgBAAQgDAAgEgCg");
	this.shape_451.setTransform(650.8475,569.1748);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("rgba(0,0,0,0.996)").s().p("EgooAjQQgDAAgFgEQgFgBgFgEQgLgDgLgLIgBAAIgEgFIgBgBQgOgJgJgJIgEgLIAAAAIAAgCQAGgJAigdIACgDIABAAIADgCQAagZAKgMIAAgBIADgDIAHgFQByhGD1m6IAGgLIACgDIADgGQBxitCokyIAFgIIAGgNIAFgIQC2lvCIiuIABgDIAWglIAFgJQCHjxCKjWQDGldC1j+IAKgPIAdgtIAMgTQD8mbDhifIASgMQAXgQAXgNIAXgNQCYhKFzhnIAggJIAkgLIATgGQDAg6DUg7QDXgwFXiIIAqgPIAUgGIAOgFIBPgbQDlhRC5g5IA/gXIAAAAQCWhLCBg5IAjgQQAWgHAXgQIAQgKIAHgFQAYgPATgGQAUgGAdgMQAWgHAdgFIA6gHICAgKQAQgBAjJOIAEB/IAFB+QABANiWCbIicChQjcD9j+D3IgUAUIggAeIgOANIgSARQolIBv9JdIgKAGIgKAGIgTALQjpCMkyC9QixBujAB4IgIAEIgLAIIgUAMQqBGUjUB/IgBAAIgCABIgrAaQmIDvjiB2IgJAFIgLAFIgxAZQi1BYhMAAIgMgBg");
	this.shape_452.setTransform(650.3751,564.4524);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("rgba(0,0,0,0.996)").s().p("EgotAkMIgCAAQgEAAgFgFIgDgDIgFgDIgCgCIgGgEIgMgLIgCgDIgDgEIgBgBIAAgBIgDgDIgBAAQgKgKgHgIIgCgFIgCgGIAAgBIgBgCQAEgLAigeIABgBIABgCIABAAIABgBIADgCIAAgBQAagaAIgNIAAgBIADgCIACgBIAFgEIACgBQBshJDmnWIAAgBIAFgKIABgBIABgCIAAgBIAEgHQBli1CclFIABgBIADgHIABgCIAFgLIABgCIADgGIABgCQCsmEB0iyIACgEIABgBIABgDIASgkIACgDIADgFIACgEIACgDQB6j5B6jaIAFgJQC3luCkkHIAFgIIAFgIIAFgIIAXgoIAEgHIAIgOIAEgGIACgEQDvmqDQilIALgIIAIgGIAJgHQASgNATgLIAJgGIAPgIIAJgFIADgBQCOhGGBhjIALgDIAWgGIALgDIAagHIAMgDIAIgDIALgDQDAg1DXg2IAJgDQDogxFQhzIAJgCIAjgLIAIgCIAMgEIAIgCIAHgCIAIgCIAAAAIBHgVIAKgDQDmhFC+gyIALgDIA2gRIABAAIAMgEQCVg8CCguIARgGIATgGIARgGQAPgFAPgHIARgIIABgBIAGgCIALgGIAIgEIAYgJIAWgHIAcgIIAYgIIAbgFIAZgEIAhgEIAZgDIBWgKIAugEQAZgBALAnQAHAgAMCQQAMCMAMC/IACAVIAGCCIAGBpIABAeIAEA+IABBBQAAAFgoAnIgqApQgaAfgyBDQgtA2gKAOIgYAgQhWBjiAB5QifCWhgBeIgVAUIgBABIggAfIgBABIgNAMIgCACIgRAQIgBABIgWAUQpYIyvFJBIgJAFIgIAGIgCABIgIAEIgMAIIgJAFIgGAEQjoCLkwC/IgMAHQiuBsi/B5IgIAFIgFADIgGAEIgBABIgKAGIgEADIgGADIgPAJQqPGhjIB5IgBABIgCABIgBABIgLAGIgBABIgDACIgdARIgPAKQmHDvjfB1IgDABIgJAFIgIAEIgCABIgGADIgKAFIgkARIgPAHQilBOhKAAQgLAAgIgCg");
	this.shape_453.setTransform(650.025,559.8246);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("rgba(0,0,0,0.996)").s().p("Ego2AlIQgFAAgHgKIgGgGIgHgIIgLgMIgFgIIgEgFIAAgBIgSgYIgDgKIAAgCQADgLAighIACgDIABAAIAAAAIAEgEQAcgdAFgNIAEgDIAHgGQBmhIDan3IAFgLIABgEIAAgBIAEgHQBai9CQlYIAEgJIAGgOIADgIIABgBQCjmeBji2IABgEIASgqIAEgJIAEgHQBxkIBujkQCtmJCYkVIAJgRIAagyIAMgWIAGgLQDonGDHipIASgOQAXgTAXgOIAYgPIANgGQCGhCGbhjIAigJIAlgJIAVgFIALgDQDFgyDegzQD+g0FWhhIAtgLIAUgFIAPgEIAJgCIBKgSQDxg+DNgtIBFgRIABAAQCjgzCQgnIAlgKQAZgGAZgJIARgGIAIgDIAVgHIAagHIA0gMQAZgGAcgEIA7gGQAYgCBbgPQBUgLAVAOQAHAFARCwQAOCZANC5IAREFQAPD2gCAYQgBALhGBmIhKBsQhJBYiZCFQjHCvhBBAIgXAWIgiAiIgOANIgUATIgXAVQqQJtumIzIgJAGIgJAGIgWAMIgHAEQjvCRlADLQi2ByjMCCIgHAEIgLAIIgDACIgVANQqyG6i7BzIgMAHIgBABIgCABIgtAcQmSD5jjB1IgTAKIgJAEIgLAFIg0AZQiiBMhLAAQgQAAgMgEg");
	this.shape_454.setTransform(649.7364,555.2043);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("rgba(0,0,0,0.996)").s().p("EgpTAm2QAAgDgVg1QgVg2AAgDQAAgNAlgoQAkgnAAgOQBZgtDQprQBIjVCCmgIDjrPQEiuGDNngQEZqRDWhtQB/hBI0h2QHyhoKhhvQKIhsHQg5QHxg+APAfQAWAqAmIvQAkIGAACCQjYERmKF7QsSLzt8IfQmDDspvGWQsJH5ifBkQnaEsj4B+QjjBxhgAAQghAAgRgMg");
	this.shape_455.setTransform(648.825,547.0257);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("rgba(0,0,0,0.996)").s().p("EgqSAm6QAAgCgVg2QgVg1AAgDQAAgNAlgoQAkgoAAgNQBagtDPprQBIjWCDmgIDjrPQEhuFDOngQEYqRDWhtQCGhFIgh5QHyhxKLhxQKEhyHQg1QH4g6AvAuQBEBBBII1QBFIOANDDQiyFFlwGTQrQLptQIEQmMDyqWF6QsLHQkDBdQoGEOk0BrQj4BehsAAQgqAAgVgPg");
	this.shape_456.setTransform(655.1,546.5941);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("rgba(0,0,0,0.996)").s().p("EgrRAm/QAAgCgVg2QgVg1AAgDQAAgNAlgoQAkgoAAgNQBagtDPprQBIjWCDmgIDjrPQEhuFDOngQEYqRDWhtQCOhJILh7QHxh7J2hzQJ/h3HPgyQH/g2BRA+QByBYBqI6QBlIXAbEDQiMF6lXGqQqMLfsmHqQmUD3q8FfQsPGnlmBWQozDwluBYQkJBKh4AAQg5AAgYgRg");
	this.shape_457.setTransform(661.4,546.0814);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("rgba(0,0,0,0.996)").s().p("EgsQAnFQAAgDgVg1QgVg2AAgDQAAgNAlgoQAlgnAAgOQBZgtDQprQBHjVCDmgIDjrPQEhuGDOngQEZqRDVhtQCUhMH4h+QHyiFJeh0QJ7h9HQguQIGgzByBPQCfBtCMJBQCGIfAoFDQhmGvk9HCQpJLVr7HQQmdD8riFEQsSF9nKBPQpfDSmpBGQkQA3iEAAQhQAAgdgUg");
	this.shape_458.setTransform(667.675,545.5194);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("rgba(0,0,0,0.996)").s().p("EgtPAnKQAAgCgVg2QgVg1AAgDQAAgNAlgoQAlgoAAgNQBZgtDQprQBHjWCDmgIDjrPQEhuFDOngQEZqRDVhtQCbhQHkiBQHyiOJIh2QJ3iDHPgqQINgvCTBeQDNCECtJHQCoIoA1GDQhBHjkjHZQoGLLrQG3QmmEBsJEoQsUFUouBIQqLC0njAzQkLAmiPAAQhzAAgjgZg");
	this.shape_459.setTransform(673.975,544.9618);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("rgba(0,0,0,0.996)").s().p("EguOAnPQAAgCgUg2QgWg1AAgDQAAgNAmgoQAkgoAAgNQBZgtDQprQBHjWCDmgIDjrPQEiuFDNngQEZqRDVhtQCihTHQiFQHyiXIyh3QJyiJHQgnQIUgrCzBuQD7CbDPJMQDIIwBCHEQgaIYkJHxQnDLAqmGdQmtEGswEOQsXEqqSBBQq4CVodAhQjxAWiUAAQivAAgrgfg");
	this.shape_460.setTransform(680.25,544.458);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("rgba(0,0,0,0.996)").s().p("EgvNAnTQAAgCgVg2QgVg1AAgDQAAgNAlgoQAlgoAAgNQBZgtDQprQBHjWCDmgIDjrPQEhuFDOngQEZqRDVhtQCphXG7iIQHzigIbh4QJuiPHPgjQIcgoDUB+QEpCxDwJSQDqI5BPIEQAMJMjwIKQmAK1p7GDQm2EMtVDyQsaEBr2A5QrkB4pYAOQi0AJiDAAQkgAAg3gog");
	this.shape_461.setTransform(686.5763,544.0517);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("rgba(0,0,0,0.996)").s().p("EgwQAnVQAAgCgVg2QgVg1AAgDQAAgNAlgoQAlgoAAgNQBZgtDQprQBHjWCDmgIDjrPQEhuFDOngQEZqRDVhtQCwhaGniLQHziqIFh6QJpiVHQgfQIigkD1COQFXDHESJZQEKJBBdJEQAxKAjWIiQk8KspQFoQm/ERt8DXQsdDXtaAzQsQBZqTgEIhfABQoSAAhLg2g");
	this.shape_462.setTransform(693.2899,543.8818);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("rgba(0,0,0,0.996)").s().p("EgltAobQqZgQhSg7QAAgCgVg2QgVg1AAgDQAAgNAlgoQAkgoAAgNQBZgtDQprQBIjWCCmgIDjrPQEiuFDNngQEZqRDWhtQC2heGTiOQHzizHvh7QJlibHPgcQIqggEVCeQGFDeE0JeQErJKBqKEQBYK1i9I6Qj5KhomFOQnHEWuiC8QshCuu8ArQpaAroeAAQjNAAjFgGg");
	this.shape_463.setTransform(700.5095,544.3822);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("rgba(0,0,0,0.996)").s().p("EgmLAomQrFglhUg8QAAgCgVg2QgVg1AAgDQAAgNAlgoQAkgoAAgNQBZgtDQprQBIjWCCmgIDjrPQEiuFDNngQEZqRDWhtQC9hhF/iRQHzi9HYh9QJhigHPgYQIxgdE2CuQGzD0FWJkQFMJSB3LFQB9LpijJSQi2KXn6E0QnQEcvICgQskCFwhAkQltAMlcAAQnkAAnEgYg");
	this.shape_464.setTransform(708.1297,545.4606);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("rgba(0,0,0,0.996)").s().p("EgkjAnsQibgKiWgLQlGgajOgcQj6ggg2gjQgEgDgOgjIgHgRIgHgUIgPgmIAAgBQAAgLAYgbIAPgSIAOgRQAXgZADgOQBFgsCHltQAth8A4inIAwiSQBKjlBZkcIABgFQCyoyBAi/IBEjJQB7ljBpj3QBUjABhilQBAh7A8hnQBvjEBniSQDLk1CohIQBNgiBjgmQC6hED0hLQBSgXBQgTQDhhBD8goQDDglC2ghQDbgeCxgcQGIgvFFAJQI8AIFMC9QBwBABqBUQFWEMEUHIQGIJtB4LUQBbImhiHhQgiC5hMCmQjGIbncETQhBAphHAjQoCD8vqB9QmPAwnHAZQoFAdpIABIggAAQrTAAqegsg");
	this.shape_465.setTransform(732.9657,555.9604);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("rgba(0,0,0,0.996)").s().p("EgQMAn/QsAgVrUhDQijgPidgQQlRgijcgkQkEgng8giQgIgFgOggIgGgSIgJgVQgOgjgBgFIAAgBQAAgLAZgdIARgSQAJgLAEgHQAXgYAGgRQBHg3CJl5QAvh/A7iyIAyiZQBVkIBVkPIABgGQC1o9BMjYQAlhvAkhlQCMmFB2jnQBfi2CBiiQBOh1BLhjQCDi6B8iKQDmkgC+hFQBUggBmgjQDPg+D2g6QBYgRBSgLQDbgvEZgKQDOgSC6gTQDugGCrgTQGVgPFUAhQJGAtFiDMQB2BEBvBWQF1EcEmHCQHEKJB4LiQBdI6iLH7QgtC7hoCgQjuH1okDyQhGAkhNAfQo0DbwMBbQmjAhneALQjPAEjaAAQlgAAl3gLg");
	this.shape_466.setTransform(757.998,566.3778);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("rgba(0,0,0,0.996)").s().p("EAAsAoaQo9gHp2gjQsegsr6haIlNgnQldgsjrgqQkNgthCgkQgMgFgOgeIgHgSIgIgXQgPglgBgFIAAgBQAAgLAageIARgTIAOgUQAXgWAIgUQBKhCCMmEQAviDA+i9IA0igICxotIABgFQC5pIBXj1QAph0AmhoQCemnCBjYQBrirChigQBchwBYheQCaivCRiDQEAkKDThCQBbgeBqgfQDkg5D4gqQBdgKBVgDQDVgdE1AUQDZABC+gEQECAQCmgJQGiAQFhA5QJRBTF3DbQB8BIBzBXQGVErE4G+QIBKjB5LxQBdJNi0IWQg3C9iFCbQkWHPprDRQhMAfhSAaQpmC8wuA4QlWAOl5AAIjdgBg");
	this.shape_467.setTransform(783.1453,575.8447);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("rgba(0,0,0,0.996)").s().p("EgAcApUQpagaqOg1Qs6hCshhwIlbgxQlog0j5gxQkXg0hJgkQgPgHgOgbIgHgTIgJgYIgRgsIAAgBQAAgLAcggIASgUQAKgNAEgHQAWgVAMgYQBLhMCPmQQAwiGBBjIIA2inIC4pDIABgGQC9pSBjkQQArh7AphrQCvnICNjJQB3igDBifQBqhpBmhaQCvilCmh7QEaj1Dqg+QBhgdBtgcQD6gzD6gaQBigDBXAGQDPgLFSAxQDkAUDDAKQEVAoCgAAQGvAwFvBRQJcB4GNDqQCBBMB4BZQG0E7FLG4QI9K+B5MAQBfJhjeIwQhBC+iiCWQk9GpqzCwQhSAahXAWQqZCbxPAWIiYABQmKAAm0gRg");
	this.shape_468.setTransform(808.3508,581.6182);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("rgba(0,0,0,0.996)").s().p("EAOcArCQnigKofgkQp2grqlhHQtXhZtIiHQi6gdivgdQlyg9kJg4Qkgg6hPglQgUgIgNgXIgHgVIgKgZIgRguIAAgBQAAgLAdghIATgVQALgOADgIQAWgTAOgbQBOhXCRmbQAxiKBEjTIA4iuIC/pZIABgGQDBpeBukrQAviAAqhvQDBnpCai6QCDiWDgicQB4hkB0hVQDEibC7hzQE1jfD/g8QBpgaBwgZQEPguD8gJQBnADBaAOQDJAHFuBPQDwAnDGAZQEpA/CaAJQG9BPF8BrQJnCcGjD5QCGBQB9BaQHTFLFdGzQJ5LaB6MPQBhJzkHJLQhMDAi/CQQllGDr6CPQhXAVhcASQqHBvvgAAIjWgBg");
	this.shape_469.setTransform(833.6068,586.7371);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("rgba(0,0,0,0.996)").s().p("EAN9AsaQn2gZo1gzQqSg9q9hZQt0hwtuicQjCgii0giQl+hFkXhAQkqhBhVglQgYgJgNgUIgIgWIgKgaQgRgsgBgEIAAgBQAAgMAfgiIATgWQAMgPADgIQAWgRARgfQBQhhCUmnQAxiOBHjdIA6i1IDGpwIABgGQDFppB6lGQAxiGAthyQDToLCliqQCPiMD/iZQCHhfCChRQDZiPDRhsQFPjKEUg5QBwgYB0gVQEjgpD/AHQBsAJBcAYQDEAYGJBtQD8A6DKAnQE9BWCUATQHKBvGJCDQJyDBG5EIQCMBUCCBcQHyFbFvGtQK2L1B6MeQBiKHkwJlQhXDBjbCLQmMFetCBtQhdARhhANQn4A7qmAAQliAAmSgQg");
	this.shape_470.setTransform(858.8802,592.4451);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("rgba(0,0,0,0.996)").s().p("EANfAtuQoLgopLhDQqvhPrUhrQuQiGuVizQjKgni7gmQmJhOklhGQk0hIhbgmQgcgKgMgRIgIgXIgLgbIgTgyIAAgBQAAgMAhgkIATgWQANgQACgIQAWgQAUgjQBShrCWmzQAyiRBLjoIA8i8IDMqFIACgGQDJp1CFlhQA0iNAvh1QDkosCyibQCaiBEfiYQCVhYCRhNQDuiFDlhkQFqi0Eqg2QB3gXB3gRQE4gkEBAXQByAQBeAgQC+ArGlCKQEIBNDOA2QFRBtCNAdQHYCNGXCcQJ8DmHPEXQCSBYCHBeQIQFqGCGoQLyMPB6MuQBkKalZKAQhiDCj3CGQm0E4uKBMQhiAMhnAJQlVAYmZAAQo6AAq9gvg");
	this.shape_471.setTransform(884.1736,598.6451);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("rgba(0,0,0,0.996)").s().p("EANAAu7Qogg2phhSQrLhhrqh9Quuidu8jJQjRgsjBgqQmUhXk0hNQk9hOhignQgggMgMgOIgIgXIgLgdQgTgwgBgEIAAAAQAAgNAiglIAUgXQAOgSABgIQAWgOAXgmQBVh2CYm+QAziVBOjyIA+jEIDTqbIACgGQDMqACRl9QA3iSAxh4QD2pOC+iMQCmh2E/iWQCihTCfhIQEEh6D6hdQGEifFAgyQB+gVB6gOQFOgeEDAnQB3AXBhAoQC3A9HBCoQEUBgDRBEQFlCECIAmQHlCuGkCzQKIEMHkEmQCYBcCLBfQIwF6GUGjQMuMpB7M+QBlKtmCKaQhsDEkVCBQncESvRArQhnAHhsAEQihAFitAAQr7AAvxhfg");
	this.shape_472.setTransform(909.4963,605.3934);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("rgba(0,0,0,0.996)").s().p("EAMhAwEQo1hFp3hiQrnhzsCiPQvKizvjjgQjZgwjHgvQmfhglDhUQlGhVhpgnQgjgNgMgLIgIgYIgMgeQgUgzAAgDQAAgNAjgnQANgNAIgLQAOgSABgIQAWgNAZgpQBXiBCbnKQA0iYBRj9IBAjLQCgn8A6i1IACgGQDQqMCcmXQA6iYA0h8QEHpwDKh8QCyhsFeiTQCxhNCthEQEZhwEPhVQGeiJFWgwQCFgTB9gKQFjgZEGA4QB8AdBjAxQCyBOHdDGQEfBzDWBTQF4CbCCAwQHyDMGyDMQKSExH7E1QCdBgCQBhQJPGJGmGeQNrNFB7NMQBnLAmsK1Qh3DGkxB7QoDDswZAKQhtAChxAAQuVgGz5iWg");
	this.shape_473.setTransform(934.8162,612.6748);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("rgba(0,0,0,0.996)").s().p("EAzNA0rUgWtgAegj0gGMQ7Rkt88m5Qq3ilnziHQnIh8gpgdQAAgDgVg1QgVg2AAgDQAAgNAlgoQAkgnAAgOQBZgtDQprQBIjVCCmgIDjrOQEiuHDNngQEZqRDWhtQC9hhF/iRQHzi8HZh9QJhihHPgYQIxgdE2CvQCsBgH6DjQNMF7DABYQXkK5O/J4UAvnAfUgUKAe8QlBHu4wAAQhyAAh4gDg");
	this.shape_474.setTransform(960.1495,620.6206);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("rgba(0,0,0,0.996)").s().p("EAe8AzRQwohi1VjnQm0hKm/hUQ1Lj82GlOIk0hKQoBh8mHhqIhkgbQlthlgpgaIgGgPIgQgpIgDgHQgSgvAAgEQAAgMAggjIAFgGQAXgaAIgOQAGgIABgGQBTguC4oVIAghfQA6itBekqIA1inICZnnIBNjyQDApSCZmWQBXjkBNisQBfjVBXiPQCzkxCshTIACgBQDNhkF4iMQCLgzCKgvQFuh7FahVQB4geBxgXQHAhcFagCIA7ABQCIADB1ATQBFAHBEATQBUAUBLAXQCiAxCCBQQA4AjBZAuQDBBoFTCdIEPB8QJWERC7BMQFCCLEjB2QDaBXDJBJQDBBLC2A+QCwBLCuA7QCoA+CbBJQCYBCCRBOQA0AbA1AeQCGBPCCBXQL5H/HJIZQH/JVB+JhQCRK3loKzQg+B1hLB1QkPGjv0CDQlkAxndACIgJAAQpZAAr8hGg");
	this.shape_475.setTransform(966.5317,620.7252);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("rgba(0,0,0,0.996)").s().p("EAfzAzTQwzhb1ujmQm6hJnHhUQ1gj92alRIk5hKQoJh9mNhrIhlgcQlwhlgtgbIgHgOQgDgLgNgfIgDgHQgSgvAAgEQAAgMAhglIAFgGQAYgaAHgOQAGgIACgGQBUgzC4oZIAhhhQA7ivBfkuIA1ipICcntIBOj3QDFpfCcmVQBajpBPirQBnjcBciGQC0kXDHhaIADgCQDdhnFwiGQCOgzCLguQF4h6FdhRQB6gbBzgWQHNhUFXAUIA6AFQCHAOBwAgQBAAMBCAeICXA7QCZA+CDBWQA5AnBXAwQDDBxFSChIESCBQJLEPDWBPQFOCGEmBfQDgBGDLArQC9AyC0AaQCnAxCtATQCnAaCWA0QCaAnCWBCQA3AYA4AbQCJBICJBXQMMH2HRIsQH9JcB1J3QCGLBlrK8Qg+B4hNB3QkdG+vJC0QlbBHnrAOQhkAChqAAQoSAAqUg2g");
	this.shape_476.setTransform(972.9163,620.4981);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(0,0,0,0.996)").s().p("EAgqAzWQw9hS2IjmQm/hJnQhUQ12j92slTQijgmibglQoSh/mShsIhngcQlzhlgwgcQgDgDgFgKIgQgrIgDgHQgTgwAAgEIAAAAQAAgNAhgkIAGgGQAZgcAGgOQAGgHACgGQBVg4C6oeIAhhhQA7i0BhkwIA1irICenzIBQj8QDKpsCemVQBdjsBSisQBvjjBhh8QC2j9DhhiIADgCQDthqFpiBQCQgzCOgtQGCh5FehLQB9gbB1gTQHbhMFSAqIA6AKQCGAYBrAuQA7AQBAApQBMApBCAhQCRBKCEBfQA5ApBVAyQDGB7FRClQCOBGCIBAQI/ENDyBSQFZCBEqBJQDkA0DNANQC6AYCzgKQCcAYCugWQClgJCSAdQCbAOCbA2QA6ATA7AaQCMBACPBYQMgHsHYI/QH7JjBtKNQB7LMluLEQg/B7hOB5QksHYudDmQlSBdn6AaQi3AIjKAAQnSAAo2gqg");
	this.shape_477.setTransform(979.3219,620.0706);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(0,0,0,0.996)").s().p("EAhhAzbQxHhK2ijlQnEhJnZhUQ2Lj+3AlVIlDhMQobiAmXhtIhogcQl2hmg0gdQgDgDgFgJIgRgrIgDgIIgTg0IAAgBQAAgMAiglIAFgGQAagdAFgOQAGgGAEgHQBWg8C6ojIAihjQA8i3BhkzIA3itICfn5IBSkAQDPp6ChmVQBgjvBVitQB2jqBmhyQC3jjD7hqIAFgCQD8htFih8QCTgyCQgsQGLh5FhhGQB/gZB2gRQHqhEFNBAIA7AOQCFAjBmA8QA1AUA+A0QBIAzA+AnQCHBWCGBmQA6AtBSA0QDJCEFPCpQCOBICMBDQIzELEOBVQFlB9EtAxQDqAjDOgQQC3gCCxguQCTgCCug+QCjgtCNAHQCcgLChAqQA9APA/AXQCOA5CWBYQMzHjHgJRQH5JrBkKiQBxLXlxLNQhBB+hOB7Qk7HytzEYQlIByoIAnQj9AQkkAAQmZAAnlggg");
	this.shape_478.setTransform(985.7393,619.5177);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(0,0,0,0.996)").s().p("EAiYAzgQxShC27jlQnKhHnihVQ2gj+3TlYIlIhMQojiCmchuIhrgcQl4hmg4geQgFgDgEgIQgCgIgPglIgDgHQgTgwgBgFIAAgBQAAgMAjgmIAFgGQAbgeAEgNQAHgGAEgHQBXhBC8onIAhhkQA+i7Bik3IA2iuICin/IBUkFQDUqHCjmVQBijzBZisQB9jxBshpQC4jJEWhyIAFgCQEMhwFbh2QCVgyCSgsQGVh4FjhBQCBgXB4gPQH4g8FJBWQAeAIAdALQCDAtBiBJQAvAZA9A+QBEA/A5ArQB/BjCGBtQA7AwBQA2QDMCOFOCtQCNBJCRBHQImEJEqBYQFxB3EwAcQDvARDQguQC0gcCwhSQCIgbCuhmQChhRCKgPQCdglCmAeQA/AKBCAVQCSAyCdBYQNGHbHnJjQH3JzBcK3QBmLhl1LXQhBCAhPB9QlKINtIFJQk/CIoWAzQk1Abl2AAQlnAAmigZg");
	this.shape_479.setTransform(992.1867,618.9051);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(0,0,0,0.996)").s().p("EAjPAznQxcg73WjkQnOhGnrhWQ22j+3nlbIlMhNQosiDmhhuIhtgdQl6hng8gfQgGgDgEgGQgCgHgPgnIgDgIIgUg1IAAgBQAAgMAjgnIAFgGQAcgfADgNQAHgFAFgHQBYhGC9orIAihmQA+i+Bjk6IA3iwICkoGIBWkJQDYqVCmmUQBlj3BcisQCEj4ByhfQC5ivEwh6IAGgCQEbhzFVhxQCXgyCVgrQGdh3Fmg8QCDgVB6gNQIHg1FEBsQAeALAdANQCCA4BdBWQAqAeA6BJQBBBJA0AwQB2BwCHB0QA8A0BOA3QDPCYFMCxQCNBLCVBJQIaEHFFBbQF9BzE0AFQD0AADShMQCxg1Cuh2QB/g2CtiOQCfh0CGglQCeg/CsASQBBAGBGASQCUAsCkBYQNZHRHvJ2QH1J7BULMQBbLrl4LgQhCCDhQB/QlZIosdF7Qk2CdojA/QlqAnnHAAQk3AAligSg");
	this.shape_480.setTransform(998.6376,618.2335);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(0,0,0,0.996)").s().p("EAkFAztQxmgy3vjkQnUhGn1hWQ3Kj+36ldQiqgniognQo1iFmmhvIhugdQl9hnhAggQgGgDgEgGIgSguIgDgIIgUg2IAAgBQAAgNAkgmIAFgGQAdghACgNQAHgEAGgHQBZhLC9owIAihnQBAjCBkk8IA4iyICloMIBYkOQDeqiCnmUQBpj6BeitQCMj/B3hVQC6iVFKiCIAIgCQEqh3FOhrQCagxCXgrQGnh2Fog2QCFgVB8gKQIVgtE/CCQAeANAdAPQCCBCBXBlQAkAhA5BVQA9BTAwA1QBsB8CJB9QA9A2BLA5QDSCiFKC0QCNBOCZBMQIPEFFhBeQGIBuE3gSQD6gRDThqQCuhPCsiaQB1hPCui3QCdiXCBg8QCghYCxAGQBEACBKAQQCWAkCrBYQNsHIH3KJQHzKCBLLiQBQL2l6LpQhECFhRCCQlnJBryGtQktCzoyBLQmWA0oWAAQkKAAkpgNg");
	this.shape_481.setTransform(1005.1157,617.537);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(0,0,0,0.996)").s().p("EAk7AzzQxxgq4IjjQnahFn9hWQ3gkA4NlfQisgnirgoQo9iFmrhxIhwgdQmAhnhEghQgHgEgEgEQAAgEgSgrIgDgIIgUg3IAAgBQAAgNAkgnIAGgGQAeghABgNQAGgEAIgIQBahPC+o0IAihpQBBjFBklAIA5izICooTIBZkSQDjqvCqmUQBrj+BhitQCUkGB8hMQC8h7FkiJIAIgDQE7h5FGhmQCcgxCZgpQGxh2FrgxQCHgTB+gJQIigkE7CYQAfAPAcARQCBBNBSByQAfAmA3BfQA5BeArA7QBkCICKCEQA9A6BKA6QDUCrFJC5QCNBPCdBQQIDEDF8BhQGUBpE7gpQD/giDUiIQCrhoCri/QBrhpCtjeQCci7B9hSQCghyC3gGQBHgCBNANQCZAdCyBZQN/G/H+KbQHyKKBCL3QBFMAl9LyQhFCIhSCEQl1JcrHHeQkkDJpABYQm7BCpfAAQjiAAj5gKg");
	this.shape_482.setTransform(1011.6034,616.801);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(0,0,0,0.996)").s().p("EAlyAz6UgXZgAtgiqgFzQ6ekb7TmWQqUiZnUh9QmthzgpgdQAAgCgVg2QgVg1AAgDQAAgNAlgoQAkgoAAgNQBZgtDQprQBIjWCCmgIDjrOQEiuGDNngQEZqRDWhtQC9hhF/iRQHzi9HZh9QJhigHPgYQIxgdE2CuQCqBgBfCcQAZAqA1BqQA1BoAnBAQCDDXDoDDQEzECIZETQP4IIJ1h+QEEg0DWilQCoiCCpjjQBiiDCtkGQCZjfB5hoQCiiMC8gRQDXgUEYCHQOSG2IGKuQHvKRA7MOQA6MJmBL7QmPMXsqKAQn/GT3yAAQi5AAjIgGg");
	this.shape_483.setTransform(1018.1301,616.0667);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(0,0,0,0.996)").s().p("EAnTAzvQj/gGkVgRQ1FhO9Ek2Ikyg0Q4WkM5Cl0IhmgYQpYiMmyh0IgjgJQmNhrgpgcIgDgIIgTgwIgBgEQgUgyAAgDQAAgNAjgmIACgDQAegfAFgPIACgHQBXgtDEpAIAPgwQBBjCBxllIAahSIC+pcIAmh3QDurlC1nFQAqhqAohbQCtmOCSi5QBjh/BgguQBkgyCWg+QCQg7C2hFQEHhgD/hQQDthJDjg5QD4g9DdgnQFQg4ETgDQBsgBBhAHQDbAUCjAqQCdAqB6BHQAhATAfAWQB7BVBUB8QAeAsA3BlQA4BjArBBQCLDRDqDFQBBA2BKA4QEIDGFzC/IBMAlQDgBuDQBJQDXBLC+AjQCyAgCYgBQDxACDJhDQDuhMDEiyQCaiPCajoQA+hiBgicIBWiWQCAjYBmhpIASgTQBGhRBPgiQBcgiBggFQDcgIETCGQB/A+B3BDQHSEGFgFXQDJDECkDcQCfDVB0DkQDyHbA0ISIAFAxQAtIdieIWQg+DYhgDWQh0EIihD4QkCGUl0FjQhwBrh5BmQjZC5mFBwQopCgu8AAQiOAAiYgDg");
	this.shape_484.setTransform(1014.7,617.2725);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(0,0,0,0.996)").s().p("EAozAzlQkAgFkYgPQ1KhK9Wk3Ik0g0Q4gkN5Ol2IhmgYQpciNm1h1IgkgJQmOhrgsgdIgDgHIgSgxIgCgDQgTgygBgEQAAgNAkgmIACgDQAeggAEgOIADgHQBXgwDEpDIAQgvQBCjEBxlnIAahSIDApgIAmh5QDxrsC2nFQArhqAohcQC0mXCWitQBkh2BogxQBngxCWg9QCTg8C2hCQEIhgEChNQDwhHDlg3QD5g6DggiQFUgzETAJQBrADBgANQDgAjCbAsQCaAvB8BKQAhAUAfAWQB4BUBdB8QAiAsA6BgQA6BfAxBBQCTDMDsDHQBCA3BJA5QEQDQFvC3IBLAkQDlBsDTA+QDcBBC9ARQCzAOCMgWQDegcC4hcQDZhjCyjAQCMidCKjrICOkHQAkhJAqhQQBxjjBahqIAQgUQBAhfBJgcQBcgbBiAAQDfACEPCHQB/A/B3BFQHNEJFkFjQDHDHCjDgQCeDXB2DmQDzHdBBIUIAGAxQA8IgiFIZQg1DchVDaQhnEOiUD+QjuGlllFuQhrBwh2BpQjYDGl3B9QouC9wJAAQhqAAhwgCg");
	this.shape_485.setTransform(1011.3695,618.264);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(0,0,0,0.996)").s().p("EAqSAzeQkCgEkbgOQ1OhG9ok4Ik3g0Q4rkO5Yl4IhogYQpgiOm4h1IgjgKQmQhrgugeIgDgGIgTgxIgBgEQgUgyAAgEQAAgNAjgmIACgDQAfghAEgOIAEgHQBXgyDFpFIAQgwQBCjGBxloIAahTQCImuA6i1IAmh6QD0r1C4nEQArhrAphcQC6mgCaihQBlhsBxg0QBpgxCWg8QCXg8C0hAQELhfEEhLQDzhGDmg0QD9g4DhgdQFZgsERATQBsAIBfATQDkAyCTAvQCYA0B9BNQAhAUAfAWQB2BTBlB7QAnAuA8BbQA9BaA2BCQCbDGDtDIQBCA5BLA6QEXDaFrCvIBMAkQDpBoDWA0QDgA3C9gCQCygDCBgrQDLg7Cnh0QDEh7CgjNQB+iqB7jvQAzhxBLieQAghNAkhQQBkjuBOhrIAOgVQA5hsBDgYQBdgUBiAFQDjAOELCHQB/A/B4BIQHJEMFlFwQDFDJCkDkQCcDYB3DpQD1HfBPIVIAHAxQBKIjhtIdQgrDhhKDcQhaEUiGEEQjbG3lUF4QhoB1hzBtQjXDSloCLQowDbxWAAIiRgBg");
	this.shape_486.setTransform(1008.2212,619.0816);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(0,0,0,0.996)").s().p("EArvA0YQkEgCkdgOQ1ThB96k5Ik5g1Q41kP5kl6IhogYQpliPm7h2IgjgJQmRhsgwgeIgEgGIgTgxIgBgEQgUgyAAgFQAAgMAkgnIACgDQAfghADgPIAEgGQBYg0DFpIIARgwQBCjIBylqIAahTQCKm3A5iwIAnh7QD3r+C5nCQArhrAqhdQDBmpCeiVQBlhkB6g2QBrgxCWg7QCbg8Cyg+QEOheEHhJQD2hFDngwQD/g1DjgZQFegmEQAfQBsAMBeAYQDpBCCLAxQCVA5B/BQQAhAVAfAWQB0BSBtB6QAsAvA+BWQA/BVA8BDQCiDBDvDKQBEA5BLA8QEeDjFmCoIBNAiQDsBmDbAqQDkAsC8gUQCygUB1hBQC4haCXiMQCviSCNjbQBxi2Brj0QAuh4BAifQAchQAfhQQBWj6BChrIAMgWQAyh7A9gSQBfgMBhAJQDoAaEHCGQB+BAB5BKQHFEQFnF7QDDDNCkDnQCbDaB5DsQD2HhBcIWIAIAxQBZInhVIgQghDlg/DeQhNEch5EKQjHHIlFGCQhkB6hvBxQjWDelaCYQouD5ygAAIhPAAg");
	this.shape_487.setTransform(1005.2387,613.3335);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(0,0,0,0.996)").s().p("EAtKA1sQkFgBkhgMQ1Xg8+Mk8Ik8g0Q5AkQ5ul8IhqgZQpoiPm+h3IgkgJQmShsgygfQgCgBgCgEIgTgyIgBgEIgVg2IAAgBQAAgNAkgmIACgDQAggjADgNIAFgGQBYg3DGpKIAQgwQBDjKBylsIAahTIDEprIAoh8QD6sGC6nCQAthsAqhdQDHmyCiiKQBmhaCCg4QBugwCWg6QCfg9Cxg8QEQhdEJhHQD6hDDoguQECgyDkgVQFjgfEPAqQBsARBdAdQDtBRCDAzQCSA+CBBTQAhAVAfAXQByBRB2B6QAvAwBBBQQBCBRBBBEQCpC6DxDNQBFA6BMA9QElDtFhCgIBOAiQDwBiDfAgQDpAhC6gmQCygmBqhVQClh4CGilQCaiqB7jnQBjjFBcj3QAoiAA2ifQAXhTAahRQBJkFA2hsIAKgXQAriIA3gNQBggFBiANQDrAlEDCGQB/BCB5BMQHAETFpGHQDCDQCkDrQCZDcB7DuQD4HkBpIWIAJAyQBnIqg8IkQgXDog1DiQhAEhhsERQi0HZk0GNQhgB+hsB1QjUDrlMClQopEXzkAAIgWAAg");
	this.shape_488.setTransform(1002.4943,604.9085);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(0,0,0,0.996)").s().p("EAl3A24Q1bg3+ek9QiegaiggbQ5KkQ56l/IhqgZQptiQnBh3IgkgKQmThsg0gfIgFgEIgTgzIgBgEQgUgygBgFIAAAAQAAgNAlgnIACgDQAggjACgOIAFgFQBZg5DGpNIARgwQBDjMBzltIAahUIDFpvIAoh9QD+sPC7nAQAthsArheQDOm7Clh+QBnhRCLg7QBwgwCXg5QCig9Cvg6QEThcEMhFQD9hCDpgqQEEgwDmgQQFpgZENA1QBsAWBcAiQDyBhB7A1QCPBDCCBWQAhAWAgAXQBwBPB+B6QA0AxBDBLQBEBMBHBFQCvC1D0DOQBHA8BMA+QEsD2FcCZQAoARAnAPQD0BgDiAWQDuAWC5g4QCyg3BfhrQCRiXB2i9QCFjBBpj1QBVjRBMj8QAjiHArigQAThWAVhRQA7kRAqhtIAIgYQAkiWAxgHQBhACBiASQDwAxD/CFQB+BDB6BOQG8EXFrGTQDADTCkDvQCYDdB8DxQD6HmB2IXIAKAyQB2ItgkIoQgNDsgqDkQgzEphfEWQigHrkkGXQhcCDhpB4QjTD4k+CyQoaEy0PAEIgWAAQj9AAkYgLg");
	this.shape_489.setTransform(999.9971,596.276);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(0,0,0,0.996)").s().p("EAnIA4SQ1ggz+wk+IlBg1Q5VkR6EmBIhsgZQpxiRnDh4IglgKQmUhsg2gfIgFgFIgTgzIgBgEQgUgygBgFIAAAAQAAgNAkgoIACgDQAhgjACgOIAGgEQBZg8DHpPIAQgwQBEjOB0lwIAahTQCSnTA0igIAph+QEAsYC8m/QAuhtAsheQDUnECqhyQBnhICUg9QBygwCXg4QClg9Cug5QEVhaEPhEQEBhADpgnQEIgtDngMQFtgSENBAQBrAaBcAoQD2BwBzA3QCNBICEBaIBAAtQBuBPCGB4QA5AyBFBGQBHBIBLBFQC4CwD2DQICUB8QE0EAFXCRIBPAgQD4BcDmAMQDzAMC4hLQCxhIBUiAQB+i2BljVQBwjZBXkCQBHjeA9kAIA+kvQAOhZAQhSQAtkcAfhtIAGgaQAcijAsgDQBiAKBiAXQD0A8D7CFQB+BEB7BQQG3EbFtGeQC/DXCjDyQCXDfB+DzQD7HoCDIYIAMAyQCEIxgMIrQgDDwgfDnQgmEvhREdQiNH9kUGhQhZCHhlB8QjSEFkwC/QoGFK0pALIhSAAQjjAAj5gJg");
	this.shape_490.setTransform(997.825,587.5904);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(0,0,0,0.996)").s().p("EAoUA5rQ1lgu/BlAIlEg1Q5fkS6QmDIhsgZQp1iSnGh4IgmgKQmVhtg4ggIgFgDIgTg0IgCgEIgVg3IAAgBQAAgNAlgnIACgDQAiglABgNIAGgEQBZg+DIpSIAQgwQBFjQB0lxIAahUIDIp2IApiAQEEsgC9m+QAuhtAthfQDanNCuhnQBng+CdhAQB1gvCXg3QCpg+Ctg2QEXhaEShBQEDg/DrglQEKgqDogHQFzgMELBLQBsAfBaAtQD8CABqA5QCKBNCGBdIBBAuQBrBNCOB4QA9AzBIBBQBJBDBRBGQDACqD4DSICVB/QE7EJFTCKQAoAQAnAOQD8BaDqACQD3ABC4hdQCwhaBJiVQBrjUBVjuQBajwBFkPQA6jsAtkEQAXiVAXiiQAKhcAKhSQAgkoAThuIAEgaQAViyAmADQBjARBjAcQD3BHD3CFQB/BFB7BSQGyEeFwGrQC8DZCkD2QCVDhCAD2QD9HqCQIZIANAyQCSI1ANIuQAGD0gTDqQgZE2hFEiQh5IOkEGsQhVCMhiCAQjRERkhDNQnzFi1CARIiBABQjQAAjigIg");
	this.shape_491.setTransform(996.0563,578.9085);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(0,0,0,0.996)").s().p("EApcA7FUgXZgAtgiqgFzQ6ekc7TmVQqUiZnUh9QmthzgpgdQAAgDgVg1QgVg2AAgDQAAgNAlgoQAkgnAAgOQBZgtDQprQBIjVCCmgIDjrPQEiuGDNngQEZqRDWhtQCzhcFpiAQHKikG8hnQIziCG2gHQIRgIE2CvQEACPBiA8QCoBmCoB6QFSD2MzK8QFDETFNCCQErB1ETgJQD8gJC2hvQCwhsA+iqQEqs+BSwfIAjpUQAPjbAiAJQHrB4HFEyQGuEiFxG2QFkGlEQIMQEKIDCgI2QChI4AkIxQAmJDhhIHQhmIgj0G1QkBHPmSE+Qn+GT3zAAQi5AAjIgGg");
	this.shape_492.setTransform(994.7078,570.2324);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(0,0,0,0.996)").s().p("EAtRA6cIgogBQnYgEotgqQyoha4VkAIgJgCQkqgxkug1Q2ej+3ElWIjKgvQogh/mUhsIgFgBIhEgTQlvhjgrgcIgGgOIgRgqIAAAAIgCgGIgTgyIAAAAIAAgCQAAgMAggjIAGgGIAAgCQAWgYAIgNQAFgIACgFIACgEQAtgeBFi/QA7ikBPktIAdhuQA0jhBRkwIADgLQAoimAgh5QBPkrAfiNIAGgWQA/jyA7jUQCgo4CFl1IASguQBRi7CIjIQCkkCCoiLQBShABqhEQCIheChhaQDSh8DOhjQDihvDShHQB8grBzgaQFZhPFWgbIBegGQE0gQEEAiQCrAXCHAtQBsAkBVAiQB8AyA/ApQArAcAcAfIC/DpQE5HeHKG0QBaBcBpBbQAhAcAhAbQAzApBIA1ICHBlQBAArB5BdQBCAuA/AoQBJAvBEAkQDFBtC4A1QChAxCMAHQA+ADA6gEQC5gPB2hOQFjjbDro3QBWkOBCoVIAIhHIAjlzIAUjpIAAgHIAGhAQAKhtATg8QAcgRAQhxQAQh2AcgZQA5hQBvAZQAmAJAxAWIBGAgQAPgCAvAPQA6AYBJAjIAiASQEHCMERDSQCnCBCZCRQCkCaCSCqQDrEOCxEtQBDBvA5BzQDEGEBtE8QAaBLAWBGIAcBeQB5FiBJFpQAhCiAWCjIAKBTQAmE9gEExQgCDUgXDLIgIBEQgjEShGD7QhADjhcDPIgSApQhkDXiAC9QiYDgjBC5IgLALQh6B1i0BdQlKC8oKBhQnTBWqtABIgXgBg");
	this.shape_493.setTransform(992.4399,573.9022);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(0,0,0,0.996)").s().p("EAfTA6wQy2hR5BkCQkxgyk4g2Q27kB3jlbIjOgwQouiDmdhtIhHgUQl0hkgxgdQgCgCgFgLIgRgqIgDgIQgSgvgBgEIAAgBQAAgMAiglIAFgGQAZgcAGgNQAGgIACgGQAsggA5jJQAxijA8k7IAWhzQAoj9BAkjQAgi7Abh6QA/kpAYifQA1kKA0joQCFpEB3mOQA1ifDYkaQDekhEpkiQFJlBFAjeQFsj8EkhPQFFhXF6gpQFigmFHAJQFEAKDSA2QDcA4AnBcQGZPOExFzQBtCFCSB2QApAhBUBBQBNA8A3AwQAgAcCRCKQCMCFBoBaQFUEpEiCSQNnG2IQtAQBoilBhqRQAfjRAcj1IAZjpIAIhNIAooXQAhnOAAglQAAgUBCAMQBEANBwArQERBqE6DBQGJDxE6ErQF/FsDcGXQDpGxBpELQA1CJAeBnQCVFeBkFvQA3DNAnDPQA7E/ATE6QAOD8gODzQgPEagzEHQgzEGhXDvQhSDkhxDNQiLD8i3DTQhyCIinBvQlAD1n9CNQnIB/rlAOIiGABQmvAAn8ghg");
	this.shape_494.setTransform(991.2814,568.2292);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(0,0,0,0.996)").s().p("EAnlA8rQiRgEiZgIQiugIi4gNQwDhK0ajJIi3gcQjqgljvgpIiegbIjVglQ1djy2AlCIgygLIisgoIgogJIhPgTQoHh6mHhnIgIgCIg9gRIgNgDIgagHQlehfg5geQgEgDgFgIIAAgBIgDgFIgOglIgEgIIgBgEQgRgtgBgFIAAAAIgBgBQAAgMAjgmIABgBIAEgEIABgCQAZgbAFgNIADgEIAHgLIABgBQAogmApi9IAEgQIABgJQAlilAolEIADgTIAHg0IAGguIACgXQAKhCgCjEQAEiNAJiOQAIijAIiEIABgaQAZkUALjIQAbkOAhj2QA0lkBCk0QAni5AsilQA6jVCXkEQC3lYD9k0QBThlBWhdQDXjlDqivQFNj3FMhzQFIhvF+gzIAqgFQE5gmFeADIAzABQESAGDjAiQCFAWBfAgQAoAQAbASQDPCNCZCAQCaBfAgBYQB9GaCQE0QBQCcBqCUQAjA3A5BHQAwA+AoA6IAOATQApBIBhB4QBxCaBdBtIAhAmQE1EUEJC2QH3FVFwAIQEgAwDfh1QBOgMBFhDQBUguBMhhQBAhLBEhyIA1hiIBNiWQBKiFAvhvIAXguQAchiAUheIAMhPQAZikAil8QAZkbAQjIIAEg2QAHicAJiRQARkgAPgFQAQgTDDBKQCWA5CjBKQBsAxClB8IEwDnQBLA4BLA9QC6CYCdChQCECCBJBpIASAYQEJF5CkEiQBCB9AyBrQC7FjBwFmIADAHQA/DLAnDQIANBJQAJA5AOBkQAJBAAIApIAJApQAaCHAUCHQAQB1ALB2QAMCHAFCFQADBngBBmIgDBcQgFCFgMCCQgOCHgXCCQgWCDggB+QgPA8gRA7QgNAvgPAvQgpB/gyB5Qg7COhHCEQhAB5hPBuIgHAJQgZAkgcAjQhSBthnBiQitCvjpCMQgqAagrAZQiCBOiWBCQjFBXj0A/Qi6AwjqAeQidASiwAKQjfAMj7AAQifAAiqgFg");
	this.shape_495.setTransform(988.2875,557.7211);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(0,0,0,0.996)").s().p("EArDA/tQk7gElkgVQwRg/1EjKQlIgxlWg5Il6hAQ1+j12ilIIjhg0Ih6gcQoTh9mQhpIhMgUIgogLQlhhfhAgfQgGgEgGgGIgDgGIgPgmIgDgJIgCgEIgTgzIAAAAIAAgBQAAgNAjgmIABgBIAFgGQAagcAEgNIADgEQAGgGAEgIQAlgrAdjCIAEgaQAaisAXljIAEg2IAFhGQABgNgekHQgjk8gRkaQg4u8CDsXQC4xVIeq1QKiteSviuQE3gtGnABQF9AAGAAlQFvAjDsA3QD2A5AFA5QBALZE/LZQCfFtCUDcQNMMaH9FjQHfFPEtAcQCKAMB7gvQBrgpBzheQBOhBCLiNQCpirBOhIQBxhoBuzjQA3pxAkpcQEuAmIbFVQDQCDC6COQCsCDBIBMQMBM2ESMFQBVDxApD8IAXCkQALBNAJAdIAMArQBJD+AtEAQApDyASDxIAGBeQANEWgVELQgQDJgjDBQgJAygKAyQg+EnhtEJQg0CIhLB9QgWAngZAmQjFFglLEKQgmAhgoAgQkbDzmaCeQizBIj0AuQm7BKpwAAIhfAAg");
	this.shape_496.setTransform(986.9104,538.5708);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(0,0,0,0.996)").s().p("EAnBBA6Qh+gEiEgHQwkg51rjNQlOgxlgg6IjogmIiigcQ2dj33DlPIjng2Ig8gNIhBgPQofh/mXhrIhNgVIgQgEIgXgGQlohhhCggQgHgEgFgEIAAgBIgDgGIgOgmIgEgJIgBgCIgBgBIgSgzIAAgBIgBgBIAAgBQAAgNAjgmIABgBIAGgHQAbgdADgOIABgCIABgBQAGgFAFgHQAkgtASjJIACgQIAAgKQAQiqAFlyIABg3IABgqIAAggQgChOgRjBQgZl7gLjiIgBgWQgWo7AWnkQAQlwAplNQBfscDoo8QBykgCUjoQE5n3HQjjQCmhVFBhPQEphOFQgvQCTgUCjgPQDTgUDegJQGQgSF6AOQFiANEMAjQDLAgBNAjIBNBRQALA9ATDGQAeDeA4FvQAxEgBADxQBOFoBHCSIAyB1IAlBAQAuBTArA9QBfCRB7B4QCzCrD3CtQEJDDE6C5QB6BLB8BEQE6CuD3BAQCIAhB9gCQB3ABB4ggQB1gMCMg9IAGgFQC3hFBvgwQAogRAlgxQBphZAijCQBKmMA4oLQA/pBAdo6IAFhrQAFhJAChrQABhmACgSQADgkEDBfQDWBPBxA5QBZAsB9BZIDOCSQBlBDBSA+QAuAkAlAfQFnE+EeF0QE/GjDNHIIAiBNQBUDJA9DRQATA6AXBlQAQBBAOApIAOArQA6C3AuC5QASBKAQBKQA1D2AcD0IAKBfQASC/ADC8QACBagDBYQgEDOgYDGIgOBmQgdDGgwC7QgaBkgfBgQgtCPg9CFQgTAqgVAqQhaDDh6CuQhzCliOCRQgkAlglAlQirCujXCLQh+BRiiBCQi5BLj7AxQnhBarCAAQjUAAjngJg");
	this.shape_497.setTransform(992.4531,531.2857);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(0,0,0,0.996)").s().p("EApgBCiUgXZgAtgiqgFzQ6ekc7TmVQqUiZnUh9QmthzgpgdQAAgDgVg1QgVg2AAgDQAAgNAlgoQAkgnAAgOQAwgYAHkCQAGi9gRnbQgZrNgFjUQgOpWANnfQAi0kDxsxQE1wXKQkYQB4gzGRhLQG6hTILg8QVwifOdBvQAHABAPEQIAiJrQAzOnAoCUQAVBLAgCBQAcBsAYBAQA9CrB+CDQCRCXE0C+QEyC9JPEuQGNDLFsCAQFpB/EYAjQEgAlCmhAQCuhEAVisQCGxBA/xSQAWmEAKhXQARiOAnAKQHrB4HGEyQGvEiF0G2QFmGlESIMQENIECjI1QCkI3AnIyQAoJDhfIHQhkIgjyG1QkAHPmSE+Qn+GT3zAAQi5AAjIgGg");
	this.shape_498.setTransform(998.203,522.5209);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("rgba(0,0,0,0.996)").s().p("EAtCBDKUgXYgAtgiqgFzQ6fkb7TmWQqUiZnUh9QmthzgpgdQAAgCgVg2QgVg1AAgDQAAgNAogpQAlgngDgNQhwmPh7pxQjFvthBt3QhXyuCotAQDQwAJMmdQJEmZYUg4QJtgWLOAmQJqAgJGBGQAHABAQERIAhJrQA0OnAoCTQAUBLAhCCQAcBrAXBBQA+CqB+CEQCRCXEyC9QEzC9JQEvQMzGjI5BJQEaAlCkhAQCshEAZirQCbwWA+xEQAZnAAIhFQARinAmAJQHqB5HHEyQGvEiF0G3QFlGmETINQENIECiI2QCkI5AnIzQApJDhgIIQhjIgjyG2QkBHQmRE9Qn/GT3yAAQi5AAjJgGg");
	this.shape_499.setTransform(975.5577,518.4916);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(0,0,0,0.996)").s().p("EAweBCxUgXYgAtgiqgFzQ6fkb7TmWQqUiZnUh9QmthzgpgdQAAgCgVg2QgVg1AAgDQAAgPh2jeQh6jjgCgJQiBmbhtmXQjSsOhnq7QiPvAA/r7QBOuqGCpdQDPlFLGjUQJki4OnhXQMlhKN/AIQMlAII5BEQAHABAQERIAhJrQA0OnAoCTQAUBLAhCCQAcBrAXBBQA+CqB+CEQCQCXEzC9QEzC9JQEvQMzGkIrBIQEVAkCihAQCphDAdirQCpvbBCxGQAdnwAFgzQASi4AmAJQHqB5HHExQGvEiF0G2QFmGmESIMQENIDCiI1QCkI4AnIyQApJChgIIQhjIfjyG2QkBHPmRE9Qn/GT3yAAQi6AAjIgGg");
	this.shape_500.setTransform(953.5873,520.9548);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("rgba(0,0,0,0.996)").s().p("EAYfBAJQ47ik+/mFQyZjaxUkJQogiGj/hNQjWg7gfgpIgVg4QgLgtgzhvQhGigitkmQhQiSg9g9QiRkYhnj5QkvpAisoQQnbwwCzzbQBRrUKXoAQH4lUP4jpQNqjJQuhXQPBhOLXAmQGWAEElCrQAIBTAUFrQAeImAgEtQAkH5AkCKQAZBbAcBhQArCLBLBiQBnChDZChQDiCqHCD2QIzEwI6C7QIjDkFnAEQDfgPBjh2QC/ooAmpiQBarBAlpfQAUlTAUgVQD+ggD2CeQHNDNGdF0QGLFkFDHhQE5HUDbIhQDYIeBlIyQBmI+gcIcQgeIxioHfQiyH3lCF6QmfHJxjCDQn6BkroAAQsKAAwPhtg");
	this.shape_501.setTransform(921.3703,517.0377);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(0,0,0,0.996)").s().p("EA6BBCaUgXYgAtgiqgFzQ6fkb7TmWQqUiZnUh9QmthzgpgdQAAgCgVg2QgVg1AAgDQAAgkhmjbQiNkxjiluQgohBh3hyIkDjvQmLlzjyljQsmyhEm68QBVn9OsmiQMhllUrj9QRujZS2hYQRdhSIuBDQAHABAQERIAhJrQA0OnAoCTQAUBLAhCCQAcBrAXBBQA+CqB+CEQCRCXEzC9QEzC9JQEvQMzGjIlBIQETAjCjg/QCqhDAjiqQDWwPAtwZQANmlAHh5QAKi2AkAJQHqB5HHExQGvEiF0G2QFmGmESIMQENIDCiI1QCkI4AnIyQApJChgIIQhjIfjyG2QkBHPmRE9Qn/GT3yAAQi5AAjJgGg");
	this.shape_502.setTransform(892.4607,523.2869);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("rgba(0,0,0,0.996)").s().p("EA76BCcQhsgChwgEUgWQgA1ggIgFTIj6gpQ4ekK5LlyIkWhBQndhwlyhgQiggqh6giQiMgog3gVQhMgQhPgTQhXgXgsgPQgOgFgZgeQgZgfgPgGQgggVg1g+QgsglgwgxQkXjqjXk3QgdgoglgxQglgvgrgyQiEibhbh2IglgvQkfluizl+IgJgSQpVzWEn7IQBWn8OpmmIAHgDQMflnUikCIASgEQRljcSmhcIAkgDQQ8hTInA+QANACAOAcQAGAiALC7IADA0IAeI0IADA4QAvNLAmC3QAHAhAHAcIAkCLIARBCQARA9APAtQAMAkAMAeQA2CFBgBtQAYAbAbAbQCICEEAChIBFAqQElCyISEQIBQApQL7GBIXBPQAqAHApAEQDeAXCSgtQAkgLAfgPQB+g+Anh+QADgLgJgWQgJgYACgMQDMvrAsvrQABgQAQgeQAQgfAAgPQAJlDAGh/QACg6AEglQADgXgIgvQgHgnAFgFQANgQAiAGIAzANQG3B1GZEJQAvAfAuAgQF9EKFNF/QApAvAnAwQE4F6D2HLQAhA9AfA9QDlHHCTHtQAVBHAUBIQCFHrApHmQAHBRAEBRQAZHnhJG9QgOBWgRBTQheG9i/FzQgqBRguBOQjdFxk+EPQhHA9hVA2QobFd2HAAQiEAAiLgDg");
	this.shape_503.setTransform(891.4064,523.3088);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(0,0,0,0.996)").s().p("EA6hBCZUgXZgAtgirgFzQ6dkb7TmWQqUiZnUh9QmthzgpgdQg/gIhjgUQjJgni1g8QpMjDjdlmQiqj9h2jTQjZmHiGm2QmM0QEr7hQBWn9OtmsQMkltUrkJQR0jlS0hiQRihbIrBDQAHABAPERIAiJrQAzOnAoCTQAVBLAgCCQAcBrAYBBQA9CqB+CEQCRCXE0C9QEzC9JPEvQM0GjIkBIQETAjCjg/QCqhDAjiqQDXwSAowWQAKmlAGh5QAIi2AkAJQHrB5HHExQGvEiF1G2QFmGmETIMQEOIDCkI1QClI4AoIyQApJDhfIHQhjIfjxG2QkAHPmSE9Qn/GT3yAAQi5AAjIgGg");
	this.shape_504.setTransform(889.3119,523.3778);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("rgba(0,0,0,0.996)").s().p("EA8MBCcIiPgEUgW1gAvghdgFjIhogRQ54kW6qmLIhHgQQpqiPnAh3Ig6gQQlNhZhYgjQgigLgPgHQgtgGg9gMIg3gKQitgjifgyIgxgQQosi7jglQIgXgjQicjphwjGIgSggQjRl6iDmmIgJgbQmJ0OEq7dIAAAAQBWn8OqmrIAMgFQMglqUekHIAhgHQRijgSfhhIA3gEQQyhVIhA+QAMACAMA8IAWDEQARCtAjGxIACALQAwJ6AyFQQALBMAPAsQAaBNArB6QAhBhAjBDQBICdCDCEQAlAlAtAnQCSB/DdCPQBSA1BiA7QDsCREvCgICjBWQK1FqHUBrQBmAYBcALQEXAhCNhhQAZgQAWgTQBthfAPh/QAej4BirMQBJoVAglVQAFg0AChIIADh4IAJk3QAFiMAKgxQACgFgLhEQgLhEACgDQAMg1AmAUQAIAEAXARQAUAOAJADQF+BmFoDYQBhA6BfBDQFXDuEwFMQBJBRBIBWQEgFbDoGgQA0BcAxBfQDZGrCSHMQAeBhAcBiQCDHWAuHSQAJBhAGBgQAdHdhAG1QgOBbgSBZQhXG/i6F2QgmBOgrBLQjcGAlDEZQg8A1hDAwQoMF83FAAQiFAAiOgDg");
	this.shape_505.setTransform(889.4117,523.3611);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(0,0,0,0.996)").s().p("EA7tBCbIgKAAIiOgEUgWwgAzghLgFhIgPgCIhmgRQ5ukV6fmJIgPgDIhGgQQpgiNm6h2IgNgDIg5gPQlNhbhMggIgJgDQgegIgUgGIhmgSIgDgBIg2gKQisgjiegzIgBAAIgvgPQoqi+jclSIgBgCIgWghQicjphvjGIgSggQjQl5iCmmIAAAAIgJgbQmH0MEq7YIAAAAQBWn8OnmqIAMgFQMelqUckHIAegGIADgBQRfjgSdhhIAxgEIAGAAQQthVIjA8QATACASApIAAABQAGAjAYCkQAZC1AwGjIAAAEIACALQA5IwBEGdIAAABQALBFAUAzQAeBPA1BwQAmBXAtBFQBUCQCICFQAmAkAtAoIAKAJQCWCADLCLQBTA4BeA9IAFADQD1CfEXCXIADACICeBUQLCF5G8BqIABAAQBlAZBYAKQEaAgB5h/QAVgTARgXIALgPQBHhjARh2QAQhoAfklQAklTAdjXIBBnXQAkkBALiWIADgoIADhTIADh4IAJk1IACgqQAFhlAKgqQAEgPABgfIAEgMQAFgqANACQAUggAlAQQALAFAWANQASALALAEQF6BuFjDdIABABQBgA8BeBEQFPDxEqFPIADADQBJBRBGBXQEYFcDjGdIADAGQAyBdAwBgQDSGnCMHJIADAJQAdBhAaBhQB9HRApHNIABALQAIBhAFBgQAWHVhEGuIgCAMQgOBbgTBYQhdG3i8FvIgFAJQgnBNgsBJQjgF3lFETIgDADQg+A0hGAvQoYFj2UAAQiTAAiegEg");
	this.shape_506.setTransform(889.5103,523.3527);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("rgba(0,0,0,0.996)").s().p("EA7SBCbIgKAAIgMgBIiIgEUgWwgA2ghFgFhIgKgBIgGgBIhlgRQ5skW6cmIIgEgBIgLgCIhFgQQpeiOm4h1IgFgBIgJgCIg5gPQlbhfg7geIgEgBIgEgBIgxgLQgtgHg7gLIgDgBIgBAAIgygKQisgkidgzIAAAAIgGgCIgogNQopi/jZlTIgBgCIgEgGIgSgbQicjphujFIgEgGIgPgbQjPl5iBmmIgCgEIgGgWQmG0KEq7VIAAgBQBVn7OnmqIAIgEIADgBQMdlqUakHIAYgEIAHgCIADgBQRejgSahhIApgDIAJgBIAGAAQQqhWIkA7QAWACAUAVIACAEQAJAhAdCoQAhC+A7GSIACALIABAEIABALQBCHhBUHnIACAJIAAABQAMA+AaA5QAjBQA+BoQAsBMA3BGQBfCDCNCFIBTBLIAGAGIAIAGQCbCGDACKQBSA7BaA9IACABIAFADQD9CtEACOIAHAEIADACICbBVQLKGCGgBqIAJACIABAAQBlAZBVAJQEbAdBkifQAPgWAMgaIAFgKIACgFIAEgIQAQgpAGg8IALhzQAKg2AMh0QAQibAIg/QAjkKAjkhQAJhNAci4QAViQAHhIQAZjjAKi4QAAgDAFgGQAGgGAAgDIADhnQABgYALgoQALgoAAgPQAGjOAEhlIABgWIABgQQACgogFhdIgDhTQAGgIAjAFIAqAJQAKgFASAKIAfAQQAPAFATAKQARAHANAFQF2BzFgDhIABABIAbASQBSA1BQA8QFLD1EnFRIACADIATAWQA+BHA8BMQEUFdDfGfIADAGIANAYQArBSApBUQDPGoCHHKIADAJIAGAVQAZBXAXBWQB4HRAlHNIABALIABASQAHBYADBXQATHVhJGsIgCAMIgDARQgOBSgSBQQhiG1jBFtIgEAIIgIAPQgkBEgoBAQjkF0lIEPIgEADIgPANQg3AshAAnQohFS1yAAQigAAiqgEg");
	this.shape_507.setTransform(889.6715,523.3821);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(0,0,0,0.996)").s().p("EA6hBCZUgXZgAtgirgFzQ6dkb7TmWQqUiZnUh9QmthzgpgdQg/gIhjgUQjJgni1g8QpMjDjdlmQiqj9h2jTQjZmHiGm2QmM0QEr7hQBWn9OtmsQMkltUrkJQR0jlS0hiQRihbIrBDQAOACCTMhIC1PlQA3EdIzHrQDtDPEYDHQENDADvCIQNYHmGQBuQDvBBCHgrQCNguAjiqQDWwPAuwZQAMmlAHh5QAKi2AkAJQHrB5HHExQGvEiF1G2QFmGmETIMQEOIDCkI1QClI4AoIyQApJDhfIHQhjIfjxG2QkAHPmSE9Qn/GT3yAAQi5AAjIgGg");
	this.shape_508.setTransform(889.3119,523.3778);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("rgba(0,0,0,0.996)").s().p("EA8EBCqIi8gDUgWYgAfggZgE0IjNggQ4yjz5ZlbIjmgxQn6hvmAheIjqg7QixguhAgZQhdgghSgkQgggNgTgLIiYgyQh0gohsguQhHgdhDggQokkCjTlNIgLgQQijj0hzjNIgIgPQjVmAiEmvIgEgMQmJ0NEq7dIAAgBQBWn8OqmrIAGgDQMhlrUjkJIAQgDQRqjiSohiIAbgCQRIhYIoA/QAJACANAWQAQA0A8GUQAXCQAbCaQA1E6BCEqQAYBmA3BMQAhA3BCA4QASATAYAVQCGBYCGBqQC0BxDXCfIA7ArQDhCrEqDpICVB1IFPD8IBfBGQDACEDpCsQGWEbDlBvQAvAYApAQQCqBLBZgaQAtgNAWgtQAqhNAShrQBDmSAym3QAplQAqopQAPjKALirQAKiiAIhmQAFg0AEhuQADhBAIgNQACgCAAg0QAAg1ADgBQAVggAxAcIApAaQAYAQAMAEQF+BuFnDhQBeA7BbBBQFSD0EsFRQBJBRBFBWQEaFdDkGhQA0BfAwBhQDTGoCMHKQAfBlAbBmQB8HQApHMQAJBoAFBoQAWHShEGrQgQBmgVBiQhcGvi5FqQgtBZgyBVQjcFsk6ENQhIA9hUA3Qo7F14OAAIhygBg");
	this.shape_509.setTransform(889.5167,524.5603);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(0,0,0,0.996)").s().p("EA6tBC3UgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0QEr7iQBWn9OtmrQMkltUrkKQR0jlS0hhQRihbIrBDQAHABA1HMQBJIeBfFZQAdBrBcAwQA+AhCqAfQDbApB5AlQDkBEDYB+QEQCdHJGXQBlBaKuKBQG8GfDECIQENC7AVihQA+nQAypCQAXkJAvp+QAhnQAWinQAejsAmAKQHrB4HHEyQGvEiF1G2QFmGlETIMQEOIECkI1QClI3AoIyQApJDhfIHQhjIgjxG1QkAHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_510.setTransform(889.3119,525.7299);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("rgba(0,0,0,0.996)").s().p("EA28BCyQyggS5HjBQmUgxmpg7Q1mjA19kNQkfg3kXg4QlUhFkbg+Qkbg/i8gvIgngLQhkgbhYgdQi2g1gvgcQhGghhjgxIgpgVQi9hginhmQmNjzjYjvQh3iBhOh9QhIhug+hmQhPiBhAh3Qickjhuk9QglhogfhrQl4z/El6/IAAgBQBVn2OYmoIBfgqQMClQTHj6IEBgzQPni9QXhaQDdgTDMgNQGNgZFUgEQFigEDcAUQAOAAAFAXQADAPADA1QAHCSAdB2IAoBhQAEAWAKAiQAUBTAXBNQBLEXBqDSQAZA5AsApQAbAZAkATQBGAiCeAbIBiAPQCBAXByARQBlAWBqAeQB8AiB0AyQB1AtCBBOQDZBzD3DIIAkAeQB7BcGAFvQByBuCNCQICNCRQCtCzBxBfQBuBcBSAYIAQAGQDUBqAoiXIACgKQAfiqAdjMQAZi5ASieQAOheAOg9IAYgvQAOgcAEgVQAZiCAcpyQAYoxAQAJQBEAaEdCOQDyB4BsA5QEgCYENDcQDCCfCzDAQC1DDCkDgQDEENCkEuQBnC+BZDJQCcFiBrFxQAzCwAnC0QBVGKAYGBQALCogCClQgEGLhHFnQgeCagrCTQhtF5i5E7Qg+BshOBkQkXGGnDECQmZDttWBMQmXAjn1AAIjPgBg");
	this.shape_511.setTransform(887.2308,525.4132);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(0,0,0,0.996)").s().p("EAzUBCsQyYgh4hjDIg7gIQl2gvmCg2Q1RjC1nkMIgZgFQkQg1kBg0QlQhFkVg/IgTgEQkbhAidgqIglgMIgVgHQhOgZhSgfIgZgJQiLgvg8giQhJgkhbguIgogWIgbgOQirhciUheQmEj4jHj0IgSgVQhih4hHhyQhGhtg8hlIgOgYQhDhxg4htQiWkghpk5IgHgVQgfhdgbhfQlmzxEg6hIAAgBQBUnxOFmjIBUgnIAKgEQL2lOSyj6IDjgtIAcgGQPXi9QGhdQDCgRC5gOIAogDQGIgaFLgHQFSgGDlAPQAOAAAJAQQAMAKANAkQAxBjA6BTIAhArIAQAjIAGATIAMAiQAVA7AZA5IAOAiQBjD0CUDCQAbApAlAiIAOALQAdAXAjARQBOAkCSAVIBRAJIAQACQBvAPCEAGIDGAaIAKACQB+ATByAgQB+AcB6A2IABAAQDuBVDtCwIAFAEIAgAXQCoBxFGFCIAEAFQBtBtCGCYQA9BEA9BGIAKAMQCgC7BhBTIAMAJQBqBXBZgDIAPABQCwAxAzidIADgJIADgMQAmiZAijJIADgTQAci6ASiAIADgTQAIgsAxoKQAwoMgEgDIFQC7QFDCzBXAzQDPB8ByBXIAqAdQDuCqDbDbQCtCtCfDJIAnAyQCLC3B+DJQCsEWCLExIAcA+QBICkA/CpQCCFlBRFuIAOBBQAdCRAWCRQA6GIgFF5IgBBBQgECEgLCAQgiGAhmFXIgVBFQgjBugqBpQiMFhjXEgIg1BFQgxA8g5A5QkmFCnzDKQm9C4spA1IhsAGQkOANkwAAQjNAAjcgGg");
	this.shape_512.setTransform(886.834,525.321);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("rgba(0,0,0,0.996)").s().p("EAv1BClQyRgu3/jFIg6gIIglgFQlkgvlrg0Q0+jE1UkLIgYgFIgNgDQkJg0jxgyQlNhFkQg+IgSgEIgLgDQkchCiEgmIgkgMIgTgHIgNgFQg+gYhNghIgZgKIgRgHQhrgrhGgmQhMgmhTgsIgmgVIgagOIgTgLQiehYiHhaQl8j8i5j4IgQgWIgJgNQhUhyhChqQhFhsg6hkIgOgYIgIgOQg7hng0hnQiQkfhkk3IgHgUIgEgNQgbhUgYhXQlXzjEb6HIAAgBIABgDQBTnsN0mgIBNgkIAHgDIAKgEQLqlNShj5QBmgWBpgUIAVgEIAcgGQPJi9P4hfQCtgRCqgNIAfgCIAogDQGCgcFDgJQFDgJDsAMQAPAAALAIQAUAGATASQBQA1BLAtIAsAZIASASIAAABIAIASIAQAgIAAACQAZA2AdA0IARAfIAFAIQB0DOC1CuQAhAiAnAfIAOAKIAkAYQANAJAPAHQBUAqCGAUQAoAFApADIAQACIApADQBNAFB9gDIDFAEIAKABIAxABQBlADBaAKQCHAKB0AeIABAAIA6ANQDjA1DNB/IAFAEIAgAUIAVANQDSCFEFEJIAFAFIAlAmQBYBeBrCEQA4BEA6BLIAJALIAbAjQCECqBPBMIAKAKQARAPAPAMQBSA/BNgJIAQgCQAdABAbgIQBogVA1h5IADgJIAEgLQAOgjAMgnQAkhzAgibIAEgTIANhKIAnjpIAEgTQAGgcAGgvQAEgSABhlIAEjIQAJkNArAFQCFATB4A/QBBAjBZA9ICzBqICHBUQD/CfCDBtQCqB+B5B1IAlAhIAUATQDKC7C3DdQCYC6CKDRIAiA1IASAdQBwCyBkC+QCVEeB0E0IAYBAIALAeQA2CXAtCZQBrFoA3FtIAKBAIAEAiQARCAAKB9QAgGGgfFxIgGBAIgEAlQgMBtgSBqQg+F2iCFHIgbBBIgQAoQglBTgoBPQipFKjyEGIg7A+IgjAiQgmAkgqAiQkvEEogCWQnfCGr/AeIhqAEIhCABQiDADiJAAQk7AAlfgOg");
	this.shape_513.setTransform(887.797,525.4315);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(0,0,0,0.996)").s().p("EA6wBC3UgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQiqj9h1jTQjamGiFm2QmN0QEs7iQBVn9OumrQMjltUskKQR0jlSzhhQRihbIrBDQABAAAcAyQAmBDAzBBQCtDfE1DEQCOBbDrACQBoABFigkQE2ggDAARQEcAZDeCAQEWChDoEAQCICXC+ETQChDqBGA7QBwBeB0hJQBvhGBDi+QAyiLAgjkQAcjwAOhTQAWiJAkAJQHqB5HIEzQGwEjF2G4QFoGoEVIPQEQIGClI4QCmI7AqI1QArJGhdIJQhiIijxG3Qj/HQmRE+Qo7HC8bAAIgQAAg");
	this.shape_514.setTransform(889.0583,525.7299);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("rgba(0,0,0,0.996)").s().p("EA6vBC3UgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0QEr7iQBWn9OtmrQMkltUrkKQR0jlS0hhQRihbIrBDQAAgKAYAdQAfAdAwAiQCiB0FICmQCMBOD0gFQB+gEFTgiQFcghDaAqQEbAoDjB6QECCSDbDmQCBCGC2D3QCmDTBMA8QB2BdB3gqQB9gaAthZQAphwAai7QAXjMAIg8QAPhkAkAJQHqB4HIEzQGwEjF1G4QFoGoEUIPQEPIFClI4QClI7AqI0QAqJGheIJQhiIijxG2Qj/HQmSE+Qo7HC8bAAIgQAAg");
	this.shape_515.setTransform(889.1426,525.7299);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(0,0,0,0.996)").s().p("EA6uBC3UgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0QEr7iQBWn9OtmrQMkltUrkKQR0jlS0hhQRihbIrBDQgBgUATAJQAagJAtABQCXAJFaCIQCLBCD8gLQCUgLFFgfQGCgiDzBEQEaA3DpBzQDtCDDPDLQB5B3CvDaQCsC8BRA8QB7BdB7gLQCKASAXAMQAihUASiSIAVjOQAIg/AjAIQHrB5HHEzQGwEiF1G4QFnGoETIOQEPIFCkI4QClI6ApI0QAqJFhfIJQhiIijyG2Qj/HQmSE+Qo7HC8bAAIgQAAg");
	this.shape_516.setTransform(889.2272,525.7299);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("rgba(0,0,0,0.996)").s().p("EA6tBD8UgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0QEr7iQBWn9OtmrQMkltUrkKQR0jlS0hhQRihbIrBDQgDgeAQgLQAUgvApggQCNhiFtBrQCJA1EEgRIHggtQGpgjENBdQEYBFDuBtQDaBzDCCxQBxBoCnC9QCyClBWA9QCCBbB+AVQCXA+ABByQAag6ALhpQAMiGgBgNQABgbAjAJQHqB5HHEyQGwEjF0G3QFnGoETIOQEOIFCjI3QClI6AoI0QApJEhfIJQhjIhjxG2QkAHQmSE+Qo7HC8bAAIgQAAg");
	this.shape_517.setTransform(889.3119,518.8273);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(0,0,0,0.996)").s().p("EA6tBFrUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQiqj9h1jTQjamGiFm2QmN0QEs7iQBVn9OumrQMjltUskKQR0jlSzhhQRihbIrBDQgDgnAMghQANhUAmhAQCCjNGABMQCHAqENgZQC/gWEogaQHPgkEmB2QEYBVDzBlQDGBlC1CWQBqBZCfCgQC4CPBbA8QCHBbCCA0QClBrgWDWQATgeADhAQAFg9gBgTQAHAFATAFQHqB4HHEzQGvEiF0G3QFmGnETIOQENIFCjI2QCkI6AnI0QApJEhfIIQhkIhjyG2QkAHQmRE+Qo8HC8aAAIgQAAgEBBMgx8QACgEAAAMQgFgEADgEg");
	this.shape_518.setTransform(889.3968,507.7399);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("rgba(0,0,0,0.996)").s().p("EA6sBHsUgXQgACgiZgEpQ6Zjk69lYQqSiDnMhtQmrhkgogdQhEgehqgzQjYhojBhwQp0lujdllQiqj9h1jTQjamHiFm2QmN0QEs7hQBVn9OumsQMjltUskJQR0jlSzhiQRihbIrBDQgEgxAHg0QAIh7AjhhQB3k3GSAuQCGAdEVgfQDVgcEZgXQH2glFACPQEWBjD4BgQCyBVCpB8QBiBJCYCDIEeC2QCNBZCFBTQChCIgUENQABAKgBAaQACANgCAGQAFAEAIACQHqB4HGEyQGvEjF0G3QFmGnERINQENIECiI2QCkI6AnIzQAoJEhgIJQhkIgjyG2QkBHQmRE9Qo8HC8aAAIgQAAg");
	this.shape_519.setTransform(889.4964,494.7962);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(0,0,0,0.996)").s().p("EA6rBJuUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQiqj9h1jTQjamGiFm2QmN0QEs7iQBVn9OumrQMjltUskKQR0jlSzhhQRihbIrBDQgFg7ADhJQACihAgiBQBsmiGlAQQCDAREfgmQDqghELgWQIcglFZCoQEVByD+BZQCeBHCcBhQBaA5CRBmQDCBiBmA+QCTBZCJByQDADDhDGgQADAZgLASQgCgcgQA5QgVBSAiAJQHrB4HFEyQGvEjFzG3QFmGmERINQEMIEChI1QCjI6AnIzQAnJDhgIJQhkIgjzG2QkBHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_520.setTransform(889.5818,481.8341);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("rgba(0,0,0,0.996)").s().p("EA6qBLvUgXQgACgiZgEpQ6Zjk69lYQqSiDnMhtQmrhkgogdQhEgehqgzQjYhojBhwQp0lujdllQiqj9h1jTQjamHiFm2QmN0QEs7hQBVn9OumsQMjltUskJQR0jlSzhiQRihbIrBDQgHhEAAheQgFjHAdihQBioOG3gNQCCAFEngsQEAgoD8gTQJCgmFzDCQEUCAEDBSQCKA4CQBHQBSApCJBKQDIBLBsA+QCYBYCNCRQDNDwhZIFQgFA0gSA7QgIAHgUBRQgcB2AiAJQHqB5HGExQGuEjFzG2QFlGmEQINQEMIEChI1QCiI5AmIzQAnJDhhIIQhlIgjzG1QkBHQmRE9Qo7HC8bAAIgQAAg");
	this.shape_521.setTransform(889.6673,468.8817);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(0,0,0,0.996)").s().p("EA6pBNxUgXQgACgiZgEpQ6Zjk69lYQqSiDnMhtQmrhkgogdQhEgehqgzQjYhojBhwQp0lujdllQiqj9h1jTQjamHiFm2QmN0REs7gQBVn9OumsQMjltUskJQR0jlSzhiQRihbIrBDQgIhOgEhyQgLjtAajCQBXp4HKgsQCAgHEvgzQEWgtDtgRQJpgnGMDbQETCQEIBLID5BVIDNBHQDOA0BwA+QCeBYCRCwQDbEchwJqQgMBPgaBlQgNAqgZBoQgkCbAiAJQHrB4HFEyQGuEiFyG2QFlGmEQIMQELIECgI0QCiI5AlIzQAmJChhIIQhlIgj0G2QkBHPmRE9Qo7HC8bAAIgQAAg");
	this.shape_522.setTransform(889.753,455.8992);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("rgba(0,0,0,0.996)").s().p("EA6oBPzUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQBWn9OtmrQMkltUrkKQR0jlS0hhQRihbIrBDQgJhYgJiHQgRkTAXjiQBMrjHdhKQB+gTE4g6QEsgzDegOQKPgoGmD0QESCfENBEQBjAaB2ASQBDAKB6AQQDTAeB2A+QCkBXCUDQQDpFIiGLOQgVBrghCOIgwDNQgqC/AhAJQHrB4HFEyQGuEiFxG2QFkGlEQIMQEKICCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_523.setTransform(889.8389,442.9377);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(0,0,0,0.996)").s().p("EApVBQDQxChA1fi2QnOg9nVhGQzhi9zzj7QlWhEkmg/QkNg5jgg0Qmehhg8ggIgsgSQg6gZhKgiQijhIiAhGIh7hEIgggSQjFhziehyQlHjtiajpQhziihYiRQgxhRgrhMQhRiPhFiTQh6kFhYkZQgmh5gfh8Qk4zIET5PQBRniNSmZIBsgyQLQlFRuj2QCPgfCWgeQOVi2O/hiQD0gZD0gTQJ5gxG+ADQCDgKBsgLQCVgJB0ABQgPhZgOiDIgNh/QgPjHAHirQAcqoGDiLQAigMAmgJQB+gfE1g/QBjgTBdgQQC2gcCYgNQGbggFOBLQC8AsCeBPQEYCMERA+QBPATBZAOIAzAHIC+AaQDTAdB6A8QBhAwBYBUQBBA/BJBaQBgB8A0C4QA5C5gGDpQACCCgPCTQgEAugGAzQgHBEgLBPQgJBNgUB9QgGAogCAhQgPByAaAOQHECQGEFiQAtAnAtApQDlCyDBEaQBVB4BaBwIANAPQE9FNEEGhQArBFApBHQDPFmCZGHQA8CaA0CgQBuFYBCFbQAoDaAWDZQAgFDgKE0QgHDxgiDoQgsEohWENQhHDihmDNQh7D6ijDUQiTC/i0CfQieCPkCBqQlqChosBSQm0BBpKAKIi5ACQnvAApCgig");
	this.shape_524.setTransform(888.4219,437.219);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("rgba(0,0,0,0.996)").s().p("EArdBRAQxHg51xi1QnRg8nchHQzsi8z+j7QlXhEksg/QkPg6jjg0QmQhdhRgiIgsgSQg9gYhJggQixhIh1hBQg9gghAgkIgggRQjHhyiihyQlLjqiijmQh4ihhZiSQgyhRgshMQhTiRhGiSQh+kHhakbQgnh5ggh9QlBzQEV5fIAAAAQBSnmNcmbIBtgyQLWlGR5j1QCRggCWgdQOei3PHhgQD4gZDzgSQKGgwG6AIQBsgTBTgbQB4gZBcgPQgVhagTiAQgLhAgJg9QgbjFgDirQgMqnFsihQAhgPAlgMQB9gqEzhFQBjgVBfgSQC0gfCdgRQGVglFbA8QC9AkCjBFQEeB6EVA4QBRAQBZAOIAzAHIC/AYQDUAcB9A6QBlAvBXBQQBAA8BSBZQBkB3BECwQBQC1AKDZQARB+gBCNQABAtgBAyQAABCgEBOQABBOgKB6QgDAnABAhQgIBsAaAWQGdCnFCGTQAmAqAmAsQDJCoCWFAQBECHBQBpQAFAJAHAGQFRE2EZGVQAvBDAsBFQDfFbCpGDQBDCZA6CeQB7FUBOFcQAwDZAeDaQArFCACE2QABDzgZDqQghEqhJESQg+DmhbDRQhvEAiXDdQiJDHipCoQiWCbjzB3QleDDobBsQmoBVpYAWQi1AFjCAAQmhAAnegYg");
	this.shape_525.setTransform(887.3437,431.5943);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(0,0,0,0.996)").s().p("EAthBR9QxLgy2Ei0QnTg8njhGQz3i80Kj8QlXhDkyhAQkRg6jmg0QmChZhlglIgtgRQg/gYhIgeQi/hHhrg8Ih+hDIghgSQjJhwimhyQlPjnirjkQh9ighZiSQgzhSgthMQhViThHiSQiCkIhckcQgoh6gih+QlKzYEY5vIAAAAQBSnpNmmdQA2gZA4gZQLdlHSEj2QCSgfCXgdQOmi3PRhfQD7gYDzgRQKSgvG3ANQBUgdA6grICfhHQgchcgZh8Igah8QgmjEgMipQg2qoFXi3QAfgRAkgOQB8g2ExhLQBigXBigUQCygiChgUQGQgsFoAvQC/AdCnA6QEkBoEZAxQBSAPBaAMIAzAGIDAAYQDUAbCAA4QBpAtBYBNQA9A3BcBaQBnBwBWCpQBnCwAZDKQAfB5AOCIQAGAsADAwQAHBCAFBMQAJBOAAB3QABAnAEAhQgCBmAaAdQF2C/EBHDQAgAuAeAwQCtCdBrFnQAyCVBHBjQAFAKAGAGQFlEeEuGIQAyBAAwBEQDuFQC7GBQBJCWBACdQCHFQBbFcQA4DZAmDaQA2FBANE6QAKDzgQDsQgVEtg+EWQg0DqhRDWQhjEGiLDlQh9DQieCxQiPCnjkCEQlTDkoKCGQmaBrpoAgQkAAMkeAAQlcAAmIgRg");
	this.shape_526.setTransform(886.5287,425.955);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("rgba(0,0,0,0.996)").s().p("EAvjBS6QxPgr2XizQnXg7nphHQ0Ci60Vj9QlYhDk4hBQkTg5jpg0Ql1hWh5goIgtgQQhBgXhIgcQjMhHhhg3Qg7gehFglIghgRQjLhviqhyQlUjkiyjiQiDiehaiTQgzhSguhNQhYiUhIiRQiEkKhgkeQgph6gih/QlUzgEb5/IAAgBQBTnrNwmfIBvgzQLklHSOj2QCUgfCYgeQOui2PZheQD/gYDzgQQKeguG0ATQA9gnAgg8QA9g3AtgvQgihdgfh4QgSg/gPg9QgxjBgWipQhgqoFCjMQAdgUAkgRQB8hBEuhRQBigZBjgWQCxglClgYQGLgxF1AgQDBAVCrAwQEqBWEdArQBUAMBZAMIA0AGQBSAIBvAOQDUAaCEA2QBtAsBYBJICgCNQBrBrBnChQB9CsAqC6QAtB0AbCDQAMArAIAvQAOBAAMBLQASBPALB0QAEAlAHAiQAEBfAaAmQFQDVC/H1QAZAwAXA0QCRCTBAGOQAgCjA+BdQAEAKAHAFQF3EHFEF7QA1A/A0BBQD+FGDMF+QBOCUBHCcQCTFLBpFdQA/DYAuDbQBAFAAZE8QATD1gHDuQgKEvgyEbQgqDthHDbQhWENh/DsQhzDZiTC6QiHCzjWCRQlHEGn4CgQmOB/p2AsQk+AUlxAAQkgAAk/gMg");
	this.shape_527.setTransform(886.0434,420.3236);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(0,0,0,0.996)").s().p("EAxhBT4QxUgk2oiyQnbg6nvhHQ0Ni60hj9QlYhCk/hCQkUg5jsg1QlohRiNgrIgtgPQhEgWhHgbQjahHhWgxIiChDIghgRQjOhuithxQlYjii7jfQiIidhaiTQg1hTguhNQhaiWhJiRQiIkKhikgQgqh8gkh/QldzoEe6PIAAgBQBTnuN6miQA3gZA5gZQLrlJSZj2QCVgfCZgdQO2i3PihbQEDgYDzgQQKpgtGxAYQAmgwAHhMQAfhHAVg/Qgohegkh0QgWg/gTg8Qg7jAghioQiIqnEtjjQAcgWAigUQB7hMErhWQBigcBmgZQCvgnCpgbQGGg4GBASQDDAOCvAmQExBDEhAlICvAUIAzAGQBXAIBsANQDUAaCHA0QByAqBXBFICoCJQBvBlB3CZQCVCoA5CrQA8BwApB9QAQAqANAtQAWA/AUBKQAaBPAVBxQAIAlAKAhQAKBaAaAtQEpDtB+IlQARA0AQA3QB1CJAWG1QAOCxA0BXQAEAKAHAFQGKDvFaFvQA4A8A3BAQEOE7DdF7QBVCTBMCZQCgFIB2FdQBHDYA1DbQBME/AkE/QAcD2ACDwQABExgmEgQggDxg9DgQhKEShzD1QhoDhiJDDQh/C/jGCeQk8EnnnC7QmBCUqFA3QlzAcm/AAQjqAAj+gHg");
	this.shape_528.setTransform(885.8796,414.591);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("rgba(0,0,0,0.996)").s().p("EAzdBU3QxZgd26iwQneg6n2hHQ0Yi50tj+QlZhClEhCQkWg5jug1QlbhNiiguIgtgOQhHgWhGgYQjohHhLgsIiDhCIgigSQjQhsixhxQldjgjCjdQiOibhbiUQg1hSgvhOQhdiYhKiQQiLkMhlkiQgrh8gkiAQlnzwEh6fIAAgBQBTnxOFmkIBxgzQLxlJSkj2QCWgfCageQO/i2PqhaQEHgXDygQQK1gsGvAeQAOg6gThcQADhWgEhPQguhggqhwIgvh6QhGi+grinQixqoEXj4QAbgZAhgWQB7hXEohdQBhgeBogbQCugqCtgfQGBg9GOAEQDFAGCzAbQE3AxEkAfICxARIA0AFQBaAIBpAMQDVAaCLAxQB1ApBXBCQA4ArB3BZQBzBgCJCRQCrCkBJCbQBKBrA3B4QAVApATAsQAdA+AbBIQAkBQAfBtQALAkANAiQARBUAZA1QEDEEA8JVQAKA4AJA6QBZB/gVHcQgEC/ArBRQADALAHAEQGeDXFvFjQA8A6A6A9QEdExDuF4QBcCRBSCZQCsFDCDFeQBPDXA9DbQBXE/AvFBQAlD3ALDyQAMEzgaElQgWD1gzDlQg+EYhmD9QheDph+DMQh3DLi3CsQkwFInWDVQl1CqqTBCQmjAmoKAAQi2AAjDgFg");
	this.shape_529.setTransform(885.9682,408.6959);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(0,0,0,0.996)").s().p("EA1VBV4QxdgX3NivQngg4n9hIQ0ji405j+QlZhClKhDQkZg5jxg1QlNhKi2gwIgugNQhJgVhFgXQj2hHhAgnIiFhBIgjgRQjRhsi2hxQlhjdjKjaQiTiahciUQg2hTgvhOQhgiahLiPQiOkNhokkQgsh9gliBQlwz4Ej6vIAAgBQBUn0OPmmIBygzQL4lKSuj2QCYgfCbgeQPHi2PzhYQEKgYDzgPQLBgqGrAjQgJhEgshsQgbhmgchfQg0hhgvhsQgdg+gZg7QhSi8g0inQjbqnECkOQAZgbAggZQB7hjEmhiQBgggBqgeQCsgtCygiQF8hDGagLQDHgBC4ARQE9AfEoAYICyAPIA1AEQBeAIBmALQDVAZCOAvQB6AoBWA9QA2AoCBBYQB3BbCZCJQDCCgBZCLQBZBnBEByQAbAoAXArQAkA8AjBHQAtBRApBqIAeBGQAYBNAZA9QDcEbgGKGQAEA7ABA+QA9B0hAIDQgWDNAiBLQADAMAHADQGxC/GFFXQA/A4A9A7QEtEmD/F1QBiCPBYCYQC5E+CQFfQBXDXBEDcQBiE9A7FEQAtD5AUD0QAYE0gOErQgND4gpDpQgxEfhaEFQhTDxhzDWQhvDXipC4QkkFqnFDvQloC/qiBNQnKAypQAAQiIAAiQgDg");
	this.shape_530.setTransform(886.4231,402.6506);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("rgba(0,0,0,0.996)").s().p("EA3JBW7QxhgP3fiuQnjg4oEhHQ0ui41Fj/QlZhBlQhEQkbg5jzg1QlAhGjKgzIgvgNQhLgUhEgUQkEhHg2giIiHhBIgjgRQjUhqi5hxQlljajTjYQiYiZhciUQg3hTgwhPQhiichMiOQiSkPhqklQgth9gmiCQl60BEm6/IAAgBQBVn3OZmoQA4gaA6gZQL/lLS5j2QCagfCbgeQPPi2P9hXQENgXDzgOQLMgpGpAoQghhOhFh8IhtjkQg6hig1hpIg9h4Qhbi7g/ilQkEqoDtkkQAXgdAfgcQB6huEkhoQBggiBsgfQCrgxC1glQF3hKGngYQDJgJC7AHQFEAMEsASIC0AMIA1AEQBiAHBjALQDVAXCSAuQB9AmBXA6QA0AjCKBZQB6BUCrCDQDZCbBoB8QBnBhBTBtQAfAnAdApQArA8ArBFQA1BRA0BoIAlBFQAdBHAZBEQC1EzhGK3QgEA+gGBBQAhBrhqIpQgpDbAZBFQADAMAGADQHFCoGaFKQBCA2BBA5QE9EbEQFyQBoCNBeCXQDFE6CdFgQBfDVBMDdQBtE8BGFHQA2D6AdD2QAkE3gDEvQgDD8gfDuQglElhOENQhHD6hpDeQhnDjiaDGQkZGMm0EJQlbDTqwBYQnwA9qWAAIi5gBg");
	this.shape_531.setTransform(887.2006,396.3958);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(0,0,0,0.996)").s().p("EA46BYEQxlgJ3yisQnmg4oKhHQ06i31QkAQlahBlWhEQkcg5j3g1QkyhCjeg2IgvgMQhOgThDgTQkShGgrgdQg5gahQgnIgjgRQjWhoi9hxQlqjYjbjVQidiXhdiVQg3hUgyhPQhkiehNiNQiVkQhtknQguh+gniDQmD0JEp7OIAAgCQBVn6OjmqIB0gzQMFlMTEj2QCbggCcgdQPXi2QGhVQERgXDygOQLZgoGkAtQg3hWhfiMQhViFhNh/QhAhkg6hlQgkg8ggg7Qhni5hIikQkuqoDYk6QAVggAfgeQB5h5EihuQBfgkBvgiQCogzC6gpQFyhQGzgmQDLgRDAgDQFKgGEvALQBcADBaAGIA1AEQBmAGBgAKQDWAXCVAsQCCAkBWA2QAyAgCTBYQB/BPC7B7QDwCXB4BsQB2BdBgBoQAlAmAhAnQAyA6AzBFQA+BRA+BlIArBEQAkBBAZBMQCOFKiILoQgKBBgNBFQAEBgiVJQQg6DqAPA+QACANAHACQHYCQGvE+QBGA0BEA3QFNEREhFuQBuCMBlCVQDRE3CqFfQBmDVBUDdQB4E8BSFJQA/D7AmD4QAvE5AJE0QAHEAgVDzQgZEqhBEXQg9EBheDoQhgDviLDSQkNGumjEjQlODoq/BkQoOBJrWAAIhnAAg");
	this.shape_532.setTransform(888.3581,389.5651);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("rgba(0,0,0,0.996)").s().p("EA6oBZWUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQBWn9OtmrQMkltUrkKQR0jlS0hhQRihbIrBDQhPhhh4icQj2k9izkiQpKuyDymhQB+jYIbiuQHoidKqhPQKXhOI0AbQJYAdDvCKQBYAzHED9QEGCTCIBdQC1B6CNCLQCYCXCdDdQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_533.setTransform(889.8389,381.8033);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(0,0,0,0.996)").s().p("EAktBYOQvHhDyaibQpFhNpQhcQxsiwx7jjQm5hXlphOQivgnibgkQmfhhg8gfQhGgehqgwQjohmixhoIgGgDQhHgohGgrQi/h1iWh1QkAjIiEjGQiUjPhpi0IgshMQhmi0hTi6QhljjhMjxQgviWgmicQkiyzEM4oIAAgCQBAl9H7lLQDBh/ECh3QDwhvEghkQIKi2KfiSQDQgtDdgpQGThMGbg4QDWgnDLgfQD6gmEUgeQCUgQCYgOQG1gqFUgKQFcgMDpASQhJhPheh2IgngzQjyk7iFk0IgVgvQkyofA6lxQAAjKBjiMQCVjPITioQFZhtGxhKQDBgiDSgaQKahVI8ANQDFAFCiAQQFCAjCoBRQB3AoGuDkQA5AcAxAaQC6BhB1BDQC5BwCWCCQCEByCICfIA8BHQDwENh8MbQgPCBgYCOQAQBbiRJLIgNBHQgyDfAlANQDlBBDPBjQD2B3DbDAQD/DMDfESQB3B+BoCoQBIBlBDBtQBNCOBSB5QCmDZCSD0QBeCdBTCjQCwFgCAF+QAcBTAYBUQCOHcA0HgIAFAtQA0IdhEHyIgCASQhLIRjPG2IgOAdQjXG6lTFDIg0AwQkBDwoNCLQl+ByoMA3QknAfliAJQiCADiJAAQpUAArQgyg");
	this.shape_534.setTransform(887.7513,382.7694);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("rgba(0,0,0,0.996)").s().p("EAnMBYKQvMg9ysiaQpJhLpahcQx4ivyHjkQm5hWlyhQQixgmidgkQmThehPgiQhKgdhpgtQj8hmiihgIgGgDQhHgohJgrQjCh0iah1QkFjFiLjEQibjNhri1IgthMQhpi2hVi5QhojkhOjzQgxiYgnidQkuy9EQ45IAAgDQBBmHH0lPQDCiDEDh5QDyhyEihlQIQi4KniMQDSgrDegnQGZhGGfgyQCrgkCRgdQCzgiDfgaQBwgQB1gNQFHgmEKgOQEHgRC2ADQhQhOhchzIgog0Qjvk4hVlHIgQgvQkFn9CWlqQAUi8BuiFQCsjFIMijQFehsG0hNQDDgjDTgdQKchcJFgBQDFABCmALQFAAZCwBFQCUAdGaDMQA6AYAxAYQC7BXB9A9QC8BnCgB3QCLBpCRCTIBBBCQEVD9g0LeQADB4gHCFQA3BghiIgIgEBDQgeDQAtATQDpBLDFBpQDrB+DBDaQDiDYC8ElQBpB3BTC9QA9BnA3BzQA8CeBNBuQC0DKChDrQBlCWBcCfQDDFUCSF6QAgBSAdBTQChHUBJHiIAHAtQBJIbgsH4IgCASQg0IUi3HCIgMAeQi+HGk7FVIgwAzQjyEKnvClQlxCVoABRQkgAulpATQjyAKkMAAQn0AApPgkg");
	this.shape_535.setTransform(886.057,383.8399);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(0,0,0,0.996)").s().p("EApoBYFQvSg2y+iYQpNhKpjhdQyEiuyUjkQm5hWl7hRQizgmifgkQmIhahhglQhOgchngrQkQhmiVhZIgGgDQhGgmhMgsQjEhyifh0QkJjEiTjBQijjLhsi1IgthNQhti5hWi4QhsjmhRj1QgyiYgpieQk4zGET5NIAAgCQBDmSHslSQDDiIEEh7QDzh0ElhmQIXi5KuiHQDVgpDfgkQGdhDGlgqQCAgiBWgaQBsgeCqgYQBMgNBTgMQDXgkDBgSQCygWCEgMQhXhNhbhwQgVgZgUgbQjrk2gnlYIgJgwQjYnbDwlkQAoiuB7h9QDDi7IEieQFjhrG3hRQDHglDTgfQKdhiJNgPQDGgECpAGQFAAQC3A5QCyASGECzQA8AVAxAVIFBCFQDABcCpBuQCSBgCaCHIBFA8QE7DtAVKhQAVBxAJB7QBfBlg0H0IAFBAQgLDBA1AZQDuBVC7BuQDgCGCnD0QDGDkCYE3QBcByA9DQQAyBqAsB3QAqCwBJBiQDBC8CvDhQBuCQBlCaQDVFIClF2QAjBRAhBSQC1HOBeHjIAJAtQBfIYgWH/IgBASQgdIXifHOIgKAeQilHRkjFoIgtA2QjiEjnRDAQllC4nzBsQkZA8lwAdQlGAVl8AAQmmAAnqgag");
	this.shape_536.setTransform(884.7831,384.9014);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("rgba(0,0,0,0.996)").s().p("EAr/BYCQvYgwzPiWQpShJpshdQyQitygjlQm6hVmDhSQi1gnihgkQl8hWh1gnQhRgchngpQkihliIhRIgGgDQhGgmhPgsQjHhxijh0QkNjBibi+QirjJhsi2IgvhOQhwi8hXi3QhvjnhUj2Qg0iZgqigQlCzQEV5eIAAgCQBGmdHklWQDDiNEFh9QD0h2EphnQIdi7K1iAQDXgoDhgiQGig+GqgjQBVggAcgWQAkgbB2gVQAngLAxgLQBoghB3gWQBegbBRgbQhehMhahtIgpg0Qjnk0AHlrQgCgYgBgYQism4FMleQA8igCHh2QDaixH8iZQFphqG5hUQDJgnDUghQKfhpJWgdQDGgICsABQE/AHC/AsQDRAIFuCaQA9ASAyASIFJB2QDFBSCxBjQCaBYCiB6QAlAbAkAcQFiDdBeJjQAlBpAbBzQCGBpgFHJQAHAgAHAdQAICxA9AfQDyBfCyB0QDVCNCMEOQCpDwB2FKQBOBrAnDlQAnBsAhB8QAZDBBEBXQDPCuC8DXQB3CJBvCVQDmE9C4FyQAnBQAkBRQDKHGBzHmIAKAsQB1IWAAIGIAAASQgFIaiHHZIgJAfQiMHdkKF5IgpA5QjTE9mzDbQlZDbnnCGQkSBLl3AnQmLAinlAAQliAAmRgSg");
	this.shape_537.setTransform(883.9328,385.8549);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(0,0,0,0.996)").s().p("EAuSBYAQvdgqzhiVQpWhHp2hdQycitysjlQm7hVmMhTQi2gmijgkQlxhTiIgqQhUgbhmgmQk2hlh6hKIgGgDQhFgkhTgtQjJhwinhzQkSi/iii8QizjHhti3IgwhNQhzi/hZi2QhzjohWj5Qg2iagrihQlNzZEZ5xIAAgCQBHmnHdlaQDDiREGh/QD2h5EshnQIki9K7h7QDagmDjgfQGmg6GvgbQAqgegegUQgkgXBCgSQADgKAOgJQgHgeAugaQAJggAegqQhlhLhZhrQgVgZgUgbQjkkxA2l9IADgxQh/mWGolYQBOiRCUhuQDxioH0iTQFvhqG8hXQDLgoDUgkQKjhwJdgrQDGgMCwgFQE+gCDGAhQDvgEFaCCQA+AOAxAQQC7A5CYAtQDIBIC7BaQChBOCqBuIBOAyQGHDNCnImQA3BhAsBpQCtBuAqGeIAXA5QAcCjBEAkQD3BpCoB6QDKCUByEoQCMD8BTFdQBABlASD5QAcBuAVCBQAIDSA/BMQDcCfDLDNQCACCB3CSQD4EyDLFtQArBPAoBQQDdG/CJHnIAMAtQCKITAXIMIABASQARIdhuHlIgHAgQh0HojxGMIgmA8QjDFWmWD2QlMD+nbCgQkLBal+AwQnFAypJAAQkjAAlDgMg");
	this.shape_538.setTransform(883.4577,386.7331);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("rgba(0,0,0,0.996)").s().p("EAwhBX+QvigizziUQpahGqAhdQynisy5jmQm7hUmVhUQi4gnilgkQllhQicgsQhXgahlgjQlJhmhthCIgGgDIiahRQjMhuirhzQkXi7ipi6Qi7jGhui3IgxhOQh2jBhbi1Qh2jqhZj6Qg3icgtiiQlXziEc6EIAAgBQBJmyHVlfQDEiUEGiCQD4h7EvhoQIqi/LDh1QDcgkDkgdQGsg0GzgVQgBgbhXgSQhsgTANgOQgigJgUgJQh2gagbgeQhMglgVg6QhrhKhYhnQgWgZgUgbQjgkvBlmPIAIgyQhRlzIClSQBjiECghmQEHieHsiOQF1hpG+haQDOgqDVglQKlh4Jlg4QDHgRCzgKQE9gLDOAUQENgOFEBpQBAALAxANIFcBWQDMA/DDBPQCqBFCyBiIBSAtQGtC9DwHpQBIBYA9BgQDVBzBYFzQAQAcAQAaQAvCTBMAqQD7BzCfCAQC/CbBXFCQBwEJAwFvQAzBfgEEMQARBxAJCHQgJDiA6BBQDqCRDZDDQCIB7CBCNQEKEoDdFoQAvBNAsBQQDxG4CeHpIAOAsQCfIQAuIUIACARQAoIhhVHwIgGAgQhbH1jZGdIgiA/Qi0Fxl4EQQk/EhnPC6QkFBomEA7Qn0BCqnAAQjrAAkAgIg");
	this.shape_539.setTransform(883.3741,387.4921);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(0,0,0,0.996)").s().p("EAysBYBQvngc0FiSQpehFqKhdQyziszFjmQm8hUmdhVQi6gminglQlahMivguQhagahkghQldhlhfg7IgGgDQhEgihZguQjOhtiwhyQkbi5ixi4QjCjDhvi4IgyhOQh6jEhci1Qh5jrhcj8Qg5idguijQlizrEf6XIAAgBQBLm8HOljQDEiYEHiFQD6h9EyhpQIxjALJhwQDfgiDmgaQGwgwG4gNQgsgaiRgOQi0gPgngMQhGgHg3gIQjlgXhlgiQiggqhIhJQhyhJhXhkQgXgZgTgbQjdktCUmhIAOgzQgklQJelMQB1h2CthfQEeiUHkiIQF7hpHBhdQDQgsDVgnQKnh+JvhHQDGgVC3gPQE7gVDWAJQErgaEwBRQBAAIAxAKIFmBHQDPA0DNBFQCxA9C6BVIBXAnQHTCuE4GsQBZBQBPBXQD8B3CHFHIApAzQBDCFBTAvQEAB+CVCFQC0CjA9FbQBSEVAOGCQAlBZgaEgQAGBzgCCMQgaDzA1A1QD3CEDoC4QCRB1CJCIQEcEdDwFlQAzBMAwBPQEFGwCzHqIAQAtQC0INBFIbIACARQBAIkg9H7IgFAhQhCIAjAGvIgeBDQilGKlaErQkzFDnDDVQj+B3mLBEQobBVsBAAQi3AAjEgFg");
	this.shape_540.setTransform(883.7443,387.8087);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("rgba(0,0,0,0.996)").s().p("EA0yBYMQvtgW0XiQQphhEqUhdQy/irzRjnQm9hTmmhWQi7gnipgkQlPhJjCgxQhegZhigeQlwhlhSgzIgGgDQhEghhcgvQjQhsi0hyQkgi2i4i1QjKjChwi4IgzhPQh9jHheizQh9jthej9Qg6iegwilQlsz1Ei6oIAAgBQBMnHHGlnQDGidEHiGQD7iAE2hqQI3jCLQhpQDighDngYQG1grG9gGQhXgXjLgMQj7gLhdgJQhqgFhZgHQlUgUivgmQj0gvh7hYQh5hIhWhhQgXgagUgbQjYkqDCm0QAJgZALgaQAIkuK6lFQCJhoC5hXQE1iLHciDQGAhoHEhgQDTguDWgpQKpiFJ3hVQDHgZC6gVQE6gdDdgEQFKgkEaA4QBCAEAxAIQC8AbCyAcQDUArDVA7QC5AzDCBJIBbAiQH5CeGCFuQBqBIBgBOQEjB8C2EcIAyAwQBWB1BbA1QEECICMCLQCpCqAiF1QA2EhgWGVQAYBSgvE1QgFB1gOCRQgsEEAxAqQEFB1D1CvQCaBuCTCDQEuESECFhQA2BLA0BOQEZGoDJHtIARAsQDKILBcIhIADARQBWIngkIHIgDAiQgqIMioHBIgaBFQiWGkk8FGQkmFmm3DvQj3CGmRBOQo9BntXAAQiHAAiOgCg");
	this.shape_541.setTransform(884.5668,387.3847);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(0,0,0,0.996)").s().p("EA20BYYQvygO0piPQplhDqehdQzLiqzdjoQm9hSmvhYQi9gmisgkQlDhGjUgzQhigZhhgcQmEhkhEgsIgGgDQhDgghfgvQjThri5hxQkki0jAizQjSi/hxi5IgzhQQiBjJhfizQiAjuhhj/Qg8ifgximQl3z+El67IAAgBQBPnRG+lrQDGihEJiJQD8iCE4hqQI+jELXhkQDlgfDogVQG6gnHCABQiCgUkGgJQlCgIiRgGQiOgDh8gGQnDgRj4gqQlJg0iuhnQiAhIhVheQgXgZgUgbQjVkoDxnGQAMgaAOgaQA1kLMVlAQCdhaDFhPQFMiBHVh+QGFhmHGhlQDWgvDWgrQKriMKAhjQDHgdC+gaQE6gnDjgPQFogwEFAgQBDABAxAFQC9ARC7AXQDXAgDfAxQC/ArDMA9IBfAcQIfCNHKEyQB8BBBwBEQFLCADlDxIA7AsQBpBnBjA6QEJCSCCCRQCeCxAIGPQAZEug5GnQAKBMhFFIQgQB5gZCVQg9EWAsAeQESBnEEClQCiBnCcB+QFAEHEVFdQA6BKA4BNQEtGhDdHuIAUAsQDfIJByIoIAEARQBuIqgNISIgBAjQgQIXiQHTIgXBJQiGG9keFhQkaGJmqEJQjwCVmZBYQpYB7uqAAIi4gCg");
	this.shape_542.setTransform(885.8426,386.7003);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("rgba(0,0,0,0.996)").s().p("EA4wBYqQv3gI06iOQpphBqohdQzXiqzqjoQm9hSm4hYQi/gnitgkQk3hCjog2QhlgYhhgZQmXhlg2gkIgGgDQhDgfhigwQjWhoi8hxQkpiyjIiwQjZi+hyi6Ig1hPQiEjMhhiyQiCjvhkkCQg+iggyimQmC0IEp7OIAAAAQBQndG3luQDGilEKiLQD+iFE7hrQJEjFLfhfQDmgdDqgSQHAgjHGAJQiugTk/gGQmKgEjFgDQizgCiegEQoygPlCgtQmdg5jhh3QiHhGhUhbQgXgZgUgcQjSklEgnYIAgg1QBijpNwk5QCxhMDRhIQFjh3HNh4QGLhmHIhoQDYgwDXguQKuiTKIhwQDHgjDCgeQE4gwDsgcQGFg6DwAGQBFgCAxACQC9AIDDARQDbAWDoAnQDHAiDUAxIBkAXQJFB9ISD1QCNA4CCA7QFyCFETDGIBEApQB9BXBrBAQENCcB5CXQCTC4gTGqQgEE5hbG6QgEBGhaFcQgbB7glCaQhOEmAmAUQEhBYESCbQCqBgClB7QFSD7EoFZQA+BIA8BNQFBGbDyHvIAVAsQD1IFCJIvIAEARQCGItALIeIABAjQAIIjh3HmIgTBLQh3HXkAF7QkOGtmeEjQjpCjmgBiQpwCQv8AAIhggBg");
	this.shape_543.setTransform(887.5847,385.5656);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(0,0,0,0.996)").s().p("EA6oBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQBSnnGwlyQGFlNKKjdQJLjHLlhYQKphSK7AYQjZgRl5gDIrMAAQvIgBn7g/Qrzhej0kDQkmk5Gho/QCPjGPLkzQM7kGUCkpQRnkFQXjAQP9i7EjgDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_544.setTransform(889.8389,383.6032);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("rgba(0,0,0,0.996)").s().p("EA6oBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQBTnqGAlwQFglRJKjdQIYjKKxhZQKBhSK1AXQjZgRl1gCIrEABQu7ABnwg+QrjhcjqkCQkck3Gio/QCPjGPukzQNXkFUzkqQSNkEQ+jBQQfi7EkgDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_545.setTransform(889.8389,383.6032);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(0,0,0,0.996)").s().p("EA6oBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQBTntFSlvQE6lVIJjcQHljNJ/hZQJYhUKvAXQjZgRlygCIq7ACQuvADnjg8QrUhajhkAQkQk2Gho/QCQjGQRkzQNykFVlkqQSykDRmjCQRBi7ElgDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_546.setTransform(889.8389,383.6032);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("rgba(0,0,0,0.996)").s().p("EA+FBZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQiqj9h1jTQjamGiFm2QmN0REs7hQBVn7DjlgQDflcF0jTQFrjPIKhWQH1hTKlAXQjYgRlpgCIqfACQt9ABnCg8QqehbjDkCQjrk1GipAQCPjGRYkzQOrkEXIkrQT+kCS3jDQSEi7EpgDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_547.setTransform(867.7543,383.6032);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(0,0,0,0.996)").s().p("EBJPBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQBlpXBQkBQBxlsDCi9QDTjPGAhQQBIgPBSgLQi+ARkKAaQoWA1kJATQm9Agk+gIQsrgVkLkjQlFljGtsYQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAgEg/GgpoQiXgLjdAHQCtgCDHAGIAAAAg");
	this.shape_548.setTransform(796.3163,383.6032);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("rgba(0,0,0,0.996)").s().p("EBJlBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQiqj9h2jTQjZmGiGm2QmM0REr7hQAfi2A5mvQAgjxAohsQAyiGCDiZQBmh3E5k1QpKH5p9CKQkiA/kKgaQkEgZjRhqQjThsiHiyQiLi4gtjwQhioTFtqhQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_549.setTransform(794.1373,383.6032);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(0,0,0,0.996)").s().p("EBF5BZBQ1vgX+ykGIlOguQ31jV4Rk0IlWhFQm3halShOQjQgwiAgiQhogcgggPQhNgdhigrQhYgkg8ggQhRgohYgvIhcgzQilhciMheQmCkBi0j+Qh2ichWiPQgshJg0hTIgUggQhZiUhBiFQh6jvhbj+Qg6ikguiqQk8yQD54EIAtknQAUiIAdizQAijdAtiBQAUg7Ahg/QAmhBBHhxQAggwA2hGQBBheBRhgQntHBoMCEQgqAKgpAIQjEAni4gOQhYgHhTgSQiLgdh6g6QhcgrhTg6QiAhYhgh4Qgqg1gjg6Qh3i/gkjxIAAgBQgulABjloQBGj/CNkMQAkhGBzhMQEVizPfjwIDSgxQQkj1ZxkXIDdglQVzjoVni8IDngfQR1iXFBgLQB/gFByADQHZAKI1BaQB7AUB7AXQIiBlIXCfQB7AkB3AnQHxChF5C2QB7A8BoA6QErCpCDCfQBQBfAgCOQBdFujUMlQgRBFg+DPQgqCPhbEpQgxCggVBhQgKA5AIALQBTBUBpAlQFhBzFODXQBzBLBxBWQE0DrETE8QBcBqBXBxQD+FKDPGCQBEB+A9CDQC5GKB9GmQAqCNAiCNQBnGoAhGlQAMCVADCSQAJGhhBGBQgaCXgkCPQheF2inE/QhICJhUB8QjLExkUDnQhwBfiZBOQpwFA3VAIIhbAAQhzAAh3gCg");
	this.shape_550.setTransform(793.4087,383.6293);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("rgba(0,0,0,0.996)").s().p("EBHRBZCQ1pgQ+1kDQimgWipgXQ3zjT4QkxIlXhEQm0hZlVhNQjHguiKgjQhggZgrgPQhWgchagjQhkgkgvgaQhNglhegwIhcgxQilhZiQhcQmCj3jGjzQh+iWhWiNQgnhBg+haIgUggQhmiZhBh3QiFjqhlj2QhDihg0imQlsyCDt4JIAtkmQAWiIAhixQAljJAwiXQAUg8AdhAQAbgyBEiLQAcg0AshJQAvhbAwhLQnuIBoGCBQgqAKgpAIQjFAji3gfQhWgOhRgcQiCgshyhNQhUg2hJhFQhvhmhSiFQgjg4geg9QhijIgajxIAAgCQgjlFBdliQBEkDCFkIQAmhOBdhRQDci4QOj/QBmgZBsgZQQej2Z0kYIDegmQVxjoVmi9IDngfQRRiTFngUQCFgHBmACQHZAEI1BXQB6ATB8AWQIjBiIXCbQB7AkB3AmQHxCdF8CyQB7A5BqA6QEoChCRCYQBcBeArB8QCCFUjSM9QgVBYg2C4QgiB2hjFFQgtCTgdByQgLAyADASQAfCJBQAbQFlBrFRDPQB1BIBxBUQE5DlEYE3QBeBoBYBwQEDFGDUF+QBFB9A/CCQC+GICCGkQArCLAkCNQBsGnAoGkQAOCUAFCSQAOGhg5GBQgXCXghCQQhXF4ieFCQhECKhQB/QjEE3kLDuQhvBkiOBTQpOFf3qARIihABIilgBg");
	this.shape_551.setTransform(792.7194,383.6493);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(0,0,0,0.996)").s().p("EBIpBZDQ1jgJ+3kAIlRgtQ3xjQ4QkuQitgiiqgiQmxhXlYhNQi/griUgkQhXgWg2gPQhggbhRgcQhwgjgjgUQhIgihkgyIhcgvQilhWiUhZQmCjtjXjoQiIiQhViLQgjg5hGhhIgWggQhyifhAhnQiSjlhvjwQhKidg7ijQmcxzDh4PQATiGAaieQAXiIAnivQAmi1A1itQATg9AZhBQAQgiBAilQAYg5AjhNQA+ibAthZIgmBAQn6JmoPCAQgqALgpAGQjFAgi2gwQhUgWhOglQh7g7hqhgQhLhBg/hQQheh0hEiRQgdg9gYhAQhMjQgSjyIAAgBQgXlKBXldQBCkIB9kEQAohUBHhWQCji/Q+kNIDSgzQQYj3Z2kaIDeglQVxjqVki9IDogfQQriQGNgcQCMgJBbAAQHXgBI2BTQB6ASB9AWQIjBeIXCYQB7AjB4AlQHwCaF/CuQB6A3BtA5QElCZCgCRQBnBdA1BqQCnE6jPNUQgZBsguChQgbBchrFiQgoCFgmCEQgLArgDAaQgUC9A3ARQFpBjFTDHQB3BFBzBRQE+DgEcEyQBfBmBaBuQEIFCDYF8QBGB7BBCBQDEGFCHGiQAsCLAmCMQByGmAtGiQAQCUAHCSQAVGhgyGBQgUCWgeCSQhPF6iWFFQhACLhMCCQi8E8kCD2QhuBoiEBaQorF94AAaQhxACh2AAIhgAAg");
	this.shape_552.setTransform(792.0306,383.6141);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("rgba(0,0,0,0.996)").s().p("EBKBBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQgig2hjiCQh+ikg/hZQkIl1ijmNQn3zMEt7PQA2kxCXnoIBulfQA5izAUhPQoYMFomCFQjzA6jbhPQjQhLiii9Qifi6hdkOQhdkRgLk/QgLlPBRlWQBXluC5lWQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_553.setTransform(791.3421,383.6032);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(0,0,0,0.996)").s().p("EA9MBYnQxhg02ji5QoxhIpAhXQxpirx4jfQp6h7nmhtIgggHQllhThTggQhKgchmgrQjehajEhgIglgTQkfiEiQhxQhLg2hNg8QijiDhtiFIgxg6IhhhsQiCiRhNhZQjpkUiRkeQgnhPgxhfIgLgYQhMiYg0iNQigmShKm/QiHsYB6u9QAnlGB9nWQAKg8BUkgIAehxQAahdAMg5QhPAwhkBhQgYAPgfAgQg2A5hGBHQjvDtjkBuQhcAuhdAaQjuBDjeg/IgigKQi/hAiVixQhEhQg4hjQhIh+gziZQhakMgPlCIAAAAQgQlOBElWQAojLBEjFQA3ihBJibQBVjPIRjhQD0hnHRh5QFahYG1hfQN8jATWjTQGShFGbhDQRHixQ/iVQHSg/FvguQJshNDygNQHOgXGYAsQDBARDOAdQGzA9G9BnQDiA1DgA/QHTCDGHCbQCJA3B+A5QHVDZDIDOQAkAmAcAyQDFEIgqHmQgEDKg4EWQgTCIipJCQgpCMgVBcQgGAahTCBQhPB6ADAHQAXBEGJCZQDGBNDOBGQGXDmFqFpIBGBHQFLFbENG1IBIB5QD5GtCsHdQAaBJAZBJQChHsBEHwQAJA/AHBAQA8IUg2HtIgIBDQhGIfjNHCIAAABQjbHflmFYIgXAWQkzEmpnCfQoECMtDAYQijAFiuAAQlvAAmegTg");
	this.shape_554.setTransform(789.5399,383.7609);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("rgba(0,0,0,0.996)").s().p("EBDDBYzIiAgEQxagm2uizQneg7n1hHIihgYQxoimx5jaQoLhjnEhgIiTggIgggGQk/hIh+glQhRgZhhgjQiag1iMg2QhEgZg+gaIglgQQjJhJhag3QhMgrhIguIgOgJQhIguhIgxQh9hXhlhaQgigegggfIg2gzQgwgrg3g2QiFiAhYhaQjBjKh6jNIhTiLIgeg0IhDhzIgNgXQgrhKghhCQgmhHgfhGQialEheleQgUhNgShOQi1sPBXu/QAclZBlnEQAMhVA1jOIAPg7IAahxQAVhbALg8QgvgchJA2IgCACQgUABgjAhIgFAFIh4B7IgFAGQjtDwjVByIgHADQhXAuhXAdQjpBOjggvIgjgIIgNgDQi7gziSitQhDhPg4hlIgEgJQhEh7gxiVQhWkJgUlFIAAgBQgUlOA2lWQAgjIA4jGIACgGQAvikA+icQBbkIGYj+IALgHQC7hyH0iMQFLhaG3hjIASgEQNwjETijYQF3hCGIhAIAxgIQRFizQ+iXQGgg6FpgvIA7gHQJEhKEYgWQHkgmFAAYIAzADQDBAMDOAXQGRAvGqBXIA5AMQDiAxDhA6QGpBvF7CHIA8AWQCKAzB/A1QHEDADyC+QARAOAQAQQAWAVATAXQEUD5AYGBIADARQAfC8gpEkQgQC7iSIOQggB0gZBfIgHAdQgJAjhDB+Qg8BogHAjQAAAQgTCCQgQBqAMALQAXArCqA6QBYAfB4AjICqA3QF3CzFXEjIBRBHQAlAhAkAiQE1EkEHFzIA+BaQAnA5AmA8QDqFxCyGgQAWAzAUA0QAdBHAbBIQCeGqBXG3QAMA3AJA4QAMA+AJA/QBHHRgOG7IgFBxIgFBDQgkHhiMGjIglBoIAAABQiqHHkfFdIgwA5IgVAXQkOE7njDIQgrASgvASQniC2taAtQkVANk4AAQjEAAjTgFg");
	this.shape_555.setTransform(788.5027,383.8671);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(0,0,0,0.996)").s().p("EBHPBY7IgyAAIiAgDQxXga28iuQm7g0nWhBIhKgKIiggXQxsijx9jWQnKhWmwhYIhXgSIiRgeIgfgGQkag9iqgqQhXgXhcgbQhygghoggIhNgYQhHgVg8gVIgkgMQipgzg4gfIhCghIhng1IgzgdIgMgHQhMgqhKgtQhfg6hVg8Ig7gqIhGg1QgbgVgfgZQg2gpg4guQiGhxhjhcQiviphripIgpg+Qgig1gwhHIgIgMIgggxQgmg4gig1IgPgXQgagngVgiIglg+QgphFglhEQibkehpkvIgYhHQgYhLgVhNQjdsKA5vDQAUltBQmzQALhVAah5IAShXIAMg6IAVhyQAQhZAIg9QgUg/grANIgBgBIgGABQgQgHgfAYIgGAFIgLAKQgiAghNBSIgFAFIgKALQjnDxjGB1IgHAEIgJAFQhPAuhRAfQjjBZjjgdIgjgFIgNgDIgKgCQi6gliRipQhChNg4hmIgEgIIgGgLQhAh5gviRQhTkFgZlKIAAgBIgBgDQgYlPAplXQAYjIAujHIAAgCIACgHQAnioA0idQBfk8EckWIAIgIIANgOQCGh8IRidQFBheHBhoIAOgDIAMgDQNojJTyjeQFvhBGIhCIANgCIAxgIQRHi1Q/iaQGFg3FrgwIAdgEIA7gIQIehGE9ggQIBgzD5AJIAZABIA0ACQDBAFDQATQF9AkGhBMIAiAHIA4ALQDkAsDiA2QGPBhF3B6IAkAMIA+AVQCLAvCAAxQGzCpEcCwIACACIAiAXQAZASAWASQFWDoBUEiIACAHIAGAQQBBCugaExQgODvh8HbIg2DNIgFARIgIAeQgNAvgzB5QgoBXgSA+QgJAngUBlQgQBRgEAlQgBAdAQAhQAEAQgiAsQgfApANAQQAHArBIAdIBpAeIANAEQBVAYBVAcQF9CXFgEKIANAJIBTBCIBNA/QE7EOEUFiIAKAOIBCBYQAqA4AoA6QDxFeC+GPIAKAVQAYAyAXAzQAfBGAdBHQCnGVBnGpIAGAaIAZBuQAOA9ALA+QBXG8AIGwIABAfIAAByIgBBDQgNHOhpGeIgJAiIgeBsIAAABQiGG+jxFnIgUAdIgqA8IgTAZQj7FamXDsIgXANQgpAYguAXQnEDbt0BAQlmAYmnAAIiwgBg");
	this.shape_556.setTransform(787.9793,383.8261);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("rgba(0,0,0,0.996)").s().p("EBKkBZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQghg1hiiDQh8iig/hbQkEl0ihmNQnxzKEe7SQBQnjghg1QgRgbgzAsQgdAYhiBrQjyEEi/B6QlFDOlVgmQkcggi7lnQivlQguoTQguoTBionQBopNDzm/QBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_557.setTransform(787.8597,383.6032);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(0,0,0,0.996)").s().p("EBKqBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnMhsQmrhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQghg2hjiCQh9ijg/haQkFl0iimOQnzzKEj7RQBDmQgZgqQgNgWguA5Qg0BvhnCSQjrE9jNChQlFD1lYgmQkbggi2mhQiqmEgnpgQgopdBnpdQBuqIDym+QB0jWU2k+QRWkIcUkxQXkj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8aAAIgRAAg");
	this.shape_558.setTransform(787.2004,383.6032);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("rgba(0,0,0,0.996)").s().p("EBKxBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQghg2hkiCQh9ijg/haQkHl1iimOQn2zLEp7PQA2k9gRgeQgJgSgqBGQhLDGhrC5QjmF3jaDGQlEEdlbgoQkagfiynbQikm2ghqtQghqnBsqUQBzrCDym+QB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_559.setTransform(786.5217,383.6032);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(0,0,0,0.996)").s().p("EBK4BZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQgig2hjiCQh+ikg/hZQkJl2ijmNQn3zNEu7NQApjpgKgUQgFgNgkBTQhjEchwDgQjfGxjnDsQlEFFlegoQkZgfiuoVQifnqgar6QgbrxByrJQB5r9Dxm+QB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8aAAIgRAAg");
	this.shape_560.setTransform(785.807,383.6032);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("rgba(0,0,0,0.996)").s().p("EBLABZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQghg3hkiBQh/ilg/hZQkKl2ikmNQn6zNE17MQAbiWgCgJQgBgIggBgQh6Fzh0EHQjZHqj0ETQlEFslggoQkZgfippRQiaocgUtHQgUs6B3sAQB+s4Dym9QBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_561.setTransform(785.0634,383.6032);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(0,0,0,0.996)").s().p("EBCdBY3Qzmgq6WjcQmBgymIg5Q0XjA0ukDQm4hWlyhQQiigjiSghQmBhZhWgiQhLgbhlgsQhIgdhFgfQiVhAh8hAQhtgzhFgsQhPgwhTg0QjUiLiaiNQhohfhKhfIiQipQiBiWhJhcQhtiLhViOQiSjvhrjpIgQgjQi1mNhhmqQjuvEC9xEIAHglQAThqAAgRQABgQgRAtQgDAGgIAVIgKAaQgeBWgpBsQg9Ckg8CKIgwBpQjlHlkDD8QjTDQjgAtQh9Abh7grQjQg+iMmWQgdhWgbhlQiOoggRs+IAAgCQgQs4Bxr8QAPhnARhiQB1qhDFmMQAxhlC9hpQEnijNijTQCdgnCugnQQCjpYRkHIF1g/QUjjZUYixIGcg4QPMh/EygNQDsgKDRAMQGCARG6BEQDmAkDpAuQGzBYGsB9QDyBGDdBNQFpB9EkCKQECB7CxB3QCPBiBTBfQCcClAOEzQAeFIiOI/QgZBziBGvIgzCpQhREIAJA7QBEAqBBA0QBlB3CDA8QDXBZDRB/QDvCSDfDBQC6ChCuDAQDCDXCsD2QCZDbCGDwQCSEIB2EaQBqD9BSEJQBeEtA7EuQAyEDAYEBQAfFHgLE4QgJDpghDeQgyFQhmErQhAC5hTCqQiWE0jUD8QhxCGiCB1QjdDLl/CFQpXDVxxASIjEABQkDAAkbgJg");
	this.shape_562.setTransform(784.3255,383.6119);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("rgba(0,0,0,0.996)").s().p("EBFbBY7Qzbgc6ZjVQl+gwmKg5Q0Ui50pj+QmshSl+hQIkzhCQlYhNiFgoQhQgZhigkIiNgzQidg4h4g0Qh+gxg2gjIilheQjWh/iniDQhthXhUhWQg/g6hbhfQiEiHhThfQh1iIhSiJQiYjxhxjeIgRghQjLmMh4mUQlCvlCuwEIAGgmQAShhACgbQACgYgLAaQgCgCgLAYIgKAbQgaBHgxB7QhAChg/CHQgZA2gZAyQjxHgkQDmQjbC7jrAUQh7AOhyhHQi3hkh8mQQgbhXgYhjQiComgNs0IAAgEQgOs2Bsr4QAPhmAQhjQBvqcC3mSQA0h3CThuQDnirOVjlQCcgnCugoQP3jqYSkJIF2g/QUdjaUTiyIGcg4QOeh6FggYQD/gRC0AIQGAAKG6A+QDkAgDqAtQGzBSGsB4QDvBCDhBLQFoB4EnCDQD+ByC7ByQCQBaBeBWQDDCmAuEAQBNEriFJZQggCdhxGCIgyCqQhDDagPBuQAjA7AgBIQAkC3BiArQDcBODUB1QD0CGDmC3QDACZCzC5QDIDPC0DxQCfDVCLDsQCYEBB+EWQBxD6BYEFQBlEoBDEtQA5EAAgD/QAoFDgBE4QAADpgZDeQgkFPhYEvQg2C7hJCtQiFE7jCEGQhoCNh4B8QjXDjlaCgQokEDyOAmQi5AFjIAAQiqAAi1gEg");
	this.shape_563.setTransform(783.8512,383.6031);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(0,0,0,0.996)").s().p("EBIWBZAQzOgP6djOQl6gumNg3Q0Qi10lj4QmghOmKhRQigggiSggQkvhBizgsQhXgXhdgcQhJgVhGgWQilgwhzgpQiPgtgmgaIiqhYQjXhzi0h6QhyhOhehNQhPg8hWhOQiGh3hehjQh7iEhRiFQidjzh3jRIgTghQjhmLiOl8QmXwHCfvGIAHglQAPhZAFgjQAEghgGAHQgBgLgNAcIgLAaIhPDBQhCCghDCGIg0BmQj9HakeDQQjjCmj1gFQh5ABhphjQieiJhsmLQgZhYgVhiQh2oqgKsrIAAgGQgLszBnr0QAOhmAQhjQBpqXCpmZQA2iJBrhzQCmiyPIj3QCbgnCvgpQPsjsYSkLIF2g/QUYjbUOiyQDSgeDLgbQNvh1GOgjQERgXCYADQF+ACG7A5QDhAdDsAqQGzBOGrByQDsA/DlBIQFnByEpB9QD7BqDFBtQCRBRBpBPQDpClBPDOQB7EOh8JzQglDGhhFVIgzCsQg0CsgoCgQAEBNgBBcQgeD3BCAZQDgBDDYBrQD5B6DsCtQDGCSC5CyQDNDGC7DrQClDQCRDoQCeD5CFEUQB4D2BfECQBrEiBMEsQBAD+AoD8QAxE/AKE5QAHDogPDeQgXFOhJE0QgtC9hACwQh0FBivERQhfCThvCDQjRD8kzC6QnzEzypA4QkEAMkkAAIi4gBg");
	this.shape_564.setTransform(783.6353,383.5925);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("rgba(0,0,0,0.996)").s().p("EBLNBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQixkJiDjRQj3mKilllQn1w/ChuWQAaiaAAgZQgBgYgbA/IhTDCQhFCehFCDQntOspphFQkYgfigqgQiSpjgIuwQgIufB/tLQCIuHDxm9QB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8aAAIgRAAg");
	this.shape_565.setTransform(783.709,383.6032);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(0,0,0,0.996)").s().p("EAVRBUwIj0ggQ32jQ4UkuQizgjiwgkQmZhSlJhJQjcgwimgpQgxgMgjgLQhegZhQgZQiogxgpgaQhIghhlgyIgVgLQjOhni0hvQlCjFjJjEQi3ixhpifIgRgbQiukHiBjTIgDgGQjzmNifluQiAkkhPkaIgKgiQgDgIgDgEQgVg9gTgjQhRjXgSjXQgQiTAPiXQANhogJgEQgEgOgZA3Ig4B3IgjBGQhOCYhUB5QiBDBiQCBQmzG4m2isQh4gnhfimQhqi/hKlTQiEpwAHuuIAAgCQAHuZCKtdQAwkrA7kDQBxntCZk6QAXgwBBg0QCwi1GkiiQDyheGohuQFZhXGyhdQOKjCTojWQFPg5FVg3QSbjASSigQEtgpEDghQNkhvEZgMQEMgKD1AQQFrAUGbBAQDoAkDqAwQG4BZGxCAQDRA9DBBCQGVCKFACaQC7BaCPBZQDgCKBsCEQBoB5AcDMQA6Fui/LTQgSBIhHDwIh8GaQg0CqgTBeQgJA1AJAJQBZBKBrAmQFoB2FTDdQBhBABeBHQFKD4EkFVQBABJA9BOQEeFqDkGxQAkBFAjBGQDfHHCNHsIAeBwQCKIDAjH/IAEBMQAdIdhaHpIgHAlQhoIOjsGpIgBABQj6HCmDE4IgbAWQoxG07PAJIh5ABUgWHgAFggGgENg");
	this.shape_566.setTransform(779.5818,383.8289);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("rgba(0,0,0,0.996)").s().p("EAVLBUpIj1ghQ4AjT4ekyIlmhHQmdhUlJhKQjpg1iZgnQg1gOgegKQhXgbhXggQiagxg5giQhMgkhhgyIgVgLQjPhsixhyQlDjQi7jOQiui+hoieIgRgbQivkKiAjWIgDgGQjumQial2Qh6kphJkgQgFgXgEgKQgDgIgDAEQgRglgRANQhEg3ghhRQgbgpgNg8QAAg4gTARQgGgEgXAwIg9B0IgnBEQhYCThhBuQiTCsiqBhQnUFKmNkhQhphAhTimQhhjPhAlLQh5p9AYuvIAAgBQAWuTCVtvQAykoA9kMQBxnnCPlLQAXg1A2g2QCnjzFai0QDIhpHNh/QFUhaG9hjQOFjGT8jcQFPg6Fbg4QSkjDSaiiQErgqEMgjQNIhsFAgVQEigRDaALQFtAOGhA9QDoAhDtAuQG9BXG2B8QDRA8DFBBQGYCHFFCXQC8BXCUBXQDhCEB5B+QB5B6AqC2QBdFZi+LwQgWBbhBDdIh9GfQgwCfgbBvQgJAwAEAPQAxB1BYAdQFtBxFYDZQBiA+BgBGQFQD2EqFUQBABKA+BNQEkFrDoGyQAlBGAjBHQDjHICQHvIAfBwQCNIHAlICIAEBNQAfIhhaHsIgHAlQhnISjuGtIgBABQj8HFmGE6IgbAVQo5Gz7aAGIh5ABUgWRgAHggVgERg");
	this.shape_567.setTransform(775.2804,383.9089);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(0,0,0,0.996)").s().p("EBMFBZBUgWbgAJggjgEVIj2ghQ4LjW4pk2IlnhJQmihVlJhLQj2g4iMgmQg5gQgZgLQhRgbhdgmQiMgzhIgpQhQgohcgxIgWgMQjRhxish0QlEjbiujZQinjMhmibIgSgcQivkLh+jaIgDgGQjqmTiUl/Qh1kthBklQgGgbgEgIQgDgFgDALQgNgOgOA+Qg4BogvA3QgoA/gnAfQgOgGgcAmQgKAGgUAoIhBBwIgrBCQhhCOhwBjQilCYjEBBQnzDclmmXQhahZhGinQhYjdg4lDQhrqKAnuvIAAgBQAluOCguAQA0kmBAkUQBvnhCIldQAVg4Arg5QCekyERjFQCehzHyiRQFOheHJhoQOAjKUPjiQFQg6Fhg7QSrjGSjilQEpgpEVgkQMshrFmgdQE5gZDBAIQFvAHGlA4QDoAgDyAsQHBBTG5B6QDSA6DJBBQGbCEFLCTQC8BUCaBWQDiB+CEB5QCMB6A4ChQCAFDi+MMQgZBtg7DLQgeBnhgE+QgtCTgiB/QgKAtAAAUQAJCfBEAXQFzBqFdDVQBkA9BhBGQFWDzEuFUQBCBJA/BOQEpFrDsG0QAmBFAkBHQDnHLCTHyIAgBxQCQIKAmIFIAFBNQAhIlhaHwIgHAmQhnIWjvGvIgBABQj+HJmKE6IgcAWQo/Gx7mAEIh5AAg");
	this.shape_568.setTransform(770.837,383.8871);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("rgba(0,0,0,0.996)").s().p("EBMbBZCUgWlgALggygEZIj3giQ4VjZ4zk6IlqhJQmnhXlIhMQkDg9h/gkQg+gSgTgKQhKgdhkgtQh+g0hYgwQhUgrhYgxIgWgMQjSh2iph3QlFjmigjjQiejZhliaIgSgcQiwkOh9jdIgDgGQjmmWiOmHQhvkyg7krQgFgegEgEQgDgFgDATQgJAKgMBuQgsEIg9C9QgzCphDB5IhBBmQgMAQgSAhQgfAzgnA6QgWAggZAgQhrCJh+BYQi2CEjeAgQoUBuk9oNQhLhxg6inQhPjtguk7QhgqXA3uwIAAAAQA0uICsuSQA2kjBCkcQBvncB+luQAVg9Agg7QCVlwDHjXQB0h+IXiiQFIhhHVhuQN8jOUijoQFQg7Fng8QS0jJSqinQEogqEdgmQMRhoGNgmQFPggCmADQFxABGqA1QDpAdD1ArQHGBQG+B2QDSA5DMBAQGfCBFQCQQC9BRCfBUQDjB4CRBzQCdB7BGCLQCjEui9MoQgdCBg0C4QgYBThoFXQgpCIgqCQQgKAogFAaQgfDKAxAOQF4BkFiDSQBlA8BjBEQFcDxE0FTQBCBKBBBNQEuFsDwG1QAmBGAlBIQDrHMCWH1QARA4AQA5QCTIOAoIIIAFBOQAjIphaHzIgHAmQhmIajxGzIgBABQkAHMmNE8IgcAVQpHGw7xABIh5AAg");
	this.shape_569.setTransform(766.225,383.787);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(0,0,0,0.996)").s().p("EBOsBZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmIj6l+Qi8kgiCjtQmTrah4q8QgFghgEgCQgDgCgDAaQgEAhgKCfQggGnhLFFQh4IFjmEpQkmF/nOAAQqtAAkGu1QjdskBm1gQBYyYEfzRQB/okCNmwQCMmvB+joQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_570.setTransform(761.4865,383.6032);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("rgba(0,0,0,0.996)").s().p("EBO+BZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQiLjWhniZQinj9iLjqQmKqpiMqEQgIgggDgBQgDgBAAAcQgBAkADCkQABGvg5FPQhcIRjoEwQkoGIoCACQrjADkavWQjts9Bt2SQBcy5Euz/QCFoxCRm8QCQm4B/jpQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_571.setTransform(759.6684,383.6032);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(0,0,0,0.996)").s().p("EBPQBZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQiAjHhriaQiRjZiTjoQmCp3igpMQgKgfgDABQgCgBACAeIATDPQAhG4goFaQg/IbjpE4QksGQo1AFQsZAHktv4Qj+tXB03EQBhzZE90sQCKo/CWnJQCUnAB/jqQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_572.setTransform(757.8752,383.6032);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("rgba(0,0,0,0.996)").s().p("EBPiBZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQh1i3huibIkXmbQl7pGizoTQgMgfgCACQgDABAFAfIAkDXQBAHBgVFjQgiInjsE/QkuGZppAHQtPAKlBwZQkNtxB532QBmz5FN1ZQCPpNCbnVQCXnJCAjrQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_573.setTransform(756.0677,383.6032);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(0,0,0,0.996)").s().p("EBP0BZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQhqinhyicQhniUijjhQlzoVjHnbQgOgegCADQgCACAIAhIA0DfQBgHJgCFuQgHIyjuFGQkwGiqcAJQuGAOlVw7QkduLCA4oQBr0ZFc2HQCUpaCgnhQCbnSCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_574.setTransform(754.2493,383.6032);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("rgba(0,0,0,0.996)").s().p("EBQGBZEUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQhfiXh1idQhShxirjeQlqnjjcmkQgQgdgBAEQgCADAKAjIBFDmQCBHSAPF4QAWI9jwFOQkzGrrQAMQu7AQlpxcQktulCH5aQBv05Fr20QCZppClnsQCfnbCBjtQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPILQELIDCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo7HC8bAAIgQAAg");
	this.shape_575.setTransform(752.4559,383.6032);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(0,0,0,0.996)").s().p("EBQYBZEUgXQgACgiYgEpQ6Zjl69lYQqSiDnNhsQmqhlgpgdQhDgehrgzQjYhnjBhxQpzltjdlmQhUiHh5ieQg8hOi0jbQlimyjwlsQgSgcgBAFQgBAFANAkIBVDuQChHbAhGCQAzJIjyFVQk1G0sEAOQvyAUl8x+Qk9u+CN6MQBz1aF73iQCep2Cqn4QCjnkCBjuQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQILQEKIDCgI2QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo7HC8bAAIgQAAg");
	this.shape_576.setTransform(750.6374,383.6032);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("rgba(0,0,0,0.996)").s().p("EBObBY/QyfgM5Qi+QnHg2nihEQx8ifyMjVQoqhmoGhqIhJgPQjrgyibgkQhUgVhZgYQjeg7jBg6IiLgqQmIhwhEg3IiohdQhhg5hYg6QhjhBhghMIhCgzQhyhjhWg/QgrgpgkgOQhbg3hGgRQhbg8gsgtQghgogPgYQgkg7gsg6QgTgZgXgcQgXgXh7iLIgHgIQhihkhhhfQiCh+iDhwQgQgSgCAHQgDAIAJAhQACA8AnCvQAQBrAGBnQAkFFgyEYQgmIEkwE9QioC7kCBsQktB+mCgIQrFgQl4qgQiKjthdlAQkevaCO6ZIABgDQBOubC+vjQBfnvB4n6QBimZBoluQA5jGA5i4QCYnbB8kKQAohZCkhiQECjjHviqQCMg0DNg6QG8h2JtiCQMwiqQ5i5QGshJG0hGQRIixQ/iUQFfgwEpgmQMjhnEPgLQEdgLEDARQFhAVGPA+QDiAjDkAuQHDBcG8CCQC0A1CpA5QG6CUFWCmQCJBCBxBCQEhCnB+CdQBFBVAgB8QBlF3jmNSQgKAogfBmQgvChiBGoIgZBTQhADdAVAWQAXARAcAIQHNB6GsEgIAFADQGWETFhGWIAyA7QE5F1D3HEQAlBDAjBFQDWGlCQHHQAjBvAfBwQBzGmAvGiQARCbAICaQATF7gnFhQgWDCgnC5QhBEyhvEPQhYDWh0C/QiIDhitC8QirC9jkCUQnyFJzhA5QkCAMkhAAIidgBg");
	this.shape_577.setTransform(748.3778,383.7141);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(0,0,0,0.996)").s().p("EBMeBY8Qy0gX5hjIQnPg5nlhFQyKimycjdQpEhtn4hrIhKgQQkIg6h+giQhQgXhdgfQjdhGjAhHIiKg0Qlmh8hfhRQhIguhag7QhehChQhCQhYhIhahcQgegcgdgfQhvh/hFg4Qgug0gfAAQhKgdgzAuQhDgSgHALIgPgPQgMgUgLgJIgOgOQAMAdhMhGIgDgCQgsgOhAgRQhWgUh8gQQgOgKgDAKQgEALAEAeQgMBJAJCfQgGBogSBlQgdEth9EIQh/G+lvEnQi8ClkIBpQlFCBlvgXQqsgvlgrkQh7j5hTlGQkAv2CR6lIAAgFQBQulC5v2QBdn5B0n/QBembBkl6QA3jKA3i8QCLnTB3kmQAohmCEhqQDwlIGTi7QB2g+DfhHQGoh+KPiPQMvivRVjBQGthKHBhKQRXi1ROiYQFfgwE1gpQMPhlE2gUQE4gTDnANQFmAOGWA7QDlAgDpAtQHLBZHCCBQC3A0CtA5QHACSFeClQCLBBB1BBQEkCjCKCZQBPBWAmByQCDFnjrNyQgMAvgcBfQgpCNiKHFIgaBWQg+DTANAkQAQAbAYAGQHVB7GyEkIAEADQGcEWFkGeIAzA8QE8F7D4HMQAlBEAjBHQDXGsCOHOQAiBxAfByQBxGsAqGpQAQCdAFCcQAPGBgvFlQgaDFgsC6QhJE0h5EPQhgDWh8C9QiSDei4C4QivCzj8CIQobEpzdArQjLAGjdAAQiMAAiUgCg");
	this.shape_578.setTransform(746.1359,383.7261);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("rgba(0,0,0,0.996)").s().p("EhzXBa+QqVhNlGsoQhukDhIlNQjhwRCT6zIAAgIQBQusC2wKQBaoDBwoFQBZmeBimGQAzjNA1jAQB/nKBylDQAohzBlhzQDemtE3jKQBfhIDxhVQGUiFKyibQMui2RvjIQGvhMHNhMQRmi6ReicQFfgxFBgqQL6hkFegdQFUgcDLAIQFqAIGeA3QDmAfDwAsQHSBWHJB/QC4AzCyA5QHHCRFlCjQCMBAB6BBQEnCfCWCWQBZBWAtBoQCfFVjuOSQgPA3gZBYQgjB4iTHlIgbBXQg7DKAEAyQAIAkAVAGQHcB5G4EpIAFADQGhEaFoGlIAzA9QE+GBD6HVQAlBFAjBHQDXGzCMHWQAjBzAdB0QBvGzAmGvQAOChAECdQAKGGg3FqQgeDHgxC7QhRE2iDEQQhoDWiFC7QibDbjCCzQi0CpkUB8QpEEKzYAcQlSAHl+gKQzKgh5yjRQnXg8nnhIQyaityrjkQpeh1nqhrIhKgQQkmhEhggfQhNgahhglQjbhSjBhVQhGgehCgfQlDiIh7hqQhKg3hRg+QhbhLhIhLQhOhOhThsIg2hEQhribg0gwQgwhBgbAPQg5gDgfBuQgsAYAeBDQgHgCAbAqQALAOAWAmQAIAOAEALQAvBRgbAAIAAAEQAKBIgfA9QgqBUh1BRQgLgBgFAMQgGAPgBAaQgZBXgVCOQgbBmgrBiQhdEVjJD3QjYF7mtEOQjRCQkOBnQkMBlkLAAQhRAAhQgJg");
	this.shape_579.setTransform(743.953,397.3661);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(0,0,0,0.996)").s().p("Eh1SBeoQp8hskttsQhgkOg+lUQjCwsCU6/IABgLQBRu1CyweQBXoNBroJQBVmhBfmSQAxjRAyjDQBznCBtlfQAoiABGh8QDMoSDbjbQBIhSEChiQGAiMLWioQMti8SJjPQGxhOHahPQR1i+RtigQFegyFOgsQLlhjGFgmQFwgjCwADQFuABGmA0QDnAdD2ArQHZBSHRB+QC6AzC1A4QHPCQFsChQCOA/B9BBQErCaCjCTQBhBWA1BfQC8FEjzOyIgnCPQgcBkidIDIgbBaQg6C/gDBBQgBAtASAFQHjB5G/EtIAEADQGnEdFrGtIA0A/QFBGHD6HcQAmBIAjBIQDYG5CKHeQAiB1AdB1QBtG5AhG2QANCkACCfQAEGLg+FuQgiDKg2C8QhYE4iOERQhvDWiOC5QilDYjNCvQi4CeksBwQptDrzUANQlXADmBgNQzfgs6DjaQngg/nohJQypi0y7jtQp5h8nahrIhLgRQlFhNhCgdQhIgbhmgtQjahcjBhjQhFgjhBgjQkhiUiWiEQhNg/hIhDQhXhThBhUQhDhUhMh8IgwhMQhoi4gkgoQgxhNgXAdQgnAYgNCsQgUBCBCB8QAHARAxBKIBYCJQAVAiASAfQBSCFAVBEIAEALQBACeACCLQADC9hwCxQgIAIgHAPQgHARgFAXIhZDjQgxBjhDBfQifD9kUDnQkwE2nsD3QjlB6kVBlQkIBfjzAAQhjAAhfgQg");
	this.shape_580.setTransform(741.7209,421.2324);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("rgba(0,0,0,0.996)").s().p("EiFEBRYUgFZgSaADHgj6QBSu+CtwyQCavBDOumQC9tZC/qJQC5p2CAjsQBzjWU2k+QRWkIcUkxQXkj+XVjKQVmi6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPIMQELICCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo+HE8ogCUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQhIh2hfjFQhljUgTghQgzhYgTArQgWAyAHDrQADBsBnC1QAkA/DGEtQClD7BXCwQB9D9AkDgQBbI5ncHmQpLJY28H7QkGBajgAAQsPAAlExSg");
	this.shape_581.setTransform(739.493,445.046);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(0,0,0,0.996)").s().p("EiFEBRYUgFZgSaADHgj6QBSu+CtwyQCavBDOumQC9tZC/qJQC5p2CAjsQBzjWU2k+QRWkIcUkxQXkj+XVjKQVmi6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPIMQELICCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo+HE8ogCUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQp0ltjdlmQipkTh4hPQgvgegXALQgWALAJAqQAIApBuCNQC1DmA7BUQFeHsA9GtQBXJoniIPQpWKO23H5QkGBajgAAQsPAAlExSg");
	this.shape_582.setTransform(739.493,445.046);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("rgba(0,0,0,0.996)").s().p("EiFEBRYUgFZgSaADHgj6QBSu+CtwyQCavBDOumQC9tZC/qJQC5p2CAjsQBzjWU2k+QRWkIcUkxQXkj+XVjKQVmi6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPIMQELICCfI2QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo+HE8ogCUgXQgACgiZgEpQ6Zjl69lYQqSiDnMhsQmrhlgogdQhEgehqgzQjYhnjBhxQlpjSjijPQA1BhApBqQBeDyAQD2QAqKBnsIqQpyLD2pH0QkGBajgAAQsPAAlExSg");
	this.shape_583.setTransform(739.493,445.046);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(0,0,0,0.996)").s().p("EiDrBTHQgZhHgWhMUgFggSvACzgjpIAAAAQBKu4CjwlIADgYQCOueDAuDIAQhLQCnsMCrpdIAkh9QCNnjBrj0QAihNAsg6QCOjERwkZICzgrQQZj4aBkdIDVgkQVrjpVdi8ID3giQQFiKGcggQChgNBfAAQHIgCIgBNQCMAUCSAZQILBaIBCOQCSApCRAsQHOCPFtCgQCXBCCFBFQD8CDCaB9QCNBxBDB9QCnEmi1MaQggCQg5DKQgVBKhYEkQgzCogsCjIgDANQgyELA3ASQE/BVEvClQCfBXCbBsQEYDED+EDQCDCHB8CXQDoEaDCFFQBlCpBaCzQCpFRB8FlQBDDCA2DGQBgFmAwFjQAcDUAKDSQASFYgfFDQgWDdgsDSQg/EuhsENQhVDUhxC+QiUD4i/DMQiaCnjDCHQoIFp10AtQjvAIkIgCQ0dgJ84jnQkIghkRglQ2HjC2dkTQkfg2kYg5Qkog7j9g3Qkeg+jAgvQgkgHgdADIgugDQjmgcg1AEIgSgGQgygMhLgeIgvgUQg0gZghgOQgrgUgtgXIg9gcQg5gag9gYQifhLiRg8QgrgXgogYQAiBiAaBnQA1D3gHDmIgBApQgcFPixEiQiCDcjoDLQiCB2ihBuQnlFuuaEsQjXBJjjA6QjJA2iyAAQsLAAlfwCg");
	this.shape_584.setTransform(741.9875,448.1757);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("rgba(0,0,0,0.996)").s().p("EiDBBSfQgYhHgXhMUgFngTDACfgjZIAAAAQBDu7CbwnIAEgYQCHuhC7uGIAQhLQCksOCppfIAkh9QCNnpBtjuQAhhIA4g7QCxjARVkRICzgrQQej4aBkbIDWgkQVtjpVgi8ID3giQQgiNGCgaQCcgLBoABQHJACIhBQQCNAUCQAaQIMBcIBCRQCUAqCPAtQHPCSFrCjQCYBFCDBGQD+CJCQCCQCCByA4CNQCLE5i3MKQgdB/hADeQgZBZhUETQg8DGgcCDIgBALQgGDeBOAbQE8BdEtCrQCeBaCZBvQEUDJD7EIQCCCJB6CZQDkEcC/FJQBiCrBZC0QClFTB4FnQBBDEAzDHQBdFnAqFkQAaDWAHDSQAMFYglFDQgZDegxDRQhFEthzEKQhbDSh2C7QibD0jFDHQicCfjSB+QolFP1jAkQjvAGkIgDQ0kgP82jrQkJgikRglQ2IjF2hkVQkig4kVg5Qkpg8j8g4Qk3hFikgrQgbgDgOAQQgQAEgNAGQihANgaAoQgKAAgCABQgeAGgsgKIgagGQgogTgEAFQgUgFgcgLIgkgIQgigFgugBQh8gbiOADQgpgIglgJQARBkAKBlQAMD7geDWIgFAmQhEFCjSEBQiTDAkBCtQiLBkiqBdQnNErvfD/QjbA9jhAlQiIAZh9AAQtEAAl2xNg");
	this.shape_585.setTransform(744.4819,451.7103);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(0,0,0,0.996)").s().p("EiCYBRyQgYhIgWhLUgFvgTXACMgjIIAAgBQA7u/CUwoIADgYQCCulC3uHIAPhLQCgsSCopfIAjh+QCPnvBujnQAghEBEg7QDTi9Q6kIICzgrQQjj4aDkbIDVgjQVwjpVji8ID2ghQQ8iRFngUQCXgJByADQHKAFIhBTQCNAVCRAaQIMBfIBCUQCUArCPAtQHQCVFqCnQCYBHCBBHQD/CPCHCHQB2ByAuCfQBwFMi7L6QgZBuhHDxIhtFrQhFDigMBlIABAJQAmCwBkAlQE6BkEqCxQCdBdCYByQEQDOD4EMQCACMB4CbQDgEfC8FMQBhCtBWC1QChFWB0FpQA/DFAxDIQBYFoAmFmQAXDXAEDSQAHFZgrFDQgdDeg1DQQhMErh6EIQhgDRh8C3QihDvjMDCQieCYjfB1QpDE11SAbQjwAEkIgEQ0qgW81juQkKgikQgmQ2KjI2kkYQklg5kRg4Qksg+j7g4QlOhMiJgoQgRABAAAeQgIAJgFANQhcA3ACBLQgGAEABAFQgNAXgMALQgEAEgBAEQgbgNAYAYQAEAJgLACQgDAFgIAGQgLAQghAWQhYAWiLBBIhIAOQgBBlgFBiQgeEAg0DGIgKAjQhsE1jxDgQilCkkaCQQiUBRi0BLQm1DpwjDRQjgAxjeAQQhDAHhCAAQuEAAmRyig");
	this.shape_586.setTransform(747.0161,455.757);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("rgba(0,0,0,0.996)").s().p("Ehr6BlCQvHgGmtz9QgYhIgWhLUgF2gTrAB5gi3IAAgCQAyvDCNwpIADgYQB8uoCyuJIAPhMQCcsVCnpfIAjh+QCPn2BwjhQAfg/BQg7QD2i6QfkAICzgqQQoj3aDkbIDVgjQVzjpVni8ID1ghQRXiUFNgOQCRgGB8ADQHLAJIhBWQCOAWCQAbQINBhICCXQCUArCOAvQHSCXFnCrQCaBJB+BJQEACUB+CNQBqByAkCwQBVFfi+LrQgWBchOEFIhtFpQhND+ACBGIAEAHQBSCEB6AuQE4BrEoC3QCcBhCVB1QEODTD0EQQB/COB2CdQDcEjC4FPQBgCuBTC3QCeFXBwFsQA9DHAuDIQBUFqAhFnQAUDYACDSQABFagwFDQgiDeg5DPQhSEqiBEGQhmDOiBC1QinDqjUC9QigCQjsBtQpgEb1CARQjxADkHgFQ0xgd80jyQkKgikPgnQ2NjK2mkcQkqg6kNg4Qktg+j6g5QlnhThtglQgIAFAPAsQAAAOAEAUQgXBhAdBvQgCAHADAIQAGApATAgQAHALAKAKQgQgGA2ArQAbAXAGAOQALAPAEARQALAlgTAtQg0BGiIB/IhDAsQgTBngUBfQhHEGhLC2IgOAgQiUEokSC/Qi2CIkzByQidA/i9A4QmdCoxoCjQjIAgi/AAIg5AAg");
	this.shape_587.setTransform(749.5341,460.3961);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(0,0,0,0.996)").s().p("Ehr1BltQujhoms0DQgXhHgXhLUgF9gUAABlginIAAgBQArvHCFwrIAEgYQB1urCuuLIAOhMQCZsYClpgIAjh+QCQn9BxjaQAeg6Bcg8QEYi3QFj3QBXgVBbgVQQtj3aFkaIDVgjQV2jpVpi8ID1ggQRyiXEzgJQCMgECFAFQHNANIhBYQCPAXCPAcQINBjICCaQCWAsCMAvQHTCbFmCuQCaBLB8BKQECCbB0CSQBeBzAaDAQA5FyjALbQgTBLhUEYIhtFoQhXEbASAnIAGAFQB+BXCQA3QE2ByEmC+QCbBkCTB4QEKDXDxEVQB+CRB0CeQDYEmC0FSQBeCxBSC3QCaFZBsFvQA7DIAsDJQBQFsAcFoQARDZgCDSQgDFag3FEQgmDeg9DOQhYEpiIEEQhsDMiGCyQiuDmjbC3QihCIj7BlQp9EB0xAIQjyABkGgHQ04gj8zj1QkLgkkOgmQ2PjN2pkfQktg7kJg4QkvhAj5g6Ql/hZhSgiQACAKAeA4IAUAvQAuCLA4CSQACALAGAMQAZA6AyA1QAQARAVASQgDAABTA+QAyAmAXAaQAYAZAQAbQAiA6gEBDQgSB3iEC9Ig9BLQglBogkBdQhwEKhiCnIgSAcQi9EckxCdQjHBslMBVQimAtjHAmQmFBlytB2QhyANhtAAQh0AAhugOg");
	this.shape_588.setTransform(752.0364,465.9752);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQqSiDnNhtQmYhgg3geQARASBNB8QByC2BUC1QA1B0CRBvIB5BYQBJA0AoAmQB2BtAOCFQASCniCD8QkNIOi8DeQjlEOlRB9QlDB4p6A+QltAjzxBIQg1ADgzAAQyLAAn634g");
	this.shape_589.setTransform(754.5353,472.0519);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQqSiDnNhtQjSgxhgACQhkADAlA8QByC2BUC1QA1B0CRBvIB5BYQBJA0AoAmQB2BtAOCFQASCniCD8QkNIOi8DeQjlEOlRB9QlDB4p6A+QltAjzxBIQg1ADgzAAQyLAAn634g");
	this.shape_590.setTransform(754.5353,472.0519);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQqSiDnNhtQizgqgdCiQgLA+ANBOQALBEAYAzQA1B0CRBvIB5BYQBJA0AoAmQB2BtAOCFQASCniCD8QkNIOi8DeQjlEOlRB9QlDB4p6A+QltAjzxBIQg1ADgzAAQyLAAn634g");
	this.shape_591.setTransform(754.5353,472.0519);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQiJgbizg1QjGg9hdgbQlIhgi4AYQmuA6CEDpQArBMBrBiQA5A0BOBBQBhBbCjAEQArABBhgFQBagGAvADQCbAIBZBmQBxCDAwE+QBMILkKFAQj4EppGClQnxCNt3BRQnKAp10BQQg1ADgzAAQyLAAn634g");
	this.shape_592.setTransform(754.5353,472.0519);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQitgjibgoQibguhSgSQkGhHiWATQmxAvB2C+QAtBCCDBUQBGAsBgAtQBUBECQAAQAzgBBYgEQBtgGBMAOQCpAVCBByQCOCEApEZQA/GwjvEeQkFE2qODYQpGDDunB7QpwBh0TBKQg1ADgzAAQyLAAn634g");
	this.shape_593.setTransform(754.5353,472.0519);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQjRgqiDgbQhxgfhHgLQjCgsh2ANQmzAkBpCTQAtA4CcBGQBUAlByAZQBGArB8gCICLgIQB/gFBqAZQC3AiCpB+QCqCFAkD0QAyFVjVD8QkTFErUEKQqcD4vXCmQsXCZyxBEQg1ADgzAAQyLAAn634g");
	this.shape_594.setTransform(754.5353,472.0519);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQj2gxhqgPQhHgPg8gDQh/gThVAIQm1AaBcBnQAuAuCzA3QBiAeCFAGQA4ATBpgGQBGgGBDgDQCTgFCIAkQDDAvDSCJQDHCHAeDPQAkD7i6DaQkhFQsbE9QrxEuwGDRQu/DPxPA/Qg1ADgzAAQyLAAn634g");
	this.shape_595.setTransform(754.5353,472.0519);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQkag5hSgBQgcgBgxAGQg8AGg0ACQm4AQBOA8QAvAjDMAqQBwAXCWgPICAgOQBPgJA6gBQCmgFClAvQDRA7D6CWQDjCHAYCqQAXChifC4QkuFetiFvQtHFjw2D8QxmEHvtA5Qg1ADgzAAQyLAAn634g");
	this.shape_596.setTransform(754.5353,472.0519);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQ6Zjk69lYQgWgEDiA8QESBVCvBoQDjCIAYCuQAXCkifC/QkvFtthGCQtLF4wyEJQxpEWvqA5Qg1ADgzAAQyLAAn634g");
	this.shape_597.setTransform(754.5353,472.0519);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQk5gqp6hhQrYhvjqgiQwCiTCuBoQDjCIAYCuQAXCkifC/QkvFtthGCQtLF4wyEJQxpEWvqA5Qg1ADgzAAQyLAAn634g");
	this.shape_598.setTransform(754.5353,472.0519);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQlkgwnShyQn2iCjOg0QlehYiTgEQi8gFAAByQABDlnwF7Qn0F+sdF3QtlGYuxEJQwtErvMA3Qg1ADgzAAQyLAAn634g");
	this.shape_599.setTransform(754.5353,472.0519);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQlmgwmphrIp8isQk5hUiQgGQi4gJg5BjQiKDwoJFwQowGLryFqQtfGduGEEQwQErvHA3Qg1ADgzAAQyLAAn634g");
	this.shape_600.setTransform(754.5353,472.0519);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQlsgxlgheQh7ghl9h3QjwhLh3gLQihgOh8BEQhVAvjrCSQlRDRiXBcQreG8qQFFUggaAQHga+ABiQg1ADgzAAQyLAAn634g");
	this.shape_601.setTransform(754.5353,472.0519);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(0,0,0,0.996)").s().p("EiAaBPAUgG2gUpABVgkVQAkvKB+wsQBwu8CruYQCctLCrp9QCmppCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVli6E2gDQI7gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQDpFKkuRLQgXBWjAJ3QhfE3AhAIQHrB5HFExQGuEiFxG2QFkGmEQIMQEKIDCgI0QChI5AkIyQAmJChhIIQhmIfj0G2QkBHPmSE9Qo9HE8pgCUgXQgACgiYgEpQlggvk8g9Qkog8hmgTQiigfhhACQhtACiJArQhwAjjtByQiOBFmCDFQuJHNpHEFUgi+APrgaYABgQg1ADgzAAQyLAAn634g");
	this.shape_602.setTransform(754.5353,472.0519);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("rgba(0,0,0,0.996)").s().p("EiAXBPjUgG2gUkABUgkeQAjvPB9wxQBwvBCqueQCctQCqqAQCmptCAjsQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPIMQELIDCfI1QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo+HE8ogCUgXQgACgiZgEpQlegwk9g7Qkog6hlgTQiigehhACQhuABiKAoQiBAjk6CPQkUB8mjDMQuiHIpvEJQ//OC4RBvQhJAGhIAAQxmAAnw3Xg");
	this.shape_603.setTransform(754.7746,472.2016);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(0,0,0,0.996)").s().p("EiAVBQGUgG1gUfABTgknQAjvTB8w3QBwvHCpuiQCbtWCqqDQClpxCAjrQBzjWU2k+QRWkJcUkxQXkj+XWjJQVli6E2gDQI7gILJB3QKgBwKODHQKLDFHPDnQHmDyCdDeQDqFKkuRLQgYBWjAJ3QhfE3AiAIQHqB5HFExQGuEiFyG2QFkGmEPIMQELIDCfI0QChI5AlIyQAmJChiIIQhmIfjzG2QkCHPmRE9Qo+HE8ogCUgXQgACgiZgEpQldgvk+g6Qkng5hmgTQiggchiABQhuABiLAkQiTAkmGCsQmaCznEDTQu7HEqXEMQ9BMa2JB8QheAKhaAAQxEAAnn22g");
	this.shape_604.setTransform(754.9954,472.3962);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("rgba(0,0,0,0.996)").s().p("EiASBQnUgG0gUZABRgkxQAivXB8w8QBvvMCounQCbtcCpqGQClp0B/jsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQIMQEKIDCgI1QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo9HE8pgCUgXQgACgiYgEpQlcgvk/g5Qkng4hlgSQiggbhjAAQhtAAiMAiQilAknTDIQogDrnkDaQvVG/q+EQQ6DKx0BCLQhyAOhrAAQwjAAne2Xg");
	this.shape_605.setTransform(755.2411,472.6399);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(0,0,0,0.996)").s().p("EiAQBRIUgGzgUUABQgk6QAhvbB7xBQBuvSCousQCatiCpqJQCkp4CAjrQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPIMQELIDCfI1QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo+HE8ogCUgXQgACgiZgEpQlbgvk/g4Qkng2hlgRQifgbhkAAQhtgBiNAfQi2AkohDlQqlEioFDhQvuG7rmETQ3EJJx6CZQiEAUh8AAQwEAAnV15g");
	this.shape_606.setTransform(755.4621,472.9232);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("rgba(0,0,0,0.996)").s().p("EiANBRqUgGzgUPABPglDQAhvgB6xHQBuvXCnuxQCZtnCoqMQCkp8CAjrQBzjWU2k+QRWkIcUkxQXkj+XWjKQVli6E2gDQI7gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQDqFJkuRMQgYBWjAJ2QhfE3AiAJQHqB4HFEyQGuEiFyG2QFkGlEPIMQELIDCfI1QChI4AlIyQAmJDhiIHQhmIgjzG1QkCHPmRE+Qo+HE8ogCUgXQgACgiZgEpQlZgvlBg3Qkmg1hmgQQiegahkgBQhtAAiOAbQjIAkptEDI1RJAQwIG3sNEXQ0GHgvyCnQiWAaiMAAQvmAAnM1ag");
	this.shape_607.setTransform(755.6822,473.2485);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(0,0,0,0.996)").s().p("EiALBSKUgGygUKABOglMQAgvkB6xMQBtvdCmu2QCZttCnqPQCkp/B/jrQB0jWU2k+QRWkIcTkxQXlj+XVjKQVli6E2gDQI7gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQDpFJkuRMQgXBWjAJ2QhfE3AhAJQHrB4HFEyQGuEiFxG2QFkGlEQIMQEKIDCgI1QChI4AkIyQAmJDhhIHQhmIgj0G1QkBHPmSE+Qo9HE8pgCUgXQgACgiYgEpQlZgvlBg2QkmgzhlgQQiegZhkgBQhtgBiPAYQjaAkq6EgQuyGQpGDvQwhGys1EaQxHF4tqC1QioAiibAAQvJAAnE0+g");
	this.shape_608.setTransform(755.9207,473.6193);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("rgba(0,0,0,0.996)").s().p("EiAMBRxIgFgPUgGtgUMABNgk3IAAgEQAhvOB2wzIAFguQBpupCduHIARhiQCLsSCXpeQARhHAShEQB9nkBpj1QAhhPAsg7QCPjFR8kbICjgnQQnj8agkgICjgcQWTjwWFjAIChgWQR6iaGJgaQBcgGA9AAQH6gEJoBfICiAZQJPBlJDCnICbAuQIoCpGfDBQBLAjBGAkQFoC3CrCrQA9A8AnA/QDGE+jyO2QgTBIgaBcQgaBdiMHNIgwCgQghBwgLA8QgQB4AgAJQGfBrGEDuQBFArBEAvQFtD7FCFmQA2A9A1A/QEwFsDyG4QAnBIAlBJQDkG8CUHhQAYBNAVBPQCIHnAsHiQAHBRAFBRQAdHqhEHAQgMBRgPBPQhZHHi9F7QgkBJgoBHQjcGClCEbQg8A2hDAxQoxGj6SAPIinABUgWagAFggrgEUIiigWQkLglj7grIiSgaIkOgyQhPgOgugHQhKgLg8gFQhFgGg3AEQg3ADg9AKQg+ALhFAPQj4BHqLEVQsyFmpHDyIh+A0QwUGutHEUQwMFWtaCiIhTAPQiSAaiJAAQvfAAnL1Tg");
	this.shape_609.setTransform(755.6912,473.2335);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(0,0,0,0.996)").s().p("EiANBRXIgFgPUgGvgUSABPgkxIAAgDQAhvOB4wyIAFguQBqupCeuHIARhiQCNsSCZpeIAjiKQCCnpBqjtQAghKA5g8QCxjBRekSICjgnQQqj8adkfICigbQWUjwWFjAICggWQSNicF1gVQBagFBCAAQH6gBJnBgICiAaQJPBmJCCpICbAuQIoCrGdDDQBLAjBFAkQFqC7CkCuQA5A9AkBFQC0FLjzOqQgQBBgdBlQggBuiGG6IgvCeQgjB6gEAxQADBlApALQGdBvGDDyQBEArBEAvQFrD+FAFpQA2A8A0BAQEuFuDwG5QAmBIAmBJQDhG9CRHiQAYBOAVBOQCGHnApHjQAHBSAEBQQAbHqhHG/QgNBRgQBPQhcHGjAF6QglBJgpBGQjfF/lFEZQg9A0hFAxQo/GX6JALIimAAUgWcgAHggpgEVIiigWQkLgmj5gtIiSgcQitgjhggSQhNgOgxgIQhLgLg6gDQhDgEg6AIQg1AGg8APQg9APhDAUQkWBppdEKQsVFmpjD/Ih9A0QwIGqtYENQwEFGtqCQIhTANQh7ATh1AAQv4AAnS1qg");
	this.shape_610.setTransform(755.4832,472.9094);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(0,0,0,0.996)").s().p("EiAPBQ9IgFgPUgGwgUXABQgksIAAgCQAivOB5wyIAFguQBruoChuHIARhhQCPsSCapeIAkiJQCFnvBsjmQAfhFBFg8QDUi+RAkJICkgnQQsj6aakeICigcQWUjvWFjAICggVQSgifFhgQQBXgEBGABQH7ABJmBhICiAbQJOBnJCCqICbAwQIoCrGbDGQBLAkBFAkQFrC+CdCyQA2A9AhBKQChFZjzOfQgPA5gfBtQgmCBiAGmQgZBSgVBKQglCFADAmQAWBQAyAPQGcByGBD2QBEAsBDAvQFpEAE+FrQA2A9AzBAQEsFwDuG6QAmBIAlBJQDfG/CPHiQAYBOAVBOQCCHoAnHjQAHBSAEBRQAYHphKG/QgOBRgQBPQhfHFjFF4QglBJgqBFQjiF9lJEVQg9A0hHAvQpOGL5/AIIilAAUgWegAJggngEWIihgXQkLgmj5gwIiRgeQixgmhbgSQhLgPgzgIQhMgLg6gCQhBgBg7AMQg1AKg6ATQg8AUhAAYQk1CLouD/Qr5Fmp+EMIh+A0Qv7GmtoEGQv+E3t4B9IhUALQhkALhgAAQwRABnb2Bg");
	this.shape_611.setTransform(755.2695,472.6428);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("rgba(0,0,0,0.996)").s().p("EiAQBQhIgFgPUgGzgUbABSgknIAAgBQAivOB7wxIAFguQBsupCjuGIAShhQCQsSCdpdQAShHAShCQCIn0BujfQAehABSg8QD2i7QjkAICjgmQQvj6aXkdICigbQWTjvWGi/ICfgWQSzigFNgMQBVgDBKABQH7ADJmBjIChAbQJOBpJBCsQBPAXBMAZQIpCtGZDHQBLAlBFAkQFtDDCUC1QAzA9AfBQQCPFmj0OTQgNAygjB1IilImQgaBTgUBIQgmCOAKAbQApA8A7ASQGaB2GAD5QBEAtBCAwQFnEDE8FtQA1A9AzBAQEqFxDrG8QAnBIAkBKQDcG/COHjQAXBOAVBOQCAHpAkHjQAHBSADBRQAVHphNG/QgOBRgRBPQhiHDjIF3QgnBIgqBFQjlF6lNETQg+AzhIAuQpdF/51AEIilAAUgWggAMggkgEXQhRgLhQgMQkLgnj4gzIiQgfIkLg8QhKgPg1gIQhNgMg4ABQhAAAg8ARQg1ANg5AYIh4A0QlTCuoADzQrbFnqaEZIh/A0QvuGht5EAQv3EnuHBrIhUAIQhMAHhKAAQwtAAni2ag");
	this.shape_612.setTransform(755.0564,472.4053);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("rgba(0,0,0,0.996)").s().p("EiASBQGIgFgQUgG0gUgABTgkhIAAgBQAjvOB8wwIAFguQBuuoCkuGIAShhQCSsTCfpcIAliJQCLn4BwjYQAeg7Bdg8QEZi4QFj3ICjgmQQyj5aUkcICigbQWTjvWGi/ICegVQTGijE5gHQBTgCBPABQH7AHJlBkIChAcQJOBqJACtQBPAYBMAYQIoCvGYDJQBLAlBEAlQFvDGCNC5QAvA+AcBVQB9F0j0OGQgMAsglB9IimIkQgaBWgSBDQgoCYARARQA8AoBFAVQGYB6F9D9QBEAsBCAxQFlEFE6FwQA1A9AzBBQEnFzDpG9QAmBIAkBJQDaHACLHkQAXBPAVBOQB+HpAhHkQAGBSADBQQATHqhQG+QgPBRgSBPQhlHCjMF2QgnBIgqBEQjqF3lPEQQg/AyhKAtQprFz5rABIilgBUgWigAOggjgEYIiggXQkLgoj3g2IiOghQi5gshTgSQhHgQg3gJQhPgLg3ACQg+ADg+AUQg0ARg3AcIh1A9QlxDQnRDpQq/Fmq1EmIh/A1QviGcuKD6QvwEXuWBYIhUAHQgzADgyAAQxLAAnr20g");
	this.shape_613.setTransform(754.8677,472.2563);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("rgba(0,0,0,0.996)").s().p("EiAYBPaUgG2gUmABUgkbQAkvOB9wwQBwu/CrucQCctPCqqAQCmprCAjsQBzjWU2k+QRWkJcUkxQXkj+XWjJQVli6E2gDQI7gILJB3QKgBwKODHQKLDFHPDnQHmDyCdDeQDqFKkuRLQgYBWjAJ3QhfE3AiAIQHqB5HFExQGuEiFyG2QFkGmEPIMQELIDCfI0QChI5AlIyQAmJChiIIQhmIfjzG2QkCHPmRE9Qo+HE8ogCUgXQgACgiZgEpQljgwk+hIQkvhMhpgZQiognhcAHQhsAIh6BKQxGKjzPIMUghDAODgc7ACKQhEAGhCAAQxwAAnz3gg");
	this.shape_614.setTransform(754.6813,472.1569);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("rgba(0,0,0,0.996)").s().p("EhqBBmpQvLh/nE1FQgjhngfhtUgFygUJABOghwQAiuZByvxIAOh7QBjtJCPsuIAqjqQB4qICAoNQAoimApiYQBSkvBIjQQBLjZBPh6QBsiqNpjtQDXg5EFg+QOLjXVbjyQE7g4FSg5QRIi4RAicQGig8GZg3QHVg/FOgnQKfhQDhACQCCAACLAGQHVAUIkBeQCEAXCDAbQIfBsIKCiIAhALQGPB/E9CKQC6BRCxBRQBOAlBGAkQFnC/CWCwQBfB4AWDlQA1FqidJ+QgEAjglCGQgiCthaFRQhPEnAoAJQAoAKAmALQD1BDDZBzQDABmCtCLQBnBNBhBYQEQD2D1FDIAoA2QEnGUDnHvQDZHOCNH5QARA7APA9QB3HCAvHEQAMB0AHB2QAZGNgjF+QgRClgcCfQg9Fih2EvQhBCshUCeQiFD/ivDUQiUCziyCVQiHByjMBXQlGCQn4BNQn8BMrCAFQn+ADpXgiQxzhA2ujDQljgvlBhHIiwgrIjqg4QingnhfAFQg+AEhCAYQgyASg0AdQiBBGh8BGQhvA6htA8IjJBvQsdG9thFyQkfB7kbBtQ8KK25EB7QhKAGhHAAQhwAAhqgOg");
	this.shape_615.setTransform(754.2996,472.2779);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("rgba(0,0,0,0.996)").s().p("EhprBmoQvUhznJ1GQgjhngghtUgF1gULABOgh5QAhucBzv0IAOh7QBjtNCRswQAUh2AWh1QB5qKCBoPQApimApiYQBTkzBJjOQBKjSBch6QB6ioNgjpQDYg6EGg9QOQjXVejyQE8g4FSg5QRMi4REicQGmg9GWg2QHfg/FGgmQKThLDzAGQCDABCLAHQHYAXIjBiQCEAXCEAbQIjBxIHCmIAgALQGVCGEzCOQC0BSC6BOICWBGQFgC0CoClQBlBxAgDYQBbFTiAJaQABAhgfB+QgOCihHE/Qg/EYAuAKIBOAUQD8BFDNB4QC2BqCXCSQBcBPBUBZQDwD4DZFFIAkA2QEEGXDQHzQDEHRCBH9IAeB4QBtHCAtHJQALBzAHB4QAYGJghGGQgOCmgbCfQg5FnhwEuQg+CthPCfQiAEDioDXQiPC3isCaQiDB2jGBcQlACenwBZQnzBYrLAKQn+AGpbggQx1g921jCQljgvlEhGIiygpIjsg4QilglhhADQg/AChCAWQgzAQg0AcQiFA/h5BAQhzA1hrA5QhlA0hmA6QseHAtjF0QkgB8kcBvQ8QK85IB/QhPAHhNAAQhrAAhmgNg");
	this.shape_616.setTransform(753.9065,472.3654);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("rgba(0,0,0,0.996)").s().p("EhpUBmoQvehnnO1HQgjhngghuUgF6gUMABPgiDQAiufBzv4IAOh7QBktPCRs0IArjrQB5qNCCoQQApinAqiYQBUk1BLjMQBIjMBqh5QCIinNXjlQDZg6EGg9QOVjXVhjyQE+g4FSg5QRQi4RIicQGqg9GSg2QHphAE/gjQKHhIEFALQCDABCLAIQHcAcIiBkQCEAYCEAcQIoB1IDCqIAgALQGaCMEqCTQCuBUDDBLICXBCQFaCqC6CaQBpBpAsDKQCAE9hkI1QAHAfgYB3QAFCYg0EtQgvEIA1AMQAnAJAnAKQECBGDCB+QCsBtCACZQBRBQBIBbQDOD7C/FGIAeA3QDkGZC4H3QCuHTB2ICIAbB4QBlHBApHPQALByAHB6QAXGFgeGOQgOCngZCfQg1FshpEsQg7CvhMCgQh5EHihDZQiJC8inCeQh/B7jABgQk6CunoBjQnrBkrTAQQn+AJpggeQx2g629jAQljgvlHhFIizgpIjtg2QikglhkABQg/AChCATQg0APgzAZQiKA4h3A8Qh2AvhrA2QhlAxhnA7QsgHEtlF3QkgB9kdBvQ8VLD5NCDQhWAHhSAAQhlAAhhgKg");
	this.shape_617.setTransform(753.5234,472.456);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("rgba(0,0,0,0.996)").s().p("Eho9BmoQvohbnT1IQgjhnghhuUgF9gUOABPgiNQAiuhB0v8IAOh8QBktRCSs2IArjsQB6qQCDoRQAqioAqiYQBWk4BLjJQBHjGB3h5QCXimNOjhQDbg6EFg9QOajXVljxQE/g4FSg5QRUi5RLicQGvg9GPg1QHzhBE3ghQJ7hDEWAOQCEACCMAJQHfAgIgBnQCFAZCEAdQItB5H+CtIAhALQGeCTEiCYQCnBUDMBJICaA+QFTCgDLCOQBvBjA2C8QCmEmhHIRQANAdgSBvQAYCPghEbQgfD4A7AMQAoAJAmALQEJBGC2CEQCiBxBpCgQBHBRA8BdQCtD+CjFHIAaA2QDCGdChH6QCZHVBqIHIAYB5QBcHBAnHTQAKByAGB8QAWGAgbGWQgMCogXCfQgyFxhjEqQg3CxhICiQhzELiaDcQiEDAihChQh7CAi6BlQk0C8nhBvQnjBwrbAVQn+AMpkgcQx3g23FjAQljgulJhEIi2goQibgjhTgSQijgkhmgBQg/ABhCARQg1ANg0AWQiNAyh1A2Qh5ArhqAyQhlAvhpA8QshHItnF6QkhB9keBxQ8aLJ5SCHQhdAIhbAAQhdAAhagJg");
	this.shape_618.setTransform(753.1355,472.5229);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("rgba(0,0,0,0.996)").s().p("EhomBmoQvzhPnX1IQgkhoghhvUgGBgUPABPgiWQAiulB1v+IAOh9QBltVCTs4IArjtQB7qSCEoSQAqipAqiYQBYk7BMjHQBGi/CEh6QClijNGjeQDbg5EGg9QOfjXVnjyQFBg4FTg4QRXi5RPidQGzg9GNg0QH7hCEwgfQJwg/EoASQCEAECLAKQHkAjIeBpQCFAaCEAeQIyB+H7CwIAhAMQGjCZEYCdQCiBVDUBFICcA7QFNCWDdCDQBzBcBCCvQDLEOgrHuQATAagMBoQAsCEgPEJQgODoBBAOQAoAJAmAKQEQBHCqCJQCYB2BSCnQA8BTAwBdQCMEBCIFIIAWA3QCfGgCKH+QCEHXBeIMIAWB6QBSG/AkHYQAKByAGB9QAVF8gYGeQgLCqgWCfQgtF1hdEpQg0CyhECjQhtEPiTDfQh+DFibClQh4CEi0BrQkuDKnYB7QnbB6rkAbQn+AQpogaQx5gz3Ni/QligulNhCIi3goIjvg0QiigjhogDQhAAAhCAPQg1ALg0AUQiSArhzAxQh8AlhpAwQhmAshqA9QsiHLtpF9QkhB/kgBxQ8fLP5WCMQhkAIhgAAQhYAAhUgHg");
	this.shape_619.setTransform(752.7614,472.5697);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("rgba(0,0,0,0.996)").s().p("EhoPBmpQv9hEnc1JQgkhogihvUgGEgURABPgifQAiuoB2wCIAOh9QBltXCUs7IArjuQB8qVCFoTQAriqAqiXQBZk+BOjFQBEi5CSh5QCziiM9jaQDcg6EHg8QOjjXVrjyQFCg4FTg4QRbi5RSidQG4g9GKg0QIFhDEogdQJjg7E6AWQCFAFCMALQHnAnIdBtQCFAaCEAfQI3CDH3CzIAgAMQGoCfEQCiQCbBWDeBDICdA3QFHCMDuB4QB5BUBMChQDxD4gOHJQAZAYgHBhQBBB6ADD3QACDYBHAPIBOATQEXBICfCPQCNB5A8CuQAxBUAkBfQBrEEBsFJIARA3QB+GjBzICQBuHZBTIQIATB8QBJG+AiHdQAJBxAGCAQATF3gVGmQgKCrgTCfQgqF6hXEnQgwC0hACkQhnETiMDiQh5DJiVCpQh1CJitBvQkoDZnRCGQnSCHrtAgQn9ATptgYQx6gv3Vi/QligulPhBIi5gmQiYghhZgSQiggjhrgEQhAgBhCANQg2AIg0ASQiWAkhxAtQh/AfhoAtQhmAqhrA9QskHPtrGAQkiB/khBzQ8kLV5aCQQhtAJhpAAQhPAAhNgFg");
	this.shape_620.setTransform(752.3635,472.5956);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("rgba(0,0,0,0.996)").s().p("Ehn4BmpQwHg4ng1JQgmhpghhvUgGJgUTABQgipQAiuqB2wGIAPh9QBmtaCUs+IAsjuQB9qYCFoUQAsirAqiXQBblBBOjDQBEiyCeh5QDCihM0jWQDdg5EHg9QOojXVujxQFEg4FTg5QRei5RXicQG8g+GHgzQIOhEEhgbQJXg3FMAaQCFAHCMAMQHrAqIbBvQCGAcCEAfQI8CIHzC2IAgAMQGtCmEHCmQCVBYDmBAQBPAbBRAYQFACCEABtQB+BNBXCUQEWDhAPGkQAeAWAABZQBUBwAWDlQASDJBOAPIBOATQEdBKCTCTQCDB+AlC1QAnBVAYBhQBKEGBRFKIAMA4QBcGmBcIGQBZHbBGIVIARB8QBAG9AfHiQAJBxAFCBQATF0gTGuQgICrgSCfQgmGAhQElQgtC1g8CmQhhEXiFDlQhzDMiQCuQhxCOinB0QkiDmnJCTQnKCRr1AmQn9AXpygXQx7gr3di/QligtlSg/Ii6gmIjzgyQifgihsgGQhBgChCALQg2AGg1AQQibAdhuAoQiCAahnAqQhnAnhsA+QsmHSttGDQkiCBkiB0Q8pLb5fCTQh2ALhyAAQhHAAhEgEg");
	this.shape_621.setTransform(751.9853,472.6082);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("rgba(0,0,0,0.996)").s().p("EhniBmpQwQgsnm1JQglhpgihwUgGMgUUABQgizQAiutB3wJIAOh+QBmtdCWtBIAsjuQB9qbCHoVQAsirAqiXQBdlFBPjAQBDirCrh6QDQifMrjSQDfg5EHg9QOsjXVyjxQFFg4FTg5QRii5RbicQHAg/GFgyQIXhEEZgZQJMgzFdAeQCGAHCMANQHuAvIaBxQCGAdCFAgQJACMHvC6IAhAMQGxCsD+CrQCPBZDvA9QBQAZBRAXQE6B3ESBiQCDBGBjCGQE7DLArGAQAkAUAGBRQBoBmAoDTQAjC5BUARQAoAIAlAKQElBLCICZQB4CBAPC8QAcBXALBiQApEJA2FLIAIA5QA6GoBEIKQBDHdA7IZIAPB9QA3G8AcHoQAIBwAFCDQASFvgQG3QgHCsgQCfQgiGFhKEjQgqC3g4CnQhbEbh+DnQhtDRiLCyQhtCTihB4QkcD2nACdQnDCer9ArQn9Aap2gVQx8go3li9QligtlVg+Ii8glIj0gyQidghhvgIQhBgDhDAJQg3AFg0ANQigAWhrAjQiGAVhmAnQhnAkhuBAQsmHVtvGGQkjCBkkB1Q8uLi5jCXQiBAMh8AAQg9AAg7gDg");
	this.shape_622.setTransform(751.6167,472.6182);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("rgba(0,0,0,0.996)").s().p("EhnLBmqQwaggnq1LQgmhpgjhwUgGQgUWABRgi8QAiuwB3wNIAPh+QBntgCWtDIAsjvQB/qdCHoWQAsitAriXQBelHBRi+QBBilC5h6QDeidMijPQDgg5EHg8QOxjXV1jxQFHg4FTg5QRmi5ReicQHFg/GCgyQIghFESgXQJAgvFvAjQCGAICNAOQHxAyIZB1QCGAdCFAhQJFCQHrC9IAhANQG2CzD1CvQCIBbD5A5QBQAYBTAVQEzBtEkBXQCHA+BuB5QFhC0BHFcQArARAMBKQB8BcA6DBQAzCpBaASQAoAIAmAKQErBMB8CeQBuCGgIDDQASBXgBBkQAHEMAbFMIAEA5QAYGrAtIOQAuHfAvIeIAMB9QAuG8AaHtQAHBvAFCFQAQFrgNG/QgGCtgOCfQgeGKhEEhQgmC5g0CoQhVEfh3DqQhoDViFC2QhqCYiaB9QkWEEm5CpQm6CpsGAxQn9Adp6gTQx9gl3ti8QligtlYg9Ii+gkIj1gwQicgghxgKQhBgEhDAGQg3ADg1ALQikAQhpAeQiJAPhlAkQhoAihvBAQsoHZtxGJQkjCCklB2Q8zLo5oCbQiNAOiIAAQgxAAgwgCg");
	this.shape_623.setTransform(751.2371,472.606);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("rgba(0,0,0,0.996)").s().p("Ehm0BmrQwlgVnv1LQgmhpgjhxUgGUgUXABRgjGQAjuzB4wQIAOh+QBotjCXtGIAsjwQB/qgCJoXQAtiuAriWQBflLBRi7QBBifDGh5QDsicMZjLQDig5EHg8QO2jXV4jxQFIg5FTg3QRqi6RiicQHJhAF/gxQIqhGEKgUQI0grGBAmQCHAKCNAPQH1A2IXB3QCGAeCFAiQJKCVHnDAIAhANQG7C5DsC0QCCBcECA3QBQAWBVATQEsBiE2BMQCNA3B5BsQGFCdBlE3QAwAQASBCQCPBSBOCvQBDCZBgATQAoAIAmAKQEyBMBwCkQBkCKgfDKQAHBZgNBkQgZEPgBFOIgBA5QgJGuAVISQAZHiAjIiIAKB+QAlG8AXHxQAGBuAFCIQAPFmgKHGQgFCvgMCfQgaGPg+EfQgjC6gwCqQhPEihwDuQhiDaiAC5QhlCdiVCCQkQESmwC1QmzC0sOA3Qn8AgqAgRQx+gh30i8Qligslbg8Ii/gjIj3gvQibgghzgLQhCgGhCAFQg4ABg1AIQipAJhoAZQiKAJhlAiQhoAfhwBCQsqHctzGMQkjCDkmB3Q85Lu5sCfQidAQiYAAIhCgBg");
	this.shape_624.setTransform(750.8571,472.6137);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("rgba(0,0,0,0.996)").s().p("EhnHBmsQwvgJnz1MQgnhpgkhxUgGXgUZABRgjPQAju2B4wUIAPh/QBotlCYtJIAtjwQCAqjCJoYQAtivAsiWQBglOBTi5QA/iYDUh5QD6iaMQjIQDjg5EIg7QO6jXV7jxQFKg5FTg4QRui6RlicQHOhAF8gwQI0hHECgSQIognGTAqQCHALCNAQQH5A6IWB6QCGAfCFAiQJPCaHjDDIAhAOQG/C/DkC5QB8BdEKA0QBRAUBWARQEmBYFIBBQCRAwCEBeQGrCGCBETQA3AOAXA6QCkBIBgCdQBTCKBnATQAoAJAlAJQE5BOBlCpQBZCOg1DRQgEBagZBmQg7ESgbFPIgGA5QgrGxgCIVQADHkAYInIAHB/QAcG7AUH2QAGBuAECJQAOFjgHHOQgECvgKCgQgWGTg3EeQggC8gsCrQhJEmhpDxQhdDdh6C+QhiChiOCHQkKEgmpDBQmqDAsXA8Qn8AjqEgPQx/gd38i8Qligrleg7IjBgiIj4guQiZgfh2gNQhCgHhCADQg5gBg1AGQitAChmAUQiNAEhkAeQhpAdhxBDQsrHgt1GOQkkCEknB5Q8+L05wCjQivARinAAIgjAAg");
	this.shape_625.setTransform(754.6966,472.5889);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("rgba(0,0,0,0.996)").s().p("EiBLBRjQgnhpgkhyUgGbgUaABRgjZQAju5B5wYIAPh/QBotoCZtLQAWh6AXh3QCBqmCLoZQAtivAsiWQBilRBTi3QA+iRDhh6QEJiYMHjEQDkg5EIg7QO/jXV+jxQFLg5FUg4QRyi6RpicQHShAF5gwQI9hHD7gRQIcgiGlAuQCHALCOARQH8A/IUB8QCGAgCGAjQJTCeHgDHIAhAOQHEDFDbC+QB1BeEUAxQBRASBXAQQEgBOFZA1QCXApCPBQQHRBwCdDvQA8ALAeAzQC3A+BzCLQBjB6BtAVQAoAIAlAJQFBBPBZCvQBOCRhLDYQgPBbglBoQhcEVg3FQIgKA5QhNG0gaIZQgSHmANIrIAECAQATG7ASH7IAJD4QANFegEHXQgDCwgJCgQgRGYgyEcQgcC9goCtQhDEqhiDzQhXDih1DCQheCmiJCLQkDEwmhDLQmiDMsfBCQn8AmqIgNQyBga4Ei6Qligrlhg6IjCghIj5guQiYgeh5gPQhCgHhCAAQg6gCg1ADQiygFhiAPQiSgBhiAbQhqAahyBEQssHkt3GRQklCFkpB5Q9DL750CnQjBATi5AAIgEAAQw2AAn31Jg");
	this.shape_626.setTransform(764.8514,472.5656);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("rgba(0,0,0,0.996)").s().p("EiCuBRwQgohqgkhyUgGfgUcABSgjjQAju8B6wbIAPh/QBptrCZtOIAujyQCBqoCMoaQAuiwAsiWQBjlUBVi1QA9iKDuh6QEXiXL+jAQDlg4EIg8QPEjXWBjxQFNg5FUg3QR1i6RticQHXhBF2gvQJGhID0gPQIQgeG3AyQCHANCOASQIABCITB+QCGAhCGAkQJYCjHcDKIAhAOQHJDMDSDCQBvBgEcAuQBRARBaANQEZBEFrAqQCcAiCaBDQH2BZC6DKQBCAJAkArQDLA0CFB6QBzBqB0AVQAoAIAlAKQFHBPBNC0QBFCWhjDfQgZBcgyBpQh8EYhSFRIgPA6QhvG3gxIdQgnHoAAIwIACCAQAKG6APIAIAID6QAMFagBHeQgCCxgHCgQgNGegrEZQgZDAglCuQg8EthbD3QhSDmhvDFQhbCsiCCQQj9E9mZDYQmaDXsoBHQn8AqqMgMQyCgW4Mi6Qligqlkg4IjEghIj6gtQiXgdh6gRQhDgIhCgCQg6gEg1ABQi2gMhhAKQiVgHhiAZQhqAXhzBFQsuHnt5GVQklCFkqB7Q9IMA55CrQjBAUi6ACIgYAAQwwAAn409g");
	this.shape_627.setTransform(775.1784,472.534);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("rgba(0,0,0,0.996)").s().p("EiESBR8QgohqglhzUgGjgUdABTgjsQAju/B6wfIAPh/QBqtuCatRIAujyQCCqrCNobQAuixAsiWQBllXBWiyQA7iFD8h5QEliVL2i9QDlg4EJg7QPJjXWEjxQFOg5FVg4QR5i6RwicQHbhBF0guQJPhJDsgNQIEgaHJA2QCIAOCOATQIDBGISCBQCGAiCHAlQJcCnHZDNIAgAPQHODSDJDHQBpBgElAsQBSAPBbAMQETA5F8AfQChAbClA1QIbBCDXCmQBIAHAqAkQDfAqCXBnQCEBaB6AXQAoAIAlAJQFOBRBBC5QA6Cah5DmQgjBdg+BrQieEahtFTIgUA6QiQG5hJIhQg8HrgLI0IgBCBQABG5AMIGIAHD7QALFVACHnQgBCygFCgQgJGiglEYQgWDBggCvQg3EyhUD5QhMDqhpDKQhYCwh8CVQj3FMmRDjQmRDjsxBMQn7AtqSgJQyDgT4Ui5Qlhgqlng3IjFggIj8gsQiWgch9gTQhCgJhDgEQg6gGg2gCQi6gSheAFQiYgMhhAVQhrAVh0BGQswHrt7GXQklCGkrB8Q9OMH59CvQjBAUi7AEIgqABQwtAAn40zg");
	this.shape_628.setTransform(785.6361,472.4919);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("rgba(0,0,0,0.996)").s().p("EiF4BSIQgphqgkhzUgGngUfABTgj2QAjvCB7whIAPiAQBqtyCbtTIAujzQCDqtCOodQAvixAsiWQBnlaBWiwQA7h+EIh6QE0iTLti4QDmg5EKg7QPNjXWHjxQFQg5FVg3QR8i6R1idQHfhBFxguQJYhJDlgLQH4gWHbA6QCIAPCOAUQIHBKIQCEQCHAiCHAmQJhCsHVDRIAgAOQHTDZDADMQBjBhEuAoQBRAOBdAKQENAvGOAUQCmATCwAoQJBArDzCDQBNAEAwAcQDzAgCqBVQCUBLCAAXQAoAIAlAJQFVBSA2C/QAwCdiQDtQguBghKBrQi/EdiJFUIgYA7QiyG8hgIlQhSHtgXI4IgDCCQgIG4AJILIAHD8QAJFRAFHvQABCzgECgQgFGngfEXQgSDCgdCxQgwE1hND9QhHDuhjDOQhUC0h2CaQjxFamJDvQmJDus5BTQn8AwqVgIQyFgP4ci5Qlhgplqg2IjHgfQiKgWhzgVQiUgbh/gVQhEgKhCgGQg7gIg1gEQi/gZhcAAQicgShgATQhrASh1BHQsxHut9GaQkmCIksB9Q9TMM6BC0QjCAUi8AGIg9ABQwpAAn40og");
	this.shape_629.setTransform(796.2261,472.4406);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("rgba(0,0,0,0.996)").s().p("EiHeBSUQgphrgmhzUgGqgUhABTgj/QAjvEB8wmIAPiAQBrt0CctWIAujzQCEqwCPoeQAvizAsiVQBpldBXiuQA5h3EWh6QFCiSLki1QDog4EKg7QPSjXWKjwQFRg6FVg3QSBi7R3icQHlhBFugtQJhhLDdgIQHsgSHtA+QCJAQCOAVQILBNIOCHQCHAjCHAnQJmCwHRDUIAgAPQHYDgC4DQQBcBiE3AmQBSAMBeAIQEGAlGgAIQCrANC7AaQJmAUEQBeQBUACA1AVQEHAWC8BDQClA7CGAYQAoAIAlAJQFcBTAqDEQAlCiimD0Qg5BghWBtQjgEgikFVIgdA7QjUG/h3IpQhnHvgiI9IgHCCQgRG4AHIRIAGD8QAIFNAIH3QACC0gCCgQgBGsgZEVQgPDEgYCyQgqE5hHEAQhBDyheDSQhQC5hwCfQjrFomBD7QmBD6tCBXQn7A0qagGQyGgM4ji4Qlhgpltg0IjJgeQiIgWh2gUIkVgxQhDgLhDgJQg7gKg1gGQjEgfhagGQiegXhfAQQhsAQh2BHQszHyt/GdQknCIktB/Q9YMT6FC3QjCAVi+AIQgoACgnAAQwlAAn40eg");
	this.shape_630.setTransform(806.893,472.4112);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("rgba(0,0,0,0.996)").s().p("EiJGBShQgphrgmh0UgGugUiABTgkJQAkvHB8wpIAPiBQBrt3CdtYIAuj0QCFqzCQofQAvi0AtiVQBqlgBZirQA4hxEjh6QFQiQLbixQDpg4EKg7QPXjXWNjwQFTg6FVg3QSEi7R8icQHphCFrgsQJrhMDVgGQHggOH/BDQCJAQCPAWQIOBSINCJQCHAkCHAoQJrC0HNDYIAgAPQHcDmCwDVQBVBkFAAiQBTAKBfAHQEAAaGygCQCvAFDHAMQKLgCEsA6QBaAAA8ANQEaAMDPAxQC1ArCMAaQApAHAkAJQFjBUAfDKQAbCli9D7QhEBihiBuQkCEji/FWIghA7Qj1HCiPItQh9HxguJBIgJCDQgZG4AEIWIAED9IASNIQADC1AACgQADGxgTETQgLDGgVCzQgjE9hAECQg7D3hZDWQhMC+hqCjQjlF4l5EFQl5EGtKBdQn7A3qfgEQyHgJ4ri2QlhgplwgzIjKgeQiHgUh5gUIkVgzIiHgXQg7gLg1gJQjJgmhYgKQihgdhfANQhsANh3BJQs0H1uBGgQkoCJkuB/Q9dMa6KC7QjCAVi/ALQgxACgwAAQwhAAn50Tg");
	this.shape_631.setTransform(817.6649,472.3385);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("rgba(0,0,0,0.996)").s().p("EiKuBStQgqhrgmh0UgGxgUkABTgkSQAkvLB9wsIAPiBQBrt6CftbQAWh9AYh4QCFq1CRogQAwi1AtiUQBslkBZipQA3hqEwh6QFfiOLSiuQDqg4EKg6QPcjXWRjxQFUg5FVg3QSIi7R/icQHthDFqgrQJzhNDOgEQHUgKIQBHQCKASCPAXQISBVILCMQCIAlCHAoQJwC5HJDbIAgAQQHhDsCmDZQBQBlFJAgQBSAJBiAEQD5AQHEgNIGGgDQKxgZFIAVQBggCBCAFQEuACDhAfQDFAcCTAaQAoAIAkAIQFqBVATDPQARCqjUECQhOBjhvBwQkiEljaFXIgmA8QkXHFimIxQiSHzg6JGQgGBAgFBDQgjG3ABIbQABBqADCVQAGFEANIHQAFC2ACChQAGG2gMERQgIDHgRC1QgeFBg4EFQg2D7hTDaQhJDDhjCoQjfGFlxESQlxERtTBiQn6A7qjgDQyJgF4zi2QlhgolygyIjMgcQiGgUh8gUQiQgZiGgbIiGgaIhygYQjNgthWgPQilgihdAKQhsAKh5BKQs1H4uDGjQkoCKkwCBQ9iMf6PC/QjCAWjAANQg6AEg5AAQwdAAn60Kg");
	this.shape_632.setTransform(828.4888,472.2514);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("rgba(0,0,0,0.996)").s().p("EiNnBPaUgG2gUmABUgkbQAkvOB9wwQBwu/CrucQCctPCqqAQCmprCAjsQBzjWU2k+QRWkJcUkxQXkj+XWjJQVli6E2gDQI7gILJB3QKgBwKODHQKLDFHPDnQHmDyCdDeQBbCAH2ANQFUAIMLgzQOkg9FEgIQKmgRFLBNQFwBWAIDVQAJDvnBGdQlfFCkEF6QpQNeiTTeQg6HngBJ0QgBFFAZMKQAVKxgIFxQgNIwhNGcQhcHljEFsQjZGUlpEdQo+HE8ogCUgXQgACgiZgEpQljgwk9hIQkvhMhpgZQiognhcAHQhtAIh6BKQxGKjzPIMUghDAODgc7ACKQhEAGhCAAQxwAAnz3gg");
	this.shape_633.setTransform(839.3573,472.1569);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("rgba(0,0,0,0.996)").s().p("Eh4SBmpQvSh2nI1GQgjhngghuUgF0gUKABOgh3QAhubBzvzIAOh7QBjtMCQswIAqjqQB5qLCBoOQAoimApiXQBTkzBKjPQBKjTBYh5QB2ipNkjqQDXg6EEg9QOQjYVfjyQE7g3FQg5QRNi4RFidQGig7GWg3QHfhAFKgmQKShLDtAEQCGABCNAGQHVAYIhBgQCGAXCGAcQIfBvIGClIAmAMQGTCEE1COQCzBQC2BOQBQAlBJAjQFfC3CiCmQBPBXEhAbQBnAIB/ADQFkADKXgpIBkgGQIQgfFJgKQD2gLCjADICIAAQIFAEEoA7QAhAHAfAHQFsBXAXDMQAnDEkeEvQhGBJhVBQQj2DijSDxQhcBqhVBsQiACihxCtQh2C2hnDEQhOCehLCnQg7B8goCFQgcBHgTBOQg9D3goEJQhLHpgNJyQgFC7AEE7QACEEAJFZIAKHBQAGFogEEDQgDDIgLC5QgUFJgtEIQglDWg2C7QhHD4hnDTQhgDFh/CpQiNC8izCdQiCBzjFBaQlBCcn0BVQn2BWrLAIQn9AFpYggQx1g922jDQljgvlChHIiugpIjvg4QilgmhhAEQg+ADhBAWQg0AQg1AdQiDBAh5BCQhxA2hsA6QhkA1hnA5QsfG/tjF1QkfB7kaBtQ8QK75IB/QhPAGhMAAQhqAAhmgMg");
	this.shape_634.setTransform(847.0285,472.3498);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("rgba(0,0,0,0.996)").s().p("Eh5ABmpQvkhinQ1IQgkhngghuUgF7gUNABPgiHQAiugBzv6IAPh7QBjtRCSs1IArjrQB6qPCCoRQApimAqiYQBWk4BLjLQBHjHBvh5QCPinNVjjQDZg6EEg9QOZjXVkjzQE9g3FRg4QRTi5RMidQGqg8GQg1QHwhBE9gjQJ9hFEMAMQCGACCNAJQHcAdIeBlQCHAZCGAdQIoB3H+CqIAmANQGcCPEmCWQCpBSDEBKICdBCQFTClDBCUQBaBMEaAXQBpAHB9ABQGLgCJxglIBkgGQIYgdFGgCQDogHC3AJICIADQIFANErA/IBBAPQFoBZAmDCQBGDHkYErQhGBLhVBOQj4DljcDnQhgBlhbBlQiICYh9CdQiBClh3CsQhVCNheCRQhMBrgrB3QgmA/gUBMQhHD0gwEIQhdHqgYJxQgKDBABE4QgCEFAHFZIAHHFQAGFagCEXQgDDHgJC+QgRFMgoEJQggDagxC5QhBD8hfDVQhZDKh2CtQiEDEioCiQh9B8i6BiQk3C0nmBqQnoBpraASQn8ALpggdQx3g43EjBQligulHhFIiygoIjwg2QikgkhkAAQg+ABhBASQg1AOg2AYQiLA1h0A5Qh3AthrA1QhlAwhoA7QsiHGtnF5QkfB9kdBvQ8YLG5QCGQhZAHhWAAQhhAAhdgJg");
	this.shape_635.setTransform(854.9265,472.4996);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("rgba(0,0,0,0.996)").s().p("Eh5wBmpQv1hNnZ1JQgkhoghhvUgGCgUPABQgiYIAAAAQAiulB1wAIAOh8QBltWCTs5IArjsQB7qUCFoSQAqipApiWQBZk+BNjHQBFi8CGh5QCnikNGjdQDbg5EFg9QOgjYVqjyQFAg3FRg4QRai6RRicQGyg9GMg0QIAhDEvgfQJpg9EqASQCHAECOALQHiAkIbBpQCIAbCHAeQIvB/H4CwIAmANQGkCaEXCeQCeBVDTBEIChA8QFICTDfCBQBlBCEUATQBrAGB7AAQGxgHJLgiIBlgFQIfgbFEAGQDYgEDLAQQBFACBFADQIEAXEvBDIBBAQQFkBaA1C5QBlDKkSEmQhHBNhUBOQj5DnjmDcIjGC/QiQCNiJCNQiMCUiHCVQhcB7hxB8QhcBagvBpQgwA4gVBIQhQDyg5EGQhuHsgkJwQgODHgEEzQgFEJAEFYIAGHIQAFFOAAEqQgCDGgIDCQgNFPgkEKQgcDdgsC4Qg6EAhXDYQhSDPhtCwQh6DLifCpQh2CEiwBqQktDNnXB+QnbB9rpAcQn7AQpngaQx6gx3RjAQljgulMhCIi0gnQibgihYgSQihgkhogCQg/gBhBAPQg2AKg2AUQiSAphxAxQh9AjhpAwQhmAshqA9QskHMtqF+QkhB+keBxQ8iLR5XCMQhnAJhjAAQhUAAhRgGg");
	this.shape_636.setTransform(863.0305,472.57);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("rgba(0,0,0,0.996)").s().p("Eh6iBmpQwHg5ng1JQglhpgihvUgGIgUSABQgioIAAgBQAiuqB2wGIAOh8QBntbCUs+IArjtQB9qYCGoUQAriqAqiXQBblCBPjDQBDiyCdh5QC/ihM3jWQDdg5EFg9QOpjYVvjxQFDg4FRg4QRgi6RYicQG5g+GIgzQIPhEEjgbQJVg3FIAaQCIAGCOAMQHoArIZBuQCIAcCHAgQI4CGHyC1IAlAPQGsCkEICmQCTBXDjBAQBRAbBSAaQE+CCD+BtQBvA5ENAPQBtAEB6gBQHYgMIlgeIBlgFQImgZFBAPQDKgBDeAWICMAIQIDAgEzBIIBCAQQFfBcBECwQCEDMkMEiQhIBOhTBNQj6DqjwDSQhpBchnBXQiZCDiVB8QiXCDiXB/QhjBpiEBmQhsBKgzBbQg6AvgXBGQhZDwhAEEQiBHugvJuQgTDOgHEtQgJENADFXQAADuADDeQAFFBABE9QgBDFgGDHQgKFRgfELQgZDhgnC3Qg0EDhODbQhLDUhkC0QhxDRiVCxQhwCMilBxQkiDnnKCRQnMCRr4AmQn7AWpvgXQx8gs3ei+QljgtlRhAIi2glIj2gzQifgihsgGQhAgChBALQg3AHg2AQQiZAdhuAoQiCAahnArQhnAnhsA/QsnHStuGDQkhCAkhBzQ8qLb5fCTQh3ALh0AAQhEAAhCgEg");
	this.shape_637.setTransform(871.3,472.6063);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("rgba(0,0,0,0.996)").s().p("Eh7VBmqQwYgkno1LQgmhpgjhwUgGOgUVABQgi4IAAgBQAjuvB3wMIAOh9QBntfCWtDQAVh4AXh2QB+qdCIoWQArisAriWQBdlIBRi/QBBimCzh5QDZieMnjQQDfg5EGg8QOxjYV0jxQFFg5FSg3QRni6ReicQHBg/GCgyQIghFEWgYQJAgvFnAgQCJAICPAOQHuAxIWBzQCIAdCIAhQJACOHrC8IAlAOQG0CwD5CuQCJBZDxA7QBTAZBVAWQEzBwEbBaQB6AwEHALQBvACB5gCQH+gRH+gbIBmgFQItgWE/AXQC7ACDyAdICMAKQIEAqE2BMIBCAQQFaBeBUCmQCjDPkGEeQhIBPhTBOQj7Dsj6DHQhtBYhtBQQiiB4ihBsQiiByimBoQhsBXiWBQQh8A5g3BOQhDAogZBCQhiDuhJEDQiSHvg6JsQgYDVgLEoQgMEQgBFXQAADtACDiIAHKFQgBDEgDDLQgIFUgaEMQgUDkgiC3QgtEFhHDfQhDDYhcC4QhoDYiKC4QhqCUibB6QkYD/m8ClQm+ClsGAvQn7Acp3gUQx+gl3si+QligslXg+Ii5gjIj3gyQidgghwgJQhAgEhBAHQg5AEg2AMQihAShqAfQiHARhmAlQhnAjhuBAQspHYtyGJQkiCBkjB1Q8zLm5mCaQiNANiHAAQgwAAgwgCg");
	this.shape_638.setTransform(879.6993,472.6261);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("rgba(0,0,0,0.996)").s().p("Eh8JBmrQwpgQnx1LQgnhpgjhxUgGVgUYABRgjJIAAAAQAju1B4wRIAPh+QBntlCYtHIAsjvQCAqhCJoYQAsitAriWQBhlNBSi7QA/ibDKh6QDxibMYjKQDhg4EGg8QO5jYV6jxQFIg4FSg4QRti6RlicQHIg/F9gxQIxhHEIgUQIsgpGGAoQCJAKCPAPQH0A4IUB3QCJAfCIAjQJICWHkDAIAmAQQG9C7DpC2QB+BbEBA1QBSAWBYATQEoBfE6BHQCFAmEBAGQBwABB3gDQIlgWHZgXIBlgFQI1gUE8AfQCsAGEHAjICNANQIDAzE5BQIBDASQFWBeBjCeQDCDRkAEaQhIBQhSBNQj+DvkDC9QhyBThzBJQiqBuitBcQitBgi3BRQhyBGioA6QiOApg7BAQhMAfgaBAQhsDrhREBQijHyhHJqQgcDbgOEkQgQETgDFXQgCDrACDmIAHKMQABDDgCDQQgFFXgUEMQgRDogdC2QgnEIg/DjQg7DchTC8QhfDfiAC+QhkCciQCCQkNEYmvC5QmwC6sVA4Qn7Ahp+gQQyAgg36i7Qlhgslcg8Ii8giIj6gwQiagfh1gMQhAgFhBADQg5ABg2AHQiqAGhlAXQiNAIhkAgQhpAehwBDQssHet1GNQkiCDkmB3Q87Lw5uChQihAQibAAIg6gBg");
	this.shape_639.setTransform(888.1818,472.5837);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("rgba(0,0,0,0.996)").s().p("EiVyBRlQgnhqgkhxUgGbgUbABRgjZIAAgBQAju5B5wYIAPh+QBotqCZtLIAtjwQCBqmCLobQAtiuAsiWQBjlSBTi3QA+iQDhh5QEKiZMIjDQDjg5EHg7QPAjXWAjyQFKg4FSg4QR0i6RricQHQhAF5gvQJAhID8gRQIXgiGlAvQCJALCQARQH6A/ISB7QCJAhCIAkQJQCeHeDGIAmAQQHFDGDaC+QBzBeEQAwQBTATBbAQQEdBNFYA0QCQAcD7ACQBygBB1gDIP+gwIBmgEQI7gSE7AnQCcAKEbApICOAQQIDA9E9BTIBDATQFRBgBzCUQDhDUj6EWQhJBRhRBNQj/DxkNCzQh2BOh5BDQizBji6BLQi3BPjHA7Qh6A0i6AkQieAYg/AyQhWAYgcA9Qh0DohaEAQi1HzhSJpQghDhgREgQgUEVgFFXQgDDqABDrQACEaAGF5QACDBgBDUQgBFagQENQgNDsgYC1QggELg3DmQg0DhhKDAQhWDmh2DEQheCliGCKQkCExmhDNQmiDNsjBCQn7AnqGgNQyCga4Hi6Qligslhg5Ii+ghIj8guQiYgdh5gQQhBgHhBAAQg6gDg2ADQixgFhiAOQiSgBhjAbQhqAahyBEQsuHkt4GSQkkCEknB6Q9EL752CnQjAAUi5AAIgHAAQw0AAn41Ig");
	this.shape_640.setTransform(896.7803,472.5493);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("rgba(0,0,0,0.996)").s().p("EiXBBR6QgphqgkhzUgGigUdABSgjqIAAAAQAju/B6wdIAQiAQBptuCatQIAtjxQCDqrCMocQAuiwAsiVQBmlYBVizQA8iED3h6QEjiVL5i+QDlg4EHg6QPJjYWFjxQFNg5FSg3QR6i7RyicQHYhAFzgvQJRhJDugNQIDgbHDA1QCLAOCQATQIABFIPCAQCKAiCIAlQJZCmHXDMIAlAQQHODSDLDGQBoBfEfArQBUARBeAMQESA7F2AhQCbATD0gCQB0gDB0gEQJyggGMgRIBmgEQJDgQE4AwQCOAMEvAwICPASQICBHFABYIBEATQFNBhCCCLQEADXj0ESQhJBShRBNQkBDzkWCpQh7BKh/A7Qi7BZjGA7QjCA+jXAjQiBAijNAPQivAHhCAlQhgAQgdA5Qh+DnhiD+QjGH1heJnQgmDogUEaQgYEZgHFWQgFDqAADuQACENAIGNIAEGZQABFdgLENQgIDwgTC0QgaEOgvDqQgtDlhBDDQhNDthsDMQhXCsh8CTQj4FJmTDhQmUDisyBLQn6AsqOgJQyEgU4Vi5Qlhgrlmg3IjBgfQiOgYhxgVQiWgch8gSQhBgJhBgEQg8gGg2gBQi5gRheAGQiYgLhhAWQhqAVh0BGQsxHqt8GXQkkCGkqB7Q9NMG59CuQjAAVi7ADIgmAAQwuABn401g");
	this.shape_641.setTransform(905.4562,472.4939);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("rgba(0,0,0,0.996)").s().p("EiYRBSPQgphrglhzUgGpgUgABTgj6IAAgBQAjvDB8wkIAPiAQBqtzCctUIAtjzQCEqvCPoeQAviyAsiUQBoldBXivQA6h6EOh5QE7iTLqi3QDng4EIg6QPQjYWLjxQFPg5FTg3QSBi7R3icQHghBFvgtQJhhLDhgJQHugUHiA8QCLAPCRAVQIGBMIMCEQCLAkCJAnQJgCtHRDSIAlARQHWDcC8DOQBdBiEvAmQBUANBhAKQEHApGUAOQCmAJDugGIDogKQKYglFngOIBmgDQJKgNE2A3QB+AQFDA2ICQAVQICBRFEBbIBEAUQFJBjCRCCQEfDZjuEOQhKBUhQBMQkCD1kgCfQh/BFiGA1QjDBNjSArQjNAtjnANQiIAQjggHQi/gJhHAWQhpAIgeA3QiHDkhrD9QjYH2hpJnQgqDtgZEWQgbEcgKFVQgGDpAAD0QABD/AJGgIAHGcQAFFggGEOQgFD0gOCzQgUESgmDsQgmDqg4DHQhDD0hjDSQhRC1hxCaQjuFjmED1QmHD1tBBVQn5AyqVgHQyHgN4ii4Qligqlrg1IjDgeIkBgrQiUgbiAgVQhCgLhBgHQg9gKg2gFQjAgchbgDQidgVhgASQhrARh2BHQszHwt/GcQkmCIkrB9Q9WMR6FC0QjBAVi8AIIhHABQwnAAn40ig");
	this.shape_642.setTransform(914.1909,472.4222);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("rgba(0,0,0,0.996)").s().p("EiZiBSkQgphrgmhzUgGvgUjABTgkKIAAgBQAkvJB8wqIAPiAQBrt4CetZIAuj0QCFqzCQogQAwizAsiVQBrliBZirQA3huElh6QFUiQLbiwQDog4EJg6QPZjYWQjxQFSg5FTg3QSHi7R+icQHnhCFqgsQJxhMDUgGQHagNIBBEQCLARCSAWQIMBSIKCKQCKAkCKApQJpC1HKDXIAlASQHeDnCsDWQBUBkE9AiQBVAKBjAGQD9AYGygFQCxgBDngKIDpgNQK/gqFAgKIBngDQJRgLEzA/IHGBQICSAYQIBBaFIBfIBEAVQFEBkCgB5QE/DcjpEKQhKBVhPBLQkDD5krCTQiDBBiLAuQjMBDjeAbQjYAbj3gKQiQgBjygdQjPgahLAJQhzAAggA0QiQDihzD7QjpH4h1JlQgvDzgcERQgfEggMFUQgIDoAAD5QAADyALGzIAJGgQAIFjgBEPQgBD3gJCyQgNEVgfDvQgdDvgwDLQg6D7hYDZQhMC9hmCiQjjF7l3EJQl4EJtQBfQn6A4qcgEQyJgI4wi2Qlhgplxg0IjGgcQiIgUh7gVIkWgyIiDgYIh0gVQjIgohXgMQiigeheAMQhtANh3BJQs2H2uDGiQkmCJkuB/Q9eMb6MC8QjCAVi+ALQg0ADgzAAQwfAAn60Rg");
	this.shape_643.setTransform(922.9777,472.2934);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQlBFzmRCzQlNCUmLASQjjAKkGghQiYgTkFgyQjfgrhPgFQh8gIgiAxQpPNeiUTeQg6HngBJ0QAAFFAYMKQAWKxgIFxQgNIwhOGcQhcHljEFsQjZGUlpEdQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_644.setTransform(931.8273,472.1569);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("rgba(0,0,0,0.996)").s().p("EiF2BmgQusiRm80gQgoh2gkh/UgFrgUFABNghfQAhuTBxvrIAQiNQBhs6CNsgQAXiIAZiGQBzptB7n9QAvjAAvitQBJkNBBi+QBUj4BliIQByiiMgjdQD0hDExhIQNwjPUdjpQFphAGGhBQQOiuQHiVQHlhGHSg+QGDgzEcgiQMFhcEIAIIB0ABQIXAOJ9BxIBnATQIxBqIVCkICEApQFABpECBvIIMDZIANAFQHUDdDHDHQAtAyB0AeQChAnETAFQElADH8gcIE/gSQFzgVENgJQFDgQDeACIBTgBQGrgBEiAgQCrATB8AfQCOAoHDBiQB6AiBiAkQEyBPDSBxQBrAsBaAwQFkCQBaDIQBdCiiPCwQhoCFhwBrQjZDVj4CCQjxCGkQAyQhaATheAJQjdAaj+gzIgMgCQiXggj5g+IkjhGQh1gOgjAkQkfFZizGiQhqEDhFEUQgTBFgQBSQgGAWgGAeQgZB6gUB/QhPHngPJyQgJECAIHxIAGFhQAJGBADEpQACDXgDCrQgGFEgbEgQgSDFgdCsQg3FOhkEOQgwCGg7B5QiOEmjSDpQhXBihkBYQi5CplDBzQlOCCnkBGQm4A/pMAKQpDAHq9gqQw3hB1LizQljgvlDhHIkvhHIhvgaQimgmhhAEQhvAFh5BCIgKAFQi2BYioBaQhxA2hrA4QhkAzhmA4QrwGgsrFdQlMCOlGB8Q7gKf4iB9QhPAGhNAAQiHAAh/gUg");
	this.shape_645.setTransform(928.9126,472.4373);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("rgba(0,0,0,0.996)").s().p("EiEzBmgQvAh6nF0iQgph2gliAUgFzgUIABOghyQAhuZBzvxIAQiPQBitACOskIAxkQQB1pyB8n/QAwjCAwitQBMkRBDi7QBRjrCAiHQCLifMSjXQD2hCExhIQN5jPUkjoQFshBGHhBQQViuQOiVQHwhHHMg9QGQg0ERgeQLshTEsAQIB2ADQIfAXJ6B3IBnAVQI6BzIOCqQBDAWBBAXQFGBzD2B3QD3BvEbBhIAOAFQHEDIDuCvQAyAtB0AaQCoAhEMADQFBgBHigZIFAgQQF4gTELgCQEvgMD5ALIBUABQGtAIEjAmQCrAVB8AiQCqA0GbBsQBxAsBNAsQEHBVCvCZQBdAzBNA5QE8CQBDDqQBPCniFCvQhjCKhpBvQjNDijpCOQjlCbkBA/QhYAbhbANQjdApj8hGIgMgDQiXgsjthLQjIg8hQggQhugVgiAZQkZEHiuE6QhmDNhEDKQgTAwgPBFQgHAOgHAeQgeB4gYB9QhlHpgdJwQgTENADHpQAACkACC+QAGF9ACEzQACDSgCC1QgFE/gWEqQgQDIgaCsQgxFVhaENQgsCIg2B8QiCEujCDvQhRBnheBcQiwC4kwCCQlCCdnYBbQmsBSpXAUQpCAPrJglQw6g71ZiyQljgulJhFQi3gqh8gaIhwgZQikgkhlABQhxACh6A3IgJAFQjDBIihBPQh3ArhqA0QhlAvhnA6QrzGmsvFiQlMCRlJB/Q7rKq4qCFQhbAIhXAAQh9AAh2gQg");
	this.shape_646.setTransform(926.0077,472.601);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("rgba(0,0,0,0.996)").s().p("EiDxBmhQvShjnQ0jQgqh3gmiAUgF6gUNABPgiEQAhufB0v4IARiPQBjtGCPsqIAykQQB2p4B/oBQAwjEAxisQBOkXBFi3QBPjdCciIQCjibMDjQQD5hDEyhGQOCjQUqjoQFwhBGHhBQQdiuQUiVQH8hIHEg7QGeg1EHgcQLShKFSAZIB2AFQInAgJ3B+IBnAVQJEB9IGCxQBDAXBBAYQFMB9DpB/QDmBxE0BYIAPAEQGyCyEXCYQA3AnByAXQCxAbEFACQFcgFHHgXIFBgPQF/gQEIAFQEagIEUAUIBWADQGvAQEjAsQCrAZB9AkQDGBBFzB2QBoA0A3A2QDeBaCKDAQBPA7BABCQEVCPAtENQA/Csh6CuQheCQhhByQjBDvjaCbQjaCvjzBMQhUAihYASQjeA4j6hZIgLgDQiYg5jhhXQi8hFhQgtQhngcgjAMQkTC1ipDTQhhCWhDCCQgTAagOA4QgHAGgJAdQgjB3gdB8Qh6HpgsJuQgbEZgDHhQgCCkAAC+IAFK4QABDMgBC/QgEE6gSE1QgODJgWCuQgrFchQELQgoCLgxB9Qh2E2iyD2QhMBrhXBhQimDHkdCQQk3C4nMBxQmfBlpkAeQpBAXrTghQw9g01oixQljgulOhBQi2goiBgbIhygYQiigihogCQhzgBh7AuIgKAEQjOA4ibBDQh8AihpAvQhmAqhqA8Qr1GtszFoQlNCSlMCCQ70K240CNQhoAJhmAAQhvAAhrgLg");
	this.shape_647.setTransform(923.109,472.7136);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("rgba(0,0,0,0.996)").s().p("EiCuBmiQvmhMnZ0kQgrh4gniBUgGBgUPABPgiXQAiulB1v/IAQiQQBktLCSswQAYiKAaiIQB4p9CAoCQAyjHAxisQBRkbBHi0QBMjPC3iHQC8iZL1jJQD7hDEzhGQOLjPUwjoQFzhBGIhBQQkivQbiVQIHhJG9g5QGsg2D8gYQK5hDF3AjIB3AHQIwApJzCEIBoAWQJMCGIAC4ICDAxQFSCHDdCHQDUBzFMBPIAQAEQGhCcFACAQA8AiBwATQC6AWD9AAQF4gIGsgVIFCgOQGGgNEFALQEFgDEvAcIBXAFQGxAaElAxQCqAdB+AlQDhBPFLB/QBfA8AjBBQCzBfBmDnQBBBDAzBLQDuCOAWEvQAxCxhxCtQhYCXhaB1Qi1D7jKCnQjPDFjkBZQhSAphVAXQjdBHj5htIgLgEIltioQiwhNhRg7QhfgjgkAAQkNBjikBrQhcBghBA5QgTAEgOAsQgIgDgKAcQgoB2giB7QiPHqg6JsQgkEkgJHYQgECngCC+QgBF1ACFIIABGQQgCE2gPFAQgLDKgTCvQgkFkhIEJQgjCNgrB/QhqE/ikD8QhFBwhRBlQicDVkLCeQkrDUm/CHQmUB4pwAoQo/AfrfgdQw/gu13ivQligtlUhAQi1gliHgbIhzgXQifghhtgFQh1gEh7AmIgKACQjbAoiVA3QiBAahnApQhnAmhsA+Qr4Gzs2FuQlPCUlPCEQ7+LD48CUQh5AMh1AAQhgAAhdgIg");
	this.shape_648.setTransform(920.2443,472.7569);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("rgba(0,0,0,0.996)").s().p("EiBsBmkQv6g1ni0lQgth5gniCUgGJgUSABQgiqQAiurB2wGIARiRQBltRCTs0IAzkUQB5qCCDoEQAyjJAyirQBTkhBJiwQBKjBDTiIQDViVLljDQD/hCEzhGQOUjPU2joQF3hBGIhBQQrivQiiVQIShKG2g4QG6g3DxgVQKfg5GeArIB3AJQI4AyJwCKIBoAYQJVCPH5C+ICEA0QFXCSDQCOQDEB1FkBFIARAEQGPCHFpBoQBBAcBuAQQDCAQD3gCQGTgMGRgSQChgHCigFQGMgLEDASQDwABFKAlIBZAHQGzAjElA3QCqAgB/AnQD9BcEjCIQBWBFANBKQCKBlBCEPQAyBKAnBUQDHCOgBFRQAiC1hnCtQhTCdhTB4QipEIi6CzQjEDbjVBlQhQAxhSAbQjdBWj3iAIgLgEQiXhSjJhwQilhVhRhJQhYgpglgMQkHAQifAEQhXAqhAgQQgTgTgNAgQgJgMgLAcQgtB1gnB6QikHrhJJqQgsEvgPHPQgHCpgDC/QgEFvACFTIABGVQgBExgLFKQgIDNgQCwQgeFqg+EIQgeCPgnCCQheFGiUEDQhAB0hKBqQiSDkj5CsQkfDwmzCcQmHCLp9AyQo+AnrpgZQxCgo2GitQligslZg+Qi0gjiNgaIh0gWQidgghxgIQh3gGh7AcIgLABQjmAXiPAsQiHARhlAkQhoAihuBAQr7G5s6FzQlQCXlRCHQ8ILO5FCcQiOAOiJAAQhNAAhKgEg");
	this.shape_649.setTransform(917.4063,472.7532);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("rgba(0,0,0,0.996)").s().p("EiArBmmQwNgens0mQgth4goiEUgGRgUVABRgi9QAiuxB3wNIASiSQBmtWCUs5IA0kWQB7qGCEoIQA0jKAxirQBXkmBLisQBHizDviIQDtiSLXi9QEBhBE0hGQOcjPU8joQF7hCGJhAQQyivQqiVQIchLGvg2QHHg4DngSQKGgxHEA1IB4AKQJAA7JsCQIBoAaQJeCXHyDFQBEAcBAAcQFcCbDFCXQCyB2F8A8IASADQF+BxGSBRQBFAXBtAMQDLALDvgEQGvgQF2gRQCkgGCggEQGTgIEBAYQDbAGFkAtIBaAKQG2AsEmA9QCqAiB/ArQEYBnD8CSQBNBPgJBTQBgBqAeE2QAkBSAaBeQCgCNgYF0QAUC5hdCsQhOCihLB8QidEVisC/Qi5DwjGByQhNA4hPAfQjcBmj2iTIgLgFQiXhei9h9QiahehRhWQhQgvgmgYQkBhCiZhlQhTgMg/hYQgTgpgMATQgKgUgMAcQgyBzgsB5Qi4HrhYJpQg1E6gUHHQgKCpgEDAQgIFrABFdIACGaQAAEtgHFUQgGDOgMCxQgYFyg0EHQgaCQgiCFQhSFOiFEJQg5B5hEBvQiIDzjmC6QkUELmnCxQl7CdqJA9Qo8Avr0gVQxFgh2UisQlkgrleg8QiyghiTgZIh1gWQibgdh1gLQh5gKh7ASIgLACQjzAGiIAhQiNAGhkAgQhoAehwBBQr9HAs/F5QlRCZlUCJQ8SLa5NCkQioARihAAQg1AAg0gCg");
	this.shape_650.setTransform(914.6107,472.697);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("rgba(0,0,0,0.996)").s().p("Eh/wBmpQwigHn00oQgvh5gpiEUgGYgUZABRgjQQAju2B4wUIASiTQBntcCWs+IA0kXQB9qMCGoJQA1jNAyiqQBZkrBNipQBFilEKiIQEGiPLIi2QEEhBE0hFQOmjQVCjnQF+hCGKhAQQ4iwQxiUQInhMGpg1QHVg5DbgPQJtgoHqA9IB4ANQJJBDJoCXIBpAbQJnChHrDLQBEAdBAAdQFiCmC4CeQChB5GUAyIATADQFtBbG6A6QBLARBrAIQDTAFDogFIMmgiQCmgGCfgDQGZgFD+AfQDGAKGAA2IBbALQG4A1EnBDQCpAmCBAsQEzB1DUCbQBEBXgeBdQA2BvgGFeQAWBaANBmQB5CNgvGWQAGC+hUCsQhICohFB/QiREiibDLQiuEFi3B/QhLA/hNAkQjbB1j1imIgKgGQiXhrixiJQiOhmhShkQhJg2gmgkQj7iUiVjMQhNhDg+ihQgTg/gMAGQgLgcgMAbQg3BygxB4QjOHshmJnQg+FFgaG+QgMCrgGDAQgLFoABFnIADGeQABEogDFfQgDDQgKCyQgRF5grEFQgVCTgdCHQhGFWh2EQQgzB9g+BzQh+ECjUDIQkHEnmbDHQlvCwqVBGQo7A4r/gRQxIgb2jirQljgqljg5QixgfiZgZIh2gVQiZgch6gOQh7gMh7AJIgLAAQj/gKiCAVQiSgChiAaQhqAahxBDQsBHHtCF+QlSCblXCMQ8cLm5VCrQjLAWjCAAIgoAAg");
	this.shape_651.setTransform(912.5559,472.6327);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("rgba(0,0,0,0.996)").s().p("EiXvBSTQgvh6gqiFUgGggUcABSgjjQAju8B6wbIARiTQBptiCYtEIA0kYQB/qRCHoLQA2jPAziqQBckwBOilQBDiXEliIQEfiMK6iwQEGhBE1hEQOujQVJjnQGChCGKhAQQ/iwQ4iUQIyhNGig0QHjg6DQgLQJUggIPBHIB5AOQJRBMJlCeIBpAbQJwCqHkDTICEA8QFoCwCsCmQCPB7GtApIATACQFcBGHjAiQBPALBqAFQDbAADhgHQHngYFAgMQCpgGCdgBQGfgDD8AlQCyAPGaA+IBdAOQG5A+EpBJQCpApCBAuQFPCCCrClQA8BfgzBnQAMB0gqGGQAHBhABBwQBRCLhGG5QgIDDhKCrQhDCug9CCQiFEviNDXQiiEbipCLQhIBGhKApQjbCEjzi5IgKgHQiXh3iliVQiChvhShxQhCg9gngxQj1jmiPk0QhJh5g9jpQgThWgLgGQgMgkgNAaQg8Bxg2B3QjjHsh0JmQhHFQggG1QgOCtgIDAQgOFkAAFxQABCxADDyQACEkABFpQgBDRgGC0QgKGAgiEEQgRCUgYCJQg6FfhmEWQgtCCg4B4Qh0EQjBDWQj8FCmODdQlkDDqhBQQo5BAsLgNQxKgV2xipQlkgplpg3IlOg1Ih3gUQiXgbh+gRQh9gPh7AAIgLgBQkLgah8AJQiYgLhhAVQhqAVhzBFQsEHOtGGDQlTCdlZCPQ8nLy5dCzQjhAZjYACIgZAAQwiAAn40Yg");
	this.shape_652.setTransform(911.0761,472.5493);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("rgba(0,0,0,0.996)").s().p("EiYqBSrQgwh6griGUgGngUgABTgj1QAjvCB7wiIARiUQBqtnCatKQAaiPAaiKQCBqWCJoOQA3jRAzipQBfk1BQiiQBAiJFBiIQE4iJKripQEIhBE3hDQO3jQVOjnQGGhDGKg/QRHiwQ/iVQI9hOGagyQHxg7DGgIQI7gYI0BRIB6AQQJZBVJiCkIBpAcQJ5CzHdDaICDA/QFuC5CgCvQB9B8HGAgIAUABQFLAxIMAKQBUAGBoABQDkgFDZgJQICgbElgLQCsgFCcAAQGmgBD5AtQCcASG1BIIBfAPQG7BHEqBPQCoAsCCAxQFrCOCDCvQAzBohIBxQgeB5hPGtQgHBogMB6QAqCKhcHcQgXDHhACqQg9C0g2CFQh5E8h9DkQiYEviaCZQhFBNhHAtQjbCUjxjNIgKgHQiXiDiZiiQh3h4hSh+Qg7hEgog9Qjvk4iKmbQhEiwg7kyQgThrgLgTQgMgtgPAaQhBBwg6B1Qj4HtiDJkQhPFbgmGtQgQCtgKDBQgSFgAAF8QABCrAED8IAIKUQABDSgCC1QgEGIgZEBQgMCXgTCLQguFnhXEdQgnCGgxB8QhqEgivDkQjxFdmBDyQlYDWquBbQo3BIsWgJQxNgO2/ioQlkgplug0IlTgzIh4gTQiVgZiCgUQh/gTh8gJIgLgBQkXgrh2gCQidgVhfARQhrAQh2BHQsGHUtKGJQlUCfldCRQ8wL/5mC7QjiAajaAHIg+ABQwZAAn50Eg");
	this.shape_653.setTransform(917.842,472.4539);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("rgba(0,0,0,0.996)").s().p("EiZmBTEQgyh7gsiHUgGugUiABTgkJQAkvHB8wpIASiWQBqtsCbtOIA2kcQCCqbCLoPQA4jUA0ipQBhk5BSifQA+h7FciHQFQiHKdiiQELhBE3hDQPAjPVVjnQGJhDGLg/QROixRGiVQJIhPGTgwQH+g8C8gEQIhgQJaBZIB7ATQJhBeJeCpIBqAfQKCC8HWDgQBEAhA/AhQFzDDCUC3QBsB+HeAWIAVABQE6AbI0gNQBZAABngDIG+gVQIegfEKgIQCugFCbABQGsACD3AzIJXBnIBgARQG+BREqBUQCoAvCDAzQGGCbBcC4QApByhdB6QhIB/hzHUIguDyQADCKhzH+QgmDMg2CqQg4C5gvCJQhtFIhtDwQiNFFiKCmQhDBUhEAyQjbCjjwjgIgJgJQiXiPiOiuQhqiAhTiMQg0hLgohJQjpmKiFoDQg/jmg6l7QgTiBgKggQgNg1gQAaQhGBug/B0QkOHuiRJiQhYFmgrGlQgTCugMDCQgVFcAAGGQAACmAFEFQAFEbAJF/QAEDUAAC2QACGPgPEAQgICZgNCNQgiFwhIEjQghCLgrCAQhgEuidDzQjkF4l2EIQlLDpq6BlQo2BQshgFQxQgI3OimQljgol0gzIlXgwIh6gSQiSgXiGgXQiBgWh9gTIgLgCQkjg7hwgNQiigfheAMQhsANh4BIQsIHbtOGOQlVChlgCUQ86ML5vDCQjiAbjcAMQgyADgxAAQwRAAn5zwg");
	this.shape_654.setTransform(924.7846,472.3239);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQiNCjjFLgQgkCJiKIhQhwG9hLEIQjmMqjWEzQkVGOk1k9QqNqbj/zUQg7kcg4nDQgTiYgKgsQgOg+gRAZQpPNeiUTeQg6HngBJ0QAAFFAYMKQAWKxgIFxQgNIwhOGcQhcHljEFsQjZGUlpEdQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_655.setTransform(931.8273,472.1569);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("rgba(0,0,0,0.996)").s().p("Eib7BPfIgSg2UgGkgUfABTgjxQAjvAB6wgIAEggQBtuiCjt/IALg9QCTsbCfpkIAWhSQCMoJBwj3QAWgwAYgnQB9jKS0knIB9geQQkj8afkhICrgdQV5jrVti/IDYgdQQUiNGlghQCTgMBTgBQHPgEItBPQCCASCHAXQITBaIICQQCLAmCJAqQHUCPFyChQCRBACCBCQEACCCfB9QCNBsBbBjQA8BHDGAgQCIAWDKAEQEGAFH4gcQClgJC8gMQI7gmFOgQQDdgLCEgCQF2gIEIAWQDRAQClAlQA8AOCTAcIGNBKQD7AyDOAxQDZA0CpA1QIRCnCCDCQCSCqiiDXIgSAZQh3C9icJ0IgQA/QghCUh8IYIhLFGQg1DhgpCiQhzG8huEoQhcDzhZCSQj+GNkdkDQkRjijOleQkEmBi8qEIgFgSQhQkThKm3QgXiSgOgwQgPg6gRAUQgnAugkAvQkrGLi2HbQiKFRg/GtIgEAaQgWBwgQCFQgNBEgLBRQgNBugFCDQgGCxABDKIABBxQADD5AOG9IAKEqQAKEtADDxQAEEygFDUQgPIuhPGfQgfCdgpCRQhVEuiED2QjYGXllEgQh1BfinBMQqJEp28ABQiNABiVgDQ2AgZ/LkMQhzgQhvgSQjpgljYgxIjPgzIjKgxQh8gdhRgFQgegCgZABQhhAEhlA0QgRAIgRAKQhXAyhYA1Qv6JlxwHjIiVA/Q/yNN77CHQgwAEgwABIgwAAQxuAAnz3ag");
	this.shape_656.setTransform(931.1388,472.1491);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("rgba(0,0,0,0.996)").s().p("EibzBPkIgSg3UgGmgUgABTgj0QAjvCB7wiIAEggQBtuiCkuBIALg9QCTscCfplIAWhSQCNoMByj1QAVgvAcgnQCLjJSqkjIB9gfQQmj8ahkgICrgdQV7jsVvi+IDYgdQQiiOGYgfQCQgLBYAAQHQgCIuBQQCCATCGAXQIUBbIICSQCMAnCJAqQHVCRFwCiQCSBBCBBDQEBCGCaB/QCFBpBqBdQBCBCDDAdQCIAUDLADQEKAEH1gcIFfgWQJDglFHgQQDbgKCIgCQF6gHEFAaQDFAQCzAoQA/AOCQAbIGMBLQD8AyDNAzQDZA1CnA3QIYCwBZDPQB8CiiVDjIgQAaQhuDIiNJvIgNA/QgeCehvIQQgkCtgfCbIhUGGQhnG9hkEsQhTDyhSCYQjmGNkEjJQj9iWjFkdQkJkNjtpuIgFgQQhlkKhdmsQgbiLgTg0QgPg3gRAPQgnAkgkAkQknE6i9FpQiUDxhDFrIgFAUQgcBTgVBwQgTA2gSBMQgSBmgGCJQgHCtACDQIACBxQAED1AQHCIAKEpQAKEtADDyQAEEvgGDYQgRIthRGiQgfCdgqCSQhVEtiDD4QjYGYlgEjQh1BiikBOQp8E13HAFQiOAAiVgCQ2AgX/QkMQhzgQhwgRQjpgljZgwIjQgyQiGgihEgQQh9gehPgGQgfgCgZAAQhkABhiAvQgRAIgSAJQhXAvhaA2Qv7JnxxHlIiVA/Q/1NQ79CJQgwADgvACIg5ABQxsAAn03Vg");
	this.shape_657.setTransform(930.459,472.1698);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("rgba(0,0,0,0.996)").s().p("EibqBPpIgSg3UgGogUgABTgj5QAjvDB7wjIAEggQBuulCkuCIALg9QCTsdCgplIAWhSQCPoQBxjyQAWgtAfgoQCajISfkgIB9geQQpj8ajkhICqgdQV+jrVxi/IDXgdQQyiQGKgbQCOgKBcAAQHRAAIuBSQCCATCHAXQIUBdIJCTQCLAnCJArQHVCSFwClQCTBCB/BDQECCJCVCDQB9BnB6BWQBIA8DAAbQCIASDLACQEQACHwgcQCpgKC2gMQJLgmE/gOQDZgKCLgBQF9gFECAdQC5ARDCApQBDAOCMAbIGLBLQD9A0DMAzQDZA3CmA4QIeC6AwDcQBmCZiIDxIgPAaQhkDTh8JpIgNA/QgaCphhIHQggCsgbCfIhLGIQhbG+haEwQhKDxhKCfQjPGNjsiQQjohLi9jaQkNibkcpWIgGgQQh7kBhvmgQgfiEgXg4QgQg0gRALIhMAyQkiDpjGD4QidCPhHEpIgGAPQgiA3gaBcQgZAmgYBHQgYBegICQQgGCoADDWIACBwQAFDxASHIIALEpQAKEtADDzQADEsgHDdQgSIqhUGmQgfCdgqCRQhWEtiCD5QjXGblcEmQh1BkifBRQpwFB3TAHQiOABiWgCQ2AgU/VkMQhzgQhwgRQjqgkjZgwIjRgyIjLgxQh+gfhOgHQgegDgZAAQhogChgArIgiAPQhYArhbA3Qv8JpxyHnIiWA/Q/3NT7/CLIhgAGIhBABQxrAAnz3Qg");
	this.shape_658.setTransform(929.7859,472.1865);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("rgba(0,0,0,0.996)").s().p("EibiBPvIgSg4UgGpgUhABTgj9QAjvFB7wkIAEggQBuumCkuDIALg+QCUseChpmIAWhSQCPoSBzjwQAVgsAjgoQCojHSVkdIB9geQQsj8akkgICqgdQWAjsVzi+IDXgeQRBiRF8gZQCMgIBhABQHRABIuBTQCDAUCGAYQIVBeIJCUQCMAoCIArQHXCUFvCnQCTBCB+BEQEDCNCQCFQB1BlCJBQQBPA3C8AXQCIARDMABQEUABHsgdIFfgWQJTgmE4gOQDWgJCPAAQGBgED+AgQCtASDRArQBGAPCJAZIGJBNQD+A0DLA0QDaA5ClA5QIkDEAHDoQBPCSh6D9IgNAaQhbDehsJkIgLBAQgXCzhUH/QgcCrgXCiIhBGKQhPHAhQE0QhCDwhBClQi4GMjThWQjUABi0iYQkSgolNo/IgGgPQiQj4iCmVQgjh9gcg7QgPgxgSAFIhMAdQkeCZjNCGQioAuhKDnIgHAKQgoAagfBHQggAXgdBCQgfBWgICXQgHCjAEDcIACBwQAGDtAUHNIAMEoQALEtACD1QADEpgIDhQgUIphWGoQggCegpCRQhXEtiCD6QjWGdlXEpQh1BmicBUQpjFM3eALQiPABiWgCQ2AgS/akLQhzgQhxgRQjrgkjZgvQh0gahegXIjLgyQiAgfhMgIQgegDgZgBQhrgFhdAmIgjAOQhZAohcA4Qv8Jrx0HoIiWBAQ/5NV8CCOIhgAFQglACglAAQxoAAn03Kg");
	this.shape_659.setTransform(929.137,472.1988);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("rgba(0,0,0,0.996)").s().p("EibaBP0IgSg4UgGrgUiABTgkBQAjvGB8wmIAEggQBtunCluFIALg9QCVsgChpmIAWhSQCRoWBzjtQAVgrAmgoQC3jGSKkaIB+geQQuj8alkgICrgdQWCjsV0i+IDYgdQRPiTFvgWQCJgHBmABQHSAEIuBUQCEAUCGAYQIVBfIJCWQCNApCIArQHXCVFuCpQCTBEB9BFQEECQCMCIQBtBjCYBJQBVAxC5AVQCIAPDNgBQEYAAHogdIFegWQJbgmExgNQDUgICTgBQGDgCD8AkQChASDfAtQBJAPCGAZQCxAiDXArQD/A1DLA2QDZA5CkA8QIqDMgiD2QA5CJhtEKIgMAbQhRDphcJeIgJBAQgTC+hIH2QgXCqgTCmIg3GMQhEHBhFE4Qg6Dvg5CsQihGMi7gdQi/BMishVQkVBKl+ooIgHgNQiljviUmJQgnh3ggg/QgRgugSABIhLAIQkaBHjWAUQiwgyhPClIgIAEQgtgDglAzQglAIgkA9QglBOgJCdQgICfAFDiIADBwQAHDoAWHUIAMEnQAMEtABD2QADEmgJDlQgWInhXGsQghCdgqCRQhWEtiCD7QjWGglSEsQh0BpiYBWQpYFY3pAOQiPABiXgBQ2AgQ/fkMQhzgPhygRQjrgjjagvQhygZhggXIjLgyQiCgghKgJQgegEgagBQhtgIhbAhQgSAGgSAHQhZAkhdA5Qv9Jtx1HqIiWBAQ/8NZ8ECPQgwAEgwACQgqACgpAAQxmAAn03Fg");
	this.shape_660.setTransform(928.5282,472.1929);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("rgba(0,0,0,0.996)").s().p("EibTBP5IgSg4UgGtgUiABTgkGQAkvHB7woIAEggQBuuoCmuHIALg9QCUsiCiplIAXhTQCRoZB0jpQAVgrApgoQDGjFSAkWIB9geQQxj8ankhICrgcQWEjtV3i+IDXgdQReiVFhgSQCHgHBqACQHTAGIvBWQCEAUCFAYQIWBhIKCYQCNAoCHAsQHYCXFuCrQCTBFB8BFQEFCTCGCLQBlBhCoBCQBbAsC2ATQCIAMDOgBQEdgCHkgdIFdgWQJjgnEpgLQDSgICXAAQGHAAD4AmQCVATDuAvIDPAoIGHBNQEAA3DJA2QDaA7CiA9QIxDWhLECQAjCChgEWIgKAcQhIDzhMJZIgIBBQgPDJg7HsQgTCpgPCqIgtGPQg4HBg7E9QgxDtgyCzQiJGLiiAdQirCYijgVQkaC/muoRIgIgNQi7jmiml9QgqhwgmhDQgQgrgSgDIhNgOQkVgKjdhdQi7iThTBjQgEgBgEAAQgzgggqAeQgsgHgqA4QgqBHgLCjQgICaAHDnIADBxQAIDkAYHZIAMEnQAMEtACD3QACEjgKDpQgYIlhZGwQghCdgqCRQhYEsiBD9QjUGjlOEuQh1BriUBZQpLFj30ASQiQABiXgBQ2AgO/kkLIjmggQjrgjjagtIjUgxIjMgyQiDgfhIgLQgegEgZgCQhxgLhZAcIgkAMQhZAhhfA5Qv+Jvx2HsIiWBAQ//Nc8GCRIhgAGQguACgtAAQxlABn03Ag");
	this.shape_661.setTransform(927.9856,472.1953);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("rgba(0,0,0,0.996)").s().p("EibWBP+IgTg4UgGugUjABTgkKQAkvIB8wqIAEggQBuuqCmuHIALg9QCVskCipmIAXhTQCTocB0jmQAVgqAsgoQDVjER2kTIB9geQQzj8apkgICrgdQWFjsV5i/IDYgcQRsiXFUgPQCEgGBvACQHUAIIvBYQCEAUCGAZQIWBiIKCZQCNApCIAsQHYCZFtCsQCUBHB7BGQEGCWCBCOQBdBeC3A8QBhAnCzAPQCIALDOgCQEigEHggdIFcgWQJrgnEigKQDQgICaABQGKABD2AqQCJATD9AxIDOAoQC7AkDLAqQEBA3DJA3QDZA8ChA/QI3DghzEPQAMB5hTEjIgJAcQg+D+g8JVIgGBAQgMDUgtHkQgPCngLCuIgkGRQgsHDgxFAQgoDtgqC5QhyGLiKBWQiVDjicAuQkdEynfn8IgJgLQjQjdi4lwQguhqgqhHQgSgngSgJQgngQglgTQkShajljPQjDj0hYAgIgJgFQg5g+guAKQgygWgxAzQgwA/gMCqQgJCVAIDtIAEBxQAJDgAaHfIANEmQAMEtABD4QACEggLDuQgZIjhcGyQghCdgrCSQhXEsiBD+QjUGllJExQh0BtiQBcQo/Fv4AAUQiQACiYgBQ2AgL/pkLIjnggQjrgijbgtIjUgwIjMgyQiFgghGgMIg4gIQh0gOhWAZQgSAEgTAGQhZAehgA6Qv/Jxx3HtIiWBAUggCANggcIACSIhgAHQgzACgxAAQxiABn127g");
	this.shape_662.setTransform(928.4671,472.1908);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("rgba(0,0,0,0.996)").s().p("EibbBQEIgTg5UgGwgUkABUgkOQAjvKB9wrIAEggQBuurCmuJIALg9QCWslCjpmIAWhTQCUofB2jkQAUgpAwgoQDjjDRskQIB9geQQ1j8arkgICrgcQWHjtV7i+IDYgdQR7iYFGgNQCCgEBzADQHVAJIvBZQCFAVCFAZQIXBkIKCaQCOAqCHAsQHaCaFrCvQCVBHB6BHQEHCaB8CQQBVBdDGA1QBnAhCwANQCIAJDPgDQEmgFHdgeIFbgWQJzgnEbgKQDNgHCeACQGOACDyAtQB9AUEMAzIDNAnQDBAmDFApQECA4DHA4QDaA+CgBAQI9DqicEbQgKByhGEvIgHAdQg1EJgsJPIgEBBQgJDeggHbQgKCngICxIgaGTQggHEgnFFQgfDrgjDAQhaGKhxCQQiBEviTBwQkiGloQnlIgJgKQjljUjKlmQgzhhgvhLQgRglgTgNQgngbglgdQkOisjslAQjOlVhbgiQgFgGgFgFQg/hagzgLQg5glg3AuQg2A3gMCxQgKCQAJDzIAFBxQAKDbAcHlQAHCUAGCRQAMEtABD6QACEdgMDyQgbIhheG2QghCdgrCRQhYEsiAD/QjUGolEE0Qh0BviNBfQoyF64MAYQiQACiYgBQ2AgJ/ukKIjoggQjsgijbgsQhwgYhlgXIjMgzQiGgghFgNIg4gJQh3gRhTAUQgTADgTAGQhaAahhA7QwAJzx4HvIiWBBUggEANigcLACVIhgAGQg4AEg1AAQxgAAn121g");
	this.shape_663.setTransform(929.1429,472.1833);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("rgba(0,0,0,0.996)").s().p("EibhBQJIgTg5UgGygUkABUgkTQAjvLB9wtIAEggQBvusCmuKIALg+QCWsmCkpnIAWhTQCWoiB1jhQAVgoAzgoQDyjCRhkNIB9gdQQ4j8askgICrgdQWKjtV9i+IDXgdQSLiaE4gJQB/gDB3ADQHXALIvBbQCFAWCGAZQIWBkIMCcQCOAqCGAtQHaCcFrCxQCVBIB5BHQEICdB3CUQBNBaDWAvQBtAcCsAJQCJAIDPgFQEsgGHYgeIFbgWQJ7goETgIQDLgGChACQGRAEDwAwQBwAUEbA1IDNAnQDGAmC/AqQEDA5DGA5QDaA/CfBCQJDDzjFEoQggBpg5E8IgGAdQgrEUgcJKIgDBBQgFDpgSHTQgGClgFC0IgPGWQgVHFgcFJQgXDrgbDFQhDGLhZDJQhsF7iLCyQkmIYo/nOIgKgKQj7jLjclaQg3hbgzhPQgSgigTgSQgnglgmgoQkJj7j1myQjXm2hfhkIgKgQQhGh3g4ggQg/g0g9ApQg8AvgOC4QgJCLAKD5IAFBxQALDXAeHqQAICVAGCQQAMEtABD7QABEagND2QgdIghfG4QgiCegrCRQhZEsh/EAQjTGqlAE3Qh0ByiIBhQomGG4YAbQiQACiYAAQ2AgH/0kKIjoggQjtghjbgsQhwgXhmgYIjNgyQiHghhEgOQgdgGgagEQh6gUhSAPIglAIQhbAXhiA8QwBJ1x5HwIiXBBUggGANlgcNACXIhhAHQg7AEg6AAQxeAAn12wg");
	this.shape_664.setTransform(929.9269,472.1995);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("rgba(0,0,0,0.996)").s().p("EiboBQOIgTg5UgG0gUlABUgkXQAjvMB9wvIAEggQBvutCnuMIALg9QCXsoCkpnIAWhTQCXomB2jeQAVgnA2gpQEBjARWkJIB9geQQ7j8aukgICrgdQWMjtV/i+IDXgcQSZicErgGQB8gDB8AEQHYAOIvBcQCGAWCFAZQIXBmIMCeQCOAqCHAtQHaCeFqCyQCWBKB3BIQEJCgByCXQBFBXDmApQBzAWCpAHQCJAFDQgFQEwgIHUgeIFagWQKDgoEMgHQDJgGClACQGUAGDtA0QBkAUEpA4IDOAmQDKAnC5ApQEEA6DGA6QDZBACeBEQJJD8juE2Qg2BggsFJIgEAeQghEfgNJEIgBBBQgBD0gGHKQgCCkAAC4IgGGYQgJHHgSFMQgODqgTDMQgrGLhBEDQhYHGiCDzQkqKMpwm4IgLgIQkQjCjvlOIhyioQgTgegSgXQgngwgmgzQkFlNj9ojQjgoWhkimIgLgWQhLiUg+g0QhEhChEAkQhCAngPC9QgKCHAMD/IAFBxQAMDSAgHxQAICWAGCOQANEtABD8QAAEXgOD6QgeIehiG8QgiCdgsCSQhZErh+ECQjSGsk7E6Qh0B0iFBjQoaGT4iAeQiRACiZAAQ2AgE/5kLIjpgfQjtggjcgsQhugWhogYIjOgzQiIghhCgPIg3gLQh+gXhPAKIgmAHQhbAThjA9QwCJ3x6HyIiXBBUggJANpgcPACYIhhAIQhAAEg+AAQxcAAn12rg");
	this.shape_665.setTransform(930.8358,472.1754);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhQBdgeFwQgYEpAEI/QACFVAOMLQAKLUgLHfQggV4jqJRQkvL/qgmhQm4kRlopFQkBmfkEqUQj4qdhmjdQhRixhChJQhLhRhKAfQhIAfgQDEQgMCdAUFbQANDOAiH2QAcHbAAFzQABQojiL0QklPXqvIfQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_666.setTransform(931.8273,472.1569);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhSBfgcGgQgXEyAFJOQADFcAPMaQAMMYgMIFQghWIjpJdQklLxqImCQmtj6llozQkDmUkDqIQj2qMhqjuQhSi3hJhkQhPhmhKATQhKAOgTC1QgRCOAOFKQAIDFAfHdQAZHCAAFhQABPyjYLQQkgO0rJI0Qo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_667.setTransform(931.8273,472.1569);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhUBhgaHPQgVE8AGJcQADFkAQMpQAPNcgOIsQghWYjoJoQkdLkpwlkQmhjiljohQkDmJkDp8Qjzp8huj+QhUi9hQiAQhTh7hKAHQhMgCgXCkQgVB/AIE7QADC7AbHEQAXGqAAFNQABO9jPKtQkaORrjJIQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_668.setTransform(931.8273,472.1569);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhWBkgYH+QgTFFAHJqQAEFsAQM3QAROhgOJSQgiWpjnJzQkULXpYlGQmWjKlhoPQkEl/kCpwQjxpthykMQhVjEhXicQhXiPhKgEQhOgTgbCUQgZBwABEpQgBCzAYGrQAUGRAAE7QAAOIjEKIQkUNur+JdQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_669.setTransform(931.8273,472.1569);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhYBmgVIuQgSFOAIJ4QAEF0ARNGQATPlgPJ4QgjW6jlJ9QkMLKo/knQmLizlen9QkGl0kApjQjvpdh3keQhWjJhei3QhbikhKgQQhQgkgeCEQgeBigFEZQgGCqAVGQQASF6gCEoQABNSi6JkQkPNLsYJyQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_670.setTransform(931.8273,472.1569);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhaBogTJeQgRFXAJKHQAFF6ATNWQAVQqgRKeQgjXKjlKIQkDK9omkJQmAiblcnrQkHlqj/pWQjtpNh7kuQhXjQhkjTQhgi4hKgcQhRg0gjByQgiBTgLELQgLCgASF3QAPFigCEVQABMcixJAQkJMosyKHQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_671.setTransform(931.8273,472.1569);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhcBqgRKNQgPFhAKKVQAGGCATNlQAXRtgRLGQglXZjjKUQj6KwoPjrQl0iDlZnZQkJlfj+pKQjqo9iAk+QhYjXhrjuQhkjOhKgnQhThFgnBjQgmBEgSD6QgPCYAPFdQAMFJgCEDQABLminIdQkEMFtMKbQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_672.setTransform(931.8273,472.1569);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQheBtgPK8QgNFqALKjQAGGKAUNzQAaSygTLsQglXqjiKfQjyKin2jMQlphrlXnIQkJlUj+o+QjoosiElOQhZjdhykLQhojihKgzQhVhVgqBSQgrA1gYDrQgUCOAMFEQAJExgCDvQABKyieH4Qj9LitnKwQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_673.setTransform(931.8273,472.1569);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhgBvgNLsQgMFzANKxQAGGSAVOCQAcT2gUMTQglX6jiKpQjoKWneiuQlehUlVm1QkKlKj8oxQjmociJlfQhajjh5kmQhsj3hKg/QhXhmguBDQgvAmgeDaQgZCGAJEpQAGEZgCDdQABJ8iUHUQj4K/uBLFQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_674.setTransform(931.8273,472.1569);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhiBxgKMcQgLF8ANLAQAIGZAVORQAfU6gVM5QgnYLjgK0QjgKInFiPQlTg8lSmkQkMk/j7okQjkoMiNlvQhbjpiAlCQhwkMhKhLQhZh2gxAyQg0AXglDLQgdB8AGEQQADEBgDDKQACJGiLGwQjyKcubLaQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_675.setTransform(931.8273,472.1569);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhkBzgINLQgJGFAOLPQAIGhAXOgQAgV/gWNfQgnYajfLAQjYJ7mshwQlIgllQmSQkNk1j6oYQjin7iQl/IjjpNQh2kghJhXQhbiHg1AiQg4AIgrC7QgiBzACD2QABDogDC4QACIRiBGLQjsJ6u2LuQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_676.setTransform(931.8273,472.1569);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhmB2gGN6QgHGOAPLdQAJGpAXOuQAiXEgXOGQgoYqjdLLQjPJumVhSQk8gOlNl/QkPkqj5oMQjfnriVmQQhej1iNl6Qh6k0hJhjQhdiYg5ASQg8gGgxCqQgnBqgBDdQgCDQgDClQACHbh3FoQjnJWvQMDQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_677.setTransform(931.8273,472.1569);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhoB4gEOqQgGGXARLrQAJGwAYO+QAlYIgYOsQgpY7jdLVQjGJhl8gzQkxAKlLluQkQkfj3n/QjenciZmfQhfj8iUmVQh+lJhJhvQhfiog8ACQhBgWg4CbQgrBggEDDIgIFLQABGlhtFEQjhIzvqMYQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_678.setTransform(931.8273,472.1569);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhqB6gCPaQgEGgARL6QAKG3AZPNQAnZMgZPTQgpZLjcLgQi9JUlkgVQkmAilJlcQkQkVj3nzQjbnLiemvQhgkCibmxQiClehJh7Qhhi4hAgPQhFgkg+CKQgwBYgHCpQgICggDB/QABFxhjEfQjbIQwFMtQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_679.setTransform(931.8273,472.1569);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhsB8ABQJQgDGqASMIIAkWbQAqaQgbP6QgqZajaLsQi1JHlLAJQkbA5lGlJQkSkLj2nmQjZm7iinAQhhkIiinMQiGlzhJiGQhjjKhEgeQhJg0hEB7Qg1BOgKCQQgLCHgEBtQACE7haD7QjVHuwfNBQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_680.setTransform(931.8273,472.1569);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhtB/ACQ4QgCGzAUMWQALHHAbPqQArbWgcQfQgqZrjaL3QirI5kzAoQkQBRlEk4QkTkAj1nZQjWmrinnQQhikPionoQiLmHhJiSQhljahHgvQhOhChKBqQg6BGgNB2QgOBvgEBaQACEFhQDXQjQHLw5NWQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_681.setTransform(931.8273,472.1569);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhvCBAERoQAAG8AVMkIAnXIQAtcagcRGQgsZ7jYMBQijItkbBGQkEBplBkmQkVj1jznNQjVmbirngQhjkVivoEQiPmchJieQhnjqhLhAQhShQhRBaQg+A8gQBcQgQBYgFBHQACDPhGC0QjLGnxTNrQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_682.setTransform(931.8273,472.1569);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhxCDAGSYQACHFAVMzIApXeQAwdegeRsQgsaMjXMMQibIfkCBlQj5CAk/kUQkWjqjynBQjSmKiwnxQhkkbi2ofQiTmxhJipQhpj8hOhPQhXhghXBLQhDAzgTBCQgTA/gFA1QACCag9CPQjEGExuOAQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_683.setTransform(931.8273,472.1569);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("rgba(0,0,0,0.996)").s().p("EicEBPaUgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQhzCFAJTHQADHPAWNBIAqX0QAyejgfSTQgsacjWMXQiSISjqCDQjuCYk9kCQkWjgjym0QjQl6izoBQhmkhi9o7QiXnGhJi1QhrkMhShgQhbhuhdA6QhIAqgXApQgVAngGAhQADBlgzBrQi/FiyIOUQo9HE8pgCUgXQgACgiXgEpQljgwk+hIQkvhMhpgZQiognhdAHQhtAIh5BKQxGKjzQIMUghDAODgc6ACKQhEAGhDAAQxwAAnz3gg");
	this.shape_684.setTransform(931.8273,472.1569);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQkYjVjxmoQjNlqi4oRQhnknjEpXQibnahJjBQhtkdhWhwQhfh9hkAqQhMAhgaAPQgYAPgGAPQADAvgqBHQi5E+yiOqQo9HE8pgCUgXQgACgiXgEpQljgwk+hJQkvhLhpgZQiogohdAHQhtAIh5BLQxGKjzQILUghDAODgc6ACLQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_685.setTransform(931.8273,473.9092);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("rgba(0,0,0,0.996)").s().p("EibMBQzIgihjUgGygUkABTgkTIAAgBQAkvLB9wtIAHg5QBtufClt+IAUhtQCSsJCepVIApiTQCLnwBvjTQAfg9BvhBQEvizPdjtIDeg0QQjjzZhkTIEugzQVIjfU8i2IF9gyQQCiGEagHQDcgFDdANQGGAWG+BIQDsAmDrAxQGuBbGoB+QEBBNDmBSQFbB9EXCIQEeCMCyCGQB3BaBDBXQBuCCG2AeIAeADQDOAQGQgQQDdgJEfgSIJiglQG0gaDSgGQF/gMEGASQDVANCUAfIJZBtIBdATQE6A/EUBFQBWAXBMAWQG5CBDGCQQD/C+ijDaQgbBygpKVQgNDzAAFqQACFCALHxIAMHyIAYNcIATKpQAMHBAIGpQAbWGgXOsQgMIJgcGzQg/PXiMI2QiAH9jDCxQhlBZh4gBQiBAFiYhjQiqheifi5QhihphgiQQhFhphFh+QhrjOh8j4IhHiaQhRi3iGk1QhEiYhKi2IiclqQhFiigvhfQhVi2hEhuQgfgzgdgjQhfh5hfAdIgTAGIhNAbQgXALgGAMQABAkgmA6IgLAOQgwA5hjBkQgyAphCA5QhnBUiPBjQh/BWiOBmQiEBZijB1Qh7BeiTBrQhdBFh8A7QkyCRm9BOQmIBGnvAUQj+AJkcgBQ1CgG+Bj0QjJgZjQgeQiVgUiOgZQjKglixgpIgygMQijgohigVQg7gNgmgHQhOgOhAgEQhDgFgwAHQhsANh4BJQvOJWw5HeQiFA6iFA5Q/dNU7sCiQhWAIhVAFQg8AEg6AAQxOAAn22Fg");
	this.shape_686.setTransform(929.3545,472.2171);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("rgba(0,0,0,0.996)").s().p("Eia6BQpIgihjUgGvgUjABUgkKIAAgBQAjvJB8wqIAHg4QBtudCkt8IAUhsQCSsHCdpUIAoiSQCJnsBujXQAghBBnhAQEYi1PtjzIDdgzQQfjzZdkUIEvgyQVEjfU4i2IF8gzQPuiDEtgLQDjgIDRALQGFATG+BGQDpAlDsAwQGuBYGnB8QD/BLDoBRQFaB6EYCGQEcCIC2CDQB3BXBIBVQCDCGGTAuIAcAFQDEAaGWgNQDagIEigRIJiglQGsgaDagHQGDgND/APQDSAMCWAcQChAXG1BPIBbASQElA7EsBIQBVAVBNAWQG1B7DOCKQEBCyh9DLQAfCBhBJuQgUDhgCF6QgBFDALHwIAMHwQAIFBAPIYIATKpQAMG4AJGxQAcV8gVOwQgLIIgaGyQg6PNiFI+Qh2H0i1DBQhdBdhuALQh4AXiMhKQijg1idiZQhnhRhoiGQhKhghKh6QhvjDiUjnQglhFgthJQhfioickbQhSiMhSilQhsjChLiLQhOiWg3haQhgiphKhrQgggvgdgjQhfh0hbAPIgSADQg0ANgVABQgVAIgGAIQgBAagjAsIgJALQgsAhhZBRQgtAYg+AtQhkBCiSBLQiEA+iJBQQiBBBiqBtQh5BViYBnQheBBh8A6QlBCUmoBNQmOBMnlARQj9AJkZgCQ1BgK94j1QjKgZjOgeQiUgWiOgZQjOgoiqgnIgygMQijgohigSQg6gLgngEQhNgLhAACQhBgBgxAIQhrATh2BIQvMJSw4HbQiEA6iFA4Q/XNO7pCfQhWAHhUAFQg0ADgyAAQxRAAn22Og");
	this.shape_687.setTransform(927.2307,472.2574);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("rgba(0,0,0,0.996)").s().p("Eia9BQfIghhjUgGsgUhABTgkBIAAgCQAjvGB8wnIAHg5QBtuaCjt5IAUhtQCQsDCdpTIAoiTQCHnmBsjcQAhhDBehBQEDi3P8j3IDdg0QQajzZakTIEugzQVAjfU0i2IF8gzQPaiBE/gPQDqgLDGAKQGDAQG+BEQDoAjDsAvQGuBWGmB6QD+BJDoBQQFaB4EZCDQEZCDC7CBQB4BUBLBRQCYCMFwA9IAbAHQC6AkGdgKQDVgGElgRIJkgkQGkgaDhgIQGHgOD4AMQDQAKCXAYQC4AVGaBKIBbATQEOA3FEBJQBVAVBOAVQGwB3DXCCQEDCmhYC9QBbCQhaJGQgbDPgFGMQgCFBAKHwIALHvQAIFGAPIQIATKnQAMGvAJG7QAdVygSO0QgKIIgYGvQg2PCh8JHQhuHsinDRQhUBghjAWQhvApiBgwQidgMibh4Qhrg6hwh6QhOhYhRh4Qhxi2itjXQgpg+g0hEIkemZQhhiAhbiWQh9iwhTiAQhYiIhAhVQhqidhPhmQgigugegjQhehvhXACIgRAAQgwAGgVgEQgTAFgFAEQgEAQgfAeIgJAHQgnAIhOA/QgpAHg7AjQhhAuiVAyQiJAoiCA5Qh+AqiyBkQh2BNidBiQhfA+h+A5QlPCXmUBLQmSBSncAPQj7AHkXgCQ1BgO9uj1QjLgajLgfQiUgWiNgaQjTgqikgmIgygMQijgohhgPQg5gJgogCQhMgGhAAGQg/ADgxAMQhrAYh0BGQvKJOw2HZQiDA5iFA4Q/TNI7lCbQhVAIhUAEQgsACgqAAQxVAAn12Yg");
	this.shape_688.setTransform(927.1987,472.272);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("rgba(0,0,0,0.996)").s().p("EibBBQVIgghiUgGogUgABSgj4IAAgDQAjvEB8wjIAGg5QBtuYCit2IAUhtQCPsBCcpSQAUhLAUhHQCFniBrjfQAihHBVhBQDti4QLj9IDcg0QQWjzZXkTIEugzQU8jfUwi1IF8g0QPGh/FRgTQDwgOC7AJQGDANG8BBQDoAiDsAuQGtBUGmB3QD8BIDqBPQFYB1EaCAQEXCADAB+QB4BRBPBOQCuCRFMBMIAaAJQCwAuGjgGQDRgFEpgQIJkglQGdgZDngJQGLgQDxAKQDOAICZAVQDPATF/BFIBaASQD4AzFcBMQBVAUBOAVQGsBxDgB8QEECagyCuQCVCfhyIeQghC+gIGcQgEFBAJHvQAEDdAHERIAXNTIATKlQALGnAKHDQAeVpgQO4QgJIHgWGtQgxO4h1JQQhlHiiYDhQhMBkhZAiQhlA7h2gWQiWAciZhYQhvgih4hvQhThQhYh0QhzirjGjFQgtg4g7g+IlClxQhuh0hkiFQiOighchzQhih8hIhPQh1iQhUhjQgjgrgggjQhdhqhSgMIgQgDQgtAAgUgKIgXACQgFAFgcARIgIAEQgjgRhDAsQgkgKg4AYQheAciYAZQiNARh8AiQh8ASi5BcQhzBEikBeQhgA6h+A4QleCal+BLQmZBYnRAMQj6AGkUgDQ1BgS9lj1QjLgbjKgfQiTgXiMgbQjYgsidglIgxgMQilgohggLQg3gIgqABQhKgDhBAMQg9AHgxAOQhqAdhyBFQvJJLwzHVQiEA6iEA3Q/ONC7hCYQhVAHhUADIhFACQxYAAn22ig");
	this.shape_689.setTransform(927.1951,472.2784);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("rgba(0,0,0,0.996)").s().p("EibIBQLIgghiUgGlgUeABSgjwIAAgDQAjvBB7whIAHg4QBsuVCht1IAUhsQCPr+CapRIAoiSQCDndBqjkQAihKBNhAQDXi7QakBIDcg1QQRjyZUkUIEtgzQU5jfUti1IF7gzQOyh9FigYQD4gQCwAHQGBAKG8A/QDmAgDtAtQGtBSGlB1QD6BGDrBOQFYBzEbB9QEUB8DFB7QB5BNBTBMQDCCWEpBbIAZAMQCmA4GpgEQDNgDEsgQQExgQE0gUQGVgZDugKQGQgRDpAHQDMAGCbASQDmARFkBAQAuAIArAKIJWB9ICjAnQGoBtDpB1QEFCNgMCgQDQCuiLH2QgnCsgKGtQgGFBAIHuIAKHtQAIFPAPIAIATKlIAWNqQAeVfgOO8QgHIGgUGrQguOuhsJYQhcHaiKDxQhDBnhPAuQhcBNhrADQiPBFiXg3QhzgLiAhkQhYhHhehxQh2ifjfi1QgwgyhDg3QiFh8jgjMQh8hohuh1QidiPhmhnQhrhvhQhJQiBiFhYheIhGhMQhdhlhOgaIgPgGQgpgGgTgQQgPgCgGgDQgHgFgZADIgHAAQgegpg5AaQgfgcg0ANQhbAJicABQiSgHh2ANQh5gGjBBTIkZCWQhhA2h+A3QluCdlpBKQmeBdnHAKQj5AFkSgEQ1AgW9cj2QjLgajIggQiSgXiMgcQjdgwiWgjIgxgMQilgnhfgJQg3gGgrAEQhIABhCARQg7ALgxAQQhpAjhwBEQvIJHwxHSQiDA5iEA3Q/JM87dCUQhVAHhTADIg1AAQxcAAn12rg");
	this.shape_690.setTransform(927.5989,472.2837);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("rgba(0,0,0,0.996)").s().p("EibUBQBIgghhUgGhgUdABSgjnIAAgEQAju+B6weIAHg5QBruSChtyIAThsQCOr7CapRIAniSQCBnYBpjnQAjhOBEhAQDCi8QokHIDdg1QQLjyZSkUIEsgzQU1jfUpi1IF8gzQOdh7F0gcQD/gTCmAGQF+AHG8A8QDlAfDuAsQGrBQGlByQD5BEDsBOQFWBwEdB7QESB3DKB5QB5BKBWBIQDYCcEFBqIAYAOQCcBCGwgBQDJgBEugPQEpgQE+gUQGNgZD1gLQGUgTDiAFQDJADCdAQQD9AOFJA7QAuAJArAJQDLArGMBQICjAnQGkBnDyBuQEHCBAZCSQELC9ijHNQguCbgNG+QgHFBAHHsIAJHtQAIFTAPH5IATKjIAWNrQAfVVgLPAQgGIFgTGpQgpOjhkJhQhTHSh8EBQg6BqhFA6QhSBfhgAcQiIBuiWgWQh3AMiIhZQhcg/hlhtQh5iTj3ilQg0grhLgyQiShsj2izQiKhbh3hmQiuh9hvhcQh0hhhZhEQiLh5hdhaIhJhJQhdhhhJgoIgOgIQglgNgSgVQgOgGgGgGQgJgQgWgKIgGgEQgahCguAIQgagtgxADQhYgKifgZQiWgdhwgKQh3gdjIBKQhtAzivBWQhiAzh/A2Ql9CflTBJQmkBjm8AIQj4AEkQgFQ1Aga9Tj2QjLgbjFghQiTgXiLgdQjhgyiQgiIgwgMQimgnhfgGQg1gEgtAHQhGAFhCAVQg5APgxAUQhpAohuBCQvGJDwvHPQiDA5iDA2Q/FM37ZCQQhUAHhTACIglAAQxfAAn121g");
	this.shape_691.setTransform(928.4193,472.2569);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("rgba(0,0,0,0.996)").s().p("EibgBP3IgghgUgGdgUcABRgjeIAAgFQAju7B6wbIAGg4QBruQCgtwIAUhrQCNr5CZpQIAmiRQB/nUBpjrQAjhSA8hAQCri9Q4kMQBqgbBygaQQHjzZOkUIEtgyQUxjfUli1IF7g0QOKh4GGghQEFgVCbAEQF9AEG7A6QDkAeDuArQGrBNGkBwQD3BDDuBMQFVBuEeB4QEPBzDPB2QB5BHBbBFQDtCiDhB5QAKAIANAHQCSBNG2ACQDFAAEygOQEhgPFGgVQGGgYD8gNQGYgUDbADQDHABCfAMQEUAMEuA2QAuAJApAJQC2AnGjBTICkAlQGgBiD6BnQEJB1A/CDQFFDNi8GlQg0CJgPHOQgKFCAHHrQADDXAGEUQAIFYAOHxIATKiIAXNrQAgVLgJPEQgFIEgRGoQgkOYhdJqQhKHJhtERQgyBug7BGQhJBxhVA1QiBCWiTALQh8AkiPhOQhig3hrhpQh8iIkPiUQg4glhSgsQifhdkNiZQiXhPiAhVQi/hth5hPQh9hVhhg/QiWhshjhWIhLhGQhchchFg2IgNgLQghgUgSgbQgMgJgGgKQgLgagSgXIgFgIQgWhbgkgLQgUg9gugJQhVgciigxQibg1hqghQh0g0jQBBQhqAri1BSQhjAvh/A1QmMCik+BIQmqBpmyAGQj3ADkNgGQ0/ge9Lj3QjKgbjEghQiSgZiLgdIluhVIgwgMQingnhegDQg0gCguAJQhFAJhCAbQg4ASgxAWQhoAuhsBAQvFJAwsHMQiDA5iDA1Q+/My7VCMQhVAHhSABIgUAAQxkAAn03Ag");
	this.shape_692.setTransform(929.2589,472.2311);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("rgba(0,0,0,0.996)").s().p("EibsBPtIgfhgUgGagUaABRgjVIAAgGQAiu5B6wXIAGg5QBruNCfttIAThsQCMr2CYpPIAniRQB9nOBnjwQAkhUAzhAQCWjARHkRQBpgaBygbQQDjzZLkTIEsgzQUtjfUhi1IF7g0QN2h2GYglQEMgYCPADQF9ABG6A3QDjAdDuAqQGrBLGjBuQD2BBDuBLQFVBrEeB1QEOBwDTBzQB6BEBeBCQEDCnC9CIQAKAJAMAIQCIBXG9AGQDBABE1gOQEYgNFQgWQF+gYECgOQGdgVDTAAQDFgBChAJQErAKETAxQAuAIApAKQCfAjG7BUIClAkQGbBdEDBhQEKBpBlB0QGADcjUF9Qg7B3gSHgQgLFAAGHrQACDUAGEWQAIFcAOHqIATKgIAXNrQAhVCgHPIQgDIEgPGlQggOOhVJyQhBHAhfEhQgqBygwBRQg/CDhKBPQh6C/iSAsQiAA7iXhDQhmguhyhnQh+h8kpiCQg7gfhZgmQishPkkh+QilhEiJhFQjQhbiBhEQiHhHhqg6QihhfhnhTQgpgiglgiQhbhXhBhDIgMgOQgdgagSghQgKgNgGgNQgNgkgPglIgEgMQgRhzgZgdQgQhPgrgTQhSgwilhKQighLhjg4QhyhMjXA5QhnAii7BOQhkAriAA0QmaClkpBIQmwBumoAEQj1ABkLgGQ0/gi9Cj3QjKgcjCgiQiRgZiKgeIlthWIgwgMQingnhdABQgzgBgvAMQhEANhDAfQg1AXgxAZQhnAyhrBAQvDI8wqHJQiDA4iCA1Q+7Ms7RCJQhUAGhSAAIgEAAQxnAAn03Kg");
	this.shape_693.setTransform(930.1242,472.2134);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("rgba(0,0,0,0.996)").s().p("EiCmBm4QxhgInx3MIgfhgUgGXgUZABRgjMIAAgGQAju3B4wUIAHg4QBquLCetrIAUhrQCLr0CXpOIAmiQQB7nKBmj0QAlhYArhAQB/jBRWkWQBpgbBygaQP+jzZJkUIErgzQUpjeUei1QC/gbC8gZQNhh0GqgpQEUgbCDABQF8gCG6A1QDgAbDwApQGqBJGiBsQD1A/DvBKQFUBpEfBzQELBrDZBxQB6BABiA/QEYCsCaCXQAIALAMAJQB/BhHCAIQC9ADE5gNQEPgMFagXQF1gYEKgOQGhgXDMgDQDDgDCiAGQFCAID5AsQAtAIApAKQCIAfHUBXICkAiQGXBYEMBaQEMBdCKBmQG7DqjsFVQhBBmgVHwQgNFBAFHpQACDTAGEXQAHFgAOHiIATKfIAYNsQAhU3gEPMQgCIDgNGkQgcODhNJ7Qg3G4hREwQgiB2gmBdQg1CVg/BoQh0DoiQBMQiDBSigg3Qhrgmh3hjQiChwlBhzQg+gYhiggQi5hAk6hkQizg3iSg1QjghLiLg3QiQg7hyg0QishThshPQgrggglghQhchSg8hSIgLgQQgaghgQgnQgJgQgGgRQgOgugMgzIgEgPQgMiMgPgwQgLhggngeQhPhCiohiQilhjhehOQhuhkjfAxQhlAZjABKIjlBaQmqCokTBHQm2B0mdABQj0ABkJgHQ0/gm84j4QjLgcjAgiQiQgaiKgfIlqhXIgwgMQingnhdADQgyACgxAOQhBARhEAlIhlA1QhmA5hpA9QvBI5wpHGQiCA4iBA0Q+3Mm7NCGQhNAFhLAAIgNAAg");
	this.shape_694.setTransform(930.9685,472.1733);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiEhklahiQi+g1oEhyQnthuj0hHQl/hxi8h9QihhshPiTQg9hxgRiXIgMjmQgHhxgkgpQhMhVirh7Qiph6hYhkQhsh8jmAoQiUAal6CSQm5Crj+BGQm8B5mTAAUgXQgACgiXgEpQljgwk+hJQkvhLhpgZQiogohdAHQhtAIh5BLQxGKjzQILUghDAODgc6ACLQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_695.setTransform(931.8273,473.9092);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiEhklahiQi+g1oEhyQnthuj0hHQl/hxi8h9Qkbi9h4k+QgNgig5i8QgihvgjgnQhOhYhUiEQhXiIhWhiQhsh8jmAoQiUAal6CSQm5Crj+BGQm8B5mTAAUgXQgACgiXgEpQljgwk+hJQkvhLhpgZQiogohdAHQhtAIh5BLQxGKjzQILUghDAODgc6ACLQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_696.setTransform(931.8273,473.9092);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiEhklahiQi+g1oEhyQnthuj0hHQl/hxi8h9QkZi8kOoLIi3l4Qhci8gzg6Qhsh8jmAoQiUAal6CSQm5Crj+BGQm8B5mTAAUgXQgACgiXgEpQljgwk+hJQkvhLhpgZQiogohdAHQhtAIh5BLQxGKjzQILUghDAODgc6ACLQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_697.setTransform(931.8273,473.9092);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("rgba(0,0,0,0.996)").s().p("ECNHBk6Qg1ghhPghQiFg3jdg3QjMgwn4hlIiygjQlnhKjPg0Ql/hkjFhvQg0gegzgmQkOi3jfl9QgJgFg2hnQg5hchFijIgZg+IhUi+QgthFhLgdQhAgShMgCIgaACQg4gBhlAbQhMAGiAAlIgrAKQh3AbhwAiQioA3iaAwQhPAZhDASQjDA2ivAdQj0ApjqACQiIABiOgCQ2EgX/VkOQhugOhrgRQjugmjdgxIjHgwIjTg0Qh2gchNgGQgkgDgdAAQhfADhgAuQgUAJgVALQhUAvhVAzQv+Jox0HnIiOA8Q/4NQ7/CJQguAEgsABQyaAnoA3+IgRgyUgGmgUfABTgjxIAAgGQAjvCB6whIAEgfQBtujCkuBIALg8QCTsdCgpkIAVhQQCNoOBxj1QAWguAZgmQCFjKSxkmIB6gdQQnj8ajkiICmgcQV9jsVwi/IDTgcQQiiOGdggQCOgLBUAAQHTgDIwBQQB/ASCDAXQIXBbIMCSQCIAmCFApQHZCSF0CjQCOA/B+BAQEFCHCeCAQCFBpBgBdQBCBGDKAeQCGAUDFADQEKAFH9gdIFXgVQJHgmFMgQQDVgKCEgCQF/gIEJAZQDFARCoAlQBAAPCaAdIGBBIQECAzDSA0QDTAzCkA1QIgCvBnDOQB+CgiXDeQhUCQgJMuQgCDKADD4QADFTANIGIANHRIAdQlIAOHmQApZcgOREQgEEUgHD0QglTLh9LoQg2E5hGDiQghBoglBWQiIFHi6BMIgCABQhTA2hnAAQieAAjNiCg");
	this.shape_698.setTransform(930.8463,472.4785);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("rgba(0,0,0,0.996)").s().p("EibrBPpIgRgzUgGogUgABSgj4IAAgFQAjvEB7wkIAEgfQBuulCkuDIALg7QCUsfCgpmIAWhQQCOoSBzjxQAVgtAegmQCcjJShkgIB6geQQqj8amkhICmgcQWBjsVzi/IDTgcQQ5iRGHgbQCKgJBcAAQHTAAIxBTQCAATCDAXQIXBdINCUQCIAnCFApQHbCUFyCnQCPBAB7BCQEICMCWCFQB4BlB4BTQBLA9DGAaQCGARDGACQERACH3gdIFWgVQJTgmFAgPQDSgJCKgBQGEgGEEAfQCyAQC/ApQBGAPCTAcIGBBKQEDA0DQA1QDTA2CiA3QIqC+AnDhQBfCRiCD4QhKCxgGMNQgCDJADD6QAEFXANIEIANHTIAeQmIANHlQApZmgRQ/QgEEUgID2QgpTYiGLdQg8E8hODbQgmBogrBRQiXEujQAXIgCAAQjEBllpi7Qg4gdhPgdQiGgwjhgwQjagrnthYIi1ggQlhhAjaguQl+hXjOhhQg2gagzghQk3ihjflNQgSgIg0hbQhGhag4ihQgLgggIgfQgth8gLhHQgfhGg1gmIhjgrQgJgCgKgBQghgThOANQgvgZhzAUIgoAEQh1AGhyAbQifAuioA0QhPAYhEASQjKA3inAdQjzAqjsAFQiJACiOgCQ2DgT/ekNQhugPhsgRQjvgljdgwIjIgvIjUg0Qh4gdhLgIQgjgEgdAAQhkgChcAnQgVAIgVALQhVAphXA0Qv/Jsx2HpIiPA8Q/7NW8DCLQgtAEgtABIhHACQxpAAn03Qg");
	this.shape_699.setTransform(929.8837,472.1713);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("rgba(0,0,0,0.996)").s().p("EibgBPwIgRgzUgGrgUhABTgj/IAAgEQAjvGB8wmIAEgfQBuunCkuFIALg8QCVshChpmIAWhRQCQoXB0jsQAVgrAjgnQCyjHSRkbIB7geQQuj8aokhICmgcQWEjsV2i/IDTgcQRQiUFygWQCHgHBiABQHVADIxBVQCBATCCAXQIYBgIOCWQCIAoCFAqQHbCWFxCqQCQBCB6BCQEJCRCOCKQBsBiCQBJQBVA0DAAWQCGAODHABQEZAAHwgeIFVgVQJggnE0gNQDPgICPgBQGJgDEAAkQCgARDVAsQBLAQCOAaIF+BLQEFA2DPA2QDTA4CgA5QI0DNgZD1QBACChtERQhBDUgDLrQgBDIADD7QAFFdANIAIANHVIAeQnIANHkQAoZxgTQ6QgFEUgJD4QgtTliPLRQhBFBhXDUQgrBngxBMQinEUjkgdIgDAAQi1A/mAigQg7gZhPgZQiGgpjmgpQjngnnjhLIi4gbQlcg2jigpQl+hKjXhSQg4gWgzgcQlgiNjhkcQgagLgyhOQhRhagtieQgJgggFggQggh2AFhSQgRhGgfgwQgigZgXgpIgLgJQgMglg3gBQgRg3hnAEIgmgDQhxgPh1AVQiUAji4A4QhPAYhEASQjQA5ihAdQjxArjvAGQiJAEiOgBQ2EgQ/lkNQhugPhtgQQjwgkjegwIjJguIjUg1Qh6gdhJgJQgjgFgdgBQhogHhZAhQgVAGgWAKQhVAkhZA2QwAJvx4HrIiPA9UggAANagcGACOIhaAGQgqACgpAAQxnAAn13Jg");
	this.shape_700.setTransform(928.955,472.1927);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("rgba(0,0,0,0.996)").s().p("EibWBP3IgRgzUgGugUiABTgkHIAAgDQAkvHB8wpIAEggQBtuoCmuHIALg8QCVsjCipnIAWhRQCSobB1jpQAUgqApgnQDJjFSBkWIB6gdQQyj8aqkhICngcQWHjtV5i/IDTgcQRniWFdgRQCDgGBpACQHWAGIyBXQCBAUCDAXQIYBiIOCZQCKAoCEAqQHcCZFwCtQCPBDB5BEQELCWCGCOQBgBfCoA/QBeAsC7ARQCGAMDIgBQEggDHqgdIFUgWQJtgnEogLQDMgICUAAQGOAAD7AoQCOATDsAuQBQARCIAZQC0AjDJAoQEHA4DNA4QDTA6CfA7QI9DchZEJQAhBzhYEpQg3D3gCLKQABDGADD9QAGFiANH8IANHYIAeQpIAMHiQAnZ8gVQ1QgFEUgKD5QgwTziZLFQhHFEhfDOQgxBmg3BHQi1D7j6hSIgDAAQilAamYiGQg+gVhPgUQiGgijrgjQj1ginXg+Ii8gWQlWgujsgiQl9g+jghEQg5gRg1gXQmJh3jhjsQgjgPgvhBQhehZghibQgGghgCghQgUhvAVhdQgDhIgJg5QgTgcADg9IgDgNQAKg3gggRQAOhUhcgNQgRgGgSgEQhugjh5AOQiJAajGA6QhQAYhEATQjXA7iaAcQjvArjyAKQiJAFiOgBQ2EgN/tkMIjcgfQjwgjjfgvIjLguIjUg0Qh9gehGgLQgigGgegCQhtgLhVAaQgVAFgXAIQhWAghaA3QwCJyx6HuIiPA9UggDANfgcJACQIhbAHQgxADgwAAQxjAAn13Cg");
	this.shape_701.setTransform(928.2757,472.207);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("rgba(0,0,0,0.996)").s().p("EibcBP/IgSg0UgGwgUjABTgkOIAAgCQAkvJB8wrIAEggQBuurCnuJIALg8QCVslCjpnIAWhRQCUohB2jkQAUgoAugoQDgjDRwkRIB6gdQQ3j8askhICngcQWKjtV8i/IDTgcQR+iYFIgNQB/gFBwADQHYAJIyBZQCBAVCDAYQIZBkIOCbQCLApCDArQHeCbFuCwQCQBFB4BFQEMCbB+CSQBUBcC/A1QBoAjC2ANQCGAJDJgDQEogEHjgeIFTgWQJ5goEdgJQDIgHCaABQGUACD2AtQB7AUECAxIDZApQC7AkDAAoQEIA6DMA5QDTA8CdA+QJHDqiZEdQACBkhEFCQgsEZAAKpQABDFAED/QAGFnAOH4IANHaIAeQqIAMHiQAmaGgXQwQgGEUgKD6Qg1UBihK5QhOFJhnDHQg2Blg9BCQjEDikQiHIgCgBQiWgLmwhsQhBgQhPgQQiGgbjvgdIrQhNIi/gSQlRgkj1gdQl8gxjpg1Qg7gOg2gRQmyhjjhi7QgsgSgtg0QhphYgWiZQgEghABgiQgGhpAkhnQAMhJANhDQgFggAehRIAFgSQAghJgKgfQAshyhPgeQgRgJgRgHQhqg4h8AIQh/APjUA+QhQAYhFATQjdA9iTAbQjvAtj0ALQiJAHiPgBQ2DgJ/1kMIjdgeQjxgjjgguQhrgWhggXIjWg1Qh/gehDgMQgigHgegEQhxgPhSATQgWAEgWAHQhXAchcA4QwDJ0x8HxIiQA9UggHANkgcMACTIhbAHQg3AEg2AAQxiAAn026g");
	this.shape_702.setTransform(929.1636,472.2078);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("rgba(0,0,0,0.996)").s().p("EibmBQHIgSg0UgGygUlABTgkUIAAgBQAkvMB9wtIAEggQBuutCnuLIALg8QCXsnCjpoIAWhSQCWolB3jgQAUgnAzgnQD2jCRhkMIB6gdQQ6j8avkhICngcQWNjtWAi+IDSgcQSVicEzgHQB7gDB3ADQHZAMIzBcQCCAVCCAYQIaBmIPCeQCLApCDArQHfCeFsCzQCRBHB2BGQEOCgB2CXQBIBYDXAsQBxAaCxAJQCGAGDKgEQEvgHHegfIFRgVQKGgpERgIQDFgGCfACQGZAFDxAyIGCBJIDYAoQDCAmC4AnQEJA7DKA7QDTA+CcBAQJRD5jZExQgdBVgvFbQgjE7ADKIQACDEAEEAQAHFsANH1IAOHcIAeQrIAMHhQAlaQgZQsQgHEUgLD8Qg5UOiqKtQhTFNhwDAQg7BkhDA9QjTDJkli7IgDgCQiGgwnIhRQhEgNhPgLQiHgUjzgWQkRgYnBgkIjCgOQlMgaj/gXQl8gljygmQg8gKg2gMQnbhNjiiLQg1gVgqgoQh2hXgJiWQgCghAEgkQAGhiA0hzQAahJAjhNQAKgjA5hkIAMgXQA2hcANgtQBKiRhDguQgPgMgQgLQhnhMh/ABQh1AFjjBCIiWArQjjA+iMAbQjtAtj2APQiLAHiOAAQ2DgG/9kLIjfgeQjxgijhgtQhpgWhjgWIjWg1QiBgghBgNQgigIgegEQh2gUhNAMQgXADgXAGQhYAWheA6QwEJ4x9HyIiRA+UggLANpgcPACWIhcAHQg+AEg8AAQxeAAn12yg");
	this.shape_703.setTransform(930.3721,472.1852);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiEhkprg6QlGgevUgyQuQgumpgvQqPhJi9h9QighrAojGQAeiRCajpQAcgqBkiQQBMhuAjg7QBoivg2g/Qhuh+iUgGQhrgFjyBGQlYBiitAjQlwBImOAAUgXQgACgiXgEpQljgwk+hJQkvhLhpgZQiogohdAHQhtAIh5BLQxGKjzQILUghDAODgc6ACLQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_704.setTransform(931.8273,473.9092);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("rgba(0,0,0,0.996)").s().p("ECNCBk+Qhng8kvgrQiTgVjMgQQlagcvBgsIkigNQqsgilzgjQqAhAjUhuQgbgQgXgTQhuhXAKiOQgIh/BrjLQAHgmBJh+QAvhiAUg3QAOgiAKgeQAhhvgjg2Qglg0gkgkQg5gug/gNQhFgPihAlIgZAFQhjAahCAKQhvAXhNAMIgWACQhiAGiDAEQhagHhnAAIjaACIgtAAIjaACQiNABiHgGQlYgOmHgbQmNgbmIgkQschItqh1QhygPhugSQjqgljZgwIjPgyIjKgyQh8gehQgGQgfgCgaABQhiAChjAxQgSAIgRAKQhXAvhZA2Qv7JmxwHlIiUA+Q/0NP7+CJQgvADguACQyYAkn/37IgRg1UgGmgUfABTgjxIAAgEQAjvBB6whIAEggQBtuiCkuAIALg+QCTsaCfpkIAWhTQCMoKBxj2QAWgwAbgnQCFjKStklIB+geQQkj8afkgICtgdQV6jsVsi+IDageQQbiNGdggQCTgLBXAAQHOgDIsBPQCDATCIAXQISBaIHCRQCNAmCKArQHTCQFwChQCTBBCCBDQD/CDCcB+QCKBrBkBgQA/BDDCAfQCJAVDNAEQEHAEH0gcIFjgVQI9glFKgRQDegKCHgDQF2gHEGAYQDLAQCuAnQA9AOCQAbIGOBLQD7AyDMAyQDbA1CpA2QISCsBrDIQCJCkiaDlQhTCPgJMfQgDDQADECQADFNANH9IANHgIAdQUIAOH3QApZPgORAQgEEdgHD8QgkS9h8LlQg3FEhIDnQgfBfghBPQiEFFi3BSIgRAKQhVA4hqAAQidAAjLh+g");
	this.shape_705.setTransform(930.8247,472.5226);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("rgba(0,0,0,0.996)").s().p("EibrBPqIgRg2UgGogUgABSgj4IAAgDQAjvDB7wkIAEggQBuukCkuCIALg+QCTsdChpkIAWhUQCOoPByjxQAWguAfgoQCdjISckfIB+gfQQpj8aikgICsgdQV9jsVwi+IDageQQxiPGIgbQCPgKBeABQHQAAIsBRQCEAUCIAXQITBdIICTQCMAnCKArQHUCSFvClQCUBDCABDQEBCJCUCCQB9BoB9BWQBIA7C9AaQCJASDOACQEPACHtgcIFigWQJKgmE+gOQDagKCNgBQF8gFEAAdQC5ARDFAqQBCAOCLAaIGMBMQD8A0DLAzQDbA4CnA4QIcC7ArDcQBoCViFD/QhJCwgHL/QgCDPADEDQAFFTAMH5IANHiIAeQWIANH1QAoZagQQ7QgEEegID9QgpTKiELZQg9FIhSDhQgjBdgnBKQiUEtjNAcIgSAGQjGBrlri2Qh2g0kkglQiSgSjPgPQlvgZutgmIkngLQqfgemCgfQpzg3jpheQgcgOgXgQQh0hKgOh4QguhsA8itQgOgjAthsQAThWAEgzIALg6QAMhngcg7Qgdg0gVgoQgpgwglgWQgpgZhqAOQgKABgFAAQhIAPgcgGQhEAEgzABIgOAAQgvgThxgJQhOgZhmgIQhigFh4ACIguABIjcAGQiSADiBgGQlTgSmNgdQmggdl1giQsuhJtWhxQhygQhvgRQjqgkjagvIjQgyIjLgyQh+gehNgHQgfgDgagBQhngChgAqIgjAPQhYArhaA2Qv9JqxyHnIiVA/Q/4NU8ACLQgwAEguABIhEABQxqABn03Pg");
	this.shape_706.setTransform(929.8521,472.1908);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("rgba(0,0,0,0.996)").s().p("EibfBPxIgRg2UgGrgUhABTgj/IAAgDQAjvFB7wmIAEggQBuumCluFIALg9QCUsgChplIAXhTQCPoUB0jtQAVgtAlgoQC0jGSMkaIB+gfQQtj7akkhICsgdQWBjsVzi+IDZgdQRJiSFzgXQCLgIBlACQHRADItBUQCEAUCIAYQITBeIJCWQCNAoCJArQHWCVFtCoQCVBEB+BFQECCOCNCHQBwBkCVBLQBSAzC4AWQCJAPDPAAQEWAAHogdIFggWQJXgmEygNQDXgJCSAAQGBgCD8AiQClARDdAuQBHAPCFAYIGLBNQD+A1DJA1QDbA6ClA7QImDKgVDwQBHCFhwEZQg/DTgFLeQgBDNAEEFQAFFYANH2IANHkIAdQXIANH0QAoZlgTQ2QgFEegJD/QgsTYiOLMQhDFNhbDZQgoBdgtBFQijEUjjgaIgTACQi3BJmEiYQiEgtkaggQiRgPjSgNQmEgWuaggIkqgKQqTgZmSgaQpkgukAhPQgbgMgYgNQh7g9gmhhQhThbANiPQgjgfAShaQgLhJgLgvIgCg0QgKhggUhAQgWg0gGgtQgXgxgNgeQgLglg0gIQgGAAABgDQgtAFAJgYQgZgNgYgKIgGgEQADgqhdgXQhDgrhkgPQhfgLh9ADIguABIjdAJQiYAGh7gHQlOgWmUgeQmzgglggfQtBhKtChuQhygPhvgQQjrgkjbguIjRgxIjMgyQiAgfhLgJQgegEgagBQhsgHhcAiIgkAOQhZAlhcA4Qv+Jsx0HrIiVA/Q/8NY8ECPIheAFQgpACgpAAQxnAAn03Hg");
	this.shape_707.setTransform(928.9057,472.2085);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("rgba(0,0,0,0.996)").s().p("EibTBP5IgSg2UgGtgUjABTgkGIAAgCQAjvHB8wpIAEggQBuuoCmuGIALg+QCVsiChpmIAXhTQCSoZB0jpQAVgrAqgoQDLjER8kWIB+geQQxj8amkgICtgdQWDjsV3i+IDZgdQRgiVFegSQCHgGBsACQHTAGItBWQCFAVCHAYQIUBiIKCXQCOApCIAsQHXCXFsCrQCVBGB9BGQEECTCECMQBkBgCtBBQBcAqCzASQCJAMDQgBQEdgDHigdIFfgWQJjgnEngLQDTgICYABQGGAAD3AnQCSATD1AwIDLAnQC5AkDRAqQD/A3DIA2QDbA8CjA9QIvDZhVEFQAmB2haEzQg2D0gCK9QAADNAEEGQAFFdANHyIAOHmIAdQaIANHyQAnZwgVQxQgGEdgKEBQgwTliXLBQhKFShjDRQgtBbgyBCQi0D6j5hPIgTgCQipAnmdh8QiSgkkPgbQiQgNjWgKQmZgUuGgaIkugIQqHgUmhgWQpWgmkWg/QgcgJgXgKQiDgwg9hLQh5hIghhxQg5gcgKhIIhBhoQgKgYgGgXQgghXgLhFQgPg1AJgxQgGgyAMgoQASgvADgfQgCgBAHgGQgTgFAugoQAUggABgVIADgHQA0hChJgkQg3g+hjgWQhagRiDAEIguACQhVADiKAJQidAJh2gIIrjg5QnGgilMgeQtThKsuhqQhzgPhvgRQjsgijbguIjTgwIjMgyQiDgghHgKQgfgFgagCQhxgMhYAbQgSAFgTAGQhZAhheA5QwAJwx2HsIiVBAUggAANdgcIACRIheAHQgwACgvAAQxkABn03Ag");
	this.shape_708.setTransform(928.0439,472.2028);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("rgba(0,0,0,0.996)").s().p("EibaBQBIgTg3UgGwgUjABUgkOIAAgBQAjvJB9wrIAEghQBuuqCmuIIALg+QCWskCipnIAXhTQCUoeB1jkQAVgqAwgoQDijDRrkQIB+geQQ1j8apkgICtgdQWGjsV6i+IDZgdQR4iYFIgNQCDgFB0ADQHUAKItBYQCGAVCGAZQIVBkIKCZQCPAqCIAtQHYCaFrCuQCWBHB6BIQEGCYB8CQQBXBdDGA2QBmAiCuANQCJAJDRgDQEkgEHcgeIFdgWQJwgnEbgKQDQgHCeABQGLADDzAsQB+AUEMAzIDLAnQDCAlDGAqQEBA4DHA4QDaA9CiBBQI5DoiWEYQAFBnhFFNQgrEXAAKcQABDLAEEIQAGFhANHvIAOHpIAdQbIANHxQAmZ7gYQrQgGEegLECQg0TzigK1QhQFWhtDKQgyBag3A9QjEDikOiFIgUgGQibAEm2heQifgdkGgVQiOgKjagJQmugQtygVIkygGQp7gPmxgSQpHgdktgwIgzgNQiJgjhVg1Qieg2hQhTQhOgYgmg2QhDgxgqgnQgSgVgMgUQg1hQgEhKQgHg1AYg2QALgyAlgxQAwg6A5g1QACgDAMgIQAJgQBTg5QA/gyAcgfIALgMQBmhZg1gyQgshPhigdQhWgYiIAFIgvADQhPAEiRALQijAMhwgKQlCgcmigiQnZgkk4gcQtmhKsahnQhzgPhvgQQjtgijbgsIjUgvIjNgzQiFghhFgMQgegFgbgDQh2gRhUAUQgTAEgTAFQhZAbhhA7QwAJzx4HvIiWBAUggEANigcLACUIhfAHQg2AEg1AAQxhAAn124g");
	this.shape_709.setTransform(929.0041,472.2074);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("rgba(0,0,0,0.996)").s().p("EibkBQJIgTg3UgGygUkABTgkVIAAAAQAkvMB9wtIAEghQBuusCnuKIAMg+QCWsnCjpnIAXhUQCWojB2jgQAUgnA1gpQD6jBRakLIB/geQQ5j8arkgICtgdQWKjsV9i+IDZgdQSOiaEzgIQB/gDB6ADQHXANIuBaQCGAWCGAaQIWBlILCcQCPArCHAtQHaCcFpCxQCWBKB6BIQEHCeB0CUQBKBaDfAsQBvAZCpAJQCJAGDSgFQEsgHHVgeIFdgWQJ8goEQgIQDLgGCkADQGRAFDtAxIGPBLIDLAmQDJAnC9ApQECA5DGA6QDbBACfBDQJDD3jWEtQgcBXgwFnQghE4ACJ8QACDJAFEKQAGFnANHrIAOHqIAeQcIAMHxQAlaGgZQmQgHEegMEEQg5UBioKoQhXFbh2DDQg2BZg+A4QjTDIkki6IgVgKQiNgenOhBQiugVj7gPQiNgIjdgHQnDgNtegPIk3gFQpugKnAgOQo5gUlDggIg0gIQiQgWhsgfQjEgkh/g1QhkgUhAgkQhgglg6giQgagSgRgRQhLhJAEhOQAAg2Ang6QAdg0A+g5QBMhFBwhMIAYgQQAjgZB5hLQBrhEA2gqIATgOQCYhxgig/QgghihhglQhRgdiNAFIgvAEQhKAFiZANQinAPhrgKQk9ggmogkQnsgnklgZQt4hLsGhjIjjgfQjtggjcgsQhvgXhmgYIjOgzQiHghhDgNIg4gLQh7gVhQANQgTACgUAFQhaAWhiA7QwCJ3x6HxIiWBBUggJANngcOACXIhfAHQg+AEg8AAQxdAAn12wg");
	this.shape_710.setTransform(930.2895,472.1889);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiEhkukgkQnmgT3kgOQ1zgNp2ghQvIgzi9h+QighrCJieQBkh0Ewi1ID+iTQCWhXBRg0QDmiWgPhRQgVh0hggsQhNgjiSAGQgdABj2AZQitARhlgLQk4gkmvglIsQhAQwVhXtKhyQljgwk+hJQkvhLhpgZQiogohdAHQhtAIh5BLQxGKjzQILUghDAODgc6ACLQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_711.setTransform(931.8273,473.9092);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("rgba(0,0,0,0.996)").s().p("ECICBlDQhbgtklgcQkWgYmXgMQlAgGoygGIxagHQxOgFp3gWQiugGiMgIQuSgvjTh4QgUgMgOgMQiVh2B4icQBQhyDyiVIBMgtIEDiNIDviAQDciEAUhJQABg6gTglQgQgbgagRQgtgghlADQgDgCi1ASIgoAEQhcAGgugKQhlgRh0gRQhpgUiegTIgJgBQgmgKg8gLQgxgLgwgJQhngQhlgLIlZghIlcggQljghl0glQnQgtlzgwIgEgBQlkgtlChDIkQg+QhQgThCgNQiegkhrACQhYADhhAlQgaAKgaAMQifBFiMBGQhzAzhsA4QhmA1htA+QmKDdm2DVQmHC+mWCtQkoB+kkBwQ8PK15LCCQi6AQisgSQvlhhnR1NQgihlgfhrUgF7gULABOgiEIAAgGQAiugBzv5IAOh6QBktRCSs2IAqjoQB6qQCDoSQAoilApiVQBWk6BMjNQBHjHBqh4QCLioNdjlQDWg5EBg8QOZjYVpjzQE5g3FMg3QRXi6ROidQGkg7GOg1QH0hCFBgkQJ7hFEEALQCKABCTAJQHWAeIYBiQCNAaCMAeQIgB1H6CnIAyARQGZCOEpCUQClBRC8BIICoBIQFNClC4CVQBaBPEnAXQBjAHB2ABQGIgBKBgnIBXgFQIggfFKgCQDhgHCvAIQBMAABLACQIGAMEoBBIA0AMQCdApG3BgQEaBQCXBWQCVAxB5BeQIIDYBkEoQBBCThzCnQhMCcgIMKQgCDVAEEOQAFF8AQJfIAIFYIApYQQAOKeAEI4QAJS+gpMsQgLDJgOC5QgkGdg5E1Qg5EQhMCpQhEGbjjEdQhdDTh1CNQhkCSh6BFQhkA/h0AAQicAAi4hyg");
	this.shape_712.setTransform(930.208,472.6829);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("rgba(0,0,0,0.996)").s().p("EiDlBmpQwFg9nf1OQgkhmgghsUgGHgURABPgihIAAgGQAiupB2wEIAOh7QBmtaCUs+IArjpQB9qZCGoWQApinAqiVQBblDBPjGQBDizCTh4QC4iiNBjaQDag4ECg8QOnjYVzjzQE+g3FNg3QRii6RaidQGyg9GFgzQIRhEEqgdQJVg4E7AWQCMAGCUAMQHhApIUBrQCNAcCNAhQIuCDHvCxIAxASQGpCiENCjQCTBVDWA/QBXAfBXAdQE7CGDuByQBuA9EbAQQBmAEBzgBQHRgKI5ghIBXgEQIugbFGANQDHgCDRAUICZAHQIGAeEvBIIA0AMQDHA5GEBmQEcBrBPB2QBrA0BcCOQGbDzBRFvQA0CWhbCuQg8DMgDLfQAADTAEEUQAHGFAQJhIAJFbQAPJmAVOwQANKqAAI3QAATWg9MmQgQDNgVC3Qg4GyhXEXQhbD9h8BXQhLE5lqDjQh4CpiVBxQhwB1iKA5Qj0B2lGidQhvgikVgWQkqgQmEgIItxgFIxegBQxXAAqAgWQiugFiPgIQutgxi9iBQgTgOgOgOQiIiBBniaQBJh/DxiTQAkgWApgXQA/ghDJhmQCPhHBqgvQDQhxA3hBQAPgwgCggQgDgXgMgPQgOgdg4gBQAYgEhzAMIgUABQg1ADgKgKIhngjQgZgVhogUIgFgBQgCgNg1gQQgtgSgwgOQhigXhrgOQi/gWiegRIlggjIrjhDQnsgtlggrIgEAAQlmgqlGg+IkWg5QhDgQhUgPQiVgfh5gEQhZAAhlAaQgbAHgbAJQiuAwiGA3Qh7AohsAyQhmAwhxBBQmBDcnHDfQmLDBmaCvQkpB/kpBzQ8eK95dCOQhvAKhrAAQhJAAhHgFg");
	this.shape_713.setTransform(928.5988,472.6016);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("rgba(0,0,0,0.996)").s().p("EiCaBmrQwkgYnu1QQglhngihuUgGSgUVABQgjBIAAgEQAjuyB3wPIAPh8QBntjCXtGIAsjrQB/qiCJoYQAriqAqiVQBglNBSi+QBAifC8h4QDlidMljPQDdg4EDg7QO2jYV9jyQFCg3FOg3QRui7RlidQHAg+F8gxQIwhHERgWQIwgsFyAkQCOAICVAQQHsA1IPBzQCOAfCOAjQI9CRHjC7IAxAUQG4C2DxCyQCABYDwA3QBYAaBeAWQEnBmEkBPQCDAsEOAIQBqABBxgCQIYgUHygaIBYgEQI7gWFBAbQCtAFD1AeICbANQIEAvE2BPIA1AOQDxBHFQBtQEgCFAFCWQBDA4A+C9QEtEPA+G3QAnCYhDC0QgrD8ACK1QABDQAFEcQAIGNARJjIAIFdQARKmARN2QAKK4gDI1QgKTuhPMgQgWDQgbC1QhNHHh2D6Qh8DpisAFQhSDXnxCqQiTB+i1BWQh8BYiaAsQj8BalNhzQiDgZkEgPQk/gKlwgDQmZACnYAAQoaAFpIABQxgAEqIgVQivgFiSgIQvIgxiniMQgRgQgNgQQh9iLBWiYQBCiNDwiRQAlgWAqgWQBNgnDAhaQCLhAB2gsQDGheBag5QAcgnAQgbQAIgTADgMQARgagLgEQAzgHgyAFIACgBQgPAAAagLQACgQAKgSQA3gXgxgUIgBgCQAggRgtgVQgqgZgvgSQhdgfhxgRQi7gZingTQivgUi1gRQlDgfmsgjQoHgrlMgmIgEgBQlpgnlMg5Ikag0Qg3gMhmgRQiLgciHgJQhbgDhpAPQgbAEgbAGQi/AciAAoQiDAchrAtQhmAqh1BFQl4DbnYDoQmPDEmdCyQksCAktB1Q8vLG5uCZQiVAOiQAAIhJgBg");
	this.shape_714.setTransform(926.9833,472.6284);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("rgba(0,0,0,0.996)").s().p("EiaeBRnQgnhngjhvUgGegUbABSgjfIAAgCQAju8B5waIAPh8QBpttCZtOIAtjtQCBqqCMocQAtitAriTQBllYBVi2QA8iLDlh4QESiYMJjDQDhg4EEg6QPFjYWGjyQFHg4FPg2QR5i8RxicQHOhAFzgvQJNhJD5gPQILggGqAwQCPAMCWATQH3BBIKB7QCPAiCPAmQJLCfHYDFIAxAVQHHDKDVDBQBtBcELAuQBZAUBjAQQEUBGFaAtQCZAaEBAAIDbgFIQLgxIBZgDQJIgTE9ArQCTAKEXAqICdATQIEBAE9BWIA1APQEbBWEcBzQEjCfhDC2QAZA7AhDuQC/ErArH+QAbCZgsC7QgaEtAHKJQACDPAHEiQAJGWARJmIAIFeQASLnAMM8QAILEgHI0QgSUHhjMZQgbDUgiCyQhhHciUDcQifDWjbhMQhZB1p5BwQitBUjVA6QiJA8ipAeQkEA+lUhKQiWgPj0gIQlTgDleABQnFAHmrADQozAIoyAEQxqAJqQgUQivgGiVgHQvjgziSiWQgPgRgMgSQhxiWBEiWQA7iaDwiPQAmgWAqgWQBcguC2hNQCIg4CCgpIE5h9QAogeAigVQAUgPASgKQAwgWAigIIBdgMIAXgDIBVgPQA1gQBKgRQCGgZAHgVIACgCQBEgUgmgaQgmghgvgWQhYgmh3gUQi2gciwgWQiwgVi5gSQkygenIgjQojgqk3ghIgEAAQlugllQgzIkfgvQgrgJh3gTQiCgYiVgOQhdgHhsAFIg4AEQjOAHh7AZQiKAQhsAnQhlAmh5BIQlvDanpDyQmSDGmhC0QkuCDkyB2Q8/LP5/ClQi9ATi2ABIgUABQwzAAn41Hg");
	this.shape_715.setTransform(926.9181,472.5566);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("rgba(0,0,0,0.996)").s().p("EiaSBSNQgphogkhwUgGqgUgABTgj9IAAgCQAjvEB8wlIAPh+QBqt1CdtWQAWh6AXh2QCEqyCPofQAuiwAsiTQBqlhBXivQA5h3EOh4QFAiTLsi3QDkg3EFg6QPUjYWQjyQFMg4FPg2QSGi8R8idQHbhAFrgtQJrhMDhgJQHlgSHiA8QCQAQCXAWQICBMIGCDQCPAlCQApQJaCsHMDQIAwAWQHXDfC5DPQBaBgEmAmQBaAOBpAJQEBAmGQALQCtAID1gHIDcgKQKogmFjgOIBZgCQJWgPE4A5QB5ARE7A1ICfAYQICBSFEBcIA2AQQFGBlDoB6QEmC5iMDXQgQA+ADEeQBSFGAYJFQAOCcgUDCQgJFcALJfIALH2IAcQGIAJFfQASMpAIMCQAGLRgLIyQgbUfh2MTQghDXgoCxQh1HwizC/QjBDDkLieQhfATsBA2QjIAqj1AeQiVAfi4ARQkNAilaggQiqgGjkgBIqyAJQnxAMl/AGQpMAMocAGQx0AOqYgUQivgFiYgHQv+g0h8igQgOgUgMgTQhlihA0iUQAzinDwiNQAmgWArgWQBrg0CshBQCFgwCPgnQCwg5CggpQA1gUA1gQQAggLAggIQBPgTBPgMIC6gVIArgFQA9gGBjgNIDxghQDWgaA9gVIAHgCQBmgZgegeQgigogvgbQhSguh9gWQiygfi6gZQivgXi+gTQkigcnjgiQo/gpkjgcIgEAAQlxgilUguIklgqQgegGiKgVQh3gTikgVQhegKhwgFIg5gDQjfgMh1AJQiSAEhrAiQhkAhh+BMQlmDYn6D8QmWDJmlC2QkwCEk1B4Q9PLY6SCxQi9ATi6AIQgmACgnAAQwnAAn40lg");
	this.shape_716.setTransform(927.0574,472.417);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi1mASQn2AHt6AYQwNAfoWAOQ+5A0vQgcQ1Ugnh1jEQj3mgHEkHQFfjMMdh5QEcgqF/gnQDXgVF4giQElgcB0gWQCVgdgYglQgfgvguggQhNg0iDgaQlIhAmZgpQkSgcn/ghQpfgokOgXQoWgsnhhBIqhhgQkbgph9gGQiagIhrAdQhkAbiCBQQldDXoLEFQrAFfruElUgg0AM0gdJACMQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_717.setTransform(931.8273,473.9092);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi1mASQn2AHt6AYQwNAfoWAOQ+5A0vQgcQ1Ugnh1jEQj3mgGokHQFKjML2h5QEOgqFtgnQDNgVFlgiQEYgcBugWQCOgdgZglQgHgLAIgZQAKghAAgKQACg2h6gYQlIhAmZgpQkSgcn/ghQpfgokOgXQoWgsnhhBIqhhgQkbgph9gGQiagIhrAdQhkAbiCBQQldDXoLEFQrAFfruElUgg0AM0gdJACMQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_718.setTransform(931.8273,473.9092);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi1mASQn2AHt6AYQwNAfoWAOQ+5A0vQgcQ1Ugnh1jEQj4mhGhk4QFJj2LfitQHjhyKohVQCegUDTgYQB/gQgggGQlIhAmZgpQkSgcn/ghQpfgokOgXQoWgsnhhBIqhhgQkbgph9gGQiagIhrAdQhkAbiCBQQldDXoLEFQrAFfruElUgg0AM0gdJACMQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_719.setTransform(931.8273,473.9092);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("rgba(0,0,0,0.996)").s().p("EibiBQOIgUg8UgGzgUkABUgkUIAAgBQAjvMB9wtIAEghQBvusCnuKIAMhAQCVslCkpnIAWhVQCWoiB2jfQAVgpA3gpQD6jBRXkKICBgeQQ5j8apkfICwgeQWIjsV7i+IDfgeQSKiZEygIQCCgDB8ADQHUANIrBaQCJAXCKAaQISBlIICbQCTAsCKAtQHVCcFoCwQCaBLB6BKQEDCcB0CTQBLBbDkAsQBtAYCkAIQCMAHDWgFQErgHHPgeIFkgWQJ3goEOgIQDQgGCmADQGMAFDsAxIGWBMIDDAkQDOAoDAAqQD+A5DCA4QDgBCChBEQI6D2jTErQgcBYgwFuQghE4ADJ0QABDMAFEQQAHFjANHmIAOH0IAdQSIANH7QAlZ/gaQjQgHEkgMEIQg5T5inKlQhZFlh6DDQg0BSg6A1QjTDJkji6QgNgHgXgFIpmg9QkvgRohADQlsADowAMInTALIycAfImKALQtiAVqIAIQtgAKo4gNQ0SghjBiqQjLkKB5jZQAmhLBMhFQC4jXJAidQCXg6Dzg4QDchaE3hGQBCgQBNgQQBhgUB0gUQB0gRgUgJQi8g4jXgpQg/gMhAgKQhigQiUgRQicgOihgVIgCAAQh7gPh0gMQgvgIg7gJImJg4IglgEQiqgRi0gWImSgzIjfgdQg+gGoBg/IhdgLQkUggiDgCQiZgDhqAdQgcAHgdAMQhNAdhhA4QhWAzhiA3Qj4CJkbCPIieBPQqJE+qVEIIiMA3Q/+Ma8SCWIhkAIQg9AEg8AAQxcAAn12rg");
	this.shape_720.setTransform(930.239,472.1847);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("rgba(0,0,0,0.996)").s().p("EibYBQEIgUg7UgGwgUjABUgkMIAAgCQAjvJB9wrIAEghQBuuqCmuIIAMg/QCVsjCipmIAXhWQCUocB1jkQAVgqAxgpQDjjCRokQICBgeQQ0j8ankgICwgdQWFjsV4i+IDegeQRyiXFIgNQCGgFB1ADQHTAKIrBYQCIAWCJAZQITBjIHCZQCRArCLAtQHVCZFoCtQCZBJB9BJQECCWB7CPQBYBeDLA3QBkAhCpANQCLAJDVgDQEkgFHWgdIFkgWQJrgnEagKQDTgHChABQGGADDxAsQCAATERA1IDEAlQDFAmDLArQD8A3DDA3QDgA/CkBCQIwDmiTEXQAGBnhFFUQgrEWAAKUQAADPAFENQAGFfANHpIAOHyIAdQRIANH8QAmZzgXQoQgHEkgLEHQg1TrieKxQhTFghwDLQgvBUg0A5QjDDhkOiDQgMgEgVgDQihARm6hOQkKgZpFgBQlvAAotALInTAKIyfAdImJAJQtyAVp1AHQtRALpFgLQzPgbkNiOQjdjfA6i2QANg/Atg7QAni3GgiNQA8g6DCg+QCViDEdhjQA9gXBLgWQBdgbBygaQBogTgGgMQh5g/h+guIhNgXQg5gShegTQh3gNhHgaIgBAAQhAgShSgNQgTgLgzgNQi9gujFgjIgkgFQiigVi8gaImOg5QhqgQh2gNQhYgHnkgxIhcgIQkMgYiKADQiYAChqAdQgbAIgdAKQhMAdhjA3QhVAwhkA2QkGCLkNCGIidBNQqWE/qGEAIiMA3UggBAMXgcFACTIhlAHQg1AEg1AAQxgAAn021g");
	this.shape_721.setTransform(928.9095,472.2035);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("rgba(0,0,0,0.996)").s().p("EibSBP8IgUg7UgGsgUiABTgkFIAAgBQAjvHB8wpIAEghQBuunCluGIAMhAQCUsgCiplIAXhWQCRoXB0jpQAWgrAsgpQDLjER4kVICBgeQQxj8akkgICwgeQWBjrV1i+IDegeQRbiUFegSQCKgHBuACQHRAHIqBVQCHAWCKAZQISBgIGCXQCRAqCLAsQHUCXFqCqQCYBHB/BIQEACRCDCKQBlBiCyBBQBaApCuASQCLANDVgCQEcgDHcgcIFmgXQJegmElgLQDXgJCbABQGBABD1AmQCVATD5AxIDEAmQC8AkDVAsQD7A1DFA2QDfA9CmA/QInDXhTECQApB3hcE5Qg1D0gCK1QAADQAEEMQAFFZANHtIAOHwIAdQPIANH9QAnZogVQtQgGEkgKEGQgxTdiVK9QhMFbhmDTQgrBVgvA9QizD7j3hOIgggBQiuAxmghvQjmghpqgEQlxgCorAJInSAIIyiAbImJAJQuAATpiAIQtDAKpSgHQyMgVlYh0QjwizgEiTQgNgzAOgwQhqiZEBh7Qggg7CQhFQBPirEEh/QA4geBIgdQBYgjBxggQBdgUAGgOQg2hGgkgzIgbgaQgQgUgngUQhSgMASgfQgFgUgwgPQAJgPgrgRQieg7jdgvIgkgGIldg2Qj3goiUgWQhngRh6gMIo4gsIhbgFQkFgQiQAIQiXAGhpAeQgcAIgbAKQhLAchmA1Ii6BjQkTCNkAB9IidBMQqhE/p4D5IiMA2UggDAMUgb6ACPIhkAHQguACguAAQxjABn029g");
	this.shape_722.setTransform(928.0109,472.1974);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("rgba(0,0,0,0.996)").s().p("EibdBPzIgUg7UgGqgUhABTgj+IAAgBQAjvFB8wlIAEghQBtumCluEIAMg/QCUseChplIAWhVQCQoSBzjtQAVguAmgoQC1jGSJkaICBgfQQrj7aikgICwgeQV+jsVxi9IDfgeQRDiSFzgXQCOgIBoACQHPADIpBTQCIAUCJAZQIRBeIGCUQCQAqCMAsQHTCUFrCnQCYBFCABGQD+CNCMCFQByBmCYBMQBRAxCzAWQCLAQDTAAQEVAAHjgdIFngWQJRglExgOQDbgJCVAAQF8gCD6AhQCoASDhAuQBFAPB/AYIGTBOQD5A0DHA0QDfA7CoA8QIdDIgTDuQBMCHhxEeQg/DSgFLWQgBDRADEKQAFFVANHvIANHuIAdQOIAOH+QAnZdgSQzQgFEkgKEEQgsTPiMLJQhFFWheDcQglBVgqBCQijETjggXIgeAEQi8BRmGiPQjDgpqNgJQl0gDopAHInSAHIylAYImJAIQuPATpOAIQs0AKpfgFQxJgOmkhaQkCiHhDhwQgngogQgkQj7h6BhhrQh7g7BdhLQAKjUDqibQAzgmBFgjQBVgqBvgnQBSgVASgQQANhNA2g4QAJgPAOgNQAZgWAOgVQgsgMBsgkIABAAQA1gXgNgQQAkgSgigWQh/hIj1g7IglgHIlcg9QkEgviDgVQhkgSh9gLQiMgKmpgVIhbgCQj9gHiXANQiWAKhoAeQgcAIgbAKQhJAbhoA0Ii8BeQkhCPjxB1IidBKQqtFAppDyIiMA2UggGAMQgbtACMQgzAEgxACQgoACgmAAQxmAAn03Fg");
	this.shape_723.setTransform(928.8763,472.2004);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("rgba(0,0,0,0.996)").s().p("EibqBPrIgTg6UgGngUgABTgj4IAAAAQAjvDB7wjIAEghQBtukCkuBIAMg/QCTscCgpkIAWhVQCOoOByjxQAWgvAggoQCdjISakfICBgfQQnj7agkgICwgeQV6jsVui9IDfgfQQsiPGIgbQCSgKBgABQHOAAIpBRQCHATCKAYQIQBdIFCRQCQApCMAsQHRCRFtCjQCXBECCBFQD9CHCTCBQCABpB/BXQBHA5C4AbQCKATDTACQENACHpgcIFpgWQJEgmE9gOQDegKCPgBQF3gFD/AcQC8ASDJAqQBAAOCEAZIGVBOQD3AyDJAzQDfA4CpA6QIUC5AtDZQBvCXiHEDQhJCwgIL3QgBDSADEJQAEFPANHzIANHsIAdQMIAOH/QAoZTgQQ3QgFEkgIECQgoTCiDLVQg/FRhUDkQghBWgkBGQiTEsjKAgIgcAKQjJBwltivQiegyqygMQl3gFonAFInQAGIyoAVImJAIQueASo7AHQslALpsgCQwGgInwg/QkUhciChNQhBgcgugaQmMhag9hbQjYg7AshSQg8j8DQi4QAvgtBBgpQBRgyBtgsQBGgXAegTQBRhTCQg9QAhgQAngPQBDgYBEgWQgHgMDGgoIACAAQBwgZAVgSQBAgWgbgZQhghWkNhHIgkgIQiIgcjUgoQkSg1hygVQhggTiBgKQimgLmLgGIhbAAQj1ABidASQiVAOhoAfQgcAIgaAKQhIAahqAyIi+BbQkuCRjkBsIicBJQq5FApbDrIiLA1UggIAMNgbiACJQgzAEgxABIhAABQxpAAn03Ng");
	this.shape_724.setTransform(929.8386,472.1826);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("rgba(0,0,0,0.996)").s().p("ECM+BlDQh6g6rXgQQl5gHokAEQjPABkBADQoQAHqcAMImIAHQusARopAHQsWALp5ABQvDgCo8gkQkmgwjBgrQhagQhNgPQoeg7jchKQkzg8gGhXQiCkmC2jUQAqg0A/gvQBNg5BrgzQA8gZArgWQCUhZDphCQA5gRBBgQQBrgaB6gYQAfgLEfgtIADAAQCrgcA3gTQBcgYgSgeQhBhkklhSIglgJQiAgfjbgtImAhPQhegUiFgJQi/gMluAHIhaAEQjtAJikAXQiUAThoAeIg1ASQhHAahsAwIi/BYIoSD2IicBHQrEFApNDkIiLA1UggLAMKgbWACFQgyAEgxABQyUAin+34IgTg6UgGkgUfABTgjwIAAAAQAjvBB6wgIAEghQBtuiCjt/IAMg/QCSsaCgpjIAWhVQCMoIBxj2QAWgxAbgoQCFjJSqklICBgfQQkj7adkgICvgeQV4jrVqi+IDfgeQQUiNGfggQCWgMBYAAQHNgDIoBPQCGATCKAXQIQBaIFCPQCOAoCNAsQHRCOFuCgQCWBCCEBEQD7CCCbB8QCNBtBmBiQA+BCC8AfQCLAWDRADQEGAFHwgcQCqgJC/gNQI4glFIgQQDjgLCJgCQFxgHEEAXQDPAQCxAoQA8ANCJAbIGWBMQD2AxDKAxQDfA2CsA3QIKCpBtDGQCRCmidDpQhTCNgKMYQgCDUADEGQADFLANH3IANHpIAdQKIAOIBQApZHgOQ9QgDEkgIEBQgkSzh6LiQg4FMhKDrQgcBYgfBKQiDFFi0BWQgNAIgOAHQhXA7htAAQidAAjIh6g");
	this.shape_725.setTransform(930.8162,472.5941);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi5uAGQpXACwnARQzaAVp/AJUglAAAigSMgAlQ5cg0h1jEQj4mgEukPQDrjSJJiBQDVgvEdgqQBEgKF7gyQDmgeBZgVQB4gcgKgiQgkh4lghhQh3ghjjgyQkthBhQgTQjpg4okAjQonAjjwBYQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_726.setTransform(931.8273,473.9092);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi6VAFQplACxAARQz4AUqPAJUgl5AAigSogAlQ6Dg0h1jEQj9mkE/kTQD4jWJjiFQDegwEpgrQBMgLGGgzQDwggBdgVQB8gcgKgiQgjh4lAhZQhsgejPgsQkSg7hMgSQjmg5oRAjQoPAjjyBZQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_727.setTransform(931.8273,473.9092);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi67AFQp0ACxZAQQ0WAUqeAJUgm0AAhgTDgAmQ6qg0h2jDQkAmoFPkXQEFjaJ8iIQDogyE1gtIHlhAQD6ghBggVQCCgdgKgiQgkh3kfhQQhhgbi7goQj3g0hHgRQjkg7n9AkQn4Ajj0BaQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_728.setTransform(931.8273,473.9092);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi7iAEQqCACxzAQQ00AUqtAIUgnuAAhgTegAmQ7Rg0h2jDQkEmsFfkcQERjdKXiMQDxgzFAguQBegOGcg1QEDgiBkgWQCHgdgKgiQgkh3kAhHQhTgXiqgjQjbgthCgRQjjg8npAkQnfAkj3BaQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_729.setTransform(931.8273,473.9092);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi8JAEQqQAByMAQQ1SATq9AJUgonAAggT6gAmQ74g1h3jCQkHmwFvkgQEejgKwiQQD7g1FMgwQBngOGmg3QEOgjBmgWQCMgegKghQgjh3jfg+QhJgViWgeQjAgmg+gQQjgg9nVAkQnIAkj5BbQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_730.setTransform(931.8273,473.9092);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi8vADQqeACymAPQ1wATrNAJUgphAAegUVgAlQ8fg1h4jDQkLmzGAkkQErjkLJiUQEFg2FYgxQBvgQGxg3QEXgkBsgXQCQgegKgiQgjh2i/g2Qg+gRiDgZQijggg6gPQjeg+nBAlQmxAjj7BcQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_731.setTransform(931.8273,473.9092);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi9WADQqsABy/APMghqAAbUgqbAAegUxgAmQ9Gg1h4jCQkPm3GQkoQE4joLjiYQEOg3FkgyQB4gRG7g5QEhglBvgXQCXgfgKgiQgkh2ifgsQgygOhxgUQiHgag1gOQjdhAmtAmQmYAjj+BdQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_732.setTransform(931.8273,473.9092);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi99ACQq6ABzZAPMgiXAAbUgrVAAdgVMgAmQ9ug1h4jCQkSm7GgktQFFjrL8ibQEYg5Fwg0QCAgSHFg6QEsgmBzgXQCbgggKghQgjh2iAgkQgmgLhdgPQhsgSgxgOQjahBmZAmQmBAjkABeQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_733.setTransform(931.8273,473.9092);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi+jACQrJABzyAOQ3KASr7AIUgsOAAdgVpgAmQ+Ug2h4jBQkWm/GwkxQFSjuMWigQEhg6F8g1QCJgUHPg7QE2gnB2gXQChghgKghQgjh1hggbQgbgIhKgKQhQgMgsgNQjYhCmGAmQlpAjkCBfQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_734.setTransform(931.8273,473.9092);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi/KABQrXAB0LAOMgjzAAaUgtHAAcgWFgAmQ+7g2h5jBQkanDHBk1QFfjyMvijQErg8GIg3QCRgUHag8QFAgpB6gXQCmghgKgiQgjh1hAgSQgPgEg3gGQg1gFgngMQjXhDlxAmQlRAjkFBgQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_735.setTransform(931.8273,473.9092);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("rgba(0,0,0,0.996)").s().p("ECOTBlAQiBhi/KABQrXAB0LAOMgjzAAaUgtHAAcgWFgAmQ+7g2h5jBQkanDGvk1QFQjyMWijQEhg8F8g3QCOgUHLg8QE2gpB2gXQChghgKgiQgLgkgQg+QgHgfgHgGQgFgGgYgEQgmgGgkgLQjXhDlxAmQlRAjkFBgQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQhgBKhwAAQiYAAi1iLg");
	this.shape_736.setTransform(931.8273,473.9092);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("rgba(0,0,0,0.996)").s().p("EgZZBnXQ+7gLh5jBQkanDGElgQEwkTLYjgQEMhSFfhSQCRgiGchaQEihABrggQCWgsgKgiQgUhDh7gmQhvgiitgGQikgEiqAWQitAXh3AsQh8Atj5BvIoSDvQsvFvp7D0UgheAM2gcEACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYKQA1foggS5QguasjVMiQiJIFjRCiQjjCvk6jwQiBhi/KAsQrdAQ0FAqQ3oAzsLAZUgpkABVgV9AAAIjrgBg");
	this.shape_737.setTransform(931.8273,475.2098);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("rgba(0,0,0,0.996)").s().p("Eg+NBlYQkanCGUl1QE7kkLuj9QEUhdFphgQCXgpGmhpQEphKBvgkQCZgzgKghQgUhDhugjQhkgficgBQiTgCifAbQijAch1AqQh8Atj2BuIoJDtQshFrpuDxUgg3AMrgcEACHQzaBcoQ43UgG1gUmABUgkbQAjvNB+wxQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkwQXlj/XVjJQVmi6E2gDQI6gHLJB2QKgBxKPDGQKLDFHODnQHmDzCeDdQBbCAH2ANQFTAJMLgzQOkg+FFgIQKmgRFKBOQBzAaHrBaQIBBjFLBkQQPE4lgGXQh1CHALT2QAEHYAYNQIArYJQA1fpggS5QguasjVMiQiJIFjRChQjjCwk6jwQiBhi/yBBQrsAY0fA3MgkiABlUguHAB8gWdAAGIi5AAQ8wAAhzi4g");
	this.shape_738.setTransform(931.8273,480.8501);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("rgba(0,0,0,0.996)").s().p("EhCNBmkQkanDGjmKQFHk0MEkbQEchoFzhtQCegwGuh3QEyhWBxgoQCeg4gKgiQgUhDhigfQhYgciNADQiCACiUAfQiYAghzAqQh9AtjyBtQkFB2j6B0QsUFophDsUggRAMggcDACHQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYLQA1fnggS5QguasjVMiQiJIFjRCiQjjCvk6jwUgCBgBiggaABWQr8Ag04BFQ4mBUsrApUgvEACbgW4AAWQkVAEjyAAQ4UAAhping");
	this.shape_739.setTransform(931.8273,486.7046);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("rgba(0,0,0,0.996)").s().p("EhGNBnuQkanCGymfQFUlFMZk4QEjhzF9h8QCmg2G2iGQE7hhBzgsQCig+gKghQgUhEhVgbQhMgZh9AIQhxAEiKAkQiOAkhwApQh9AtjuBsQjkBnkTCBQsGFkpUDoQ/qMW8DCGQzaBdoQ43UgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQh1CIALT2QAEHYAYNPIArYLQA1fnggS6QguarjVMjQiJIFjRChQjjCwk6jwUgCBgBjghCABsQsLAn1SBTQ5FBks7AyUgwBAC6gXTAAkQm2ALlhAAQ01AAhgiZg");
	this.shape_740.setTransform(931.8273,492.6858);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("rgba(0,0,0,0.996)").s().p("EhKMBo4QkanDHBm0QFflVMvlWQErh+GHiJQCtg+G/iUQFDhsB2gwQCmhEgKghQgUhEhJgYQhBgVhsAMQhgAHh/ApQiEAohuAoQh9AujrBqQjCBYksCNQr4FhpHDkQ/EML8CCGQzaBdoQ43UgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQh1CIALT2QAEHYAYNPIArYLQA1fnggS6QguarjVMjQiJIFjRChQjjCwk6jwUgCBgBjghqACBQsbAv1rBhQ5kB0tKA6Ugw/ADZgXtAAzQpIAUmyAAQyCAAhYiMg");
	this.shape_741.setTransform(931.8273,498.7926);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("rgba(0,0,0,0.996)").s().p("EhOMBqAQkanDHQnJQFrllNEl0QE0iJGRiXQCzhEHIijQFLh3B5g0QCrhKgKghQgUhEg9gVQg1gShcARQhPAKh1AtIjlBUQh9AujoBpQigBJlFCaQrrFdo5DgQ+eMA8BCGQzaBdoQ43UgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQh1CIALT2QAEHYAYNPIArYLQA1fnggS6QguarjVMjQiJIFjRChQjjCwk6jwUgCCgBjgiRACVQsrA42EBuQ6DCEtaBDUgx8AD4gYIABCQrHAfnsAAQv4AAhRiCg");
	this.shape_742.setTransform(931.8273,504.9785);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("rgba(0,0,0,0.996)").s().p("EhSMBrHQkanCHfneQF3l2NamRQE8iUGailQC7hLHQiyQFUiCB8g4QCuhPgKgiQgUhDgvgSQgqgOhMAUQg+ANhqAyQhvAxhqAmQh+AujjBpQh/A6leCmQrdFZosDcQ93L28BCGQzaBcoQ43UgG1gUlABUgkcQAjvNB+wwQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYLQA1fnggS5QguasjVMiQiJIFjRCiQjjCvk6jwUgCCgBigi5ACqQs6A/2eB8Q6iCUtqBLUgy4AEYgYkABRQs4AqoXAAQuJAAhMh5g");
	this.shape_743.setTransform(931.8273,511.2444);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("rgba(0,0,0,0.996)").s().p("EhWMBsOQkanDHunzQGEmGNvmvQFEifGkiyQDChSHYjAQFdiOB+g8QCzhVgKghQgUhEgjgOQgfgLg8AZQgtAPhfA3QhkA1hoAmQh+AujgBnQhdArl2CzQrQFWofDYQ9RLq8ACGQzaBdoQ43UgG1gUmABUgkbQAjvOB+wwQBwu/CqucQCctPCrqAQClprCAjsQB0jWU2k+QRWkJcTkxQXlj+XVjJQVmi6E2gDQI6gILJB3QKgBwKPDHQKLDFHODnQHmDyCeDeQBbCAH2ANQFTAIMLgzQOkg9FFgIQKmgRFKBNQBzAbHrBZQIBBkFLBjQQPE4lgGXQh1CIALT2QAEHYAYNPIArYLQA1fnggS6QguarjVMjQiJIFjRChQjjCwk6jwUgCCgBjgjhAC/QtKBH23CKQ7BClt6BTUgz1AE3gY/ABgQuiA3o4ABQsrAAhHhyg");
	this.shape_744.setTransform(931.8273,517.556);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("rgba(0,0,0,0.996)").s().p("EhaMBtUQkanCH+oIQGPmXOFnMQFMiqGujAQDIhZHijPQFkiZCBhAQC3hagKgiQgUhEgWgKQgTgIgsAdIhxBOQhZA5hmAlQh+AujdBnInKDbQrCFSoSDUQ8qLg8ACGQzaBcoQ43UgG1gUlABUgkcQAjvMB+wxQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYLQA1fnggS5QguasjVMiQiJIFjRCiQjjCvk6jwUgCCgBigkJADUQtZBO3RCYQ7gC1uKBbUg0yAFXgZaABuQwEBGpQAAQrdAAhDhrg");
	this.shape_745.setTransform(931.8273,523.9143);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("rgba(0,0,0,0.996)").s().p("EhaMBtUQkanCGcndQFDl2L7mQQEZiTFuikQCphMGdixQExiCBug3QCchPgKgiQgThBg5ADQgtAChbA0Qg3AfiDBRQh+BIhkAlQilA8n9D5QoaEImZCgQ2EIl8DCHQzaBcoQ43UgG1gUlABUgkcQAjvMB+wxQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYLQA1fnggS5QguasjVMiQiJIFjRCiQjjCvk6jwUgCCgBigkJADUQtZBO3RCYQ7gC1uKBbUg0yAFXgZaABuQwEBGpQAAQrdAAhDhrg");
	this.shape_746.setTransform(931.8273,523.9143);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("rgba(0,0,0,0.996)").s().p("EhaMBtUQkbnCHkoiQF+mwNHnVIAkgVQiQA+iGA1Q8qLg8ACGQzaBcoQ43UgG1gUlABUgkcQAjvMB+wxQBwvACqucQCctPCrp/QClpsCAjsQB0jWU2k+QRWkIcTkxQXlj+XVjKQVmi6E2gDQI6gHLJB3QKgBwKPDGQKLDFHODnQHmDzCeDeQBbCAH2AMQFTAJMLgzQOkg9FFgIQKmgSFKBOQBzAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAEHXAYNQIArYLQA1fnggS5QguasjVMiQiJIFjRCiQjjCvk6jwUgCCgBigkJADUQtZBO3RCYQ7gC1uKBbUg0yAFXgZaABuQwEBGpQAAQrdAAhDhrg");
	this.shape_747.setTransform(931.8273,523.9143);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("rgba(0,0,0,0.996)").s().p("EhQiBuwQk7gVg6g9Qk6mSGKnrQC6k6IeldQB6hXBzhKIAegRIgaAKIj+BmQjXBWjfBRQmSCSl1BsQkNBOj0AxQjLAji4ANQjhAhjXADQhrADhuAJQhUABhXAEQiRABilAQQhrAKhqAIQyTBPoS2eQgahIgahNUgGwgUjABTgkQIAAAAQAkvJB8wtIAMhjQBsuJCgtoIAkjBQCKrUCVo0QAmiNAjh6QB2mVBii7QAvheDchlQFPidM2jGQCzgrDHgtQP7jjXpj/IHuhTQTmjMTbipQFKgtESgiQM/hqD9gHQFVgJFhAhQEVAZEvAwQFwA6FuBWQEpBFElBXQGcB6FWCJQC/BMCoBSQHeDoCuDXQAKAPAQAMQCLBpGhAYQB3AMCkAFQDyAHGIgTIC5gKQIzgjF0gUQDHgKB7gEQKSgTFEBAIAWAEIJYBpQD1AsDGAuQDUAyC9A1QBgAcBXAcQKqDphQEbQgOAyglA0QgHCOghP5QgDBYgCBpQgBG3AUMgIACBOQALGvAZNkIAHDxQASKtAJJ3QAQRggSMVQgTM2g5JkQg8KJhnGkQh+H6jBCzQjRC9kgjAQgggPiuAEQkCAuonAzQkNAjlUABQk3ATmsAlQqcA7wwBqIpaA9I7sC1It6BaQwKBptKBRQ+pC8x7BRQxABMphAAQjIAAiUgIg");
	this.shape_748.setTransform(927.5462,523.5779);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("rgba(0,0,0,0.996)").s().p("EhNRButQkwgRhJg1QlYlhEvm0QA9kVHalEQBmhWBJg7IAVgOIgZAJQh7AyiEAyQjTBTjjBTQmdCWllBnQkYBPjmAiQjGATihgRQjGAMizgjQhagOhfAAQhHgMhOgFQiCgRirARQhrALhpAGQyJBHoM2eQgbhJgYhMUgGsgUgABTgkFIAAgBQAjvFB7wpIAMhjQBruECftmIAjjAQCJrRCUozQAliLAjh6QBzmQBgjAQAxhmDKhmQE0igNIjMQCzgsDGgsQP0jkXmkAIHthSQTgjNTWioQFHgtEVgjQMqhnEPgMQFigOFNAeQEUAVEuAuQFtA2FwBTQEoBEEkBUQGYB2FZCGQDABKCoBPQHWDeC+DRQALANAPANQCbBtGGAjQB4AWCYAPQDiAUGUgPIC4gKIOng1QDEgKB+gFQKUgWE+A5IAVAEQCbAUG5BKQD2AoDDAuQDGAuDNA2QBfAaBYAcQKYDagjEHQgFAugcAwQBfCghCOyQgHBTgEBuQgHGrATMqIABBNIAjUNIAHDxQARKVALKOQASRWgQMYQgRMyg0JiQg3KBhfGrQh0HwiwDEQi+DKkGiQQgfgEidAMQj1BjoAA/QkJAylRgaQkbAMnGAkQqWA4w0BqIpXA7I7sC1It2BaQwVBqs4BPQ+PC7yKBVQx7BSpyAAQiTAAh2gEg");
	this.shape_749.setTransform(927.2324,523.2173);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("rgba(0,0,0,0.996)").s().p("EhKEBuqQkjgNhZgtQl3kxDVl7Qg/jxGUkqQBThWAegsIAOgMIgZAKIkABhQjPBQjnBVQmpCblUBhQkjBRjZASQjAADiJgwQisgHiPhJQhIgghSgJQg6gZhFgNQhzgkixATQhqAKhpAGQx9A+oI2fQgahJgYhMUgGmgUcABSgj6IAAgBQAivCB7wkIALhjQBruBCdtjIAji/QCHrNCToyQAkiLAih6QBxmKBejFQAzhvC3hmQEbiiNZjUQCygrDGgtQPtjkXikAIHshSQTbjNTSipQFDgsEXgkQMXhlEggQQFwgTE4AaQESASEvArQFpAzFxBRQEnBBElBSQGTBxFdCEQC/BICpBMQHODUDNDLQAMAMAPAMQCsBxFqAwQB4AfCOAZQDQAhGhgMQBWgDBhgFIOog0QDAgKCBgFQKWgZE3AxIAVADQCwARGgBCQD3AlDAAtQC5ArDbA3QBeAZBbAbQKEDLAMDyQACArgRAsQDECxhjNsQgLBOgGBzQgNGfARMzIACBNQAKG2AXNRIAHDwQARJ/ANKjQASRMgNMcQgOMvgvJgQgzJ5hXGxQhpHligDVQirDYjshgQgeAHiMAUQjnCXnbBMQkEBBlOg0QkAAEnfAjQqPA1w4BpIpWA7I7qC0ItzBaQwgBrskBOQ93C6yYBYQzIBaqEAAQhYAAhNgCg");
	this.shape_750.setTransform(927.2262,522.8785);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("rgba(0,0,0,0.996)").s().p("EhG2BunQkYgJhoglQmWkAB7lFQi7jLFPkRQA/hWgMgdIAGgJIgaAJIkABgQjLBNjrBWQm0CglFBbQktBTjLADQi7gNhyhPQiSgbhqhvQg2gxhEgTQgugmg7gUQhkg3i3ATQhqALhoAFQxzA1oC2gQgahIgYhLUgGhgUaABRgjuIAAgCQAju/B5wgIAMhiQBpt+CctfIAji+QCGrKCQoxQAkiJAih7QBumFBcjJQA1h5ClhlQEAimNsjZQCwgsDGgtQPnjkXekBIHrhSQTWjMTMipQFAgsEaglQMChjEygUQF/gYEhAWQESAPEuAoQFmAwFzBOQEmA/EkBPQGQBtFfCBQC/BGCqBKQHFDKDeDEQAMAMAPALQC8B1FPA8QB4AoCDAjQDAAvGtgJIC2gGQHogZHBgaQC8gLCEgFQKYgbEwAoIAVADQDFANGHA7QD5AiC8AsIGWBgQBdAXBcAaQJyC8A5DeQALAogHAoQEpDDiEMlQgPBJgJB3QgTGUAQM8IACBNQAJG5AYNHIAGDwQARJoAOK6QAURBgLMfQgLMsgrJeQguJxhPG3QhfHbiPDmQiZDljRgvQgdASh7AcQjZDLm1BYQj/BRlMhPQjlgEn4AjQqIAxw9BpIpTA6I7pCzItxBaQwrBssQBNQ9fC4ylBcQ0bBkqYAAIg4gBg");
	this.shape_751.setTransform(927.2175,522.5583);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("rgba(0,0,0,0.996)").s().p("EhJtBuCQm1jQAhkNQk3imEKj3QArhWg3gPIgBgFIgaAIIkBBeIm2CiQm/Ckk1BVQk4BVi+gMQi2gdhahtQh3gwhFiVQgmhDg1gcQghgygygdQhWhJi8AUQhqAMhoAEQxoAsn92hQgZhIgYhLUgGcgUXABRgjjIAAgCQAiu8B4wbIAMhiQBpt6CatcIAii+QCFrGCPovQAjiJAih7QBrl/BbjOQA2iCCThlQDlipN+jgQCvgsDHguQPfjjXbkBIHphTQTRjMTIipQE8gsEcglQLuhhFEgZQGNgdEMASQERANEtAlQFjAsF0BMQEmA8EjBNQGMBqFjB+QC/BECqBHQG9DADuC9QANALAOAKQDMB6E0BIQB4AyB4AsQCvA9G5gFIC2gGQHPgVHagdQC6gKCGgGQKZgeErAhIAVACQDZAKFtAzQD7AfC5ArQCeAlD5A4IC7AvQJfCuBmDJQATAkAEAlQGODUimLfQgRBEgMB8QgZGIAPNFIABBNQAJG9AXM9IAHDvQAQJRAQLQQAUQ4gIMiQgIMognJcQgoJqhIG8QhUHRh/D3QiGDyi4ABQgaAdhqAlQjMD/mPBkQj7BhlIhqQjLgMoRAjQqBAuxBBoIpRA6I7oCyItuBZQw2Bur9BLQ9GC3yzBgQ05BoqsAFQkNgFh3gdg");
	this.shape_752.setTransform(927.315,522.2553);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("rgba(0,0,0,0.996)").s().p("EhGsBuMQnUifg6jWQmziCDFjdQAXhWhhAAIgJgCIgaAIQhrAliXA2Im2ChQnKCoklBRQlDBViwgaQixguhDiLQhbhEgii8QgUhTgmglQgVhAgpglQhHhcjCAWQhqAMhnADQxeAjn32hQgZhIgXhLUgGXgUUABQgjYIAAgDQAiu4B3wWIALhiQBot2CZtZIAii9QCDrDCOouQAiiIAih7QBpl6BZjTQA3iKCBhmQDLirOPjnQCvgsDGguQPZjkXXkBIHohTQTMjMTCipQE5grEfgmQLZhfFWgdQGbgiD4AOQEPAJEsAjQFgApF2BJQEmA6EiBLQGIBlFmB7QC+BCCrBFQG2C2D+C2QAMAKAPAKQDbB9EZBVIDmBxQCeBKHFgBQBSgBBjgEQG3gRHzgfIE/gSQKbggEkAZIAWACQDtAGFUAsQD9AcC2AqQCQAiEIA5IC7AsQJNCfCUC1QAbAgAOAiQHzDljHKZQgVA+gOCBQgeF9ANNOIABBMQAIHBAXMzIAHDvQAPI6ARLmQAWQugFMlQgGMlgiJaQgjJihBHDQhJHFhuEJQh0EAieAwQgZAphYAsQi/E0lpBwQj2BxlGiFQivgUorAiQp6ArxFBoIpPA5QtUBVuTBdItrBZQxBBvrqBJQ8sC1zCBkQ0eBprBAPQkCgBiFgVg");
	this.shape_753.setTransform(928.279,521.8958);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("rgba(0,0,0,0.996)").s().p("EhDsBuVQnzhviUieQovhdCAjEQADhWiMAQIgQAAIgaAIQhnAhicA4Qi+BEj4BbQnWCtkUBLQlOBXijgpQirg+gsiqQhBhYADjiQgChlgYguQgJhNgggsQg3hvjJAXQhpAMhmACQxUAbny2jQgYhHgXhKUgGSgUSABQgjMIAAgEQAhu0B2wTIAMhhQBntzCXtVIAii9QCCq/CLotQAiiHAih7QBml1BXjXQA5iUBuhlQCxiuOijuQCtgsDGguQPSjkXUkCIHmhSQTIjMS9iqQE1grEhgmQLFhdFogiQGpgnDiALQEPAGErAgQFdAlF3BHQEmA4EhBIQGEBhFqB4QC+BACrBDQGtCsEPCvIAbATQDrCBD+BhQB5BFBiA/QCOBYHRACQBRgBBjgCQGegPINghIE+gSQKdgiEeARIAVABQECACE7AlQD+AZCzApQCDAfEXA5IC8ArQI5CQDCCgQAkAdAYAeQJYD2joJTQgZA5gQCFQglFxAMNYIABBMQAIHEAWMqIAHDuQAPIjATL9QAXQjgDMpQgEMhgdJYQgeJag5HJQg+G7heEaQhhENiEBhQgXAzhIA1QiyFolDB9QjxCAlDigQiUgbpEAhQp0AoxJBnIpNA4Qs1BRuwBgItpBZQxLBwrXBIQ8UC0zQBnQ0DBqrWAZIhYAAQi5AAh5gKg");
	this.shape_754.setTransform(929.2507,521.5668);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("rgba(0,0,0,0.996)").s().p("Eh4iBu/QimhOgUjJQgmhsAnkHQAPh3gKg3QAEhagXg0QgoiCjPAYQhpAMhlACQxJASnt2kQgYhHgXhKUgGMgUOABPgjBIAAgEQAhuwB1wPIALhhQBntwCVtSIAii8QCAq7CLosQAhiGAhh8QBjlvBWjcQA6idBchlQCXixOzj0QCtgtDGguQPLjkXQkCIHlhTQTCjLS5iqQExgrEkgnQKxhbF5gmQG3grDPAGQEMADErAdQFaAiF4BFQElA1EhBGQGABcFtB2QC9A+CsBAQGmCiEeCpIAbARQD8CFDiBuQB6BNBXBKQB9BlHdAFQBQABBjgCQGFgLIngjIE+gTQKeglEXAJIAWAAQEWgBEiAdQEAAWCvApQB2AbEmA7IC9AnQImCBDwCNQAsAZAiAaQK9EIkJIMQgcA0gTCKQgqFmAKNgIABBMQAHHHAWMhIAHDtIAjUgQAYQYAAMsQgBMfgZJWQgZJSgyHPQgzGwhOEsQhOEahqCRQgWA/g2A8QikGckeCJQjsCQlAi6Qh5gkpeAhQpsAlxOBmIpLA4QsWBNvOBjItlBZQxXBxrDBHQ77CyzeBrQzpBrrrAiQjqAHijgFQoSg+jvhnQqrg4A7iqQgRhWi2AeIgXADIgbAIQhjAeihA5Qi5BBj9BdQnhCykEBFQjTA2iJAAQhYAAg6gWg");
	this.shape_755.setTransform(930.2105,526.7356);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("rgba(0,0,0,0.996)").s().p("Eh7bBwSQihheADjoQgMiABMkuQAhiIAEhBQAQhmgNg9QgaiUjUAZQhpANhlAAQw+AKnn2kQgYhHgWhKUgGIgULABPgi2IAAgFQAgusB0wLIAMhgQBltsCUtPIAii8QB/q3CIosQAhiEAhh8QBglqBUjhQA8ilBKhmQB8i0PGj6QCrgtDGgvQPEjkXNkCQDsgpD4gqQS9jMSzipQEugrEngnQKchZGLgrQHFgwC5ACQEMAAEqAaQFXAfF6BCQEkAzEgBDQF8BZFwBzQC+A8CsA+QGdCXEvCjIAbAPQEMCKDHB6QB6BWBMBTQBsBzHqAJQBOABBkgCQFsgHJBglIE9gUQKggoERACIAVgBQErgEEJAWQEBASCsAoQBoAZE1A7IC+AlQIUByEdB4QA0AWAtAWQMiEakqHFQggAvgVCPQgxFaAJNpIABBMQAHHLAVMXIAHDsIAkUgQAZQOADMvQABMbgUJVQgUJKgqHUQgpGng9E8Qg7EnhQDCQgVBKglBEQiXHRj3CVQjoCgk9jVQhegsp3AhQpmAhxRBmIpJA3Qr4BKvrBlItjBYQxhBzqwBFQ7jCxzsBvQzNBssAArQjfALiyADQoxgNlJgwQsngTgKiRQglhVjgAtIggAGIgaAHQhfAcimA5Qi1A+kBBfQnsC2j0A/QjHAziCAAQhnAAg7gfg");
	this.shape_756.setTransform(931.2042,535.6919);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("rgba(0,0,0,0.996)").s().p("Eh+UBxkQichuAbkGQAPiVBvlUQAziZAShKQAdhzgEhFQgLinjaAbQzTCToP4rUgG1gUcABTgksQAivVB8w7QBwvJCpumQCbtZCqqFQClpyCAjsQBzjWU2k+QRWkIcUkxQXkj+XWjKQVmi6E2gDQI6gHLJB3QKgBwKODGQKLDFHPDnQHmDzCdDeQBbCAH2AMQFUAJMLgzQOkg9FEgIQKmgSFLBOQByAbHrBZQIBBjFLBkQQPE4lgGXQh1CHALT3QAFHXAXNQIAsYLQA0fnggS5QgtasjVMiQiJIFjSCiQjjCvk6jwUgCBgBjgkHADTQtbBP3OCWQ7fC0uJBcUg00AFVgZYABvUgj8ACdgB+gC+Qg/hflGBWQi6AxoBC9Qn4C7jkA5Qi+Awh8AAQh0AAg6gqg");
	this.shape_757.setTransform(932.1731,544.6178);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("rgba(0,0,0,0.996)").s().p("EiWFBUkMAAAipHMEsLAAAMAAACpHg");
	this.shape_758.setTransform(960.725,541.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_446}]},388).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[]},111).to({state:[]},670).wait(33));

	// legs7
	this.instance_19 = new lib.רגל1copy("synched",0);
	this.instance_19.setTransform(239.95,429.9,1,1,0,0,0,809.9,479.5);
	this.instance_19._off = true;

	this.instance_20 = new lib.רגל1מתפצל("synched",0);
	this.instance_20.setTransform(2466.8,118.9,1,1,0,0,0,1561,168.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},994).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},20).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[]},1).wait(469));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(994).to({_off:false},0).wait(1).to({x:313.75},0).wait(1).to({x:387.55},0).wait(1).to({x:461.35},0).wait(1).to({x:535.1},0).wait(1).to({x:608.9},0).wait(1).to({x:682.7},0).wait(1).to({x:756.5},0).wait(1).to({x:830.25},0).wait(1).to({x:904},0).wait(1).to({x:977.8},0).wait(1).to({x:1051.6},0).wait(1).to({x:1125.4},0).wait(1).to({x:1199.15},0).wait(1).to({x:1272.95},0).wait(1).to({x:1346.75},0).wait(1).to({x:1420.55},0).wait(1).to({x:1494.3},0).wait(1).to({x:1568.1},0).wait(1).to({x:1641.9},0).wait(1).to({x:1715.7},0).to({_off:true},1).wait(20).to({_off:false},0).wait(1).to({x:1610.25},0).wait(1).to({x:1504.85},0).wait(1).to({x:1399.45},0).wait(1).to({x:1294.05},0).wait(1).to({x:1188.6},0).wait(1).to({x:1083.2},0).wait(1).to({x:977.8},0).wait(1).to({x:872.4},0).wait(1).to({x:767.05},0).wait(1).to({x:661.6},0).wait(1).to({x:556.2},0).wait(1).to({x:450.8},0).wait(1).to({x:345.4},0).wait(1).to({x:239.95},0).to({_off:true},1).wait(470));

	// legs6
	this.instance_21 = new lib.רגל1copy("synched",0);
	this.instance_21.setTransform(239.95,429.9,1,1,0,0,0,809.9,479.5);
	this.instance_21._off = true;

	this.instance_22 = new lib.רגל1מתפצל("synched",0);
	this.instance_22.setTransform(1728.9,118.9,1,1,0,0,0,1561,168.5);

	this.instance_23 = new lib.רגל1צעדאחורה("synched",0);
	this.instance_23.setTransform(1169.4,424.65,1,1,0,0,0,1020.5,1436.6);

	this.instance_24 = new lib.Symbol9();
	this.instance_24.setTransform(1245.55,447.85,1,1,0,0,0,336.1,517.4);
	this.instance_24._off = true;

	this.instance_25 = new lib.Symbol11("synched",0);
	this.instance_25.setTransform(1124.55,191.15,1,1,-6.2864);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21}]},994).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},20).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},87).to({state:[{t:this.instance_24}]},71).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[]},1).wait(271));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(994).to({_off:false},0).wait(1).to({x:313.75},0).wait(1).to({x:387.55},0).wait(1).to({x:461.35},0).wait(1).to({x:535.1},0).wait(1).to({x:608.9},0).wait(1).to({x:682.7},0).wait(1).to({x:756.45},0).wait(1).to({x:830.2},0).wait(1).to({x:904},0).wait(1).to({x:977.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(20).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:872.35},0).wait(1).to({x:767},0).wait(1).to({x:661.6},0).wait(1).to({x:556.2},0).wait(1).to({x:450.8},0).wait(1).to({x:345.4},0).wait(1).to({x:239.95},0).to({_off:true},1).wait(470));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1208).to({_off:false},0).wait(1).to({regY:519.8,y:450.25},0).wait(14).to({rotation:-0.5239,x:1235.45,y:428.9},0).wait(1).to({rotation:-1.0477,x:1225.4,y:407.45},0).wait(1).to({rotation:-1.5716,x:1215.3,y:386.1},0).wait(1).to({rotation:-2.0955,x:1205.25,y:364.65},0).wait(1).to({rotation:-2.6193,x:1195.2,y:343.3},0).wait(1).to({rotation:-3.1432,x:1185.15,y:321.85},0).to({_off:true},1).wait(291));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1229).to({_off:false},0).wait(1).to({regX:8.6,regY:29.7,rotation:-7.3617,x:1116.15,y:175.55},0).wait(1).to({rotation:-8.437,x:1095.95,y:131.45},0).wait(1).to({rotation:-9.5123,x:1075.8,y:87.25},0).wait(1).to({rotation:-10.5877,x:1055.6,y:43.05},0).wait(1).to({rotation:-11.663,x:1035.4,y:-1.1},0).wait(1).to({rotation:-12.7383,x:1015.25,y:-45.3},0).wait(1).to({rotation:-13.8136,x:995.05,y:-89.45},0).wait(1).to({rotation:-14.8889,x:974.85,y:-133.7},0).wait(1).to({rotation:-15.9642,x:954.6,y:-177.9},0).wait(1).to({rotation:-17.0395,x:934.35,y:-222.15},0).wait(1).to({rotation:-18.1148,x:914.15,y:-266.35},0).wait(1).to({rotation:-19.1901,x:893.9,y:-310.65},0).wait(1).to({rotation:-20.2654,x:873.7,y:-354.95},0).wait(1).to({rotation:-21.3408,x:853.45,y:-399.2},0).wait(1).to({rotation:-22.4161,x:833.25,y:-443.5},0).wait(1).to({rotation:-23.4914,x:813,y:-487.75},0).wait(1).to({rotation:-24.5667,x:792.7,y:-532.05},0).wait(1).to({rotation:-25.642,x:772.45,y:-576.35},0).wait(1).to({rotation:-26.7173,x:752.15,y:-620.6},0).to({_off:true},1).wait(271));

	// legs5
	this.instance_26 = new lib.רגל1כיפוףcopy("synched",0);
	this.instance_26.setTransform(991.35,-28.95,1,1,0,0,0,853.9,984.1);

	this.instance_27 = new lib.רגל1copy("synched",0);
	this.instance_27.setTransform(947.7,429.9,1,1,0,0,0,809.9,479.5);
	this.instance_27._off = true;

	this.instance_28 = new lib.רגל1מתפצל("synched",0);
	this.instance_28.setTransform(991.05,118.9,1,1,0,0,0,1561,168.5);

	this.instance_29 = new lib.רגל1צעדאחורה("synched",0);
	this.instance_29.setTransform(1169.4,424.65,1,1,0,0,0,1020.5,1436.6);
	this.instance_29._off = true;

	this.instance_30 = new lib.Symbol10();
	this.instance_30.setTransform(1317.5,406.15,1,1,0,0,0,336.1,517.4);
	this.instance_30._off = true;

	this.instance_31 = new lib.Symbol12("synched",0);
	this.instance_31.setTransform(1190.25,142.9,1,1,-6.2864);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26}]},923).to({state:[{t:this.instance_27}]},60).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},20).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[]},1).wait(271));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(983).to({_off:false},0).wait(1).to({x:883.35},0).wait(1).to({x:819},0).wait(1).to({x:754.7},0).wait(1).to({x:690.35},0).wait(1).to({x:626},0).wait(1).to({x:561.7},0).wait(1).to({x:497.35},0).wait(1).to({x:433},0).wait(1).to({x:368.65},0).wait(1).to({x:304.3},0).wait(1).to({x:239.95},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(20).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:329.95},0).wait(1).to({x:419.9},0).wait(1).to({x:509.85},0).wait(1).to({x:599.8},0).wait(1).to({x:689.8},0).wait(1).to({x:779.75},0).wait(1).to({x:869.65},0).wait(1).to({x:959.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(383));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1137).to({_off:false},0).wait(1).to({regX:1021.5,regY:1439.5,x:1187.9,y:417.05,startPosition:1},0).wait(1).to({x:1205.4,y:406.55,startPosition:2},0).wait(1).to({x:1222.9,y:396.05,startPosition:3},0).wait(1).to({x:1240.4,y:385.55,startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).to({_off:true},1).wait(312));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1208).to({_off:false},0).wait(1).to({regY:519.8,y:408.55},0).wait(14).to({rotation:-0.5239,x:1306.9,y:386.7},0).wait(1).to({rotation:-1.0477,x:1296.3,y:364.65},0).wait(1).to({rotation:-1.5716,x:1285.7,y:342.75},0).wait(1).to({rotation:-2.0955,x:1275.1,y:320.8},0).wait(1).to({rotation:-2.6193,x:1264.55,y:298.85},0).wait(1).to({rotation:-3.1432,x:1254,y:276.85},0).to({_off:true},1).wait(291));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1229).to({_off:false},0).wait(1).to({regX:6.3,regY:27.9,rotation:-7.3617,x:1178.25,y:124.7},0).wait(1).to({rotation:-8.437,x:1157.05,y:79.5},0).wait(1).to({rotation:-9.5123,x:1135.7,y:34.2},0).wait(1).to({rotation:-10.5877,x:1114.5,y:-11},0).wait(1).to({rotation:-11.663,x:1093.2,y:-56.25},0).wait(1).to({rotation:-12.7383,x:1071.9,y:-101.55},0).wait(1).to({rotation:-13.8136,x:1050.6,y:-146.8},0).wait(1).to({rotation:-14.8889,x:1029.35,y:-192.05},0).wait(1).to({rotation:-15.9642,x:1008,y:-237.4},0).wait(1).to({rotation:-17.0395,x:986.75,y:-282.65},0).wait(1).to({rotation:-18.1148,x:965.45,y:-328},0).wait(1).to({rotation:-19.1901,x:944.1,y:-373.3},0).wait(1).to({rotation:-20.2654,x:922.8,y:-418.7},0).wait(1).to({rotation:-21.3408,x:901.45,y:-464},0).wait(1).to({rotation:-22.4161,x:880.15,y:-509.3},0).wait(1).to({rotation:-23.4914,x:858.85,y:-554.65},0).wait(1).to({rotation:-24.5667,x:837.5,y:-600.05},0).wait(1).to({rotation:-25.642,x:816.15,y:-645.45},0).wait(1).to({rotation:-26.7173,x:794.85,y:-690.85},0).to({_off:true},1).wait(271));

	// legs9
	this.instance_32 = new lib.חלקקטםמרגל("synched",0);
	this.instance_32.setTransform(-189.7,36.2,1.4077,1.4077);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1201).to({_off:false},0).wait(1).to({x:-177.55,y:39.8923},0).wait(1).to({x:-165.4,y:43.5846},0).wait(1).to({x:-153.25,y:47.2769},0).wait(1).to({x:-141.1,y:50.9692},0).wait(1).to({x:-128.95,y:54.6615},0).wait(1).to({x:-116.8,y:58.3538},0).wait(1).to({x:-104.65,y:62.0462},0).wait(1).to({x:-92.5,y:65.7385},0).wait(1).to({x:-80.35,y:69.4308},0).wait(1).to({x:-68.2,y:73.1231},0).wait(1).to({x:-56.05,y:76.8154},0).wait(1).to({x:-43.9,y:80.5077},0).wait(1).to({x:-31.75,y:84.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(192));

	// legs8
	this.instance_33 = new lib.רגל1צעדקדימהcopy("synched",0);
	this.instance_33.setTransform(722.8,399.1,1,1,0,0,0,571.9,1412.9);

	this.instance_34 = new lib.hip_fullcopy("synched",0);
	this.instance_34.setTransform(982.65,8.15,1,1,30.9068,0,0,-7.9,-127.2);

	this.instance_35 = new lib.show_full("synched",0);
	this.instance_35.setTransform(549.55,716.05,1,1,2.5153,0,0,60,-36.2);

	this.instance_36 = new lib.low_leg_full("synched",0);
	this.instance_36.setTransform(638,592.4,1,1,30.1583);

	this.instance_37 = new lib.up_leg("synched",0);
	this.instance_37.setTransform(788.6,324.8,1.0882,1,32.9471,0,0,-440.2,0.4);

	this.instance_38 = new lib.Symbol8();
	this.instance_38.setTransform(501.85,794.75,1,1,0,0,0,198.6,860.3);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},1057).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},89).to({state:[{t:this.instance_38}]},55).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[]},1).to({state:[]},1).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1201).to({_off:false},0).wait(1).to({regX:408.5,regY:448.4,scaleX:0.8443,x:683.05,y:382.85},0).wait(1).to({scaleX:0.6887,x:654.35},0).wait(1).to({scaleX:0.533,x:625.7},0).wait(1).to({scaleX:0.3773,x:597.05},0).wait(1).to({scaleX:0.2217,x:568.35},0).wait(1).to({scaleX:0.066,x:539.65},0).wait(1).to({scaleX:0.0897,skewY:180,x:511},0).wait(1).to({scaleX:0.2454,x:482.35},0).wait(1).to({scaleX:0.401,x:453.65},0).wait(1).to({scaleX:0.5567,x:425},0).wait(1).to({scaleX:0.7124,x:396.3},0).wait(1).to({scaleX:0.868,x:367.6},0).wait(1).to({scaleX:1.0237,x:338.95},0).wait(113).to({_off:true},1).wait(192));

	// jamp
	this.instance_39 = new lib.קפיצה2רגליים("synched",0);
	this.instance_39.setTransform(372.7,-78.35,1,1,0,0,0,199.2,900.6);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(278).to({_off:false},0).wait(1).to({regX:234.8,regY:942.7,x:408.3,y:-36.25,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({x:489.65,startPosition:16},0).wait(1).to({x:571,startPosition:17},0).wait(1).to({x:652.35,startPosition:18},0).wait(1).to({x:733.7,startPosition:19},0).wait(1).to({x:815.05,startPosition:20},0).wait(1).to({x:896.4,startPosition:21},0).wait(1).to({x:977.75,startPosition:22},0).wait(1).to({x:1059.1,startPosition:23},0).wait(1).to({x:1140.45,startPosition:24},0).wait(1).to({x:1221.8,startPosition:25},0).wait(1).to({x:1303.15,startPosition:26},0).wait(1).to({x:1384.5,startPosition:27},0).wait(1).to({x:1465.85,startPosition:28},0).wait(1).to({x:1547.2,startPosition:29},0).wait(1).to({x:1628.6,startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).to({_off:true},1).wait(1152));

	// legs3
	this.instance_40 = new lib.רגל1צעדאחורה("synched",0);
	this.instance_40.setTransform(1276.35,456.95,1,1,0,0,0,1082,1436.6);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(101).to({_off:false},0).to({_off:true},177).wait(1242));

	// legs4
	this.instance_41 = new lib.רגל1copy("synched",0);
	this.instance_41.setTransform(938.35,462.15,1,1,0,0,0,809.9,479.5);

	this.instance_42 = new lib.רגל1צעדקדימהcopy("synched",0);
	this.instance_42.setTransform(675.4,429.1,1,1,0,0,0,550.1,1413);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_41}]},101).to({state:[{t:this.instance_42}]},89).to({state:[]},88).wait(1242));

	// _legs2
	this.instance_43 = new lib.רגל1כיפוףcopy("synched",0);
	this.instance_43.setTransform(1060.3,-224.8,1,1,0,0,0,866.2,755.4);

	this.instance_44 = new lib.Symbol5();
	this.instance_44.setTransform(914,435.6,1,1,0,0,0,213.5,474.5);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_43}]},41).to({state:[]},60).to({state:[{t:this.instance_44}]},267).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_44}]},1).to({state:[]},1).wait(1043));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(368).to({_off:false},0).wait(1).to({scaleX:1.0394,scaleY:1.0394,x:928.85,y:408.3},0).wait(1).to({scaleX:1.0787,scaleY:1.0787,x:943.7,y:380.95},0).wait(1).to({scaleX:1.1181,scaleY:1.1181,x:958.55,y:353.6},0).wait(1).to({scaleX:1.1575,scaleY:1.1575,x:973.4,y:326.3},0).wait(1).to({scaleX:1.1969,scaleY:1.1969,x:988.3,y:298.9},0).wait(1).to({scaleX:1.2362,scaleY:1.2362,x:1003.2,y:271.6},0).wait(1).to({scaleX:1.2756,scaleY:1.2756,x:1018.05,y:244.2},0).wait(1).to({scaleX:1.315,scaleY:1.315,x:1032.9,y:216.9},0).wait(1).to({scaleX:1.3544,scaleY:1.3544,x:1047.75,y:189.55},0).wait(1).to({scaleX:1.3937,scaleY:1.3937,x:1062.6,y:162.2},0).wait(1).to({scaleX:1.4331,scaleY:1.4331,x:1077.45,y:134.85},0).wait(1).to({scaleX:1.4725,scaleY:1.4725,x:1092.35,y:107.55},0).wait(96).to({_off:true},1).wait(1043));

	// _legs1
	this.instance_45 = new lib.רגל1כיפוףcopy("synched",0);
	this.instance_45.setTransform(1004.3,-224.8,1,1,0,0,0,866.2,755.4);

	this.instance_46 = new lib.Symbol6();
	this.instance_46.setTransform(803.95,391.6,1,1,0,0,0,213.5,474.5);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45}]},41).to({state:[]},60).to({state:[{t:this.instance_46}]},267).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_46}]},1).to({state:[]},1).wait(1043));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(368).to({_off:false},0).wait(1).to({scaleX:1.0394,scaleY:1.0394,x:814.45,y:362.55},0).wait(1).to({scaleX:1.0787,scaleY:1.0787,x:825,y:333.45},0).wait(1).to({scaleX:1.1181,scaleY:1.1181,x:835.55,y:304.4},0).wait(1).to({scaleX:1.1575,scaleY:1.1575,x:846.05,y:275.35},0).wait(1).to({scaleX:1.1969,scaleY:1.1969,x:856.65,y:246.25},0).wait(1).to({scaleX:1.2362,scaleY:1.2362,x:867.2,y:217.2},0).wait(1).to({scaleX:1.2756,scaleY:1.2756,x:877.7,y:188.05},0).wait(1).to({scaleX:1.315,scaleY:1.315,x:888.25,y:159},0).wait(1).to({scaleX:1.3544,scaleY:1.3544,x:898.8,y:129.95},0).wait(1).to({scaleX:1.3937,scaleY:1.3937,x:909.3,y:100.85},0).wait(1).to({scaleX:1.4331,scaleY:1.4331,x:919.85,y:71.8},0).wait(1).to({scaleX:1.4725,scaleY:1.4725,x:930.4,y:42.75},0).wait(96).to({_off:true},1).wait(1043));

	// letters3
	this.instance_47 = new lib.Symbol4();
	this.instance_47.setTransform(784.1,837.5,1,1,0,0,0,213.8,130.2);
	this.instance_47._off = true;
	this.instance_47.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_47.cache(-2,-2,432,265);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(337).to({_off:false},0).wait(31).to({scaleX:1.0363,scaleY:1.0363,x:793.05,y:826.85},0).wait(1).to({scaleX:1.0727,scaleY:1.0727,x:802.1,y:816.2},0).wait(1).to({scaleX:1.109,scaleY:1.109,x:811.1,y:805.55},0).wait(1).to({scaleX:1.1454,scaleY:1.1454,x:820.1,y:794.95},0).wait(1).to({scaleX:1.1817,scaleY:1.1817,x:829.1,y:784.3},0).wait(1).to({scaleX:1.2181,scaleY:1.2181,x:838.1,y:773.65},0).wait(1).to({scaleX:1.2544,scaleY:1.2544,x:847.1,y:763},0).wait(1).to({scaleX:1.2908,scaleY:1.2908,x:856.1,y:752.4},0).wait(1).to({scaleX:1.3271,scaleY:1.3271,x:865.15,y:741.75},0).wait(1).to({scaleX:1.3634,scaleY:1.3634,x:874.15,y:731.1},0).wait(1).to({scaleX:1.3998,scaleY:1.3998,x:883.1,y:720.45},0).wait(1).to({scaleX:1.4361,scaleY:1.4361,x:892.15,y:709.85},0).wait(1).to({scaleX:1.4725,scaleY:1.4725,x:901.15,y:699.2},0).wait(1).to({scaleX:1.5763,scaleY:1.5763,x:897,y:684.65},0).wait(1).to({scaleX:1.6802,scaleY:1.6802,x:892.9,y:670.05},0).wait(1).to({scaleX:1.7841,scaleY:1.7841,x:888.8,y:655.5},0).wait(1).to({scaleX:1.8879,scaleY:1.8879,x:884.65,y:640.9},0).wait(1).to({scaleX:1.9918,scaleY:1.9918,x:880.55,y:626.4},0).wait(1).to({scaleX:2.0957,scaleY:2.0957,x:876.4,y:611.8},0).wait(1).to({scaleX:2.1995,scaleY:2.1995,x:872.3,y:597.25},0).wait(1).to({scaleX:2.3034,scaleY:2.3034,x:868.15,y:582.65},0).wait(41).to({_off:true},1).wait(1090));

	// letters2
	this.instance_48 = new lib.Symbol3();
	this.instance_48.setTransform(464,843.6,1,1,0,0,0,127,107);
	this.instance_48._off = true;
	this.instance_48.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_48.cache(-2,-2,258,218);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(261).to({_off:false},0).wait(1).to({regX:126.9,regY:106.9,x:463.9,y:843.5},0).wait(32).to({x:545.25},0).wait(1).to({x:626.6},0).wait(1).to({x:707.95},0).wait(1).to({x:789.3},0).wait(1).to({x:870.65},0).wait(1).to({x:952},0).wait(1).to({x:1033.35},0).wait(1).to({x:1114.7},0).wait(1).to({x:1196.05},0).wait(1).to({x:1277.4},0).wait(1).to({x:1358.75},0).wait(1).to({x:1440.1},0).wait(1).to({x:1521.45},0).wait(1).to({x:1602.8},0).wait(1).to({x:1684.2},0).wait(1).to({x:1678.3,y:847.8},0).wait(1).to({x:1672.45,y:852.1},0).wait(1).to({x:1666.55,y:856.4},0).wait(1).to({x:1660.7,y:860.75},0).wait(1).to({x:1654.85,y:865.05},0).wait(1).to({x:1648.95,y:869.35},0).wait(1).to({x:1643.1,y:873.65},0).wait(1).to({x:1637.25,y:878},0).wait(1).to({x:1631.35,y:882.3},0).wait(1).to({x:1625.5,y:886.6},0).wait(1).to({x:1619.6,y:890.9},0).wait(1).to({x:1613.75,y:895.25},0).wait(1).to({x:1607.9,y:899.55},0).wait(1).to({x:1602,y:903.85},0).wait(1).to({x:1596.15,y:908.2},0).wait(1).to({x:1590.3,y:912.5},0).wait(1).to({x:1584.4,y:916.8},0).wait(1).to({x:1578.55,y:921.1},0).wait(1).to({x:1572.7,y:925.45},0).wait(1).to({x:1566.8,y:929.75},0).wait(1).to({x:1560.95,y:934.05},0).wait(1).to({x:1555.05,y:938.35},0).wait(1).to({x:1549.2,y:942.7},0).wait(1).to({x:1543.35,y:947},0).wait(1).to({x:1537.45,y:951.3},0).wait(1).to({x:1531.6,y:955.6},0).wait(1).to({x:1525.75,y:959.95},0).wait(1).to({x:1519.85,y:964.25},0).wait(1).to({x:1514,y:968.55},0).wait(1).to({x:1508.15,y:972.9},0).to({_off:true},1).wait(1181));

	// letters
	this.MovieClip51 = new lib.Symbol2();
	this.MovieClip51.name = "MovieClip51";
	this.MovieClip51.setTransform(1386.35,911.1,0.997,1,0,0,0,202.3,93.9);
	this.MovieClip51._off = true;
	this.MovieClip51.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.MovieClip51.cache(-2,-2,419,192);

	this.timeline.addTween(cjs.Tween.get(this.MovieClip51).wait(169).to({_off:false},0).wait(1).to({regX:207.3,regY:93.8,scaleX:0.9971,x:1391.3,y:911},0).wait(1).to({scaleX:0.9973},0).wait(1).to({scaleX:0.9974},0).wait(1).to({scaleX:0.9976},0).wait(1).to({scaleX:0.9977},0).wait(1).to({scaleX:0.9979},0).wait(1).to({scaleX:0.998},0).wait(1).to({scaleX:0.9982},0).wait(1).to({scaleX:0.9983},0).wait(1).to({scaleX:0.9985},0).wait(1).to({scaleX:0.9986},0).wait(1).to({scaleX:0.9988},0).wait(1).to({scaleX:0.9989,x:1391.35},0).wait(1).to({scaleX:0.9991,x:1391.3},0).wait(1).to({scaleX:0.9992},0).wait(1).to({scaleX:0.9994},0).wait(1).to({scaleX:0.9995},0).wait(1).to({scaleX:0.9997},0).wait(1).to({scaleX:0.9998},0).wait(1).to({scaleX:1},0).wait(105).to({x:1472.65},0).wait(1).to({x:1554},0).wait(1).to({x:1635.35},0).wait(1).to({x:1716.75},0).wait(1).to({x:1798.1},0).wait(1).to({x:1879.45},0).wait(1).to({x:1960.8},0).wait(1).to({x:2042.15},0).wait(1).to({x:2123.5},0).wait(1).to({x:2204.85},0).wait(1).to({x:2286.2},0).wait(1).to({x:2367.55},0).wait(1).to({x:2448.9},0).wait(1).to({x:2530.25},0).wait(1).to({x:2611.6},0).to({_off:true},1).wait(1211));

	// כותרת
	this.instance_49 = new lib.headline();
	this.instance_49.setTransform(956.35,508.2,1,1,0,0,0,306.9,138.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(1).to({regX:306.8,x:956.25},0).wait(39).to({regX:306.9,x:956.35},0).wait(1).to({regX:306.8,x:956.25,y:508.85},0).wait(1).to({y:509.5},0).wait(1).to({y:510.2},0).wait(1).to({y:510.85},0).wait(1).to({y:511.5},0).wait(1).to({y:512.2},0).wait(1).to({y:512.85},0).wait(1).to({y:513.5},0).wait(1).to({y:514.2},0).wait(1).to({y:514.85},0).wait(1).to({y:515.5},0).wait(1).to({y:516.2},0).wait(1).to({y:516.85},0).wait(1).to({y:517.5},0).wait(1).to({y:518.2},0).wait(1).to({x:956.85,y:555.05},0).wait(1).to({x:957.5,y:591.9},0).wait(1).to({x:958.1,y:628.8},0).wait(1).to({x:958.75,y:665.65},0).wait(1).to({x:959.35,y:702.55},0).wait(1).to({x:960,y:739.4},0).wait(1).to({x:960.65,y:776.3},0).wait(1).to({y:806.55},0).wait(1).to({y:836.85},0).wait(1).to({y:867.15},0).wait(1).to({y:897.45},0).wait(1).to({y:927.75},0).wait(1).to({y:958.05},0).wait(1).to({y:988.35},0).wait(1).to({y:1009.35},0).wait(1).to({y:1030.35},0).wait(1).to({y:1051.35},0).wait(1).to({y:1072.35},0).wait(1).to({y:1093.35},0).wait(1).to({y:1114.35},0).wait(1).to({y:1135.35},0).wait(1).to({y:1156.35},0).wait(1).to({y:1177.35},0).wait(1).to({y:1198.35},0).wait(1).to({y:1219.35},0).wait(1).to({y:1240.4},0).to({_off:true},1).wait(1438));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-566,2819.2,2357.7);
// library properties:
lib.properties = {
	id: '379E0908DC996240A37851E591AE8DB4',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/new2soloSoundNadav.mp3?1617984041140", id:"new2soloSoundNadav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['379E0908DC996240A37851E591AE8DB4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;