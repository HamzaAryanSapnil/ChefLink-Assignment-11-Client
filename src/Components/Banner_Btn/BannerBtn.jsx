import PropTypes from 'prop-types'

const BannerBtn = ({children}) => {
    return (
        <button className='btn bg-bannerBtnBg text-white border-none' >{children}</button>
    );
};

BannerBtn.propTypes = {
    children: PropTypes.node,
}
export default BannerBtn;