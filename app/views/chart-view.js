var ChartView = Ember.View.extend({
  didInsertElement: function () {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.drawChart);
  },

  drawChart: function () {
    var letterIds = this.get('controller.letterIds');
    var letterRepeats = this.get('controller.letterRepeats');

    $(function () {
    $('#records-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'VibeWrite Recordings Summary'
        },
        subtitle: {
            text: 'Symbols Freqeucy'
        },
        xAxis: {
            categories: letterIds,
            title: {
                text: 'Symbols Frequency'
            }
        },
        yAxis: {
            // min: 0,
            title: {
                text: 'Freqeucy',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' times'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'amount',
            data: letterRepeats
        }]
    });
  });
  }
});

export default ChartView;
