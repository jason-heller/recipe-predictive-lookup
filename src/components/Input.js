const Input = ({ onTranslationQuery, onInputBegin }) => {
	var input = '';
	var inputTimer;
	var querySendDelayMs = 500;		// Time to wait before submitting request, in milliseconds

	return (
	<div className="search">
		<p>Search up a recipe:</p>
		<input type="textbox" className="search-bar"
		onKeyUp={(e) => {
			clearTimeout(inputTimer);
			inputTimer = setTimeout(beginQuery, querySendDelayMs);
			input = e.target.value;	
		}}
		onKeyDown={() => {onInputBegin();}} />
	</div>
  	)

	function beginQuery() {
		formatInput();
		onTranslationQuery(input);
	}

  	function formatInput() {
		input = input.replaceAll(' ', '+');
	}
}



export default Input