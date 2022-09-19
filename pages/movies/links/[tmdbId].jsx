import axios from "axios";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../components/spinner";
import Wrapper from "../../../components/Wrapper";
import { deleteMovieByTmdbId } from "../../../shared_functions/deleteMovies";
import { getReleaseYear } from "../../../shared_functions/getReleaseYear";
import { NEXT_PUBLIC_PETANI_FILM_BASE_URL } from "../../../shared_variables/env";
export default function AddLinks() {
  const router = useRouter();
  const { tmdbId } = router.query;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [buttonStreamingLoading, setButtonStreamingLoading] = useState(false);
  const [buttonDownloadLoading, setButtonDownloadLoading] = useState(false);
  const [inputFieldsStreaming, setInputFieldsStreaming] = useState([
    {
      name: "",
      title: "",
      provider: "",
      link: "",
      size: 0,
      tmdbId: 0,
      imdbId: "",
      resolution: 0,
    },
  ]);
  const [inputFieldsDownload, setInputFieldsDownload] = useState([
    {
      name: "",
      title: "",
      provider: "",
      link: "",
      size: 0,
      tmdbId: 0,
      imdbId: "",
      resolution: 0,
    },
  ]);
  const getData = async (id) => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movie-by-tmdb-id/${id}`
      );
      setMovie(data.data.data);
      setInputFieldsStreaming([
        {
          name: "",
          title: "",
          provider: "",
          link: "",
          size: 0,
          resolution: 0,
          tmdbId: data.data.data.tmdbId,
          imdbId: data.data.data.imdbId,
        },
      ]);
      const links = await axios.get(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movie-links?tmdbId=${id}`
      );

      setInputFieldsStreaming(links.data.data.streamingLinks);
      setInputFieldsDownload(links.data.data.downloadLinks);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    tmdbId && getData(tmdbId);
  }, [tmdbId]);

  const addFormField = (type) => {
    const input = [
      ...(type == "streaming" ? inputFieldsStreaming : inputFieldsDownload),
    ];
    input.push({
      name: "",
      title: "",
      provider: "",
      link: "",
      size: 0,
      resolution: 0,
      tmdbId: movie.tmdbId,
      imdbId: movie.imdbId,
    });
    type == "streaming"
      ? setInputFieldsStreaming(input)
      : setInputFieldsDownload(input);
  };

  const deleteFormField = (index, type) => {
    let data = [
      ...(type == "streaming" ? inputFieldsStreaming : inputFieldsDownload),
    ];
    data.splice(index, 1);
    type == "streaming"
      ? setInputFieldsStreaming(data)
      : setInputFieldsDownload(data);
  };

  const onChangeFormField = (index, event, type) => {
    if (type == "streaming") {
      let data = [...inputFieldsStreaming];
      data[index][event.target.name] = event.target.value;
      setInputFieldsStreaming(data);
    } else if (type == "download") {
      let data = [...inputFieldsDownload];
      data[index][event.target.name] = event.target.value;
      setInputFieldsDownload(data);
    }
  };

  const setStreamingLinks = async () => {
    setButtonStreamingLoading(true);
    try {
      await axios.post(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/add-movie-streaming-links/`,
        {
          imdbId: movie.imdbId,
          tmdbId: movie.tmdbId,
          streamingLinks: inputFieldsStreaming,
        }
      );
      toast.success("Streaming Links Added With Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
    setButtonStreamingLoading(false);
  };
  const setDownloadLinks = async () => {
    setButtonDownloadLoading(true);
    try {
      await axios.post(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/add-movie-download-links/`,
        {
          imdbId: movie.imdbId,
          tmdbId: movie.tmdbId,
          downloadLinks: inputFieldsDownload,
        }
      );
      toast.success("Download Links Added With Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setButtonDownloadLoading(false);
  };

  return (
    <>
      <Head>
        <title>Add Links</title>
      </Head>
      <Wrapper>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Add Links</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() =>
                              deleteMovieByTmdbId(tmdbId).then(
                                (res) => res && router.push("/movies/links")
                              )
                            }
                          >
                            <i className="bx bx-trash font-size-16 align-middle me-2"></i>
                            DELETE MOVIE
                          </button>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="row justify-content-center">
                  <Spinner />
                </div>
              ) : (
                <div className="row">
                  <div className="col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="fw-semibold">Poster</h5>
                        {movie.tmdbPosterPath && (
                          <img
                            className="card-img-top img-fluid"
                            src={`https://image.tmdb.org/t/p/w500/${movie.tmdbPosterPath}`}
                            alt="Card image cap"
                          />
                        )}
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="fw-semibold">BackDrop</h5>
                        {movie.tmdbBackdropPath && (
                          <img
                            className="card-img-top img-fluid"
                            src={`https://image.tmdb.org/t/p/w500/${movie.tmdbBackdropPath}`}
                            alt="Card image cap"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-xl-9">
                    <div className="card">
                      <div className="card-body border-bottom">
                        <div className="d-flex">
                          <div className="flex-grow-1 ">
                            <h4 className="fw-semibold">
                              {movie.title} - (
                              {getReleaseYear(movie.releaseDate)})
                            </h4>
                            <ul className="list-unstyled hstack gap-2 mb-0">
                              <li>
                                <span className="text-muted">
                                  <i className="bx bxs-star"></i>{" "}
                                  {movie.voteAverage}
                                </span>
                              </li>
                              <li>
                                <i className="bx bxs-time"></i>
                                <span className="text-muted">
                                  {movie.runtime} Minutes
                                </span>
                              </li>
                              <li>
                                <Link
                                  href={`${router.asPath.replace(
                                    "links",
                                    "subtitles"
                                  )}`}
                                >
                                  <a className="btn btn-sm btn-outline-primary btn-hover ">
                                    Set Subtitles
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="fw-semibold mb-3">Overview</h5>
                          <p className="text-muted">{movie.overview}</p>
                          <div className="my-2">
                            <ul className="list-inline mb-0">
                              {movie?.genres?.map((e, i) => (
                                <li key={i} className="list-inline-item ">
                                  <a
                                    href="#"
                                    className="btn btn-outline-info btn-hover"
                                  >
                                    {e}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="card">
                                <div className="card-body">
                                  <h4 className="card-title mb-4">
                                    Streaming Links
                                  </h4>
                                  <form>
                                    <div>
                                      {inputFieldsStreaming.map(
                                        (input, index) => {
                                          let type = "streaming";
                                          return (
                                            <div className="row" key={index}>
                                              <div className="mb-3 col-lg-3">
                                                <label htmlFor="name">
                                                  Provider
                                                </label>
                                                <input
                                                  type="text"
                                                  id="provider"
                                                  name="provider"
                                                  className="form-control"
                                                  placeholder="Enter Link Provider"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.provider}
                                                />
                                              </div>
                                              <div className="mb-3 col-lg-3">
                                                <label htmlFor="subject">
                                                  Link
                                                </label>
                                                <input
                                                  type="text"
                                                  id="subject"
                                                  name="link"
                                                  className="form-control"
                                                  placeholder="Enter Streaming Link"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.link}
                                                />
                                              </div>
                                              <div className="mb-3 col-lg-1">
                                                <label htmlFor="size">
                                                  Size (MB)
                                                </label>
                                                <input
                                                  type="number"
                                                  id="size"
                                                  name="size"
                                                  className="form-control"
                                                  placeholder="1024"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.size}
                                                />
                                              </div>
                                              <div className="mb-3 col-lg-1">
                                                <label htmlFor="resolution">
                                                  Reso (px)
                                                </label>
                                                <input
                                                  type="number"
                                                  id="resolution"
                                                  name="resolution"
                                                  className="form-control"
                                                  placeholder="720"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.resolution}
                                                />
                                              </div>
                                              <div className="col-lg-2 align-self-center">
                                                <div className="d-grid">
                                                  <input
                                                    onClick={() =>
                                                      deleteFormField(
                                                        index,
                                                        type
                                                      )
                                                    }
                                                    type="button"
                                                    className="btn btn-dark"
                                                    value="Delete"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                    {buttonStreamingLoading ? (
                                      <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light"
                                      >
                                        <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>{" "}
                                        Loading
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setStreamingLinks();
                                        }}
                                        className="btn btn-primary mt-3 mt-lg-0"
                                      >
                                        Submit
                                      </button>
                                    )}

                                    <button
                                      type="button"
                                      onClick={() => addFormField("streaming")}
                                      className="btn btn-success mt-3 mx-5 mt-lg-0"
                                    >
                                      Add Form Field
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12">
                              <div className="card">
                                <div className="card-body">
                                  <h4 className="card-title mb-4">
                                    Download Links
                                  </h4>
                                  <form>
                                    <div>
                                      {inputFieldsDownload.map(
                                        (input, index) => {
                                          let type = "download";
                                          return (
                                            <div className="row" key={index}>
                                              <div className="mb-3 col-lg-3">
                                                <label htmlFor="name">
                                                  Provider
                                                </label>
                                                <input
                                                  type="text"
                                                  id="provider"
                                                  name="provider"
                                                  className="form-control"
                                                  placeholder="Enter Link Provider"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.provider}
                                                />
                                              </div>
                                              <div className="mb-3 col-lg-3">
                                                <label htmlFor="subject">
                                                  Link
                                                </label>
                                                <input
                                                  type="text"
                                                  id="subject"
                                                  name="link"
                                                  className="form-control"
                                                  placeholder="Enter Streaming Link"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.link}
                                                />
                                              </div>
                                              <div className="mb-3 col-lg-1">
                                                <label htmlFor="size">
                                                  Size (MB)
                                                </label>
                                                <input
                                                  type="number"
                                                  id="size"
                                                  name="size"
                                                  className="form-control"
                                                  placeholder="1024"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.size}
                                                />
                                              </div>
                                              <div className="mb-3 col-lg-1">
                                                <label htmlFor="resolution">
                                                  Reso (px)
                                                </label>
                                                <input
                                                  type="number"
                                                  id="resolution"
                                                  name="resolution"
                                                  className="form-control"
                                                  placeholder="720"
                                                  onChange={(event) =>
                                                    onChangeFormField(
                                                      index,
                                                      event,
                                                      type
                                                    )
                                                  }
                                                  value={input.resolution}
                                                />
                                              </div>
                                              <div className="col-lg-2 align-self-center">
                                                <div className="d-grid">
                                                  <input
                                                    onClick={() =>
                                                      deleteFormField(
                                                        index,
                                                        type
                                                      )
                                                    }
                                                    type="button"
                                                    className="btn btn-dark"
                                                    value="Delete"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                    {buttonDownloadLoading ? (
                                      <button
                                        type="button"
                                        className="btn btn-primary waves-effect waves-light"
                                      >
                                        <i className="bx bx-loader bx-spin font-size-16 align-middle me-2"></i>{" "}
                                        Loading
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setDownloadLinks();
                                        }}
                                        className="btn btn-primary mt-3 mt-lg-0"
                                      >
                                        Submit
                                      </button>
                                    )}

                                    <button
                                      type="button"
                                      onClick={() => addFormField("download")}
                                      className="btn btn-success mt-3 mx-5 mt-lg-0"
                                    >
                                      Add Form Field
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <span className="badge badge-soft-warning">
                              PHP
                            </span>
                            <span className="badge badge-soft-warning">
                              Magento
                            </span>
                            <span className="badge badge-soft-warning">
                              Marketing
                            </span>
                            <span className="badge badge-soft-warning">
                              WordPress
                            </span>
                            <span className="badge badge-soft-warning">
                              Bootstrap
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
              )}
              {/*end row*/}
            </div>{" "}
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
        </div>
      </Wrapper>
    </>
  );
}
