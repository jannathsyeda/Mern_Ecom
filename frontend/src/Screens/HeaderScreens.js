import { React, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../Components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../actions/productAction'
import Loader from '../Components/Loader.js'
import Message from '../Components/Message'
import Pagi from './Pagi'

const HeaderScreens = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

    const productsList = useSelector((state) => state.productList)

    const { loading, products, error } = productsList

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProduct())
    }, [dispatch])

    const finalProcessData = products.sort(function (a, b) {
        if (a.createdAt > b.createdAt) return -1;
        if (a.createdAt < b.createdAt) return 1;
      });
    
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPOst = indexOfLastPost - postsPerPage;
      const currentPosts =
        finalProcessData.length > 0 &&
        finalProcessData.slice(indexOfFirstPOst, indexOfLastPost);
      const totalPosts = finalProcessData.length;
      const paginate = (pageNum) => setCurrentPage(pageNum);
      const nextPage = () => setCurrentPage(currentPage + 1);
      const prevPage = () => setCurrentPage(currentPage - 1);
    return (
        <>
            <h1>Latest Products</h1>{loading ? (<Loader />) : error ? (<Message variant={'danger'}>{error}</Message>) :
             (<Row>
                {
                                 currentPosts.length > 0 &&
                                 currentPosts.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                        
                    ))
                }
            </Row>)}
            <div className="rt-pagination">
             
             <Pagi
             postsPerPage={postsPerPage}
             totalPosts={totalPosts}
             paginate={paginate}
             nextPage={nextPage}
             prevPage={prevPage}
             currentPage={currentPage}
               />
            </div>

        </>)
}

export default HeaderScreens