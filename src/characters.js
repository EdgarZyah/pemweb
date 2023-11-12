import React, { useState } from 'react';

const Characters = () => {

    return (
        <div class="relative flex-row">
            <div class="carousel flex">
                <div class="carousel-inner flex">
                    <div>
                        <button class="next">
                            <img class="grayscale" src="https://act.hoyoverse.com/puzzle/bh3/pz_0qgVINqykW/resource/puzzle/2023/10/12/b1706e8c490eed04397fcfdf020ab037_5226261547575762812.png?x-oss-process=image/format,webp/quality,Q_90"></img>
                        </button>
                    </div>
                    <div id="2B" class="carousel-slide">
                        <img src="https://act.hoyoverse.com/puzzle/bh3/pz_0qgVINqykW/resource/puzzle/2023/10/12/f5e504a2d1f87fafd77d5f334793a1e1_2939245961558990688.png?x-oss-process=image/format,webp/quality,Q_90" alt="Image 1" />
                    </div>
                    <div id="9S" class="carousel-slide">
                        <img src="https://act.hoyoverse.com/puzzle/bh3/pz_0qgVINqykW/resource/puzzle/2023/10/12/f5e504a2d1f87fafd77d5f334793a1e1_2939245961558990688.png?x-oss-process=image/format,webp/quality,Q_90" alt="Image 2" />
                    </div>
                    <div id="A2" class="carousel-slide">
                        <img src="https://act.hoyoverse.com/puzzle/bh3/pz_0qgVINqykW/resource/puzzle/2023/10/12/f5e504a2d1f87fafd77d5f334793a1e1_2939245961558990688.png?x-oss-process=image/format,webp/quality,Q_90" alt="Image 3" />
                    </div>
                    <div>
                        <button class="prev">
                            <img class="grayscale" src="https://act.hoyoverse.com/puzzle/bh3/pz_0qgVINqykW/resource/puzzle/2023/10/12/937cc170cb855612339fee39c0582be9_3146286678747088001.png?x-oss-process=image/format,webp/quality,Q_90"></img>
                        </button>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">



            </div>
        </div>

    );
};

export default Characters;
