() => {
  const [selectedDateTime, setSelectedDateTime] = useState(
    setHours(setMinutes(new Date(), 30), 16),
  );
  return (
    <DatePicker
      selected={selectedDateTime}
      onChange={(date) => setSelectedDateTime(date)}
      showTimeSelect
      timeFormat="HH:mm:ss"
      injectTimes={[
        setHours(setMinutes(setSeconds(new Date(), 10), 1), 0),
        setHours(setMinutes(new Date(), 5), 12),
        setHours(setMinutes(new Date(), 59), 23),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};
