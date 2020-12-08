import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const defaultProps = {
    currentPage: 0,
    totalPages: 0,
    goToPage: () => null,
};

const propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    goToPage: PropTypes.func,
};

const TableFooter =
    ({
         currentPage,
         totalPages,
         goToPage,
     }) => {
        const checkCurrentPage = () => {
            const firstCheck = (currentPage + 1) === totalPages;
            const secondCheck = (currentPage + 2) === totalPages;
            const thirdCheck = currentPage === totalPages;

            return firstCheck || secondCheck || thirdCheck;
        };


        return (
            <div className="table-footer">
                <div className="table-footer__wrapper">

                </div>
                <div className="table-footer__pagination">
                    {(currentPage - 2 > 0 && totalPages > 3) && (
                        <>
                            <button type="button"
                                    className='table-footer__pagination__page'
                                    onClick={() => goToPage(1)}>1
                            </button>
                            <p className="table-footer__pagination__dots">...</p>
                        </>
                    )}
                    {(checkCurrentPage() && currentPage - 2 > 0) && (
                        <button
                            type="button"
                            className="table-footer__pagination__page"
                            onClick={() => goToPage(currentPage - 2)}>
                            {`${currentPage - 2},`}
                        </button>
                    )}
                    {(currentPage > 1 && totalPages >= currentPage) && (
                        <button
                            type="button"
                            className="table-footer__pagination__page"
                            onClick={() => goToPage(currentPage - 1)}>
                            {`${currentPage - 1},`}
                        </button>
                    )}
                    <button
                        type="button"
                        className="table-footer__pagination__page table-footer__pagination__page_current">
                        {`${currentPage}${totalPages !== currentPage ? ',' : ''}`}
                    </button>
                    {(currentPage < totalPages) && (
                        <button
                            type="button"
                            className="table-footer__pagination__page"
                            onClick={() => goToPage(currentPage + 1)}>
                            {`${currentPage + 1},`}
                        </button>
                    )}
                    {(!checkCurrentPage()) && <p className="table-footer__pagination__dots">...</p>}
                    {((currentPage + 1) < totalPages) && (
                        <button
                            type="button"
                            className={`table-footer__pagination__page${(totalPages <= 1) ? ' table-footer__pagination__page_last' : ''}`}
                            onClick={() => goToPage(totalPages)}>
                            {totalPages}
                        </button>
                    )}
                </div>
            </div>
        );
    };


TableFooter.defaultProps = defaultProps;
TableFooter.propTypes = propTypes;
export default TableFooter;
