import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
export default function TokenTopup(props) {
	const handleClick = async () => {
		const result = await fetch("/api/addTokens", {
			method: "POST",
		});

		const json = await result.json();
		console.log("RESULT: ", json);
		window.location.href = json.session.url;
	};
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="max-w-xl rounded overflow-hidden shadow-lg bg-slate-100">
				<div className="px-16 py-12">
					<div className="flex justify-center mb-4">
						<FontAwesomeIcon
							icon={faCoins}
							className="text-yellow-500 text-4xl"
						/>
					</div>
					<div className="font-bold text-xl mb-2 text-center">
						Top up your tokens
					</div>
					<button className="btn" onClick={handleClick}>
						<FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
						Add tokens
					</button>
				</div>
			</div>
		</div>
	);
}

TokenTopup.getLayout = function getLayout(page, pageProps) {
	return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired({
	async getServerSideProps(ctx) {
		const props = await getAppProps(ctx);
		return {
			props,
		};
	},
});
