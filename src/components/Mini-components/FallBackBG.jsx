import React from 'react';
import styled from 'styled-components';

const FallBackBG = () => {
    return (
        <StyledWrapper>
            <div className="container" />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    position: relative;
    overflow: hidden;
    box-shadow:
      100px 200px 1px rgba(255, 255, 255, 0.8),
      300px 150px 2px rgba(255, 255, 255, 0.6),
      500px 300px 1px rgba(255, 255, 255, 0.9),
      700px 100px 3px rgba(255, 255, 255, 0.7),
      200px 400px 2px rgba(255, 255, 255, 0.8),
      400px 600px 1px rgba(255, 255, 255, 0.6),
      600px 500px 3px rgba(255, 255, 255, 0.9),
      800px 300px 2px rgba(255, 255, 255, 0.7);
  }

  .container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      ),
      repeating-conic-gradient(
        from 0deg at 50% 50%,
        rgba(255, 255, 255, 0.05) 0deg,
        rgba(255, 255, 255, 0.05) 10deg,
        transparent 10deg,
        transparent 30deg
      );
    box-shadow:
      50px 50px 2px rgba(255, 255, 255, 0.7),
      250px 300px 1px rgba(255, 255, 255, 0.8),
      450px 150px 3px rgba(255, 255, 255, 0.6),
      650px 400px 2px rgba(255, 255, 255, 0.9),
      850px 600px 1px rgba(255, 255, 255, 0.7),
      150px 450px 3px rgba(255, 255, 255, 0.8);
  }

  .container::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 80% 70%,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 40%
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 50px,
        rgba(255, 255, 255, 0.03) 50px,
        rgba(255, 255, 255, 0.03) 52px,
        transparent 52px,
        transparent 60px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 50px,
        rgba(255, 255, 255, 0.03) 50px,
        rgba(255, 255, 255, 0.03) 52px,
        transparent 52px,
        transparent 60px
      );
    box-shadow:
      75px 125px 1px rgba(255, 255, 255, 0.6),
      275px 225px 2px rgba(255, 255, 255, 0.8),
      475px 325px 3px rgba(255, 255, 255, 0.7),
      675px 175px 1px rgba(255, 255, 255, 0.9),
      875px 275px 2px rgba(255, 255, 255, 0.6),
      125px 375px 3px rgba(255, 255, 255, 0.8);
  }`;

export default FallBackBG;
