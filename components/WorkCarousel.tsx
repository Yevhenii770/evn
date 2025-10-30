import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { ContentfulMedia, WorkCarouselContent } from '../utils/types';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function WorkCarousel({ media = [], isBefore }: WorkCarouselContent) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const maxSteps = media.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1));
  };

  const handleStepChange = (step: number) => setActiveStep(step);


  if (!media || maxSteps === 0) return null;

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
      <Box
        sx={{
          height: 400,
          display: 'block',
          maxWidth: 600,
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderRadius: 2,
        }}
      >
      
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            color: 'white',
            zIndex: 1,
            padding: '5px',
            textAlign: 'center',
            fontSize: '1rem',
          }}
        >
          {isBefore ? 'Before' : 'After'}
        </Box>

       
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {media.map((item: ContentfulMedia, index) => (
            <Box
              key={index}
              sx={{
                height: 400,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
              }}
            >
        
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  width={600}
                  height={400}
                  animation="wave"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              )}

              <Image
                alt={item.title || 'Work image'}
                src={`https:${item.url}`}
                width={600}
                height={400}
                quality={90}
                style={{
                  objectFit: 'contain',
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}
                onLoadingComplete={() => setIsLoaded(true)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8kMpQDwAFeAHWPyptaQAAAABJRU5ErkJggg=="
              />
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </Box>

  
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default WorkCarousel;
