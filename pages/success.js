import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps } from "../utils/getAppProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Success() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="max-w-lg rounded overflow-hidden shadow-lg bg-green-100">
				<div className="px-12 py-8">
					<div className="flex justify-center mb-4">
						<FontAwesomeIcon
							icon={faCheckCircle}
							className="text-green-500 text-4xl"
						/>
					</div>
					<div className="font-bold text-xl mb-2 text-center">
						Payment Successful
					</div>
					<p className="text-gray-700 text-base text-center">
						Thank you for your purchase!!
					</p>
				</div>
			</div>
		</div>
	);
}

Success.getLayout = function getLayout(page, pageProps) {
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
