import PropTypes from 'prop-types'

const BannerBtnRoundedFull = ({children}, btnData) => {
  return (
    <button className="btn bg-bannerBtnBg text-white border-none rounded-full  text-lg font-bold">
      {children? children : btnData}
    </button>
  );
};

BannerBtnRoundedFull.propTypes = {
    children: PropTypes.node,
}
export default BannerBtnRoundedFull;
