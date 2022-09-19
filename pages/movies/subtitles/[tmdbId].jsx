import axios from "axios";

import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../components/spinner";
import Wrapper from "../../../components/Wrapper";
import { getReleaseYear } from "../../../shared_functions/getReleaseYear";
import { NEXT_PUBLIC_PETANI_FILM_BASE_URL } from "../../../shared_variables/env";
export default function AddLinks() {
  const router = useRouter();
  const { tmdbId } = router.query;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [buttonStreamingLoading, setButtonStreamingLoading] = useState(false);
  const [inputSubtitles, setInputSubtitles] = useState([
    {
      name: "",
      title: "",
      language: "",
      link: "",
      file: null,
      tmdbId: 0,
      imdbId: "",
    },
  ]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        return resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });

  const getData = async (id) => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movie-by-tmdb-id/${id}`
      );
      setMovie(data.data.data);
      setInputSubtitles([
        {
          name: "",
          title: "",
          language: "",
          link: "",
          file: null,
          tmdbId: data.data.data.tmdbId,
          imdbId: data.data.data.imdbId,
        },
      ]);
      const links = await axios.get(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movie-subtitles?tmdbId=${id}`
      );
      setInputSubtitles(links.data.data.subtitles);
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
    const input = [...inputSubtitles];
    input.push({
      name: "",
      title: "",
      language: "",
      link: "",
      file: null,
      tmdbId: movie.tmdbId,
      imdbId: movie.imdbId,
    });

    setInputSubtitles(input);
  };

  const deleteFormField = (index) => {
    const data = [...inputSubtitles];
    data.splice(index, 1);

    setInputSubtitles(data);
  };

  const onChangeFormField = (index, event, fileBase64, fileName) => {
    let data = [...inputSubtitles];
    if (fileBase64) {
      data[index][event.target.name] = {
        base64: fileBase64,
        fileName: fileName,
      };
    } else {
      data[index][event.target.name] = event.target.value;
    }
    setInputSubtitles(data);
  };

  const setSubtitles = async () => {
    // setButtonStreamingLoading(true);
    // const formData = new FormData();

    // formData.append("imdbId", movie.imdbId);
    // formData.append("tmdbId", movie.tmdbId);
    // formData.append("subtitlesLinks", JSON.stringify(inputSubtitles));
    // for (var [key, value] of formData.entries()) {
    //   console.log(value);
    // }
    // return console.log(formData);
    try {
      await axios.post(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/add-movie-subtitles-links/`,
        {
          imdbId: movie.imdbId,
          tmdbId: movie.tmdbId,
          subtitleLinks: inputSubtitles,
        }
        // { "Content-Type": "multipart/form-data" }
      );
      toast.success("Subtitles Added With Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
    setButtonStreamingLoading(false);
  };

  return (
    <>
      <Head>
        <title>Add Subtitles</title>
      </Head>
      <Wrapper>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">Add Subtitles</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0"></ol>
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
                            </ul>
                          </div>
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
                                  <i className="uil uil-facebook-f" /> {e}
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
                                  Subtitles Links
                                </h4>
                                <form>
                                  <div>
                                    {inputSubtitles?.map((input, index) => {
                                      return (
                                        <div className="row" key={index}>
                                          <div className="mb-3 col-lg-3">
                                            <label htmlFor="name">
                                              Language
                                            </label>
                                            <input
                                              type="text"
                                              id="language"
                                              name="language"
                                              className="form-control"
                                              placeholder="Enter Link language"
                                              onChange={(event) =>
                                                onChangeFormField(index, event)
                                              }
                                              value={input.language}
                                            />
                                          </div>
                                          <div className="mb-3 col-lg-3">
                                            <label htmlFor="upload">
                                              Upload
                                            </label>
                                            <input
                                              type="file"
                                              id="upload"
                                              name="file"
                                              className="form-control"
                                              placeholder="Upload File"
                                              onChange={(event) => {
                                                // onChangeFormField(index, event)
                                                // console.log(
                                                //   event.currentTarget.files[0]
                                                // );
                                                if (
                                                  !event.currentTarget.files[0]
                                                )
                                                  return;

                                                const fileName =
                                                  event.currentTarget.files[0]
                                                    .name;
                                                getBase64(
                                                  event.currentTarget.files[0]
                                                ).then((res) => {
                                                  onChangeFormField(
                                                    index,
                                                    event,
                                                    res,
                                                    fileName
                                                  );
                                                });
                                              }}
                                              // value={input.language}
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
                                                onChangeFormField(index, event)
                                              }
                                              value={input.link}
                                            />
                                          </div>
                                          <div className="col-lg-2 align-self-center">
                                            <div className="d-grid">
                                              <input
                                                onClick={() =>
                                                  deleteFormField(index)
                                                }
                                                type="button"
                                                className="btn btn-dark"
                                                value="Delete"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
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
                                        setSubtitles();
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
