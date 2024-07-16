import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import {
  format,
  addDays,
  isSameDay,
  lastDayOfMonth,
  endOfWeek,
} from "date-fns";
import { RootState } from "../../../store/state/rootReducers";
import { green } from "@mui/material/colors";
import { closeDatePicker } from "../../../store/actions/actionCreator";

import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const colorGreen700 = green[700];

function getSlidesPerView(windowWidth) {
  if (windowWidth >= 1800) return 15;
  if (windowWidth >= 1600) return 13;
  if (windowWidth >= 1400) return 11;
  if (windowWidth >= 1200) return 9;
  if (windowWidth >= 900) return 8;
  if (windowWidth >= 600) return 5;
  if (windowWidth >= 300) return 3;
  return 1;
}

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const DatePicker = () => {
  const dispatch = useDispatch();
  const isDatePickerOpen = useSelector(
    (state: RootState) => state.DatePicker.isDatePickerOpen
  );

  const [dates, setDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [slidesPerView, setSlidesPerView] = useState(
    getSlidesPerView(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateDates = () => {
    const dateArray: Date[] = [];
    const today = new Date();
    for (let i = 0; i <= 15; i++) {
      dateArray.push(addDays(today, i));
    }
    return dateArray;
  };

  useEffect(() => {
    const generatedDates = generateDates();
    setDates(generatedDates);
    setSelectedDate(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDatePickerOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDatePickerOpen]);

  const handleFlexibleClick = () => {
    setSelectedDate(null);
    dispatch(closeDatePicker());
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
    dispatch(closeDatePicker());
  };

  const handleCloseDatePicker = () => {
    if (isDatePickerOpen) dispatch(closeDatePicker());
  };

  const ref = useOutsideClick(
    handleCloseDatePicker
  ) as React.RefObject<HTMLDivElement>;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black ${
          isDatePickerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        style={{ zIndex: 99 }}
      ></div>

      <div
        ref={ref}
        className={`fixed left-0 right-0 mx-auto transition-all duration-500 ${
          isDatePickerOpen ? "slide-in" : "slide-out"
        }`}
        style={{ top: "20%", zIndex: 100 }}
      >
        <Swiper
          slidesPerView={slidesPerView}
          modules={[Controller, Mousewheel, Pagination]}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          direction="horizontal"
          keyboard={{ enabled: true }}
          className="flex flex-col w-full justify-between p-4 bg-neutral-100 rounded-md shadow-lg"
        >
          <Box>
            <Stack direction="row" spacing={1}>
              {dates.map((date, index) => {
                const today = new Date();
                const tomorrow = addDays(today, 1);
                const lastDayOfMonthDate = lastDayOfMonth(date);
                const endOfWeekDate = endOfWeek(date, { weekStartsOn: 0 });

                const isItTomorrow = isSameDay(date, tomorrow);
                const isItToday = isSameDay(date, today);
                const isSpecial =
                  isSameDay(date, tomorrow) ||
                  isSameDay(date, today) ||
                  isSameDay(date, lastDayOfMonthDate) ||
                  isSameDay(date, endOfWeekDate);

                let label = "";
                if (isItTomorrow) {
                  label = "Tomorrow";
                } else if (isSameDay(date, lastDayOfMonthDate)) {
                  label = format(date, "MMM d");
                } else if (isSameDay(date, endOfWeekDate)) {
                  label = format(date, "MMM d");
                } else {
                  label = format(date, "MMM d");
                }

                // Format labels
                label = capitalizeFirstLetter(label);
                const weekName = capitalizeFirstLetter(format(date, "eee"));

                return (
                  <React.Fragment key={index}>
                    <SwiperSlide
                      key={index}
                      className={`flex items-center justify-center ${
                        isSpecial ? "border-r border-gray-400" : ""
                      }`}
                    >
                      {isItToday ? (
                        <Button
                          variant={selectedDate ? "outlined" : "contained"}
                          onClick={handleFlexibleClick}
                          sx={{
                            padding: "1rem",
                            width: "6.5rem",
                            bgcolor: selectedDate ? "white" : colorGreen700,
                            color: selectedDate ? colorGreen700 : "white",
                            borderColor: colorGreen700,
                            "&:hover": {
                              bgcolor: selectedDate
                                ? "lightgreen"
                                : "darkgreen",
                              borderColor: "darkgreen",
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: "700" }}
                          >
                            I'm flexible
                          </Typography>
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "1rem",
                            width: "6.5rem",

                            bgcolor:
                              selectedDate && isSameDay(selectedDate, date)
                                ? colorGreen700
                                : "white",
                            color:
                              selectedDate && isSameDay(selectedDate, date)
                                ? "white"
                                : colorGreen700,
                            borderColor: colorGreen700,
                            "&:hover": {
                              bgcolor:
                                selectedDate && isSameDay(selectedDate, date)
                                  ? "darkgreen"
                                  : "lightgreen",
                              borderColor: "darkgreen",
                            },
                            "&:active": {
                              bgcolor:
                                selectedDate && isSameDay(selectedDate, date)
                                  ? "darkgreen"
                                  : "lightgreen",
                              borderColor: "darkgreen",
                            },
                          }}
                          variant={
                            selectedDate && isSameDay(selectedDate, date)
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleDateClick(date)}
                        >
                          {isItTomorrow ? (
                            <>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: "700" }}
                              >
                                {label}
                              </Typography>
                              <Typography variant="subtitle2">
                                {capitalizeFirstLetter(format(date, "MMM d"))}
                              </Typography>
                            </>
                          ) : (
                            <>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: "700" }}
                              >
                                {weekName}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: "500" }}
                              >
                                {label}
                              </Typography>
                            </>
                          )}
                        </Button>
                      )}
                    </SwiperSlide>
                  </React.Fragment>
                );
              })}
            </Stack>
          </Box>

          <div className="mt-4"></div>
        </Swiper>
      </div>
    </>
  );
};

export default DatePicker;
