import ReactEcharts from 'echarts-for-react';

const Loader = () => {
  const option = {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'TalentForge',
            fontFamily: 'caliber',
            fontSize: 80,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#c06a6f',
            lineWidth: 1,
          },
          keyframeAnimation: {
            duration: 4000,
            loop: true,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0],
                },
              },
              {
                // Stop for a while.
                percent: 0.6,
                style: {
                  fill: 'transparent',
                },
              },
              {
                percent: 1,
                style: {
                  fill: '#c06a6f',
                },
              },
            ],
          },
        },
      ],
    },
  };
  return (
    <div className="loader">
      <div className="loader-content">
        <img src={'/assets/Logo.png'} alt="#" />

        <ReactEcharts option={option} style={{ height: '200px', width: '100%' }} />
        <p className="custom-font">
          Navigate Your Career Path: Find Opportunities, Ignite Possibilities.
        </p>
      </div>
    </div>
  );
};

export default Loader;
