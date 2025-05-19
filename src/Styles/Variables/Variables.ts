class VariablesVars {
	private _timeFastTransition = 0.25;
	private _timeTransition = 0.5;

	public get timeFastTransition() {
		return this._timeFastTransition + "s";
	}
	public get timeTransition() {
		return this._timeTransition + "s";
	}

	public transition = `${this.timeTransition} ease-in-out`;
	public fastTransition = `${this.timeFastTransition} ease-in-out`;

	public radiusStandard = 16;
	public scrollSize = 4;
}

const Variables = new VariablesVars();
export default Variables;
