import { render } from 'preact';
import qs from 'querystring'
import './style.css';
import { useState } from 'preact/hooks';

export function Card() {
	const query = qs.parse(window.location.search.replace("?", ""))

	const [angleClass, setAngleClass] = useState("angle-1")

	return (
		<>
			<div class={`content ${angleClass}`} onClick={() => {
				setAngleClass(angleClass == "angle-1" ? "angle-2" : "angle-1")
			}}>
				<div class="header">Good Public Servant</div>
				<div class="vertical">
					<p>
						人民好公仆
					</p>
				</div>
				<div class="footer">No.{padToThreeDigits(query.card_num)}</div>
			</div>
			{(query.card_num as number) % 3 == 0 && <div class="masker">
				{Array.from({ length: 50 }, (_, index) => {
					return (
						<div
							class="star"
							key={index}
							style={{
								left: `${100 * Math.random()}%`,
								animationDelay: `${10 * Math.random()}s`,
								animationDuration: `${4 + 2 * Math.random()}s`
							}}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
								<path fill="#f4ea2a" d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6-4.6-6 4.6 2.3-7-6-4.6h7.6z"/>
							</svg>
						</div>
					)
				})}
			</div>}
		</>
	);
}

function padToThreeDigits(number) {
    let str = number.toString();
    while (str.length < 3) {
        str = '0' + str;
    }
    return str;
}

render(<Card />, document.getElementById('app'));
