import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../../components/spinner";
import Wrapper from "../../../components/Wrapper";
import { NEXT_PUBLIC_PETANI_FILM_BASE_URL } from "../../../shared_variables/env";

export default function AddLinks() {
  const router = useRouter();
  const { tmdbId } = router.query;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (id) => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `${NEXT_PUBLIC_PETANI_FILM_BASE_URL}/movie/get-movie-by-tmdb-id/${id}`
      );
      setMovie(data.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    tmdbId && getData(tmdbId);
  }, [tmdbId]);

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
                      <ol className="breadcrumb m-0"></ol>
                    </div>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <div className="row justify-content-center">
                  {" "}
                  <Spinner />
                </div>
              ) : (
                <div className="row">
                  <div className="col-xl-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="fw-semibold">Poster</h5>
                        <img
                          className="card-img-top img-fluid"
                          src={`https://image.tmdb.org/t/p/w500/${movie.tmdbPosterPath}`}
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="fw-semibold">BackDrop</h5>
                        <img
                          className="card-img-top img-fluid"
                          src={`https://image.tmdb.org/t/p/w500/${movie.tmdbBackdropPath}`}
                          alt="Card image cap"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-xl-9">
                    <div className="card">
                      <div className="card-body border-bottom">
                        <div className="d-flex">
                          <div className="flex-grow-1 ">
                            <h4 className="fw-semibold">{movie.title}</h4>
                            <ul className="list-unstyled hstack gap-2 mb-0">
                              <li>
                                <span className="text-muted">
                                  <i className="bx bxs-star"></i>{" "}
                                  {movie.popularity}
                                </span>
                              </li>
                              <li>
                                <i className="bx bxs-time"></i>
                                <span className="text-muted">
                                  {" "}
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
                        <h5 className="fw-semibold mb-3">Responsibilities:</h5>
                        <ul className="vstack gap-3">
                          <li>
                            Meeting with the design team to discuss the needs of
                            the company.
                          </li>
                          <li>
                            Building and configuring Magento 1x and 2x eCommerce
                            websites.
                          </li>
                          <li>Coding of the Magento templates.</li>
                          <li>
                            Developing Magento modules in PHP using best
                            practices.
                          </li>
                          <li>Designing themes and interfaces.</li>
                          <li>Setting performance tasks and goals.</li>
                          <li>
                            Updating website features and security patches.
                          </li>
                        </ul>
                        <h5 className="fw-semibold mb-3">Requirements:</h5>
                        <ul className="vstack gap-3">
                          <li>
                            Bachelor’s degree in computer science or related
                            field.
                          </li>
                          <li>
                            Advanced knowledge of Magento, JavaScript, HTML,
                            PHP, CSS, and MySQL.
                          </li>
                          <li>
                            Experience with complete eCommerce lifecycle
                            development.
                          </li>
                          <li>Understanding of modern UI/UX trends.</li>
                          <li>
                            Knowledge of Google Tag Manager, SEO, Google
                            Analytics, PPC, and A/B Testing.
                          </li>
                          <li>
                            Good working knowledge of Adobe Photoshop and Adobe
                            Illustrator.
                          </li>
                          <li>Strong attention to detail.</li>
                          <li>
                            Ability to project-manage and work to strict
                            deadlines.
                          </li>
                          <li>Ability to work in a team environment.</li>
                        </ul>
                        <h5 className="fw-semibold mb-3">Qualification:</h5>
                        <ul className="vstack gap-3">
                          <li>
                            B.C.A / M.C.A under National University course
                            complete.
                          </li>
                          <li>
                            3 or more years of professional design experience
                          </li>
                          <li>
                            Advanced degree or equivalent experience in graphic
                            and web design
                          </li>
                        </ul>
                        <h5 className="fw-semibold mb-3">
                          Skill &amp; Experience:
                        </h5>
                        <ul className="vstack gap-3 mb-0">
                          <li>Understanding of key Design Principal</li>
                          <li>Proficiency With HTML, CSS, Bootstrap</li>
                          <li>WordPress: 1 year (Required)</li>
                          <li>
                            Experience designing and developing responsive
                            design websites
                          </li>
                          <li>web designing: 1 year (Preferred)</li>
                        </ul>
                        <div className="mt-4">
                          <span className="badge badge-soft-warning">PHP</span>
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
                        <div className="mt-4">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item mt-1">
                              Share this job:
                            </li>
                            <li className="list-inline-item mt-1">
                              <a
                                href="#"
                                className="btn btn-outline-primary btn-hover"
                              >
                                <i className="uil uil-facebook-f" /> Facebook
                              </a>
                            </li>
                            <li className="list-inline-item mt-1">
                              <a
                                href="#"
                                className="btn btn-outline-danger btn-hover"
                              >
                                <i className="uil uil-google" /> Google+
                              </a>
                            </li>
                            <li className="list-inline-item mt-1">
                              <a
                                href="#"
                                className="btn btn-outline-success btn-hover"
                              >
                                <i className="uil uil-linkedin-alt" /> linkedin
                              </a>
                            </li>
                          </ul>
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
