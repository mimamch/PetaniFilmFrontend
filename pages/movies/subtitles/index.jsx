import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../../components/spinner";
import Wrapper from "../../../components/Wrapper";
import { getReleaseYear } from "../../../shared_functions/getReleaseYear";
import {
  NEXT_PUBLIC_PETANI_FILM_BASE_URL,
  TMDB_API_KEY,
  TMDB_BASE_URL,
} from "../../../shared_variables/env";

export default function Links() {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageData, setPageData] = useState({ page: 1, total_pages: 1000 });
  const [isSearch, setIsSearch] = useState(false);
  const [queryState, setQueryState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const getData = async (page, query) => {
    try {
      setIsLoading(true);
      let data;
      isSearch && setMovies([]);
      if (query) {
        //localhost:4001/movie/get-movies?limit=100
        data = await axios.get(
          `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movies?page=${page}&query=${query}`
        );

        setPageData({
          page: data.data.data.page,
          total_pages: data.data.data.total_pages,
        });
        setMovies([...data.data.data.results]);
        setHasMore(false);
      } else {
        data = await axios.get(
          `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movies?page=${page}`
        );
        setPageData({
          page: data.data.data.page,
          total_pages: data.data.data.total_pages,
        });
        // console.log(data.data.results);
        // console.log(movies);
        setMovies([...movies, ...data.data.data.results]);
        setHasMore(data.data.data.page < data.data.data.total_pages);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      //   toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    const timeOutId = setTimeout(() => getData(1, queryState), 500);
    return () => clearTimeout(timeOutId);
  }, [queryState]);

  return (
    <>
      <Head>
        <title>Subtitles - Movies Links</title>
      </Head>
      <Wrapper>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">
                      Subtitles - Movies On Database
                    </h4>
                    <form
                      className="app-search d-block"
                      id="custom-search"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="position-relative w-100">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                          onChange={(val) => {
                            if (val.target.value) {
                              setIsSearch(true);
                            } else {
                              setMovies([]);
                              setIsSearch(false);
                            }
                            setQueryState(val.target.value);
                          }}
                        />
                        <span className="bx bx-search-alt" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* end page title */}

              {!movies.length ? (
                isLoading ? (
                  <div className="row justify-content-center">
                    {" "}
                    <Spinner />{" "}
                  </div>
                ) : (
                  <h3 className="text-center p-5">End of data</h3>
                )
              ) : (
                <InfiniteScroll
                  style={{ overflow: "hidden" }}
                  loader={<Spinner />}
                  endMessage={<h3 className="text-center p-5">End of data</h3>}
                  dataLength={movies.length}
                  hasMore={hasMore}
                  next={() => getData(pageData.page + 1)}
                >
                  <div className="row">
                    {movies.map((e, i) => (
                      <div className="col-md-2 col-xl-2 col-4" key={i}>
                        <div style={{ height: "100%" }} className="card">
                          <img
                            className="card-img-top img-fluid"
                            src={`https://image.tmdb.org/t/p/w500/${e.tmdbPosterPath}`}
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h4 className="card-title">
                              {e.title} ({getReleaseYear(e.releaseDate)})
                            </h4>
                            <p>
                              <i className="bx bxs-star"></i> {e.voteAverage}
                            </p>
                            <p className="card-text d-none d-md-block">
                              {e.overview}
                            </p>
                            <div style={{ height: "100%" }}></div>
                          </div>
                          <a
                            role="button"
                            onClick={() => router.push(`subtitles/${e.tmdbId}`)}
                            className="btn btn-primary waves-effect waves-light m-2"
                          >
                            <i className="bx bx-plus-medical"></i> ADD SUBTITLES
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </InfiniteScroll>
              )}
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
        </div>
      </Wrapper>
    </>
  );
}
