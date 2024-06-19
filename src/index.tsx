import { render } from 'preact';
import qs from 'querystring'
import './style.css';

export function App() {
	const query = qs.parse(window.location.search.replace("?", ""))

	return (
		<div class="content">
			<div class="header">Good Public Servant</div>
			<div class="vertical">
				<p>
					人民好公仆
				</p>
			</div>
			<div class="footer">No.{padToThreeDigits(query.card_num)}</div>
		</div>
	);
}

function padToThreeDigits(number) {
    let str = number.toString();
    while (str.length < 3) {
        str = '0' + str;
    }
    return str;
}

render(<App />, document.getElementById('app'));
